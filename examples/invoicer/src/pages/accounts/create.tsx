import { useRef, useState } from "react";
import { useGo } from "@refinedev/core";
import { useForm } from "@refinedev/antd";
import { Button, Flex, Form, Input, Select, Upload, theme } from "antd";
import InputMask from "react-input-mask";
import { CloudUploadOutlined, PictureOutlined } from "@ant-design/icons";
import { getValueProps, mediaUploadMapper } from "@refinedev/strapi-v4";
import { ModalForm } from "../../components/modal/form";
import { countryOptions } from "../../utils/countries";
import { API_URL, TOKEN_KEY } from "../../utils/constants";
import { IAccount } from "../../interfaces";
import { AccountLogoUpload } from "../../components/account-logo-upload";

export const AccountsPageCreate = () => {
  const imageUrl = useRef<string | undefined>();
  const { token } = theme.useToken();

  const go = useGo();

  const { formProps } = useForm<IAccount>();

  return (
    <ModalForm
      formId="create-account-form"
      title="Add new account"
      open
      onCancel={() => {
        go({
          to: { resource: "accounts", action: "list" },
          options: { keepQuery: true },
        });
      }}
    >
      <Form
        layout="vertical"
        id="create-account-form"
        {...formProps}
        onFinish={(values) => {
          formProps.onFinish?.(mediaUploadMapper(values));
        }}
      >
        <Flex gap={40}>
          <Form.Item
            name="cover"
            valuePropName="fileList"
            getValueProps={(data) => getValueProps(data, API_URL)}
          >
            <AccountLogoUpload
              onUpload={(url) => {
                imageUrl.current = url;
              }}
            />
          </Form.Item>
          <Flex
            vertical
            style={{
              width: "420px",
            }}
          >
            <Form.Item
              name="company_name"
              label="Company Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="owner_name"
              label="Owner Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="owner_email"
              label="Owner email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Select options={countryOptions} />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <InputMask mask="(999) 999-9999">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {(props: InputProps) => (
                  <Input {...props} placeholder="Please enter phone number" />
                )}
              </InputMask>
            </Form.Item>
          </Flex>
        </Flex>
      </Form>
    </ModalForm>
  );
};
