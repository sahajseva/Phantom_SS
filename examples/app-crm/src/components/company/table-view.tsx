import { FC } from "react";
import {
    DeleteButton,
    EditButton,
    FilterDropdown,
    useSelect,
} from "@refinedev/antd";
import { CrudFilters, CrudSorting, getDefaultFilter } from "@refinedev/core";
import { Input, Select, Space, Table, TableProps } from "antd";

import { Text, CustomAvatar } from "..";
import { currencyNumber } from "../../utilities";
import { Company } from "../../interfaces/graphql";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { CustomAvatarGroup } from "../custom-avatar-group";
import { PaginationTotal } from "../pagination-total";

type Props = {
    tableProps: TableProps<Company>;
    filters: CrudFilters;
    sorters: CrudSorting;
};

export const CompaniesTableView: FC<Props> = ({ tableProps, filters }) => {
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

    const { selectProps: selectPropsContacts } = useSelect({
        resource: "contacts",
        optionLabel: "name",
        pagination: {
            mode: "off",
        },
        meta: {
            fields: ["id", "name"],
        },
    });

    return (
        <Table
            {...tableProps}
            pagination={{
                ...tableProps.pagination,
                pageSizeOptions: ["12", "24", "48", "96"],
                showTotal: (total) => (
                    <PaginationTotal total={total} entityName="companies" />
                ),
            }}
            rowKey="id"
        >
            <Table.Column<Company>
                dataIndex="name"
                title="Company title"
                defaultFilteredValue={getDefaultFilter("id", filters)}
                filterIcon={<SearchOutlined />}
                filterDropdown={(props) => (
                    <FilterDropdown {...props}>
                        <Input placeholder="Search Company" />
                    </FilterDropdown>
                )}
                render={(_, record) => {
                    return (
                        <Space>
                            <CustomAvatar
                                shape="square"
                                name={record.name}
                                src={record.avatarUrl}
                            />
                            <Text
                                style={{
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {record.name}
                            </Text>
                        </Space>
                    );
                }}
            />
            <Table.Column<Company>
                dataIndex={["salesOwner", "id"]}
                title="Sales Owner"
                defaultFilteredValue={getDefaultFilter(
                    "salesOwner.id",
                    filters,
                )}
                filterDropdown={(props) => (
                    <FilterDropdown {...props}>
                        <Select
                            placeholder="Search Sales owner"
                            style={{ width: 220 }}
                            {...selectPropsUsers}
                        />
                    </FilterDropdown>
                )}
                render={(_, record) => {
                    const salesOwner = record.salesOwner;
                    return (
                        <Space>
                            <CustomAvatar
                                name={salesOwner.name}
                                src={salesOwner.avatarUrl}
                            />
                            <Text
                                style={{
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {salesOwner.name}
                            </Text>
                        </Space>
                    );
                }}
            />
            <Table.Column<Company>
                dataIndex={"totalRevenue"}
                title="Open deals amount"
                render={(_, company) => {
                    return (
                        <Text>
                            {currencyNumber(
                                company?.dealsAggregate?.[0].sum?.value || 0,
                            )}
                        </Text>
                    );
                }}
            />
            <Table.Column<Company>
                dataIndex={["contacts", "id"]}
                title="Related Contacts"
                defaultFilteredValue={getDefaultFilter(
                    "contacts.id",
                    filters,
                    "in",
                )}
                filterDropdown={(props) => (
                    <FilterDropdown {...props}>
                        <Select
                            mode="multiple"
                            placeholder="Search related contacts"
                            style={{ width: 220 }}
                            {...selectPropsContacts}
                        />
                    </FilterDropdown>
                )}
                render={(_, record: Company) => {
                    const value = record.contacts;
                    const avatars = value?.nodes?.map((contact) => {
                        return {
                            name: contact.name,
                            src: contact.avatarUrl as string | undefined,
                        };
                    });

                    return (
                        <CustomAvatarGroup avatars={avatars} size={"small"} />
                    );
                }}
            />
            <Table.Column<Company>
                fixed="right"
                dataIndex="id"
                title="Actions"
                render={(value) => (
                    <Space>
                        <EditButton
                            icon={<EyeOutlined />}
                            hideText
                            size="small"
                            recordItemId={value}
                        />

                        <DeleteButton
                            hideText
                            size="small"
                            recordItemId={value}
                        />
                    </Space>
                )}
            />
        </Table>
    );
};
