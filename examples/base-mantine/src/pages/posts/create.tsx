import { Create, useForm, useSelect } from "@refinedev/mantine";
import { Select, TextInput, Text, MultiSelect } from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";
import { ITag } from "../../interfaces";

export const PostCreate: React.FC = () => {
    const { saveButtonProps, getInputProps, errors } = useForm({
        initialValues: {
            title: "",
            status: "",
            category: {
                id: "",
            },
            content: "",
        },
        validate: {
            title: (value) => (value.length < 2 ? "Too short title" : null),
            status: (value) =>
                value.length <= 0 ? "Status is required" : null,
            category: {
                id: (value) =>
                    value.length <= 0 ? "Category is required" : null,
            },
            content: (value) =>
                value.length < 10 ? "Too short content" : null,
        },
    });

    const { selectProps } = useSelect({
        resource: "categories",
    });

    const { selectProps: tagSelectProps } = useSelect<ITag>({
        resource: "tags",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <form>
                <TextInput
                    mt={8}
                    label="Title"
                    placeholder="Title"
                    {...getInputProps("title")}
                />
                <Select
                    mt={8}
                    label="Status"
                    placeholder="Pick one"
                    {...getInputProps("status")}
                    data={[
                        { label: "Published", value: "published" },
                        { label: "Draft", value: "draft" },
                        { label: "Rejected", value: "rejected" },
                    ]}
                />
                <Select
                    mt={8}
                    label="Category"
                    placeholder="Pick one"
                    {...getInputProps("category.id")}
                    {...selectProps}
                />
                <MultiSelect
                    {...getInputProps("tags")}
                    {...tagSelectProps}
                    mt={8}
                    label="Tags"
                    placeholder="Pick multiple"
                    defaultValue={[]}
                    filter={(value, _selected, item) => {
                        return !!item.label?.toLowerCase().includes(value);
                    }}
                />
                <Text mt={8} weight={500} size="sm" color="#212529">
                    Content
                </Text>
                <MDEditor
                    data-color-mode="light"
                    {...getInputProps("content")}
                />
                {errors.content && (
                    <Text mt={2} weight={500} size="xs" color="red">
                        {errors.content}
                    </Text>
                )}
            </form>
        </Create>
    );
};
