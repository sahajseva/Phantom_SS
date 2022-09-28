import React, { useCallback, useState } from "react";
import { GetManyResponse, useDeleteMany, useMany } from "@pankod/refine-core";
import {
    useForm,
    Button,
    Table,
    SaveButton,
    Group,
    useSelect,
    Select,
    TextInput,
    ActionIcon,
    Checkbox,
    EditButton,
    DeleteButton,
    List,
    ScrollArea,
    Pagination,
    Space,
    Menu,
    Box,
    Stack,
} from "@pankod/refine-mantine";
import {
    useTable,
    ColumnDef,
    flexRender,
    Row,
    Column,
} from "@pankod/refine-react-table";
import { RichTextEditor } from "@mantine/rte";
import {
    IconChevronDown,
    IconChevronRight,
    IconSelector,
    IconFilter,
    IconX,
    IconCheck,
} from "@tabler/icons";

import { IPost, ICategory } from "../../interfaces";

interface ColumnButtonProps {
    column: Column<any, any>;
}

const ColumnFilter: React.FC<ColumnButtonProps> = ({ column }) => {
    if (!column.getCanFilter()) {
        return null;
    }

    const [state, setState] = useState(null as null | { value: any });

    const open = () =>
        setState({
            value: column.getFilterValue(),
        });

    const close = () => setState(null);

    const change = (value: any) => setState({ value });

    const clear = () => {
        column.setFilterValue(undefined);
        close();
    };

    const save = () => {
        if (!state) return;
        column.setFilterValue(state.value);
        close();
    };

    return (
        <Menu
            opened={!!state}
            position="bottom"
            withArrow
            transition="scale-y"
            shadow="xl"
            onClose={close}
            width="256px"
            withinPortal
        >
            <Menu.Target>
                <ActionIcon
                    size="xs"
                    onClick={open}
                    variant={column.getIsFiltered() ? "light" : "transparent"}
                    color={column.getIsFiltered() ? "primary" : "gray"}
                >
                    <IconFilter size={16} />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                {!!state && (
                    <Stack p="xs" spacing="xs">
                        <TextInput
                            autoComplete="off"
                            value={state.value}
                            onChange={(e) => change(e.target.value)}
                        />

                        <Group position="right" spacing="xs" noWrap>
                            <ActionIcon
                                size="sm"
                                color="gray"
                                variant="outline"
                                onClick={clear}
                            >
                                <IconX />
                            </ActionIcon>
                            <ActionIcon
                                size="sm"
                                onClick={save}
                                color="primary"
                                variant="outline"
                            >
                                <IconCheck />
                            </ActionIcon>
                        </Group>
                    </Stack>
                )}
            </Menu.Dropdown>
        </Menu>
    );
};

const ColumnSorter: React.FC<ColumnButtonProps> = ({ column }) => {
    if (!column.getCanSort()) {
        return null;
    }

    const sorted = column.getIsSorted();

    return (
        <ActionIcon
            size="xs"
            onClick={column.getToggleSortingHandler()}
            style={{
                transition: "transform 0.25s",
                transform: `rotate(${sorted === "asc" ? "180" : "0"}deg)`,
            }}
            variant={sorted ? "light" : "transparent"}
            color={sorted ? "primary" : "gray"}
        >
            {sorted ? (
                <IconChevronDown size={16} />
            ) : (
                <IconSelector size={16} />
            )}
        </ActionIcon>
    );
};

