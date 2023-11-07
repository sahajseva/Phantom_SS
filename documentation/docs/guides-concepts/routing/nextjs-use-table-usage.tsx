import { SandpackNextJS } from "@site/src/components/sandpack";
import React from "react";

export default function NextJSRouteDefinitions() {
    return (
        <SandpackNextJS
            showFiles
            startRoute="/my-products?current=1&pageSize=2&sorters[0][field]=id&sorters[0][order]=asc&filters[0][field]=category.id&filters[0][operator]=eq&filters[0][value]=1"
            files={{
                "/pages/_app.tsx": {
                    code: AppTsxCode,
                },
                "/pages/my-products/index.tsx": {
                    code: ListPageTsxCode,
                    active: true,
                },
                "/components/products/list.tsx": {
                    code: ListTsxCode,
                },
            }}
        />
    );
}

const AppTsxCode = /* tsx */ `
import React from "react";

import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            resources={[
                {
                    name: "products",
                    list: "/my-products",
                },
            ]}
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default App;
`.trim();

const ListPageTsxCode = /* tsx */ `
import React from "react";

import { useTable } from "@refinedev/core";
import { parseTableParams } from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";

import { ProductList } from "../../components/products/list";

export const getServerSideProps = async (context) => {
    const { pagination, filters, sorters } = parseTableParams(
        context.resolvedUrl?.split("?")[1] ?? "",
    );

    const data = await dataProvider("https://api.fake-rest.refine.dev").getList(
        {
            resource: "products",
            filters,
            pagination,
            sorters,
        },
    );

    return {
        props: {
            initialData: data,
            initialProps: { pagination, filters, sorters },
        },
    };
};

const ProductListPage = (props) => {
    const {
        initialData,
        initialProps: { filters, sorters, pagination },
    } = props;

    const tableProps = useTable({
        queryOptions: { initialData },
        filters: { initial: filters },
        sorters: { initial: sorters },
        pagination,
    });

    return <ProductList tableProps={tableProps} />;
};

export default ProductListPage;
`.trim();

const ListTsxCode = `
import React from "react";

export const ProductList: React.FC = ({ tableProps }) => {
    const {
        tableQueryResult,
        isLoading,
        current,
        setCurrent,
        pageSize,
        pageCount,
        filters,
        setFilters,
        sorters,
        setSorters,
    } = tableProps;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h3>Products</h3>
            <table style={{ border: "1px solid black" }}>
                <thead>
                    <tr key="header">
                        <td>id</td>
                        <td>name</td>
                        <td>categoryId</td>
                    </tr>
                </thead>
                <tbody>
                    {tableQueryResult.data?.data?.map((record) => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.name}</td>
                            <td>{record.category.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            Sorting by field:
            <b>
                {sorters[0]?.field}, order {sorters[0]?.order}
            </b>
            <br />
            <button
                onClick={() => {
                    setSorters([
                        {
                            field: "id",
                            order: sorters[0]?.order === "asc" ? "desc" : "asc",
                        },
                    ]);
                }}
            >
                Toggle Sort
            </button>
            <hr />
            Filtering by field:
            <b>
                {filters[0]?.field}, operator {filters[0]?.operator}, value:{" "}
                {filters[0]?.value}
            </b>
            <br />
            <button
                onClick={() => {
                    setFilters([
                        {
                            field: "category.id",
                            operator: "eq",
                            value: filters[0]?.value === "1" ? "2" : "1",
                        },
                    ]);
                }}
            >
                Toggle Filter
            </button>
            <hr />
            <p>Current Page: {current}</p>
            <p>Page Size: {pageSize}</p>
            <button
                onClick={() => {
                    setCurrent(+current - 1);
                }}
                disabled={+current < 2}
            >
                Previous Page
            </button>
            <button
                onClick={() => {
                    setCurrent(+current + 1);
                }}
                disabled={current === pageCount}
            >
                Next Page
            </button>
        </div>
    );
};
`.trim();
