import { Sandpack } from "@site/src/components/sandpack";
import React from "react";

export default function Pagination() {
  return (
    <Sandpack
      dependencies={{
        "@refinedev/core": "latest",
        "@refinedev/simple-rest": "latest",
      }}
      startRoute="/"
      files={{
        "/App.tsx": {
          code: AppTsxCode,
          hidden: false,
        },
        "/product-table.tsx": {
          code: ProductTableTsxCode,
          hidden: false,
          active: true,
        },
      }}
    />
  );
}

const AppTsxCode = `
import React from "react";
import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import { ProductTable } from "./product-table.tsx";

const API_URL = "https://api.fake-rest.refine.dev";

export default function App() {
    return (
        <Refine dataProvider={dataProvider(API_URL)}>
            <ProductTable />
        </Refine>
    );
}

`.trim();

export const ProductTableTsxCode = `
import React from "react";
import { useTable } from "@refinedev/core";

export const ProductTable: React.FC = () => {
  const { tableQueryResult, pageCount, pageSize, current, setCurrent } = useTable<IProduct>({
    resource: "products",
    pagination: {
        current: 1, 
        pageSize: 10,
        mode: "server", // "client" or "server"
    },
  });
  const posts = tableQueryResult?.data?.data ?? [];

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p>Current Page: {current}</p>
      <p>Page Size: {pageSize}</p>
      <button
        onClick={() => {
          setCurrent(current - 1);
        }}
        disabled={current < 2}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setCurrent(current + 1);
        }}
        disabled={current === pageCount}
      >
        Next Page
      </button>
    </div>
  );
};

interface IProduct {
    id: number;
    name: string;
    price: string;
}
`.trim();
