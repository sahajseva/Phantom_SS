import { FC, useMemo } from "react";
import {
    FilterDropdown,
    ShowButton,
    useSelect,
    useTable,
} from "@refinedev/antd";
import { useParams } from "react-router-dom";
import { Button, Card, Input, Select, Space, Table } from "antd";
import { Quote, QuoteStatus } from "../../interfaces/graphql";
import { QuoteStatusTag, Participants, Text } from "../../components";
import {
    ContainerOutlined,
    ExportOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { currencyNumber } from "../../utilities";

type Props = {
    style?: React.CSSProperties;
};

export const CompanyQuotesTable: FC<Props> = ({ style }) => {
    const params = useParams();

    const { tableProps, filters, setFilters } = useTable<Quote>({
        resource: "quotes",
        syncWithLocation: false,
        sorters: {
            initial: [
                {
                    field: "updatedAt",
                    order: "desc",
                },
            ],
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
            permanent: [
                {
                    field: "company.id",
                    operator: "eq",
                    value: params.id,
                },
            ],
        },
        meta: {
            fields: [
                "id",
                "title",
                "status",
                "total",
                { company: ["id", "name"] },
                { contact: ["id", "name", "avatarUrl"] },
                { salesOwner: ["id", "name", "avatarUrl"] },
            ],
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

    const showResetFilters = useMemo(() => {
        return filters?.filter((filter) => {
            if ("field" in filter && filter.field === "company.id") {
                return false;
            }

            if (!filter.value) {
                return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <Card
            style={style}
            headStyle={{
                borderBottom: "1px solid #D9D9D9",
                marginBottom: "1px",
            }}
            bodyStyle={{ padding: 0 }}
            title={
                <Space size="middle">
                    <ContainerOutlined />
                    <Text>Quotes</Text>

                    {showResetFilters?.length > 0 && (
                        <Button
                            size="small"
                            onClick={() => setFilters([], "replace")}
                        >
                            Reset filters
                        </Button>
                    )}
                </Space>
            }
        >
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    showSizeChanger: false,
                }}
            >
                <Table.Column
                    title="Quote Title"
                    dataIndex="title"
                    filterIcon={<SearchOutlined />}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Title" />
                        </FilterDropdown>
                    )}
                />
                <Table.Column<Quote>
                    title="Total amount"
                    dataIndex="value"
                    render={(_, record) => {
                        return <Text>{currencyNumber(record.total || 0)}</Text>;
                    }}
                />
                <Table.Column<Quote>
                    title="Stage"
                    dataIndex="status"
                    render={(_, record) => {
                        if (!record.status) return null;

                        return <QuoteStatusTag status={record.status} />;
                    }}
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
                />
                <Table.Column<Quote>
                    dataIndex={["salesOwner", "id"]}
                    title="Participants"
                    render={(_, record) => {
                        return (
                            <Participants
                                userOne={record.salesOwner}
                                userTwo={record.contact}
                            />
                        );
                    }}
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
                />
                <Table.Column<Quote>
                    dataIndex="id"
                    width={48}
                    render={(value) => {
                        return (
                            <ShowButton
                                recordItemId={value}
                                hideText
                                size="small"
                                resource="contacts"
                                icon={<ExportOutlined />}
                            />
                        );
                    }}
                />
            </Table>
        </Card>
    );
};

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
