import React from "react";
import {
    Create,
    Form,
    Input,
    IResourceComponentsProps,
    Select,
    Upload,
    useApiUrl,
    useForm,
    useSelect,
    normalizeFileForStrapi,
    InputNumber,
    useStrapiUpload,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

import { TOKEN_KEY } from "../../../constants";

export const PostCreate = (props: IResourceComponentsProps) => {
    const API_URL = useApiUrl();

    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
        "write",
    );

    const { formProps, saveButtonProps, queryResult } = useForm({});

    const postData = queryResult?.data?.data;
    const { selectProps } = useSelect({
        resource: "categories",
        defaultValue: postData?.category.id,
    });

    const { uploadedFileIds, ...uploadProps } = useStrapiUpload({
        maxCount: 3,
    });

    const { form } = formProps;
    React.useEffect(() => {
        form &&
            form.setFieldsValue({
                cover: uploadedFileIds,
            });
    }, [uploadedFileIds]);

    return (
        <Create {...props} saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    wrapperCol={{ span: 14 }}
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(
                                <ReactMarkdown>{markdown}</ReactMarkdown>,
                            )
                        }
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 8 }}
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select showSearch filterOption={false} {...selectProps} />
                </Form.Item>
                <Form.Item label="Cover">
                    <Form.Item
                        name="_cover"
                        valuePropName="fileList"
                        getValueFromEvent={(event) =>
                            normalizeFileForStrapi(event, API_URL)
                        }
                        noStyle
                    >
                        <Upload.Dragger
                            name="files"
                            action={`${API_URL}/upload`}
                            headers={{
                                Authorization: `Bearer ${localStorage.getItem(
                                    TOKEN_KEY,
                                )}`,
                            }}
                            listType="picture"
                            multiple
                            {...uploadProps}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item name="cover">
                        <InputNumber />
                    </Form.Item>
                </Form.Item>
            </Form>
        </Create>
    );
};
