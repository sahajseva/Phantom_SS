import { useMemo } from "react";
import { Typography, useApiUrl, useCustom, useTranslate } from "@pankod/refine";
import { Column, ColumnConfig } from "@ant-design/charts";

import { ISalesChart } from "interfaces";
import "./style.css";

export const DailyOrders: React.FC = () => {
    const t = useTranslate();
    const API_URL = useApiUrl();

    const url = `${API_URL}/dailyOrders`;
    const { data, isLoading } = useCustom<{
        data: ISalesChart[];
        total: number;
        trend: number;
    }>(url, "get");

    const { Text } = Typography;

    const config = useMemo(() => {
        const config: ColumnConfig = {
            data: data?.data.data || [],
            loading: isLoading,
            padding: 0,
            xField: "date",
            yField: "value",
            maxColumnWidth: 16,
            columnStyle: {
                radius: [4, 4, 0, 0],
            },
            color: "rgba(255, 255, 255, 0.5)",
            tooltip: {
                showCrosshairs: false,
                marker: { fill: "#D94BF2" },
                customContent: (title, data) => {
                    return `<div style="padding: 8px 4px; font-size:16px; color:#fff !important; font-weight:600">${data[0]?.value}</div>`;
                },
                domStyles: {
                    "g2-tooltip": {
                        background: "rgba(255, 255, 255, 0.3)",
                        boxShadow: "unset",
                    },
                },
            },

            xAxis: {
                label: null,
                line: null,
                tickLine: null,
            },
            yAxis: {
                label: null,
                grid: null,
                tickLine: null,
            },
        };

        return config;
    }, [data]);

    return (
        <div className="daily-order-wrapper">
            <div className="title-area">
                <Typography.Title level={3}>
                    {t("dashboard:dailyOrders.title")}
                </Typography.Title>
                <div className="number">
                    <Typography.Text strong>
                        {data?.data.total ?? 0}{" "}
                    </Typography.Text>

                    {(data?.data?.trend ?? 0) > 0 ? (
                        <img src="images/increase.svg" alt="Increase" />
                    ) : (
                        <img src="images/decrease.svg" alt="Decrease" />
                    )}
                </div>
            </div>
            <Column
                style={{ padding: 0, height: 135 }}
                appendPadding={10}
                {...config}
            />
        </div>
    );
};
