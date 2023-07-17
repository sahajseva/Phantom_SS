/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("table-antd-use-table", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("should be view list page", () => {
        cy.resourceList();
    });

    it("should work with sorter", () => {
        cy.intercept(
            {
                url: "/posts*",
                query: {
                    _sort: "id",
                    _order: "asc",
                },
            },
            {
                fixture: "posts.json",
            },
        ).as("getAscPosts");

        cy.getAntdLoadingOverlay().should("not.exist", { timeout: 10000 });
        cy.getAntdColumnSorter(0).click();

        cy.url().should(
            "include",
            "sorters[0][field]=id&sorters[0][order]=asc",
        );

        cy.wait("@getAscPosts");

        cy.intercept(
            {
                url: "/posts*",
                query: {
                    _sort: "id",
                    _order: "desc",
                },
            },
            {
                fixture: "posts.json",
            },
        ).as("getDescPosts");

        cy.getAntdColumnSorter(0).click();

        cy.url().should(
            "include",
            "sorters[0][field]=id&sorters[0][order]=desc",
        );

        cy.wait("@getDescPosts");

        cy.interceptGETPosts();

        cy.getAntdColumnSorter(0).click();

        cy.url().should(
            "not.include",
            "sorters[0][field]=id&sorters[0][order]=desc",
        );

        cy.wait("@getPosts").then((interception) => {
            const { request } = interception;
            const { _sort, _order } = request.query;

            expect(_sort).to.undefined;
            expect(_order).to.undefined;
        });
    });

    it("should work with filter", () => {
        cy.getAntdFilterTrigger(0).click();

        cy.get(".ant-input").type("lorem");

        cy.intercept(
            {
                url: "/posts*",
                query: {
                    title_like: "lorem",
                },
            },
            {
                fixture: "posts.json",
            },
        ).as("getFilteredPosts");

        cy.get(".ant-btn-primary").click();

        cy.url().should(
            "include",
            `filters[2][field]=title&filters[2][operator]=contains&filters[2][value]=lorem`,
        );

        cy.wait("@getFilteredPosts");
    });

    it("should work with pagination", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        //clear category filters
        cy.getAntdFilterTrigger(1).click();
        cy.contains("Clear").click();
        cy.contains("Filter").click();

        //clear status filters
        cy.getAntdFilterTrigger(2).click();
        cy.get(".ant-btn-dangerous").eq(1).click();
        cy.get(".ant-btn-primary").eq(1).click();

        cy.intercept(
            {
                url: "/posts*",
                query: {
                    _start: "10",
                    _end: "20",
                },
            },
            {
                fixture: "posts.json",
            },
        ).as("getSecondPagePosts");

        cy.getAntdPaginationItem(2).click();

        cy.url().should("include", "current=2");

        cy.wait("@getSecondPagePosts");

        cy.intercept(
            {
                url: "/posts*",
                query: {
                    _start: "0",
                    _end: "10",
                },
            },
            {
                fixture: "posts.json",
            },
        ).as("getFirstPagePosts");

        cy.get(".ant-pagination-prev").first().click();

        cy.url().should("include", "current=1");

        cy.wait("@getFirstPagePosts");
    });

    it("should set current `1` when filter changed", () => {
        cy.getAntdLoadingOverlay().should("not.exist");

        //clear category filters
        cy.getAntdFilterTrigger(1).click();
        cy.contains("Clear").click();
        cy.contains("Filter").click();

        //clear status filters
        cy.getAntdFilterTrigger(2).click();
        cy.get(".ant-btn-dangerous").eq(1).click();
        cy.get(".ant-btn-primary").eq(1).click();

        cy.getAntdPaginationItem(2).click();

        cy.getAntdFilterTrigger(0).click();

        cy.get(".ant-input").type("lorem");

        cy.get(".ant-btn-primary").eq(2).click();

        cy.url().should("include", "current=1");
    });
});
