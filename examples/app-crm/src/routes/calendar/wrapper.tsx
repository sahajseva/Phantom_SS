import React from "react";
import { Col, Row, App } from "antd";
import { CreateButton } from "@refinedev/antd";
import { useNavigate } from "react-router-dom";
import { useGetToPath } from "@refinedev/core";

import { CalendarUpcomingEvents } from "../../components/calender/upcoming-events";
import { CalendarCategories } from "../../components/calender/categories";
import { Calendar } from "../../components/calender/calendar";

type Props = React.PropsWithChildren<{}>;

export const CalendarPageWrapper = ({ children }: Props) => {
    const navigate = useNavigate();
    const getToPath = useGetToPath();
    const [selectedEventCategory, setSelectedEventCategory] = React.useState<
        string[]
    >([]);

    return (
        <App>
            <Row gutter={[32, 32]}>
                <Col span={6}>
                    <CreateButton
                        block
                        size="large"
                        style={{ marginBottom: "1rem" }}
                    >
                        Create event
                    </CreateButton>

                    <CalendarUpcomingEvents
                        limit={3}
                        style={{ marginBottom: "1rem" }}
                    />

                    <CalendarCategories
                        onChange={(event) => {
                            setSelectedEventCategory((prev) => {
                                if (prev.includes(event.target.value)) {
                                    return prev.filter(
                                        (item) => item !== event.target.value,
                                    );
                                }

                                return [...prev, event.target.value];
                            });
                        }}
                    />
                </Col>
                <Col span={18}>
                    <Calendar
                        onClickEvent={({ id }) => {
                            navigate(
                                getToPath({
                                    action: "show",
                                    meta: {
                                        id,
                                    },
                                }) ?? "",
                                {
                                    replace: true,
                                },
                            );
                        }}
                        categoryId={selectedEventCategory}
                    />
                    {children}
                </Col>
            </Row>
        </App>
    );
};
