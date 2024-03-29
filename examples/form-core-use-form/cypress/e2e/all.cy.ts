/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

Cypress.on("uncaught:exception", () => {
  return false;
});

describe("form-core-use-form", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    cy.interceptGETPosts();
    cy.visit(BASE_URL);
  });

  it("should edit resource with autosave", () => {
    cy.interceptGETCategories();
    cy.interceptGETPost();

    cy.wait("@getPosts");

    cy.get("button:contains('Edit')").first().click();

    cy.wait("@getPost");

    cy.get("input[name='title']")
      .first()
      .should("have.value", "Ut Voluptatem Est");
    cy.get("textarea[name='content']")
      .first()
      .should(
        "have.value",
        "Repellendus temporibus provident nobis. Non adipisci quod et est dolorem sed qui. A ut omnis. Et perspiciatis quibusdam maiores aliquid est fugit nam odit. Aut aliquam consectetur deleniti commodi velit. Eum eum aperiam voluptate quos quo. Ut quia doloribus a. Molestiae non est fugit enim fugiat non ea quas accusamus. Consequuntur voluptatem nesciunt dolorum expedita optio deserunt. Illo dolorem et similique.",
      );
    cy.get("button[type='submit']").first().should("not.be.disabled");

    cy.get("span:has(+ form)").should("have.text", "waiting for changes");

    cy.interceptPATCHPost();

    cy.fixture("mock-post").then((mockPost) => {
      cy.get("input[name='title']").type(`{selectAll}${mockPost.title}`);
      cy.get("textarea[name='content']").type(`{selectAll}${mockPost.content}`);
    });

    cy.wait("@patchPost").then((interception) => {
      const response = interception?.response;

      cy.get("span:has(+ form)").should("have.text", "saved");

      cy.get("button[type='submit']").first().should("not.be.disabled");

      cy.location("pathname").should("include", "/posts/edit/1");

      cy.get("input[name='title']").should("have.value", response?.body?.title);
      cy.get("textarea[name='content']").should(
        "have.value",
        response?.body?.content,
      );
    });
  });

  it("should clone resource", () => {
    cy.interceptGETCategories();
    cy.interceptGETPost();

    cy.wait("@getPosts");

    cy.get("button:contains('Clone')").first().click();

    cy.wait("@getPost");

    cy.get("input[name='title']")
      .first()
      .should("have.value", "Ut Voluptatem Est");
    cy.get("textarea[name='content']")
      .first()
      .should(
        "have.value",
        "Repellendus temporibus provident nobis. Non adipisci quod et est dolorem sed qui. A ut omnis. Et perspiciatis quibusdam maiores aliquid est fugit nam odit. Aut aliquam consectetur deleniti commodi velit. Eum eum aperiam voluptate quos quo. Ut quia doloribus a. Molestiae non est fugit enim fugiat non ea quas accusamus. Consequuntur voluptatem nesciunt dolorum expedita optio deserunt. Illo dolorem et similique.",
      );
    cy.get("button[type='submit']").first().should("not.be.disabled");

    cy.fixture("mock-post").then((mockPost) => {
      cy.get("input[name='title']").type(`{selectAll}${mockPost.title}`);
      cy.get("textarea[name='content']").type(`{selectAll}${mockPost.content}`);

      cy.interceptPOSTPost();

      cy.get("button[type='submit']").first().click();

      cy.wait("@postPost").then((interception) => {
        const response = interception?.response;
        const body = response?.body;

        expect(body?.title).to.eq(mockPost.title);
        expect(body?.content).to.eq(mockPost.content);

        cy.location("pathname").should((loc) => {
          expect(loc).to.eq("/posts");
        });
      });
    });
  });

  it("should edit resource with save button", () => {
    cy.interceptGETCategories();
    cy.interceptGETPost();

    cy.wait("@getPosts");

    cy.get("button:contains('Edit')").first().click();

    cy.wait("@getPost");

    cy.get("input[name='title']")
      .first()
      .should("have.value", "Ut Voluptatem Est");
    cy.get("textarea[name='content']")
      .first()
      .should(
        "have.value",
        "Repellendus temporibus provident nobis. Non adipisci quod et est dolorem sed qui. A ut omnis. Et perspiciatis quibusdam maiores aliquid est fugit nam odit. Aut aliquam consectetur deleniti commodi velit. Eum eum aperiam voluptate quos quo. Ut quia doloribus a. Molestiae non est fugit enim fugiat non ea quas accusamus. Consequuntur voluptatem nesciunt dolorum expedita optio deserunt. Illo dolorem et similique.",
      );
    cy.get("button[type='submit']").first().should("not.be.disabled");

    cy.fixture("mock-post").then((mockPost) => {
      cy.get("input[name='title']").type(`{selectAll}${mockPost.title}`);
      cy.get("textarea[name='content']").type(`{selectAll}${mockPost.content}`);

      cy.interceptPATCHPost();

      cy.wait(1100);

      cy.get("button[type='submit']").first().click();

      cy.wait("@patchPost").then((interception) => {
        const response = interception?.response;
        const body = response?.body;

        expect(body?.title).to.eq(mockPost.title);
        expect(body?.content).to.eq(mockPost.content);

        cy.location("pathname").should((loc) => {
          expect(loc).to.eq("/posts");
        });
      });
    });
  });

  it("should create resource", () => {
    cy.interceptGETCategories();
    cy.interceptGETPost();

    cy.wait("@getPosts");

    cy.get("button:contains('Create Post')").first().click();

    cy.get("button[type='submit']").first().should("not.be.disabled");

    cy.fixture("mock-post").then((mockPost) => {
      cy.get("input[name='title']").type(`${mockPost.title}`);
      cy.get("textarea[name='content']").type(`${mockPost.content}`);

      cy.interceptPOSTPost();

      cy.get("button[type='submit']").first().click();

      cy.wait("@postPost").then((interception) => {
        const response = interception?.response;
        const body = response?.body;

        expect(body?.title).to.eq(mockPost.title);
        expect(body?.content).to.eq(mockPost.content);

        cy.location("pathname").should((loc) => {
          expect(loc).to.eq("/posts");
        });
      });
    });
  });
});
