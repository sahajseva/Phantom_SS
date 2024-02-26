import React from "react";
import { useSandpack } from "@codesandbox/sandpack-react";

import { TutorialSandpack } from "@site/src/refine-theme/tutorial-sandpack";
import { TutorialUpdateFileButton } from "@site/src/refine-theme/tutorial-update-file-button";

import { finalFiles as initialFiles } from "@site/tutorial/ui-libraries/layout/material-ui/react-router/sandpack";
import { dependencies } from "@site/tutorial/ui-libraries/intro/material-ui/react-router/sandpack";
import { removeActiveFromFiles } from "@site/src/utils/remove-active-from-files";

export const Sandpack = ({ children }: { children: React.ReactNode }) => {
  return (
    <TutorialSandpack
      showNavigator
      dependencies={dependencies}
      files={files}
      finalFiles={finalFiles}
    >
      {children}
    </TutorialSandpack>
  );
};

// updates

const ListProductsTsx = /* tsx */ `
import React from "react";
import { useMany } from "@refinedev/core";
import { useDataGrid, EditButton, ShowButton } from "@refinedev/mui";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const ListProducts = () => {
  const { dataGridProps } = useDataGrid<IProduct>({
    sorters: { initial: [{ field: "id", order: "asc" }] },
    syncWithLocation: true,
  });

  const { data: categories, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: dataGridProps?.rows?.map((product) => product.category?.id) ?? [],
  });

  const columns = React.useMemo<GridColDef<IProduct>[]>(() => [
    {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
    },
    {
        field: "name",
        headerName: "Name",
        minWidth: 400,
        flex: 1,
    },
    {
        field: "category.id",
        headerName: "Category",
        minWidth: 250,
        flex: 0.5,
        renderCell: function render({ row }) {
            if (isLoading) {
                return "Loading...";
            }

            return categories?.data?.find(
                (category) => category.id == row.category.id
            )?.title;
        },
    },
    {
        field: "material",
        headerName: "Material",
        minWidth: 120,
        flex: 0.3,
    },
    {
        field: "price",
        headerName: "Price",
        minWidth: 120,
        flex: 0.3,
    },
    {
        field: "actions",
        headerName: "Actions",
        renderCell: function render({ row }) {
            return (
                <div>
                    <EditButton hideText recordItemId={row.id} />
                    <ShowButton hideText recordItemId={row.id} />
                </div>
            );
        },
    },
  ], [categories, isLoading]);

  return (
    <div>
      <h1>Products</h1>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </div>
  );
};

interface IProduct {
    id: number;
    name: string;
    material: string;
    price: string;
    category: ICategory;
}

interface ICategory {
    id: number;
    title: string;
}
`.trim();

const ListProductsWithFilters = /* tsx */ `
import React from "react";
import { useSelect } from "@refinedev/core";
import { useDataGrid, EditButton, ShowButton } from "@refinedev/mui";

import { DataGrid, GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";

export const ListProducts = () => {
  const { dataGridProps } = useDataGrid<IProduct>({
    sorters: { initial: [{ field: "id", order: "asc" }] },
    syncWithLocation: true,
  });

  const { options: categories, queryResult: { isLoading } } = useSelect<ICategory>({
    resource: "categories",
    pagination: false,
  });

  const columns = React.useMemo<GridColDef<IProduct>[]>(() => [
    {
        field: "id",
        headerName: "ID",
        type: "number",
        width: 50,
    },
    {
        field: "name",
        headerName: "Name",
        minWidth: 400,
        flex: 1,
    },
    {
        field: "category.id",
        headerName: "Category",
        minWidth: 250,
        flex: 0.5,
        type: "singleSelect",
        valueOptions: categories,
        valueFormatter: (params) => params.value,
        renderCell: function render({ row }) {
            if (isLoading) {
                return "Loading...";
            }

            return categories?.find(
                (category) => category.value == row.category.id
            )?.label;
        },
    },
    {
        field: "material",
        headerName: "Material",
        minWidth: 120,
        flex: 0.3,
    },
    {
        field: "price",
        headerName: "Price",
        minWidth: 120,
        flex: 0.3,
    },
    {
        field: "actions",
        headerName: "Actions",
        renderCell: function render({ row }) {
            return (
                <div>
                    <EditButton hideText recordItemId={row.id} />
                    <ShowButton hideText recordItemId={row.id} />
                </div>
            );
        },
    },
  ], [categories, isLoading]);

  return (
    <div>
      <h1>Products</h1>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </div>
  );
};

interface IProduct {
    id: number;
    name: string;
    material: string;
    price: string;
    category: ICategory;
}

interface ICategory {
    id: number;
    title: string;
}
`.trim();

