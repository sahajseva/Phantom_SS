import { PropsWithChildren } from "react";
import { getDefaultFilter, useGo } from "@refinedev/core";
import {
  CreateButton,
  DeleteButton,
  EditButton,
  FilterDropdown,
  List,
  NumberField,
  getDefaultSortOrder,
  useSelect,
  useTable,
} from "@refinedev/antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import { Flex, Input, Select, Table, Typography } from "antd";
import { CustomAvatar } from "../../components/avatar";
import { IAccount } from "../../interfaces";
import { API_URL } from "../../utils/constants";
import { PaginationTotal } from "../../components/pagination-total";

export const AccountsPageList = ({ children }: PropsWithChildren) => {
  const go = useGo();

  const { tableProps, filters, sorters } = useTable<IAccount>({
    sorters: {
      initial: [{ field: "createdAt", order: "desc" }],
    },
    filters: {
      initial: [
        {
          field: "owner_email",
          operator: "contains",
          value: "",
        },
        {
          field: "phone",
          operator: "contains",
          value: "",
        },
      ],
    },
    meta: {
      populate: ["logo", "invoices"],
    },
  });

  const { selectProps: selectPropsCompanyName } = useSelect({
    resource: "accounts",
    optionLabel: "company_name",
    optionValue: "company_name",
  });

  const { selectProps: selectPropsOwnerName } = useSelect({
    resource: "accounts",
    optionLabel: "owner_name",
    optionValue: "owner_name",
  });

  return (
    <>
      <List
        title="Accounts"
        headerButtons={() => {
          return (
            <CreateButton
              size="large"
              onClick={() =>
                go({
                  to: { resource: "accounts", action: "create" },
                  options: { keepQuery: true },
                })
              }
            >
              Add new account
            </CreateButton>
          );
        }}
      >
        <Table
          {...tableProps}
          rowKey={"id"}
          pagination={{
            ...tableProps.pagination,
            showSizeChanger: true,
            showTotal: (total) => (
              <PaginationTotal total={total} entityName="accounts" />
            ),
          }}
          scroll={{ x: 960 }}
        >
          <Table.Column
            title="ID"
            dataIndex="id"
            key="id"
            width={80}
            defaultFilteredValue={getDefaultFilter("id", filters)}
            filterIcon={<SearchOutlined />}
            filterDropdown={(props) => {
              return (
                <FilterDropdown {...props}>
                  <Input placeholder="Search ID" />
                </FilterDropdown>
              );
            }}
          />
          <Table.Column
            title="Title"
            dataIndex="company_name"
            key="company_name"
            sorter
            defaultSortOrder={getDefaultSortOrder("company_name", sorters)}
            defaultFilteredValue={getDefaultFilter(
              "company_name",
              filters,
              "in",
            )}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Select
                  mode="multiple"
                  placeholder="Search Company Name"
                  style={{ width: 220 }}
                  {...selectPropsCompanyName}
                />
              </FilterDropdown>
            )}
            render={(name: string, record: IAccount) => {
              const logoUrl = record?.logo?.url;
              const src = logoUrl ? `${API_URL}${logoUrl}` : undefined;

              return (
                <Flex align="center" gap={8}>
                  <CustomAvatar name={name} src={src} shape="square" />
                  <Typography.Text>{name}</Typography.Text>
                </Flex>
              );
            }}
          />
          <Table.Column
            title="Owner"
            dataIndex="owner_name"
            key="owner_name"
            sorter
            defaultSortOrder={getDefaultSortOrder("owner_name", sorters)}
            defaultFilteredValue={getDefaultFilter("owner_name", filters, "in")}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Select
                  mode="multiple"
                  placeholder="Search Owner Name"
                  style={{ width: 220 }}
                  {...selectPropsOwnerName}
                />
              </FilterDropdown>
            )}
          />
          <Table.Column
            title="Email"
            dataIndex="owner_email"
            key="owner_email"
            defaultFilteredValue={getDefaultFilter(
              "owner_email",
              filters,
              "contains",
            )}
            filterIcon={<SearchOutlined />}
            filterDropdown={(props) => {
              return (
                <FilterDropdown {...props}>
                  <Input placeholder="Search Email" />
                </FilterDropdown>
              );
            }}
          />
          <Table.Column
            title="Phone"
            dataIndex="phone"
            key="phone"
            width={154}
            defaultFilteredValue={getDefaultFilter(
              "phone",
              filters,
              "contains",
            )}
            filterIcon={<SearchOutlined />}
            filterDropdown={(props) => {
              return (
                <FilterDropdown {...props}>
                  <Input placeholder="Search Phone" />
                </FilterDropdown>
              );
            }}
          />
          <Table.Column
            title="Income"
            dataIndex="income"
            key="income"
            width={120}
            render={(_, record: IAccount) => {
              let total = 0;
              record.invoices?.forEach((invoice) => {
                total += invoice.total;
              });
              return (
                <NumberField
                  value={total}
                  options={{ style: "currency", currency: "USD" }}
                />
              );
            }}
          />
          <Table.Column
            title="Actions"
            key="actions"
            fixed="right"
            align="end"
            width={106}
            render={(_, record: IAccount) => {
              return (
                <Flex align="center" gap={8}>
                  <EditButton
                    hideText
                    recordItemId={record.id}
                    icon={<EyeOutlined />}
                  />
                  <DeleteButton hideText recordItemId={record.id} />
                </Flex>
              );
            }}
          />
        </Table>
      </List>
      {children}
    </>
  );
};
