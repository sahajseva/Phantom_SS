import { FC, useMemo } from "react";
import {
    EditButton,
    FilterDropdown,
    useSelect,
    useTable,
} from "@refinedev/antd";
import { useParams } from "react-router-dom";
import { Button, Card, Input, Select, Space, Table } from "antd";
import { Deal } from "../../interfaces/graphql";
import { DealStageTag, Participants, Text } from "../../components";
import {
    AuditOutlined,
    ExportOutlined,
    PlusCircleOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { currencyNumber } from "../../utilities";
import { useNavigation } from "@refinedev/core";
import { Link } from "react-router-dom";

type Props = {
    style?: React.CSSProperties;
};

export const CompanyDealsTable: FC<Props> = ({ style }) => {
    const { listUrl } = useNavigation();
    const params = useParams();

    const { tableProps, filters, setFilters } = useTable<Deal>({
        resource: "deals",
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
                    field: "stage.title",
                    value: "",
                    operator: "contains",
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
                "value",
                { stage: ["id", "title"] },
                { dealOwner: ["id", "name", "avatarUrl"] },
                { dealContact: ["id", "name", "avatarUrl"] },
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

    const hasData = tableProps.loading
        ? true
        : tableProps?.dataSource?.length || 0 > 0;

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
                    <AuditOutlined />
                    <Text>Deals</Text>

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
            extra={
                <>
                    <Text className="tertiary">Total deal amount: </Text>
                    <Text strong>{currencyNumber(848852400)}</Text>
                </>
            }
        >
            {!hasData && (
                <Space
                    direction="vertical"
                    size={16}
                    style={{
                        padding: 16,
                    }}
                >
                    <Text>No deals yet</Text>
                    <Link to={listUrl("deals")}>
                        <PlusCircleOutlined
                            style={{
                                marginRight: 4,
                            }}
                        />{" "}
                        Add deals through sales pipeline
                    </Link>
                </Space>
            )}

            {hasData && (
                <Table
                    {...tableProps}
                    rowKey="id"
                    pagination={{
                        ...tableProps.pagination,
                        showSizeChanger: false,
                    }}
                >
                    <Table.Column title="Deal Title" dataIndex="title" />
                    <Table.Column<Deal>
                        title="Deal amount"
                        dataIndex="value"
                        sorter
                        render={(_, record) => {
                            return (
                                <Text>{currencyNumber(record.value || 0)}</Text>
                            );
                        }}
                    />
                    <Table.Column<Deal>
                        title="Stage"
                        dataIndex={["stage", "title"]}
                        render={(_, record) => {
                            if (!record.stage) return null;

                            return <DealStageTag stage={record.stage} />;
                        }}
                        filterIcon={<SearchOutlined />}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Input placeholder="Search Title" />
                            </FilterDropdown>
                        )}
                    />
                    <Table.Column<Deal>
                        dataIndex={["dealOwnerId"]}
                        title="Participants"
                        render={(_, record) => {
                            return (
                                <Participants
                                    userOne={record.dealOwner}
                                    userTwo={record.dealContact}
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
                    <Table.Column<Deal>
                        dataIndex="id"
                        width={48}
                        render={(value) => {
                            return (
                                <EditButton
                                    recordItemId={value}
                                    hideText
                                    size="small"
                                    resource="deals"
                                    icon={<ExportOutlined />}
                                />
                            );
                        }}
                    />
                </Table>
            )}
        </Card>
    );
};
