import { Button, Flex, Form, FormItemProps, Input, Typography } from "antd";
import { PropsWithChildren, useState } from "react";
import { EditOutlined, EnterOutlined } from "@ant-design/icons";

import { useStyles } from "./styled";

type Props = {
  formItemProps?: FormItemProps;
  onEditClick?: () => void;
  onCancelClick?: () => void;
  onSave?: () => void;
};

export const FormItemEditableText = ({
  formItemProps,
  onEditClick,
  onCancelClick,
  onSave,
}: PropsWithChildren<Props>) => {
  const [disabled, setDisabled] = useState(true);

  const { styles, cx } = useStyles();
  const form = Form.useFormInstance();
  const fieldValue = Form.useWatch(formItemProps?.name, form);

  const handleEdit = () => {
    setDisabled(false);
    onEditClick?.();
  };

  const handleOnCancel = () => {
    setDisabled(true);
    form.resetFields([formItemProps?.name]);
    onCancelClick?.();
  };

  const handleOnSave = async () => {
    try {
      await form.validateFields();
      form.submit();
      setDisabled(true);
      onSave?.();
    } catch (error) {}
  };

  return (
    <Flex align="center" className={styles.container}>
      <Form.Item
        {...formItemProps}
        className={cx(styles.formItem, {
          [styles.formItemDisabled]: disabled,
          [styles.formItemEnabled]: !disabled,
        })}
        rules={disabled ? [] : formItemProps?.rules}
        label={null}
      >
        {disabled && (
          <Flex gap={16} align="center">
            <Typography.Title
              level={2}
              style={{
                marginBottom: "0",
              }}
            >
              {fieldValue}
            </Typography.Title>
            {disabled && (
              <Button
                style={{
                  width: "40px",
                  height: "40px",
                }}
                icon={<EditOutlined />}
                onClick={handleEdit}
              />
            )}
          </Flex>
        )}
        {!disabled && (
          <Input
            autoFocus
            style={{
              width: "100%",
            }}
            suffix={<EnterOutlined />}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnSave();
              }

              if (e.key === "Escape") {
                handleOnCancel();
              }
            }}
          />
        )}
      </Form.Item>
    </Flex>
  );
};