export const PostList: React.FC = () => {
    const {
        refineCore: { id, setId },
        getInputProps,
        saveButtonProps,
    } = useForm<IPost>({
        refineCoreProps: {
            redirect: false,
            action: "edit",
        },
        initialValues: {
            title: "",
            category: {
                id: "",
            },
            content: "",
        },
    });

    const { mutate } = useDeleteMany<IPost>();

    const deleteSelectedItems = (ids: number[]) => {
        mutate(
            {
                resource: "posts",
                ids,
            },
            {
                onSuccess: () => {
                    resetRowSelection();
                },
            },
        );
    };

    const { selectProps: filterSelectProps } = useSelect<ICategory>({
        resource: "categories",
    });

    const columns = React.useMemo<ColumnDef<IPost>[]>(
        () => [
            {
                id: "selection",
                accessorKey: "id",
                enableSorting: false,
                enableColumnFilter: false,
                header: function render({ table }) {
                    return (
                        <Group noWrap>
                            <Checkbox
                                checked={table.getIsAllRowsSelected()}
                                indeterminate={table.getIsSomeRowsSelected()}
                                onChange={table.getToggleAllRowsSelectedHandler()}
                            />

                            {table.getIsSomeRowsSelected() && (
                                <Button
                                    size="xs"
                                    color="red"
                                    variant="outline"
                                    onClick={() =>
                                        deleteSelectedItems(
                                            table
                                                .getSelectedRowModel()
                                                .flatRows.map(
                                                    ({ original }) =>
                                                        original.id,
                                                ),
                                        )
                                    }
                                >
                                    Delete
                                </Button>
                            )}
                        </Group>
                    );
                },
                cell: function render({ row }) {
                    return (
                        <Group noWrap>
                            <Checkbox
                                checked={row.getIsSelected()}
                                indeterminate={row.getIsSomeSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                            <ActionIcon
                                size="xs"
                                onClick={() => row.toggleExpanded()}
                            >
                                {row.getIsExpanded() ? (
                                    <IconChevronDown />
                                ) : (
                                    <IconChevronRight />
                                )}
                            </ActionIcon>
                        </Group>
                    );
                },
            },
            {
                id: "id",
                header: "ID",
                accessorKey: "id",
            },
            {
                id: "title",
                header: "Title",
                accessorKey: "title",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
                id: "category.id",
                header: "Category",
                enableColumnFilter: false,
                accessorKey: "category.id",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        categoriesData: GetManyResponse<ICategory>;
                    };
                    const category = meta.categoriesData?.data.find(
                        (item) => item.id === getValue(),
                    );
                    return category?.title ?? "Loading...";
                },
                meta: {
                    filterElement: function render(props: any) {
                        return <Select {...filterSelectProps} {...props} />;
                    },
                    filterOperator: "eq",
                },
            },
            {
                id: "actions",
                header: "Actions",
                accessorKey: "id",
                enableColumnFilter: false,
                enableSorting: false,
                cell: function render({ getValue }) {
                    return (
                        <Group spacing="xs" noWrap>
                            <EditButton
                                size="xs"
                                hideText
                                onClick={() => {
                                    handleEditButtonClick(getValue() as number);
                                }}
                            />
                            <DeleteButton
                                size="xs"
                                hideText
                                recordItemId={getValue() as number}
                            >
                                Delete
                            </DeleteButton>
                        </Group>
                    );
                },
            },
        ],
        [filterSelectProps.data],
    );

    const {
        setOptions,
        getAllColumns,
        getHeaderGroups,
        getRowModel,
        resetRowSelection,
        refineCore: {
            tableQueryResult: { data: tableData },
            setCurrent,
            pageCount,
            current,
        },
    } = useTable<IPost>({
        columns,
        getRowId: (originalRow) => originalRow.id.toString(),
    });

    const categoryIds = tableData?.data?.map((item) => item.category.id) ?? [];
    const { data: categoriesData } = useMany<ICategory>({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });

    const { selectProps } = useSelect<ICategory>({
        resource: "categories",
        defaultValue: categoryIds,
    });

    setOptions((prev) => ({
        ...prev,
        meta: {
            ...prev.meta,
            categoriesData,
        },
    }));

    const handleEditButtonClick = (editId: number) => {
        setId(editId);
    };

    const renderEditRow = useCallback(
        (row: Row<IPost>) => {
            const { id, title, content } = row.original;

            return (
                <React.Fragment key={id}>
                    <tr>
                        <td>
                            <ActionIcon onClick={() => row.toggleExpanded()}>
                                {row.getIsExpanded() ? (
                                    <IconChevronDown />
                                ) : (
                                    <IconChevronRight />
                                )}
                            </ActionIcon>
                        </td>
                        <td>{id}</td>
                        <td>
                            <TextInput
                                defaultValue={title}
                                {...getInputProps("title")}
                            />
                        </td>
                        <td>
                            <Select
                                defaultValue={row.original.category.id}
                                {...getInputProps("category.id")}
                                {...selectProps}
                            />
                        </td>
                        <td>
                            <Group spacing={4} noWrap>
                                <SaveButton size="xs" {...saveButtonProps} />
                                <Button
                                    size="xs"
                                    variant="default"
                                    onClick={() => setId(undefined)}
                                >
                                    Cancel
                                </Button>
                            </Group>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={getAllColumns().length}>
                            <RichTextEditor
                                value={content}
                                {...getInputProps("content")}
                            />
                        </td>
                    </tr>
                </React.Fragment>
            );
        },
        [selectProps],
    );

    return (
        <ScrollArea>
            <List>
                <Table>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {!header.isPlaceholder && (
                                            <Group spacing="xs" noWrap>
                                                <Box>
                                                    {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )}
                                                </Box>
                                                <Group spacing="xs" noWrap>
                                                    <ColumnSorter
                                                        column={header.column}
                                                    />
                                                    <ColumnFilter
                                                        column={header.column}
                                                    />
                                                </Group>
                                            </Group>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => {
                            if (id === (row.original as IPost).id) {
                                return renderEditRow(row);
                            } else
                                return (
                                    <React.Fragment key={row.id}>
                                        <tr key={row.id}>
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => {
                                                    return (
                                                        <td key={cell.id}>
                                                            {flexRender(
                                                                cell.column
                                                                    .columnDef
                                                                    .cell,
                                                                cell.getContext(),
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                        </tr>

                                        {row.getIsExpanded() && (
                                            <tr>
                                                <td
                                                    colSpan={
                                                        row.getVisibleCells()
                                                            .length
                                                    }
                                                >
                                                    <RichTextEditor
                                                        readOnly
                                                        value={
                                                            row.original.content
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                );
                        })}
                    </tbody>
                </Table>
                <Space h={16} />
                <Pagination
                    position="right"
                    total={pageCount}
                    page={current}
                    onChange={setCurrent}
                />
            </List>
        </ScrollArea>
    );
};