const ShowProductTsx = /* tsx */ `
import { useShow, useOne } from "@refinedev/core";
import {
  TextFieldComponent as TextField,
  NumberField,
  MarkdownField,
} from "@refinedev/mui";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const ShowProduct = () => {
  const {
    queryResult: { data, isLoading },
  } = useShow();

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: data?.data?.category.id || "",
    queryOptions: {
      enabled: !!data?.data,
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack gap={1}>
      <Typography variant="body1" fontWeight="bold">
        Id
      </Typography>
      <TextField value={data?.data?.id} />

      <Typography variant="body1" fontWeight="bold">
        Name
      </Typography>
      <TextField value={data?.data?.name} />

      <Typography variant="body1" fontWeight="bold">
        Description
      </Typography>
      <MarkdownField value={data?.data?.description} />

      <Typography variant="body1" fontWeight="bold">
        Material
      </Typography>
      <TextField value={data?.data?.material} />

      <Typography variant="body1" fontWeight="bold">
        Category
      </Typography>
      <TextField
        value={categoryIsLoading ? "Loading..." : categoryData?.data?.title}
      />

      <Typography variant="body1" fontWeight="bold">
        Price
      </Typography>
      <NumberField value={data?.data?.price} />
    </Stack>
  );
};
`.trim();

const CreateProductTsx = /* tsx */ `
import { useForm } from "@refinedev/react-hook-form";
import { useAutocomplete, SaveButton } from "@refinedev/mui";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { Controller } from "react-hook-form";

export const CreateProduct = () => {
  const {
    register,
    control,
    saveButtonProps,
    formState: { errors }
  } = useForm();

  const { autocompleteProps } = useAutocomplete({
    resource: "categories",
  });

  return (
    <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
        <TextField
            {...register("name")}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
        />
        <TextField
            {...register("description")}
            multiline
            label="Description"
            error={!!errors.description}
            helperText={errors.description?.message}
        />
        <TextField
            {...register("material")}
            label="Material"
            error={!!errors.material}
            helperText={errors.material?.message}
        />
        <Controller
            control={control}
            name="category"
            defaultValue={null}
            render={({ field }) => (
                <Autocomplete
                    id="category"
                    {...autocompleteProps}
                    {...field}
                    onChange={(_, value) => field.onChange(value)}
                    getOptionLabel={(item) => {
                        return autocompleteProps?.options?.find((option) => option?.id == item?.id)?.title ?? "";
                    }}
                    isOptionEqualToValue={(option, value) => {
                        return value === undefined || option?.id == (value?.id ?? value)
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Category"
                            variant="outlined"
                            margin="normal"
                            error={!!errors.category}
                            helperText={errors.category?.message}
                        />
                    )}
                />
            )}
        />
        <TextField
            {...register("price")}
            label="Price"
            error={!!errors.price}
            helperText={errors.price?.message}
        />
        <SaveButton {...saveButtonProps} />
    </Box>
  );
};
`.trim();

