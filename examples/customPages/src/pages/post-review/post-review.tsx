import {
    Typography,
    Button,
    Show,
    useList,
    MarkdownField,
    useOne,
    useUpdate,
} from "@pankod/refine";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostReview = () => {
    const { data, isLoading } = useList<IPost>("posts", {
        filters: [
            {
                field: "status",
                operator: "eq",
                value: "draft",
            },
        ],
        pagination: { pageSize: 1 },
    });

    const record = data?.data[0];

    const {
        data: categoryData,
        isLoading: categoryIsLoading,
    } = useOne<ICategory>("categories", record!?.category.id, {
        enabled: !!record,
    });

    const mutationResult = useUpdate<IPost>("posts");

    const { mutate, isLoading: mutateIsLoading } = mutationResult;

    const handleUpdate = (item: IPost, status: string) => {
        mutate({ id: item.id, values: { ...item, status } });
    };

    const buttonDisabled = isLoading || categoryIsLoading || mutateIsLoading;

    return (
        <>
            {record && (
                <Show
                    title="Review Posts"
                    resource="posts"
                    isLoading={isLoading || categoryIsLoading}
                    actionButtons={[
                        <Button
                            key="reject"
                            danger
                            disabled={buttonDisabled}
                            onClick={() => handleUpdate(record, "rejected")}
                        >
                            Reject
                        </Button>,
                        <Button
                            key="approve"
                            type="primary"
                            disabled={buttonDisabled}
                            onClick={() => handleUpdate(record, "published")}
                        >
                            Approve
                        </Button>,
                    ]}
                >
                    <Title level={5}>Status</Title>
                    <Text mark>{record.status}</Text>
                    <Title level={5}>Title</Title>
                    <Text>{record.title}</Text>
                    <Title level={5}>Category</Title>
                    <Text>{categoryData?.data.title}</Text>
                    <Title level={5}>Content</Title>
                    <MarkdownField value={record.content} />
                </Show>
            )}
        </>
    );
};
