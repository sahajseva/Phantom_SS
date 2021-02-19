import * as React from "react";
import {
    List,
    Table,
    Column,
    Create,
    Edit,
    Form,
    FormItem,
    TextInput,
    TextareaInput,
    SelectInput,
    ReferenceInput,
    ReferenceField,
    TextField,
    TagField,
    ImageField,
    FilterDropdown,
} from "readmin";
import { Radio } from "antd";

export const PostList = (props: any) => {
    return (
        <List {...props}>
            <Table rowKey="id">
                <Column dataIndex="id" title="ID" key="id" />
                <Column
                    key="image"
                    title="Image"
                    dataIndex="image"
                    render={(value) => (
                        <ImageField
                            value={value}
                            title="Image"
                            imageTitle="meow"
                            width={100}
                            data-testid="image"
                        />
                    )}
                />
                <Column
                    dataIndex="title"
                    title="Title"
                    key="title"
                    render={(value) => <TextField value={value} />}
                    // filterDropdown={(props) => <TextInputFilter {...props} />}
                />
                <Column
                    dataIndex="categoryId"
                    title="Category"
                    key="categoryId"
                    render={(value) => (
                        <ReferenceField resource="categories" value={value}>
                            <TextField value renderRecordKey="title" />
                        </ReferenceField>
                    )}
                    // filterDropdown={(props) => <TextInputFilter {...props} />}
                />
                <Column
                    dataIndex="status"
                    title="Status"
                    key="status"
                    render={(value) => <TagField value={value} />}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Radio.Group>
                                <Radio value="active">Active</Radio>
                                <Radio value="draft">Draft</Radio>
                            </Radio.Group>
                        </FilterDropdown>
                    )}
                />
            </Table>
        </List>
    );
};

export const PostCreate = (props: any) => {
    return (
        <Create {...props}>
            <Form wrapperCol={{ span: 14 }} layout="vertical">
                <FormItem
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextInput />
                </FormItem>
                <FormItem
                    label="Url"
                    name="slug"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextInput />
                </FormItem>
                <FormItem
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextareaInput />
                </FormItem>
                <FormItem
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <SelectInput
                        defaultValue="active"
                        options={[
                            {
                                label: "Active",
                                value: "active",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                        ]}
                    />
                </FormItem>
                <FormItem
                    label="Category"
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReferenceInput
                        reference="categories"
                        optionText="title"
                        sort={{
                            field: "title",
                            order: "asc",
                        }}
                    >
                        <SelectInput />
                    </ReferenceInput>
                </FormItem>
                <FormItem
                    label="User"
                    name="userId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    help="Autocomplete (search user email)"
                >
                    <ReferenceInput
                        reference="users"
                        optionText="email"
                        sort={{
                            field: "email",
                            order: "asc",
                        }}
                    >
                        <SelectInput showSearch />
                    </ReferenceInput>
                </FormItem>
                <FormItem
                    label="Tags"
                    name="tags"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReferenceInput reference="tags" optionText="title">
                        <SelectInput mode="multiple" />
                    </ReferenceInput>
                </FormItem>
            </Form>
        </Create>
    );
};

export const PostEdit = (props: any) => {
    return (
        <Edit {...props}>
            <Form wrapperCol={{ span: 14 }} layout="vertical">
                <FormItem
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextInput />
                </FormItem>
                <FormItem
                    label="Url"
                    name="slug"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextInput />
                </FormItem>
                <FormItem
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextareaInput />
                </FormItem>
                <FormItem
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <SelectInput
                        defaultValue="active"
                        options={[
                            {
                                label: "Active",
                                value: "active",
                            },
                            {
                                label: "Draft",
                                value: "draft",
                            },
                        ]}
                    />
                </FormItem>
                <FormItem
                    label="Category"
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReferenceInput
                        reference="categories"
                        optionText="title"
                        sort={{
                            field: "title",
                            order: "asc",
                        }}
                    >
                        <SelectInput showSearch />
                    </ReferenceInput>
                </FormItem>
                <FormItem
                    label="User"
                    name="userId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    help="Autocomplete (search user email)"
                >
                    <ReferenceInput reference="users" optionText="email">
                        <SelectInput showSearch />
                    </ReferenceInput>
                </FormItem>
                <FormItem
                    label="Tags"
                    name="tags"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReferenceInput reference="tags" optionText="title">
                        <SelectInput mode="multiple" />
                    </ReferenceInput>
                </FormItem>
            </Form>
        </Edit>
    );
};
