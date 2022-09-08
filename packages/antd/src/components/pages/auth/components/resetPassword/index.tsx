import React from "react";
import { RefineResetPasswordPageProps } from "@pankod/refine-ui-types";
import { Row, Col, Layout, Card, Typography, Form, Input, Button } from "antd";
import {
    useTranslate,
    useRouterContext,
    useResetPassword,
} from "@pankod/refine-core";

import { layoutStyles, containerStyles, titleStyles } from "../styles";

const { Text, Title } = Typography;
interface IResestPasswordForm {
    email: string;
}

export const ResetPasswordPage: React.FC<RefineResetPasswordPageProps> = ({
    submitButton,
    loginLink,
}) => {
    const [form] = Form.useForm<IResestPasswordForm>();
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const { mutate: resetPassword, isLoading } =
        useResetPassword<IResestPasswordForm>();

    const CardTitle = (
        <Title level={3} style={titleStyles}>
            {translate("pages.resetPassword.title", "Forgot your password?")}
        </Title>
    );

    return (
        <Layout style={layoutStyles}>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    <div style={containerStyles}>
                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form<IResestPasswordForm>
                                layout="vertical"
                                form={form}
                                onFinish={(values) => {
                                    resetPassword(values);
                                }}
                                requiredMark={false}
                            >
                                <Form.Item
                                    name="email"
                                    label={translate(
                                        "pages.resetPassword.fields.email",
                                        "Email",
                                    )}
                                    rules={[{ required: true }]}
                                >
                                    <Input
                                        size="large"
                                        placeholder={translate(
                                            "pages.resetPassword.fields.email",
                                            "Email",
                                        )}
                                    />
                                </Form.Item>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: "12px",
                                    }}
                                >
                                    {loginLink ?? (
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                marginLeft: "auto",
                                            }}
                                        >
                                            {translate(
                                                "pages.register.buttons.haveAccount",
                                                "Have an account? ",
                                            )}{" "}
                                            <Link
                                                style={{
                                                    fontWeight: "bold",
                                                }}
                                                to="/login"
                                            >
                                                {translate(
                                                    "pages.login.signin",
                                                    "Sign in",
                                                )}
                                            </Link>
                                        </Text>
                                    )}
                                </div>

                                {submitButton ?? (
                                    <Button
                                        type="primary"
                                        size="large"
                                        htmlType="submit"
                                        loading={isLoading}
                                        block
                                    >
                                        {translate(
                                            "pages.resetPassword.buttons.submit",
                                            "Send",
                                        )}
                                    </Button>
                                )}
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};
