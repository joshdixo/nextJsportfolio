describe("Checks homepage functionaility", () => {
  
  beforeEach(() => {
    cy.visit("/");
  });

  it("checks homepage title renders", () => {
    cy.get("h1").should("contain.text", "Hello, I'm Josh");
  });

  it("checks navigation works", () => {
    cy.get("[data-cy='nav']").should("be.visible");
    cy.contains("Projects").click();
    cy.get("[data-cy='nav']").first().click();
    cy.contains("Contact").click();
    cy.get("[data-cy='nav']").first().click();
    cy.contains("Resume").click();
    cy.get("[data-cy='nav']").first().click();
  });
});
