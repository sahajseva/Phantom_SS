import { useNavigate } from "react-router-dom";
import { useGetIdentity, useGetToPath } from "@refinedev/core";
import { useForm, useSelect } from "@refinedev/antd";
import { Button, Form, Input, Modal, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Company, User } from "../../interfaces/graphql";
import { SelectOptionWithAvatar } from "../../components/select-option-with-avatar";

export const ContactCreatePage = () => {
    const navigate = useNavigate();
    const getToPath = useGetToPath();
    const { data: user } = useGetIdentity<User>();
    const { formProps, saveButtonProps, onFinish } = useForm({
        redirect: "list",
    });
    const { selectProps, queryResult } = useSelect<Company>({
        resource: "companies",
        optionLabel: "name",
        meta: {
            fields: ["id", "name", "avatarUrl"],
        },
    });

    return (
        <Modal
            open
            title="Create Contact"
            onCancel={() => {
                navigate(
                    getToPath({
                        action: "list",
                    }) ?? "",
                    {
                        replace: true,
                    },
                );
            }}
            okText="Save"
            okButtonProps={{
                ...saveButtonProps,
            }}
            width={560}
        >
            <Form
                layout="vertical"
                {...formProps}
                onFinish={(values) => {
                    onFinish({
                        ...values,
                        salesOwnerId: user?.id,
                    });
                }}
            >
                <Form.Item
                    label="Contact Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Company"
                    name="companyId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    help={
                        <Button
                            style={{ paddingLeft: 0 }}
                            type="link"
                            icon={<PlusCircleOutlined />}
                            onClick={() =>
                                navigate(
                                    "company/create?to=/scrumboard/sales/create",
                                    {
                                        replace: true,
                                    },
                                )
                            }
                        >
                            Add new company
                        </Button>
                    }
                >
                    <Select
                        {...selectProps}
                        options={
                            queryResult.data?.data?.map(
                                ({ id, name, avatarUrl }) => ({
                                    value: id,
                                    label: (
                                        <SelectOptionWithAvatar
                                            name={name}
                                            avatarUrl={avatarUrl ?? undefined}
                                        />
                                    ),
                                }),
                            ) ?? []
                        }
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};
