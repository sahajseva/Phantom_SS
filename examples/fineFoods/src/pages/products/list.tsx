import {
    useTranslate,
    IResourceComponentsProps,
    useSimpleList,
    CrudFilters,
    Row,
    AntdList,
    Col,
    CreateButton,
    Form,
    Input,
    Icons,
    Typography,
    useDrawerForm,
    HttpError,
    getDefaultFilter,
} from "@pankod/refine";

const { Text } = Typography;
const { SearchOutlined } = Icons;

import {
    ProductItem,
    ProductCategoryFilter,
    CreateProduct,
    EditProduct,
} from "components/product";

import { IProduct } from "interfaces";

export const ProductList: React.FC<IResourceComponentsProps> = () => {
    const t = useTranslate();

    const { listProps, searchFormProps, filters } = useSimpleList<
        IProduct,
        HttpError,
        { name: string; categories: string[] }
    >({
        initialFilters: [
            {
                field: "name",
                operator: "contains",
                value: "barbacoa",
            },
        ],
        resource: "products",
        pagination: { pageSize: 12, defaultCurrent: 2 },
        onSearch: ({ name, categories }) => {
            const productFilters: CrudFilters = [];

            if (categories.length > 0) {
                productFilters.push({
                    field: "category.id",
                    operator: "in",
                    value: categories,
                });
            }

            if (name) {
                productFilters.push({
                    field: "name",
                    operator: "contains",
                    value: name,
                });
            }

            return productFilters;
        },
    });

    const {
        drawerProps: createDrawerProps,
        formProps: createFormProps,
        saveButtonProps: createSaveButtonProps,
        show: createShow,
    } = useDrawerForm<IProduct>({
        action: "create",
        resource: "products",
        redirect: false,
    });

    const {
        drawerProps: editDrawerProps,
        formProps: editFormProps,
        saveButtonProps: editSaveButtonProps,
        show: editShow,
    } = useDrawerForm<IProduct>({
        action: "edit",
        resource: "products",
        redirect: false,
    });

    console.log("products filters: ", filters);
    console.log("getdefa", getDefaultFilter("name", filters, "contains"));

    return (
        <>
            <Form
                {...searchFormProps}
                onValuesChange={(changedValues, values) => {
                    console.log(
                        "onValuesChange changedValues: ",
                        changedValues,
                    );
                    console.log("onValuesChange values: ", values);
                    searchFormProps.form?.submit();
                }}
                initialValues={{
                    name: getDefaultFilter("name", filters, "contains"),
                }}
            >
                <Row
                    gutter={[16, 16]}
                    style={{ background: "#fff", padding: "16px 24px" }}
                >
                    <Col xs={24} sm={18}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            <Text style={{ fontSize: "24px" }} strong>
                                {t("products.products")}
                            </Text>
                            <Form.Item name="name" noStyle>
                                <Input
                                    style={{
                                        width: "400px",
                                    }}
                                    placeholder={t("stores.productSearch")}
                                    suffix={<SearchOutlined />}
                                />
                            </Form.Item>
                            <CreateButton onClick={() => createShow()}>
                                {t("stores.buttons.addProduct")}
                            </CreateButton>
                        </div>
                        <AntdList
                            grid={{
                                gutter: 8,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 3,
                                xl: 4,
                                xxl: 4,
                            }}
                            style={{
                                height: "100%",
                                overflow: "auto",
                                paddingRight: "4px",
                            }}
                            {...listProps}
                            renderItem={(item) => (
                                <ProductItem item={item} editShow={editShow} />
                            )}
                        />
                    </Col>
                    <Col xs={0} sm={6}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "40px",
                                marginBottom: "16px",
                            }}
                        >
                            <Text style={{ fontWeight: 500 }}>
                                {t("stores.tagFilterDescription")}
                            </Text>
                        </div>
                        <Form.Item name="categories">
                            <ProductCategoryFilter />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <CreateProduct
                drawerProps={createDrawerProps}
                formProps={createFormProps}
                saveButtonProps={createSaveButtonProps}
            />
            <EditProduct
                drawerProps={editDrawerProps}
                formProps={editFormProps}
                saveButtonProps={editSaveButtonProps}
            />
        </>
    );
};
