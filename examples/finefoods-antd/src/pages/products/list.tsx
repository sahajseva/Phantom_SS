import { useGo, useNavigation, useTranslate } from "@refinedev/core";
import { CreateButton, List } from "@refinedev/antd";
import { ProductListCard, ProductListTable } from "../../components";
import { PropsWithChildren, useState } from "react";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Segmented } from "antd";
import { useLocation } from "react-router-dom";

type View = "list" | "card";

export const ProductList = ({ children }: PropsWithChildren) => {
    const go = useGo();
    const { pathname } = useLocation();
    const { createUrl } = useNavigation();

    const [view, setView] = useState<View>(
        (localStorage.getItem("product-view") as View) || "list",
    );
    const t = useTranslate();

    return (
        <List
            breadcrumb={false}
            headerButtons={(props) => [
                <Segmented<View>
                    key="view"
                    size="large"
                    value={view}
                    style={{ marginRight: 24 }}
                    options={[
                        {
                            label: "",
                            value: "list",
                            icon: <UnorderedListOutlined />,
                        },
                        {
                            label: "",
                            value: "card",
                            icon: <AppstoreOutlined />,
                        },
                    ]}
                    onChange={(value) => {
                        setView(value);
                        localStorage.setItem("product-view", value);
                    }}
                />,
                <CreateButton
                    {...props.createButtonProps}
                    key="create"
                    size="large"
                    onClick={() => {
                        return go({
                            to: `${createUrl("products")}`,
                            query: {
                                to: pathname,
                            },
                            options: {
                                keepQuery: true,
                            },
                            type: "replace",
                        });
                    }}
                >
                    {t("products.actions.add")}
                </CreateButton>,
            ]}
        >
            {view === "list" && <ProductListTable />}
            {view === "card" && <ProductListCard />}
            {children}
        </List>
    );
};
