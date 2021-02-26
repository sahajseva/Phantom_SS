import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Card, Button, Row, Space } from "antd";
import pluralize from "pluralize";
import { SaveOutlined } from "@ant-design/icons";

import { useOne, useUpdate } from "@hooks";
import { BaseRecord } from "@interfaces";
import { ListButton, RefreshButton } from "@components/buttons";

export interface EditProps {
    resourceName: string;
}

export const Edit: React.FC<EditProps> = ({ resourceName, children }) => {
    const history = useHistory();
    const { id } = useParams<Record<string, string>>();

    const [form] = Form.useForm();

    const { data, isLoading } = useOne(resourceName, id);

    form.setFieldsValue({
        ...data?.data,
    });

    const { mutate } = useUpdate(resourceName);

    const onFinish = async (values: BaseRecord): Promise<void> => {
        mutate(
            { id, values },
            {
                onSuccess: () => {
                    return history.push(`/resources/${resourceName}`);
                },
            },
        );
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
            title={`Edit ${pluralize.singular(resourceName)}`}
            extra={
                <Row>
                    <Space>
                        <ListButton />
                        <RefreshButton />
                        <Button
                            htmlType="submit"
                            disabled={isLoading}
                            type="primary"
                            icon={<SaveOutlined />}
                            onClick={(): void => form.submit()}
                        >
                            Save
                        </Button>
                    </Space>
                </Row>
            }
        >
            {childrenWithProps}
        </Card>
    );
};