const EditProductTsx = /* tsx */ `
import { useForm } from "@refinedev/react-hook-form";
import { useAutocomplete, SaveButton } from "@refinedev/mui";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { Controller } from "react-hook-form";

export const EditProduct = () => {
  const {
    register,
    control,
    saveButtonProps,
    refineCore: { queryResult },
    formState: { errors }
  } = useForm();

  const { autocompleteProps } = useAutocomplete({
    resource: "categories",
    defaultValue: queryResult?.data?.data?.category?.id,
  });

  return (
    <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        autoComplete="off"
    >
        <TextField
            {...register("name")}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
        />
        <TextField
            {...register("description")}
            multiline
            label="Description"
            error={!!errors.description}
            helperText={errors.description?.message}
        />
        <TextField
            {...register("material")}
            label="Material"
            error={!!errors.material}
            helperText={errors.material?.message}
        />
        <Controller
            control={control}
            name="category"
            defaultValue={null}
            render={({ field }) => (
                <Autocomplete
                    id="category"
                    {...autocompleteProps}
                    {...field}
                    onChange={(_, value) => field.onChange(value)}
                    getOptionLabel={(item) => {
                        return autocompleteProps?.options?.find((option) => option?.id == item?.id)?.title ?? "";
                    }}
                    isOptionEqualToValue={(option, value) => {
                        return value === undefined || option?.id == (value?.id ?? value)
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Category"
                            variant="outlined"
                            margin="normal"
                            error={!!errors.category}
                            helperText={errors.category?.message}
                        />
                    )}
                />
            )}
        />
        <TextField
            {...register("price")}
            label="Price"
            error={!!errors.price}
            helperText={errors.price?.message}
        />
        <SaveButton {...saveButtonProps} />
    </Box>
  );
};
`.trim();

// actions

export const RefactorTableInListProducts = () => {
  const { sandpack } = useSandpack();

  return (
    <TutorialUpdateFileButton
      onClick={() => {
        sandpack.updateFile("src/pages/products/list.tsx", ListProductsTsx);
        sandpack.setActiveFile("/src/pages/products/list.tsx");
      }}
    />
  );
};

export const AddFiltersInListProducts = () => {
  const { sandpack } = useSandpack();

  return (
    <TutorialUpdateFileButton
      onClick={() => {
        sandpack.updateFile(
          "src/pages/products/list.tsx",
          ListProductsWithFilters,
        );
        sandpack.setActiveFile("/src/pages/products/list.tsx");
      }}
    />
  );
};

export const RefactorFormInEditProduct = () => {
  const { sandpack } = useSandpack();

  return (
    <TutorialUpdateFileButton
      onClick={() => {
        sandpack.updateFile("src/pages/products/edit.tsx", EditProductTsx);
        sandpack.setActiveFile("/src/pages/products/edit.tsx");
      }}
    />
  );
};

export const RefactorFormInCreateProduct = () => {
  const { sandpack } = useSandpack();

  return (
    <TutorialUpdateFileButton
      onClick={() => {
        sandpack.updateFile("src/pages/products/create.tsx", CreateProductTsx);
        sandpack.setActiveFile("/src/pages/products/create.tsx");
      }}
    />
  );
};

export const RefactorFieldsInShowProduct = () => {
  const { sandpack } = useSandpack();

  return (
    <TutorialUpdateFileButton
      onClick={() => {
        sandpack.updateFile("src/pages/products/show.tsx", ShowProductTsx);
        sandpack.setActiveFile("/src/pages/products/show.tsx");
      }}
    />
  );
};

// files

export const files = {
  ...initialFiles,
  "styles.css": {
    code: "",
    hidden: true,
  },
};

export const finalFiles = {
  ...removeActiveFromFiles(files),
  "src/pages/products/list.tsx": {
    code: ListProductsWithFilters,
    active: true,
  },
  "src/pages/products/show.tsx": {
    code: ShowProductTsx,
  },
  "src/pages/products/create.tsx": {
    code: CreateProductTsx,
  },
  "src/pages/products/edit.tsx": {
    code: EditProductTsx,
  },
};
