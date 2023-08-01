const sizes = ['iphone-x', 'ipad-2', 'macbook-15']

describe("Checks homepage functionaility", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("checks homepage title renders", () => {
    cy.get("h1").should("contain.text", "Hello, I'm Josh");
  });

  sizes.forEach((size) => {
    it(`Navigation should display and work on ${size} screen`, () => {
      cy.viewport(size)

      cy.get("[data-cy='nav']").should("be.visible");
      cy.contains("Projects").click();
      cy.get("[data-cy='nav']").first().click();
      cy.contains("Contact").click();
      cy.get("[data-cy='nav']").first().click();
      cy.contains("Resume").click();
      cy.get("[data-cy='nav']").first().click();

    });
  })
});
