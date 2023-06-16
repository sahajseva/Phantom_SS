import React from "react";

import { Card, Space, Spin } from "antd";
import {
    useMutationMode,
    useNavigation,
    useTranslate,
    userFriendlyResourceName,
    useRefineContext,
    useRouterType,
    useBack,
    useResource,
    useGo,
    useToPath,
} from "@refinedev/core";

import {
    DeleteButton,
    RefreshButton,
    ListButton,
    SaveButton,
    Breadcrumb,
    PageHeader,
    ListButtonProps,
    RefreshButtonProps,
    DeleteButtonProps,
    SaveButtonProps,
} from "@components";
import { EditProps } from "../types";

/**
 * `<Edit>` provides us a layout for displaying the page.
 * It does not contain any logic but adds extra functionalities like a refresh button.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/basic-views/edit} for more details.
 */
export const Edit: React.FC<EditProps> = ({
    title,
    saveButtonProps: saveButtonPropsFromProps,
    mutationMode: mutationModeProp,
    recordItemId,
    children,
    deleteButtonProps: deleteButtonPropsFromProps,
    canDelete,
    resource: resourceFromProps,
    isLoading = false,
    dataProviderName,
    breadcrumb: breadcrumbFromProps,
    wrapperProps,
    headerProps,
    contentProps,
    headerButtonProps,
    headerButtons,
    footerButtonProps,
    footerButtons,
    goBack: goBackFromProps,
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();
    const { mutationMode: mutationModeContext } = useMutationMode();
    const mutationMode = mutationModeProp ?? mutationModeContext;

    const routerType = useRouterType();
    const back = useBack();
    const go = useGo();
    const { goBack, list: legacyGoList } = useNavigation();

    const {
        resource,
        action,
        id: idFromParams,
    } = useResource(resourceFromProps);
    const resourceIdentifierOrName = resource?.identifier ?? resource?.name;

    const goListPath = useToPath({
        resource,
        action: "list",
    });

    const id = recordItemId ?? idFromParams;

    const breadcrumb =
        typeof breadcrumbFromProps === "undefined"
            ? globalBreadcrumb
            : breadcrumbFromProps;

    const hasList = resource?.list && !recordItemId;
    const isDeleteButtonVisible =
        canDelete ??
        ((resource?.meta?.canDelete ?? resource?.canDelete) ||
            deleteButtonPropsFromProps);

    const listButtonProps: ListButtonProps | undefined = hasList
        ? {
              ...(isLoading ? { disabled: true } : {}),
              resource:
                  routerType === "legacy"
                      ? resource?.route
                      : resourceIdentifierOrName,
          }
        : undefined;

    const refreshButtonProps: RefreshButtonProps = {
        ...(isLoading ? { disabled: true } : {}),
        resource:
            routerType === "legacy"
                ? resource?.route
                : resourceIdentifierOrName,
        recordItemId: id,
        dataProviderName,
    };

    const deleteButtonProps: DeleteButtonProps | undefined =
        isDeleteButtonVisible
            ? {
                  ...(isLoading ? { disabled: true } : {}),
                  resource:
                      routerType === "legacy"
                          ? resource?.route
                          : resourceIdentifierOrName,
                  mutationMode,
                  onSuccess: () => {
                      if (routerType === "legacy") {
                          legacyGoList(resource?.route ?? resource?.name ?? "");
                      } else {
                          go({ to: goListPath });
                      }
                  },
                  recordItemId: id,
                  dataProviderName,
                  ...deleteButtonPropsFromProps,
              }
            : undefined;

    const saveButtonProps: SaveButtonProps = {
        ...(isLoading ? { disabled: true } : {}),
        ...saveButtonPropsFromProps,
    };

    const defaultHeaderButtons = (
        <>
            {hasList && <ListButton {...listButtonProps} />}
            <RefreshButton {...refreshButtonProps} />
        </>
    );

    const defaultFooterButtons = (
        <>
            {isDeleteButtonVisible && <DeleteButton {...deleteButtonProps} />}
            <SaveButton {...saveButtonProps} />
        </>
    );

    return (
        <div {...(wrapperProps ?? {})}>
            <PageHeader
                ghost={false}
                backIcon={goBackFromProps}
                onBack={
                    action !== "list" && typeof action !== "undefined"
                        ? routerType === "legacy"
                            ? goBack
                            : back
                        : undefined
                }
                title={
                    title ??
                    translate(
                        `${resourceIdentifierOrName}.titles.edit`,
                        `Edit ${userFriendlyResourceName(
                            resource?.meta?.label ??
                                resource?.options?.label ??
                                resource?.label ??
                                resourceIdentifierOrName,
                            "singular",
                        )}`,
                    )
                }
                extra={
                    <Space wrap {...(headerButtonProps ?? {})}>
                        {headerButtons
                            ? typeof headerButtons === "function"
                                ? headerButtons({
                                      defaultButtons: defaultHeaderButtons,
                                      listButtonProps,
                                      refreshButtonProps,
                                  })
                                : headerButtons
                            : defaultHeaderButtons}
                    </Space>
                }
                breadcrumb={
                    typeof breadcrumb !== "undefined" ? (
                        <>{breadcrumb}</> ?? undefined
                    ) : (
                        <Breadcrumb />
                    )
                }
                {...(headerProps ?? {})}
            >
                <Spin spinning={isLoading}>
                    <Card
                        bordered={false}
                        actions={[
                            <Space
                                key="footer-buttons"
                                wrap
                                style={{
                                    float: "right",
                                    marginRight: 24,
                                }}
                                {...(footerButtonProps ?? {})}
                            >
                                {footerButtons
                                    ? typeof footerButtons === "function"
                                        ? footerButtons({
                                              defaultButtons:
                                                  defaultFooterButtons,
                                              deleteButtonProps,
                                              saveButtonProps,
                                          })
                                        : footerButtons
                                    : defaultFooterButtons}
                            </Space>,
                        ]}
                        {...(contentProps ?? {})}
                    >
                        {children}
                    </Card>
                </Spin>
            </PageHeader>
        </div>
    );
};
