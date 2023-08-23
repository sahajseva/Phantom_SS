import { useOne } from "@refinedev/core";
import { Link, useParams } from "react-router-dom";
import { Avatar, Button, Space } from "antd";
import { EditOutlined, FilePdfOutlined, LeftOutlined } from "@ant-design/icons";
import { FullScreenLoading, QuotesFormModal, Text } from "../../../components";
import { Status } from "./status";
import { ProductServices } from "./product-services";
import { getNameInitials, getRandomColorFromString } from "../../../utilities";
import { Quote } from "../../../interfaces/graphql";

import styles from "./index.module.css";
import { useState } from "react";

export const QuotesShowPage = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);

    const params = useParams<{ id: string }>();

    const { data, isLoading } = useOne<Quote>({
        resource: "quotes",
        id: params.id,
        meta: {
            fields: [
                "id",
                "title",
                "status",
                "description",
                "subTotal",
                "total",
                "tax",
                {
                    items: [
                        "title",
                        "unitPrice",
                        "quantity",
                        "discount",
                        "totalPrice",
                    ],
                },
                {
                    company: ["id", "name", "country", "website"],
                },
                {
                    salesOwner: ["id", "name"],
                },
                {
                    contact: ["id", "name"],
                },
            ],
        },
    });

    if (isLoading || !data?.data) {
        return <FullScreenLoading />;
    }

    const { title, id, status, company, contact, salesOwner } =
        data?.data ?? {};

    return (
        <>
            <div className={styles.container}>
                <Link to="/quotes">
                    <Button icon={<LeftOutlined />}>Quotes</Button>
                </Link>
                <div className={styles.divider} />
                <div className={styles.title}>
                    <Text
                        size="xl"
                        style={{
                            fontWeight: 500,
                        }}
                    >
                        {title}
                    </Text>
                    <Space>
                        <Button type="primary" icon={<FilePdfOutlined />}>
                            Convert to PDF
                        </Button>
                        <Button
                            icon={<EditOutlined />}
                            onClick={() => setEditModalVisible(true)}
                        >
                            Edit
                        </Button>
                    </Space>
                </div>
                <Status
                    style={{
                        marginTop: "32px",
                    }}
                    id={id}
                    status={status}
                />
                <div className={styles.pdf}>
                    <div className={styles.pdfQuoteInfo}>
                        <div className={styles.companyInfo}>
                            <Avatar
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "64px",
                                    height: "64px",
                                    backgroundColor: getRandomColorFromString(
                                        company?.name ?? "",
                                    ),
                                }}
                            >
                                {getNameInitials({
                                    name: company?.name ?? "",
                                })}
                            </Avatar>
                            <div className={styles.company}>
                                <Text strong>{company.name}</Text>
                                <Text>{company.country}</Text>
                                <Text>{company.website}</Text>
                            </div>
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.user}>
                                <Text strong>Prepared by:</Text>
                                <Text>{salesOwner.name}</Text>
                            </div>
                            <div className={styles.user}>
                                <Text strong>Prepared for:</Text>
                                <Text>{contact.name}</Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divider} />
                    <ProductServices />
                    <div className={styles.divider} />
                </div>
            </div>
            {editModalVisible && (
                <QuotesFormModal
                    action={"edit"}
                    redirect={false}
                    onCancel={() => setEditModalVisible(false)}
                    onMutationSuccess={() => setEditModalVisible(false)}
                />
            )}
        </>
    );
};
