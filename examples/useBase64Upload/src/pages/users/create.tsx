import React from "react";
import {
    Create,
    Form,
    Input,
    IResourceComponentsProps,
    Upload,
    useForm,
    getValueFromEvent,
    file2Base64,
} from "@pankod/refine";

// import { IPost, ICategory } from "../../interfaces";

export const UserCreate = (props: IResourceComponentsProps) => {
    const { form, formProps, saveButtonProps } = useForm();

    return (
        <Create {...props} saveButtonProps={saveButtonProps}>
            <Form
                {...formProps}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                onFinish={async (values) => {
                    const base64Files = [];
                    const { avatar } = values;

                    for (const file of avatar) {
                        if (file.originFileObj) {
                            const base64String = await file2Base64(file);

                            base64Files.push({
                                ...file,
                                base64String,
                            });
                        } else {
                            base64Files.push(file);
                        }
                    }

                    return (
                        formProps.onFinish &&
                        formProps.onFinish({
                            ...values,
                            avatar: base64Files,
                        })
                    );
                }}
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
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
                <Form.Item label="avatar">
                    <Form.Item
                        name="avatar"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger listType="picture" multiple>
                            <p className="ant-upload-text">Title</p>
                            <p className="ant-upload-hint">Upload</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Create>
    );
};
