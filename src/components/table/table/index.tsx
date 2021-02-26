import React, { useState } from "react";
import { Table as AntdTable, Button, Space } from "antd";
import {
    TablePaginationConfig,
    TableProps as AntdTableProps,
} from "antd/lib/table";
import { useHistory } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

import { Column, EditButton, DeleteButton } from "@components";
import { Filters, Sort } from "@interfaces";
import { useList } from "@hooks";
import {
    getDefaultSortOrder,
    getDefaultFilteredValue,
} from "@definitions/table";

export interface TableProps extends AntdTableProps<any> {
    resourceName?: string;
    canEdit?: boolean;
    canDelete?: boolean;
    canShow?: boolean;
}

export const Table: React.FC<TableProps> = ({
    resourceName,
    pagination,
    canEdit,
    canDelete,
    canShow,
    children,
    ...rest
}) => {
    const defaultCurrent = 1;
    const defaultPageSize = 10;

    const history = useHistory();

    if (!resourceName) {
        throw new Error(`resource not found!`);
    }

    const [current, setCurrent] = useState(
        (pagination && pagination.current) || defaultCurrent,
    );
    const [pageSize, setPageSize] = useState(
        (pagination && pagination.pageSize) || defaultPageSize,
    );

    const [sort, setSort] = useState<Sort>(getDefaultSortOrder(children));
    const [filters, setFilters] = useState<Filters>(
        getDefaultFilteredValue(children),
    );

    const { data, isFetching, refetch } = useList(resourceName, {
        pagination: { current, pageSize },
        filters,
        sort,
    });

    const onChange = (
        pagination: TablePaginationConfig,
        filters: Filters,
        sorter: Sort,
    ) => {
        const { current, pageSize } = pagination;
        setCurrent(current || defaultCurrent);
        setPageSize(pageSize || defaultPageSize);

        setFilters(filters);
        setSort(sorter);

        refetch();
    };

    const renderShowButton = (id: string | number) => (
        <Button
            onClick={(): void => {
                history.push(`/resources/${resourceName}/show/${id}`);
            }}
            type="default"
            size="small"
            icon={<EyeOutlined />}
        >
            Show
        </Button>
    );

    const renderActions = (): React.ReactNode => {
        if (canEdit || canDelete || canShow) {
            return (
                <Column
                    title="Actions"
                    dataIndex="actions"
                    key="actions"
                    render={(
                        _text: string | number,
                        record: {
                            id: string | number;
                        },
                    ): React.ReactNode => (
                        <Space>
                            {canEdit && <EditButton recordItemId={record.id} />}
                            {canDelete && (
                                <DeleteButton recordItemId={record.id} />
                            )}
                            {canShow && renderShowButton(record.id)}
                        </Space>
                    )}
                />
            );
        }

        return null;
    };

    return (
        <>
            <AntdTable
                style={{ width: "100%" }}
                dataSource={data?.data}
                loading={isFetching}
                pagination={{
                    ...pagination,
                    current,
                    pageSize,
                    total: data?.total,
                }}
                onChange={onChange}
                {...rest}
            >
                {children}
                {renderActions()}
            </AntdTable>
        </>
    );
};
