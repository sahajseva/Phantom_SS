import React, { createElement, FC } from "react";
import { useParams } from "react-router-dom";
import { Card, CardProps, Col, Row, Space } from "antd";
import pluralize from "pluralize";

import { BaseRecord } from "@interfaces";
import { useOne } from "@hooks";
import { EditButton, DeleteButton, RefreshButton } from "@components";

export type ShowProps = CardProps & {
    resourceName: string;
    aside?: FC<{ record?: BaseRecord }>;
    component?: FC<{ record?: BaseRecord }>;
    canCreate?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
};

export const Show: React.FC<ShowProps> = ({
    resourceName,
    aside,
    component,
    canCreate,
    canEdit,
    canDelete,
    children,
    ...rest
}) => {
    const { id } = useParams<Record<string, string>>();

    const { data, isLoading } = useOne(resourceName, id);

    const record = data?.data;

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                resourceName,
                record,
            });
        }
        return child;
    });

    return (
        <Row gutter={[16, 16]}>
            <Col flex="1">
                {component ? (
                    React.createElement(
                        component,
                        {
                            record,
                        },
                        childrenWithProps,
                    )
                ) : (
                    <Card
                        title={`Show ${pluralize.singular(resourceName)}`}
                        loading={isLoading}
                        extra={
                            <Row>
                                <Space>
                                    {canEdit && (
                                        <EditButton
                                            resourceName={resourceName}
                                            recordItemId={id}
                                        />
                                    )}
                                    {canDelete && (
                                        <DeleteButton
                                            resourceName={resourceName}
                                            recordItemId={id}
                                        />
                                    )}
                                    <RefreshButton
                                        resourceName={resourceName}
                                        recordItemId={id}
                                    />
                                </Space>
                            </Row>
                        }
                        {...rest}
                    >
                        {childrenWithProps}
                    </Card>
                )}
            </Col>
            <Col>
                {aside &&
                    createElement(aside, {
                        record,
                    })}
            </Col>
        </Row>
    );
};

export { ShowSimple } from "./showSimple";
export { ShowTab, Tab } from "./showTab";
