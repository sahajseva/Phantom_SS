/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-material-ui-use-modal-form", () => {
    const BASE_URL = "http://localhost:3000";

    const mockPost = {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        status: "published",
    };

    const fillForm = () => {
        cy.get("#title").clear();
        cy.get("#title").type(mockPost.title);
        cy.get("#content").clear();
        cy.get("#content").type(mockPost.content);
        cy.get("#status").click();
        cy.get("#status-option-0").click();
        cy.get("#category").click();
        cy.get("#category-option-0").click();
    };

    const assertSuccessResponse = (response: any) => {
        const body = response?.body;

        expect(response?.statusCode).to.eq(200);
        expect(body).to.have.property("id");
        expect(body).to.have.property("category");
        expect(body?.title).to.eq(mockPost.title);
        expect(body?.content).to.eq(mockPost.content);
        expect(body?.status?.toLowerCase()).to.eq(
            mockPost?.status?.toLowerCase(),
        );

        isDrawerClosed();
        cy.getMaterialUINotification().contains(/success/i);
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq("/posts");
        });
    };

    const submitForm = () => {
        return cy.getSaveButton().click();
    };

    const closeDrawer = () => {
        return cy
            .get(".MuiCardHeader-action > .MuiButtonBase-root > svg")
            .click();
    };

    const isDrawerOpen = () => {
        return cy.get(".MuiDrawer-paperAnchorRight").should("be.visible");
    };

    const isDrawerClosed = () => {
        return cy.get(".MuiDrawer-paperAnchorRight").should("not.exist");
    };

    beforeEach(() => {
        cy.interceptGETPost();
        cy.interceptPOSTPost();
        cy.interceptPATCHPost();
        cy.interceptDELETEPost();
        cy.interceptGETPosts();
        cy.interceptGETCategories();

        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        cy.visit(BASE_URL);
    });

    it("open - close modal", () => {
        isDrawerClosed();

        cy.getCreateButton().click();
        isDrawerOpen();

        closeDrawer();
        isDrawerClosed();
    });

    it("should create record", () => {
        cy.getCreateButton().click();
        isDrawerOpen();

        fillForm();
        submitForm();

        cy.wait("@postPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should edit record", () => {
        cy.getEditButton().first().click();
        isDrawerOpen();

        // wait loading state and render to be finished
        cy.wait("@getPost");
        cy.getSaveButton().should("not.be.disabled");

        fillForm();
        submitForm();

        cy.wait("@patchPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });
});
