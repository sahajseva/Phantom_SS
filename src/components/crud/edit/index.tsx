import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Card } from "antd";
import pluralize from "pluralize";

import { useOne, useTranslation, useUpdate } from "@hooks";

export interface EditProps {
    resourceName: string;
}

export const Edit: React.FC<EditProps> = ({ resourceName, children }) => {
    const history = useHistory();
    const { id } = useParams<Record<string, string>>();

    const [form] = Form.useForm();

    const { data } = useOne(resourceName, id);

    const { routes } = useTranslation();

    form.setFieldsValue({
        ...data?.data,
    });

    const { mutate, error, isLoading } = useUpdate(resourceName);

    const onFinish = async (values: object): Promise<void> => {
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
                error: error,
                isLoading: isLoading,
            });
        }
        return child;
    });

    return (
        <Card
            title={routes.edit({
                resource: pluralize.singular(resourceName),
            })}
        >
            {childrenWithProps}
        </Card>
    );
};
