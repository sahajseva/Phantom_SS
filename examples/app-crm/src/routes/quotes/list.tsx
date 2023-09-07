import { FC, PropsWithChildren } from "react";
import { HttpError, getDefaultFilter } from "@refinedev/core";
import {
    CreateButton,
    DeleteButton,
    EditButton,
    FilterDropdown,
    List,
    ShowButton,
    getDefaultSortOrder,
    useSelect,
    useTable,
} from "@refinedev/antd";
import { Form, Input, Select, Space, Spin, Table } from "antd";
import { PlusSquareOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Text, QuoteStatusTag, CustomAvatar } from "../../components";
import { currencyNumber } from "../../utilities";
import { Quote, QuoteFilter, QuoteStatus } from "../../interfaces/graphql";
import { Participants } from "../../components/participants";
import { debounce } from "lodash";

const statusOptions: { label: string; value: QuoteStatus }[] = [
    {
        label: "Draft",
        value: "DRAFT",
    },
    {
        label: "Sent",
        value: "SENT",
    },
    {
        label: "Accepted",
        value: "ACCEPTED",
    },
];

export const QuotesListPage: FC<PropsWithChildren> = ({ children }) => {
    const { tableProps, searchFormProps, filters, sorters, tableQueryResult } =
        useTable<Quote, HttpError, { title: string }>({
            resource: "quotes",
            onSearch: (values) => {
                return [
                    {
                        field: "title",
                        operator: "contains",
                        value: values.title,
                    },
                ];
            },
            filters: {
                initial: [
                    {
                        field: "title",
                        value: "",
                        operator: "contains",
                    },
                    {
                        field: "status",
                        value: undefined,
                        operator: "in",
                    },
                ],
            },
            sorters: {
                initial: [
                    {
                        field: "createdAt",
                        order: "desc",
                    },
                ],
            },
            meta: {
                fields: [
                    "id",
                    "title",
                    "status",
                    "total",
                    "createdAt",
                    { company: ["id", "name", "avatarUrl"] },
                    { contact: ["id", "name", "avatarUrl"] },
                    { salesOwner: ["id", "name", "avatarUrl"] },
                ],
            },
        });

    const { selectProps: selectPropsCompanies } = useSelect({
        resource: "companies",
        optionLabel: "name",
        pagination: {
            mode: "off",
        },
        meta: {
            fields: ["id", "name"],
        },
    });

    const { selectProps: selectPropsUsers } = useSelect({
        resource: "users",
        optionLabel: "name",
        pagination: {
            mode: "off",
        },
        meta: {
            fields: ["id", "name"],
        },
    });
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchFormProps?.onFinish?.({
            title: e.target.value ?? "",
        });
    };

    const debouncedOnChange = debounce(onSearch, 500);

    return (
        <div className="page-container">
            <List
                breadcrumb={false}
                headerButtons={() => {
                    return (
                        <Form {...searchFormProps} layout="inline">
                            <Form.Item name="title" noStyle>
                                <Input
                                    size="large"
                                    prefix={
                                        <SearchOutlined className="anticon tertiary" />
                                    }
                                    suffix={
                                        <Spin
                                            size="small"
                                            style={{
                                                visibility:
                                                    tableQueryResult.isFetching
                                                        ? "visible"
                                                        : "hidden",
                                            }}
                                            spinning={true}
                                        />
                                    }
                                    placeholder="Search by name"
                                    onChange={debouncedOnChange}
                                />
                            </Form.Item>
                        </Form>
                    );
                }}
                contentProps={{
                    style: {
                        marginTop: "28px",
                    },
                }}
                title={
                    <CreateButton
                        style={{
                            width: "192px",
                        }}
                        size="large"
                        type="primary"
                        icon={<PlusSquareOutlined />}
                    >
                        Add Quote
                    </CreateButton>
                }
            >
                <Table
                    {...tableProps}
                    pagination={{
                        ...tableProps.pagination,
                        showTotal: (total) => {
                            return (
                                <span
                                    style={{
                                        marginLeft: "16px",
                                    }}
                                >
                                    <span className="ant-text secondary">
                                        {total}
                                    </span>{" "}
                                    quotes in total
                                </span>
                            );
                        },
                    }}
                    rowKey="id"
                >
                    <Table.Column
                        dataIndex="title"
                        title="Title"
                        defaultFilteredValue={getDefaultFilter(
                            "title",
                            filters,
                        )}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Input placeholder="Search Name" />
                            </FilterDropdown>
                        )}
                    />
                    <Table.Column<Quote>
                        dataIndex={["company", "id"]}
                        title="Company"
                        defaultFilteredValue={getDefaultFilter(
                            "company.id",
                            filters,
                            "in",
                        )}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Select
                                    placeholder="Search Company"
                                    style={{ width: 220 }}
                                    {...selectPropsCompanies}
                                />
                            </FilterDropdown>
                        )}
                        render={(_, record) => {
                            return (
                                <Space>
                                    <CustomAvatar
                                        shape="square"
                                        name={record.company.name}
                                        src={record.company.avatarUrl}
                                    />
                                    <Text style={{ whiteSpace: "nowrap" }}>
                                        {record.company.name}
                                    </Text>
                                </Space>
                            );
                        }}
                    />
                    <Table.Column
                        dataIndex="total"
                        title="Total Amount"
                        sorter
                        render={(value) => {
                            return (
                                <Text
                                    style={{
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {currencyNumber(value)}
                                </Text>
                            );
                        }}
                    />
                    <Table.Column<Quote>
                        dataIndex="status"
                        title="Stage"
                        defaultFilteredValue={getDefaultFilter(
                            "status",
                            filters,
                            "in",
                        )}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Select
                                    style={{ width: "200px" }}
                                    mode="multiple"
                                    placeholder="Select Stage"
                                    options={statusOptions}
                                ></Select>
                            </FilterDropdown>
                        )}
                        render={(value) => {
                            return <QuoteStatusTag status={value} />;
                        }}
                    />
                    <Table.Column<Quote>
                        dataIndex={["salesOwner", "id"]}
                        title="Participants"
                        filterDropdown={(props) => {
                            return (
                                <FilterDropdown {...props}>
                                    <Select
                                        style={{ width: "200px" }}
                                        placeholder="Select Sales Owner"
                                        {...selectPropsUsers}
                                    />
                                </FilterDropdown>
                            );
                        }}
                        render={(_, record) => {
                            return (
                                <Participants
                                    userOne={record.salesOwner}
                                    userTwo={record.contact}
                                />
                            );
                        }}
                    />
                    <Table.Column<Quote>
                        dataIndex={"createdAt"}
                        title="Created at"
                        sorter
                        defaultSortOrder={getDefaultSortOrder(
                            "createdAt",
                            sorters,
                        )}
                        render={(value) => {
                            return <Text>{dayjs(value).fromNow()}</Text>;
                        }}
                    />
                    <Table.Column<Quote>
                        fixed="right"
                        title="Actions"
                        dataIndex="actions"
                        render={(_, record) => {
                            return (
                                <Space>
                                    <ShowButton
                                        hideText
                                        size="small"
                                        recordItemId={record.id}
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    />
                                    <EditButton
                                        hideText
                                        size="small"
                                        recordItemId={record.id}
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    />
                                    <DeleteButton
                                        hideText
                                        size="small"
                                        recordItemId={record.id}
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    />
                                </Space>
                            );
                        }}
                    />
                </Table>
            </List>
            {children}
        </div>
    );
};
