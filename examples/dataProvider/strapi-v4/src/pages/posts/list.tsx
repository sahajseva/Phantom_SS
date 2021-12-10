import { useState } from "react";
import {
    List,
    Table,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    FilterDropdown,
    Select,
    getDefaultFilter,
    useSelect,
    DateField,
    Space,
    EditButton,
    DeleteButton,
    ImageField,
    Form,
    Radio,
    Tag,
} from "@pankod/refine";

import { IPost } from "interfaces";

import { API_URL } from "../../constants";

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const [locale, setLocale] = useState("en");
    const [publicationState, setPublicationState] = useState("live");

    const { tableProps, sorter, filters } = useTable<IPost>({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
        initialFilter: [
            { field: "[category][id]", operator: "in", value: [1] },
        ],
        metaData: {
            populate: ["category", "cover"],
            locale,
            publicationState,
        },
    });

    const { selectProps } = useSelect({
        resource: "categories",
        optionLabel: "title",
        optionValue: "id",
        defaultValue: getDefaultFilter("[category][id]", filters, "in"),
    });

    return (
        <List>
            <Form
                layout="inline"
                initialValues={{
                    locale,
                    publicationState,
                }}
            >
                <Form.Item label="Locale" name="locale">
                    <Radio.Group onChange={(e) => setLocale(e.target.value)}>
                        <Radio.Button value="en">English</Radio.Button>
                        <Radio.Button value="de">Deutsch</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Publication State" name="publicationState">
                    <Radio.Group
                        onChange={(e) => setPublicationState(e.target.value)}
                    >
                        <Radio.Button value="live">Published</Radio.Button>
                        <Radio.Button value="preview">
                            Draft and Published
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
            <br />
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    showSizeChanger: true,
                }}
            >
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter={{ multiple: 3 }}
                />
                <Table.Column
                    dataIndex="title"
                    key="title"
                    title="Title"
                    defaultSortOrder={getDefaultSortOrder("title", sorter)}
                    sorter={{ multiple: 2 }}
                />
                <Table.Column
                    key="[category][id]"
                    dataIndex={["category", "data", "attributes", "title"]}
                    title="Category"
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...selectProps}
                            />
                        </FilterDropdown>
                    )}
                    defaultFilteredValue={getDefaultFilter(
                        "[category][id]",
                        filters,
                        "in",
                    )}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="Created At"
                    render={(value) => <DateField value={value} format="LLL" />}
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
                    sorter={{ multiple: 1 }}
                />
                <Table.Column
                    dataIndex="publishedAt"
                    title="Status"
                    render={(value) => {
                        return (
                            <Tag color={value ? "green" : "blue"}>
                                {value ? "Published" : "Draft"}
                            </Tag>
                        );
                    }}
                />
                <Table.Column
                    dataIndex={["cover", "data", "attributes"]}
                    align="center"
                    title="Cover"
                    render={(value) => {
                        return value ? (
                            <ImageField
                                value={API_URL + value?.url}
                                alt={value?.name}
                                title={value?.name}
                                width={48}
                                preview={{ mask: <></> }}
                            />
                        ) : (
                            <span>---</span>
                        );
                    }}
                />
                <Table.Column<{ id: string }>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
