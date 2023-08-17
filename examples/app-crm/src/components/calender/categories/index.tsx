import React from "react";
import { Button, Card, theme, CardProps, Checkbox } from "antd";
import { useList } from "@refinedev/core";
import { SettingOutlined, FlagOutlined } from "@ant-design/icons";

import { Text } from "../../text";

import { EventCategory } from "../../../interfaces/graphql";
import styles from "./index.module.css";

type CalendarCategoriesProps = {
    onChange?: (e: any) => void;
} & CardProps;

export const CalendarCategories: React.FC<CalendarCategoriesProps> = ({
    onChange,
    ...rest
}) => {
    const { token } = theme.useToken();
    const { data, isError, isLoading } = useList<EventCategory>({
        resource: "eventCategories",
        meta: {
            operation: "eventCategories",
            fields: ["id", "title"],
        },
    });

    if (isError) {
        // TODO: handle error message
        return null;
    }

    if (isLoading) {
        // TODO: handle loading state (skeleton)
        return null;
    }

    return (
        <Card
            title={
                <span>
                    <FlagOutlined style={{ color: token.colorPrimary }} />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        Categories
                    </Text>
                </span>
            }
            extra={<Button shape="circle" icon={<SettingOutlined />} />}
            bodyStyle={{
                padding: "0.5rem 1rem",
            }}
            {...rest}
        >
            <div className={styles.container}>
                {data.data.map((item) => (
                    <div key={item.id} className={styles.category}>
                        <Checkbox
                            className={styles.checkbox}
                            value={item.id}
                            onChange={onChange}
                        >
                            <Text>{item.title}</Text>
                        </Checkbox>
                    </div>
                ))}
            </div>
        </Card>
    );
};
