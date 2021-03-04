import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Card, Button, Row, Space, ButtonProps } from "antd";
import pluralize from "pluralize";
import { SaveOutlined } from "@ant-design/icons";

import {
    useOne,
    useUpdate,
    useTranslate,
    useNotification,
    useMutationMode,
} from "@hooks";
import { BaseRecord, MutationMode } from "@interfaces";
import { DeleteButton, RefreshButton, ListButton } from "@components";

export interface EditProps {
    resourceName: string;
    title?: string;
    actionButtons?: React.ReactNode;
    saveButtonProps?: ButtonProps;
    mutationMode?: MutationMode;
}

export const Edit: React.FC<EditProps> = ({
    resourceName,
    title,
    actionButtons,
    saveButtonProps,
    mutationMode: mutationModeProp,
    children,
}) => {
    const history = useHistory();
    const notification = useNotification();
    const { mutationMode: mutationModeContext } = useMutationMode();

    const mutationMode = mutationModeProp ?? mutationModeContext;

    const { id } = useParams<Record<string, string>>();

    const [form] = Form.useForm();

    const { data, isLoading } = useOne(resourceName, id);

    React.useEffect(() => {
        form.setFieldsValue({
            ...data?.data,
        });
    }, [data]);

    const { mutate } = useUpdate(
        resourceName,
        mutationMode,
        (cancelMutation) => {
            notification.info({
                description: "Undo",
                message: "You have 5 seconds to undo",
                btn: (
                    <Button
                        onClick={() => {
                            cancelMutation();
                            notification.close("undo");
                        }}
                    >
                        Undo
                    </Button>
                ),
                key: "undo",
            });
        },
    );
    const translate = useTranslate();

    const onFinish = async (values: BaseRecord): Promise<void> => {
        mutate(
            { id, values },
            {
                onSuccess:
                    mutationMode === "pessimistic"
                        ? () => {
                              return history.push(`/resources/${resourceName}`);
                          }
                        : undefined,
            },
        );
        !(mutationMode === "pessimistic") &&
            history.push(`/resources/${resourceName}`);
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                resourceName,
                form,
                onFinish,
            });
        }
        return child;
    });

    return (
        <Card
            title={title ?? `Edit ${pluralize.singular(resourceName)}`}
            extra={
                <Row>
                    <Space>
                        <ListButton resourceName={resourceName} />
                        <RefreshButton resourceName={resourceName} />
                    </Space>
                </Row>
            }
            actions={[
                <Space
                    key="action-buttons"
                    style={{ float: "right", marginRight: 24 }}
                >
                    {actionButtons ?? (
                        <>
                            <DeleteButton />
                            <Button
                                htmlType="submit"
                                disabled={isLoading}
                                type="primary"
                                icon={<SaveOutlined />}
                                onClick={(): void => form.submit()}
                                {...saveButtonProps}
                            >
                                {translate("common:buttons.save", "Save")}
                            </Button>
                        </>
                    )}
                </Space>,
            ]}
        >
            {childrenWithProps}
        </Card>
    );
};
