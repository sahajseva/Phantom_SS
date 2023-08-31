import { BaseKey, HttpError, useGetIdentity, useParsed } from "@refinedev/core";
import { useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { CustomAvatar } from "../../custom-avatar";
import { ContactNote, User } from "../../../interfaces/graphql";

type FormValues = ContactNote & {
    contactId: BaseKey;
};

export const ContactCommentForm = () => {
    const { id: contactId } = useParsed();

    const { data: me } = useGetIdentity<User>();

    const { formProps, onFinish, form, formLoading } = useForm<
        ContactNote,
        HttpError,
        FormValues
    >({
        action: "create",
        resource: "contactNotes",
        queryOptions: {
            enabled: false,
        },
        meta: {
            operation: "contactNotes",
        },
        redirect: false,
        mutationMode: "optimistic",
    });

    const handleOnFinish = async (values: ContactNote) => {
        if (!contactId) {
            return;
        }

        const note = values.note.trim();
        if (!note) {
            return;
        }

        try {
            await onFinish({
                ...values,
                contactId,
            });

            form.resetFields();
        } catch (error) {}
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "1rem",
                borderBottom: "1px solid #F0F0F0",
            }}
        >
            <CustomAvatar
                style={{ flexShrink: 0 }}
                name={me?.name}
                src={me?.avatarUrl}
            />
            <Form
                {...formProps}
                style={{ width: "100%" }}
                onFinish={handleOnFinish}
            >
                <Form.Item
                    name="note"
                    noStyle
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(
                                /^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i,
                            ),
                            message: "Please enter a note",
                        },
                    ]}
                >
                    <Input
                        placeholder="Add your note"
                        style={{ backgroundColor: "#fff" }}
                        addonAfter={formLoading && <LoadingOutlined />}
                    />
                </Form.Item>
            </Form>
        </div>
    );
};
