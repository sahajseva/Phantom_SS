import type { IResourceItem } from "@refinedev/core";

import {
    DashboardOutlined,
    CalendarOutlined,
    ProjectOutlined,
    ShopOutlined,
    TeamOutlined,
    ContainerOutlined,
    CrownOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
    {
        name: "dashboard",
        list: "/",
        meta: {
            label: "Dashboard",
            icon: <DashboardOutlined />,
        },
    },
    {
        name: "events",
        list: "/calendar",
        create: "/calendar/create",
        edit: "/calendar/edit/:id",
        show: "/calendar/show/:id",
        meta: {
            label: "Calendar",
            icon: <CalendarOutlined />,
        },
    },
    {
        name: "scrumboard",
        meta: {
            label: "Scrumboard",
            icon: <ProjectOutlined />,
        },
    },

    {
        name: "tasks",
        list: "/scrumboard/kanban",
        create: "/scrumboard/kanban/create",
        edit: "/scrumboard/kanban/edit/:id",
        meta: {
            label: "Project Kanban",
            parent: "scrumboard",
        },
    },
    {
        name: "stages",
        create: "/scrumboard/kanban/stages/create",
        edit: "/scrumboard/kanban/stages/edit/:id",
        list: "/scrumboard/kanban",
        meta: {
            hide: true,
        },
    },
    {
        name: "deals",
        list: "/scrumboard/sales",
        create: "/scrumboard/sales/create",
        edit: "/scrumboard/sales/edit/:id",
        meta: {
            label: "Sales Pipeline",
            parent: "scrumboard",
        },
    },
    {
        name: "stages",
        identifier: "deal-stages",
        create: "/scrumboard/sales/stages/create",
        edit: "/scrumboard/sales/stages/edit/:id",
        list: "/scrumboard/sales",
        meta: {
            hide: true,
        },
    },
    {
        name: "deals",
        identifier: "deals-2",
        edit: "/scrumboard/sales/details/edit/:id",
        list: "/scrumboard/sales",
        meta: {
            hide: true,
        },
    },
    {
        name: "companies",
        list: "/companies",
        show: "/companies/:id",
        meta: {
            label: "Companies",
            icon: <ShopOutlined />,
        },
    },
    {
        name: "companies",
        identifier: "sales-companies",
        create: "/scrumboard/sales/create/company/create",
        meta: {
            hide: true,
        },
    },
    {
        name: "contacts",
        list: "/contacts",
        create: "/contacts/create",
        edit: "/contacts/edit/:id",
        show: "/contacts/show/:id",
        meta: {
            label: "Contacts",
            icon: <TeamOutlined />,
        },
    },
    {
        name: "quotes",
        list: "/quotes",
        meta: {
            label: "Quotes",
            icon: <ContainerOutlined />,
        },
    },
    {
        name: "administration",
        meta: {
            label: "Administration",
            icon: <CrownOutlined />,
        },
    },
    {
        name: "settings",
        list: "/administration/settings",
        meta: {
            label: "Settings",
            parent: "administration",
        },
    },
    {
        name: "audits",
        list: "/administration/audit-log",
        meta: {
            label: "Audit Log",
            parent: "administration",
        },
    },
];
