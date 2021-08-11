import { useMemo, useState } from "react";
import {
    Typography,
    useApiUrl,
    useCustom,
    DatePicker,
    NumberField,
    useTranslate,
} from "@pankod/refine";
import { Line, LineConfig } from "@ant-design/charts";
import dayjs, { Dayjs } from "dayjs";

import { ISalesChart } from "interfaces";
import "./style.css";

export const DailyRevenue: React.FC = () => {
    const t = useTranslate();
    const API_URL = useApiUrl();

    const [dateRange, setDateRange] = useState<[Dayjs, Dayjs]>([
        dayjs().subtract(7, "days").startOf("day"),
        dayjs().startOf("day"),
    ]);
    const [start, end] = dateRange;

    const query = {
        start,
        end,
    };

    const url = `${API_URL}/dailyRevenue`;
    const { data, isLoading } = useCustom<{
        data: ISalesChart[];
        total: number;
        trend: number;
    }>(url, "get", {
        query,
    });


    const { Text } = Typography;
    const { RangePicker } = DatePicker;

    const config = useMemo(() => {
        const config: LineConfig = {
            data: data?.data.data || [],
            loading: isLoading,
            padding: "auto",
            xField: "date",
            yField: "value",
            tooltip: {
                showCrosshairs: false,
                marker: { fill: "#D94BF2" },
                customContent: (title, data) => {
                    return `<div style="padding: 8px 4px; font-size:16px; color:#fff !important; font-weight:600">${data[0]?.value} $</div>`;
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
            },
            yAxis: {
                label: null,
                grid: null,
            },
            smooth: true,
            lineStyle: {
                lineWidth: 4,
                stroke: "white",
            },
        };

        return config;
    }, [data]);

    return (
        <div style={{ height: 222 }}>
            <div className="title-area">
                <div className="amount">
                    <Text
                        style={{
                            fontWeight: 800,
                            fontSize: 24,
                        }}
                    >
                        {t("dashboard:dailyRevenue.title")}
                    </Text>
                    <div className="number">
                        <NumberField
                            style={{
                                fontSize: 36,
                                fontWeight: 900,
                            }}
                            options={{
                                currency: "USD",
                                style: "currency",
                                notation: "compact",
                            }}
                            value={data?.data.total ?? 0}
                        />
                        {(data?.data?.trend ?? 0) > 0 ? (
                            <img src="images/increase.svg" />
                        ) : (
                            <img src="images/decrease.svg" />
                        )}
                    </div>
                </div>

                <RangePicker
                    className="range-picker"
                    size="small"
                    value={dateRange}
                    onChange={(values) => {
                        if (values && values[0] && values[1]) {
                            setDateRange([values[0], values[1]]);
                        }
                    }}
                    style={{
                        float: "right",
                        color: "#fffff !important",
                        background: "rgba(255, 255, 255, 0.3)",
                    }}
                    ranges={{
                        "This Week": [
                            dayjs().startOf("week"),
                            dayjs().endOf("week"),
                        ],
                        "Last Month": [
                            dayjs().startOf("month").subtract(1, "month"),
                            dayjs().endOf("month").subtract(1, "month"),
                        ],
                        "This Month": [
                            dayjs().startOf("month"),
                            dayjs().endOf("month"),
                        ],
                        "This Year": [
                            dayjs().startOf("year"),
                            dayjs().endOf("year"),
                        ],
                    }}
                    format="YYYY/MM/DD"
                />
            </div>
            <Line padding={0} appendPadding={10} height={162} {...config} />
        </div>
    );
};
