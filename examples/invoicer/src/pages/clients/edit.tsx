import { useNavigation } from "@refinedev/core";
import {
  DateField,
  DeleteButton,
  NumberField,
  ShowButton,
  useForm,
  useSelect,
} from "@refinedev/antd";
import { Card, Divider, Flex, Form, Table, Typography } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  ExportOutlined,
  BankOutlined,
  MailOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { PageHeader } from "../../components/page-header";
import { FormItemEditableInputText } from "../../components/form/form-item-editable-input-text";
import { FormItemEditableText } from "../../components/form/form-item-editable-text";
import { FormItemEditableSelect } from "../../components/form/form-item-editable-select";
import { countryOptions } from "../../utils/countries";
import { IClient } from "../../interfaces";

export const ClientsPageEdit = () => {
  const { listUrl } = useNavigation();

  const { formProps, queryResult } = useForm({
    redirect: false,
    meta: {
      populate: ["account", "invoices.client"],
    },
  });

  const { selectProps: selectPropsAccount } = useSelect({
    resource: "accounts",
    optionLabel: "company_name",
    optionValue: "id",
  });

  const invoices = queryResult?.data?.data?.invoices || [];
  const isLoading = queryResult?.isLoading;

  return (
    <Form {...formProps} layout="vertical">
      <PageHeader
        backButtonText="Clients"
        backButtonHref={listUrl("clients")}
      />
      <Row>
        <Col span={24}>
          <Flex gap={16}>
            <FormItemEditableText
              formItemProps={{
                name: "name",
                rules: [{ required: true }],
              }}
            />
          </Flex>
        </Col>
      </Row>
      <Row
        gutter={32}
        style={{
          marginTop: "32px",
        }}
      >
        <Col xs={{ span: 24 }} xl={{ span: 8 }}>
          <Card
            styles={{ body: { padding: 0 } }}
            title={
              <Flex gap={12} align="center">
                <ShopOutlined />
                <Typography.Text>Client info</Typography.Text>
              </Flex>
            }
          >
            <FormItemEditableSelect
              icon={<BankOutlined />}
              editIcon={<ExportOutlined />}
              selectProps={{
                showSearch: true,
                placeholder: "Select account",
                ...selectPropsAccount,
              }}
              formItemProps={{
                name: "account",
                getValueProps: (value) => {
                  return {
                    value: value?.id,
                    label: value?.company_name,
                  };
                },
                label: "Account",
                rules: [{ required: true }],
              }}
            />
            <FormItemEditableInputText
              icon={<UserOutlined />}
              placeholder="Add owner name"
              formItemProps={{
                name: "owner_name",
                label: "Owner name",
                rules: [{ required: true }],
              }}
            />
            <Divider style={{ margin: 0 }} />
            <FormItemEditableInputText
              icon={<MailOutlined />}
              placeholder="Add email"
              formItemProps={{
                name: "owner_email",
                label: "Owner email",
                rules: [{ required: true, type: "email" }],
              }}
            />
            <Divider style={{ margin: 0 }} />
            <FormItemEditableSelect
              icon={<GlobalOutlined />}
              selectProps={{
                showSearch: true,
                placeholder: "Select country",
                options: countryOptions,
              }}
              formItemProps={{
                name: "country",
                label: "Country",
                rules: [{ required: true }],
              }}
            />
            <Divider style={{ margin: 0 }} />
            <FormItemEditableInputText
              icon={<EnvironmentOutlined />}
              placeholder="Add address"
              formItemProps={{
                name: "address",
                label: "Address",
                rules: [{ required: true }],
              }}
            />
            <Divider style={{ margin: 0 }} />
            <FormItemEditableInputText
              icon={<PhoneOutlined />}
              placeholder="Add phone number"
              formItemProps={{
                name: "phone",
                label: "Phone",
                rules: [{ required: true }],
              }}
            />
          </Card>
          <DeleteButton
            type="text"
            style={{
              marginTop: "16px",
            }}
            onSuccess={() => {
              listUrl("clients");
            }}
          >
            Delete client
          </DeleteButton>
        </Col>

        <Col xs={{ span: 24 }} xl={{ span: 16 }}>
          <Card
            title={
              <Flex gap={12} align="center">
                <ContainerOutlined />
                <Typography.Text>Invoices</Typography.Text>
              </Flex>
            }
            styles={{
              header: {
                padding: "0 16px",
              },
              body: {
                padding: 0,
              },
            }}
          >
            <Table dataSource={invoices} pagination={false} loading={isLoading}>
              <Table.Column title="ID" dataIndex="id" key="id" width={72} />
              <Table.Column
                title="Date"
                dataIndex="date"
                key="date"
                render={(date) => (
                  <DateField value={date} format="D MMM YYYY" />
                )}
              />
              <Table.Column
                title="Client"
                dataIndex="client"
                key="client"
                render={(client) => client?.name}
              />
              <Table.Column
                title="Amount"
                dataIndex="total"
                key="total"
                render={(total) => (
                  <NumberField
                    value={total}
                    options={{ style: "currency", currency: "USD" }}
                  />
                )}
              />
              <Table.Column
                key="actions"
                width={64}
                render={(_, record: IClient) => {
                  return (
                    <ShowButton
                      hideText
                      resource="invoices"
                      recordItemId={record.id}
                      icon={<ExportOutlined />}
                    />
                  );
                }}
              />
            </Table>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
