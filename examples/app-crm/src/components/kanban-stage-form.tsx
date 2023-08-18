import { HttpError } from "@refinedev/core";
import { useForm, useSelect } from "@refinedev/antd";
import { Checkbox, Form, Select, Space, Skeleton } from "antd";
import { FlagOutlined } from "@ant-design/icons";

import { Task } from "../interfaces/graphql";

type Props = {
    initialValues: {
        completed: Task["completed"];
        stage: Task["stage"];
    };
    isLoading?: boolean;
};

export const KanbanStageForm = ({ initialValues, isLoading }: Props) => {
    const { formProps } = useForm<Task, HttpError>({
        queryOptions: {
            enabled: false,
        },
        autoSave: {
            enabled: true,
            debounce: 0,
            onFinish: (values: any) => {
                return {
                    ...values,
                    stage: undefined,
                    stageId: values.stage.id,
                };
            },
        },
    });

    const { selectProps } = useSelect({
        resource: "taskStages",
        meta: {
            fields: ["title", "id"],
        },
    });

    if (isLoading) {
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Skeleton.Avatar size="small" shape="square" />
                <Skeleton.Input size="small" block />
            </div>
        );
    }

    return (
        <div>
            <Form
                layout="inline"
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                {...formProps}
                initialValues={initialValues}
            >
                <Space>
                    <FlagOutlined />
                    <Form.Item noStyle name={["stage", "id"]}>
                        <Select
                            {...selectProps}
                            popupMatchSelectWidth={false}
                            options={selectProps.options?.concat([
                                {
                                    label: "Unassigned",
                                    value: null,
                                },
                            ])}
                            bordered={false}
                            showSearch={false}
                            placeholder="Select a stage"
                            onSearch={undefined}
                            size="small"
                        />
                    </Form.Item>
                </Space>
                <Form.Item noStyle name="completed" valuePropName="checked">
                    <Checkbox>Mark as complete</Checkbox>
                </Form.Item>
            </Form>
        </div>
    );
};
