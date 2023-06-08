describe('Tests functionaility of the contact page', () => {

    beforeEach(() => {
        cy.visit("/contact");
      });

    it('types contact and message data into form', () => {
   
        cy.writeContact('bob robins', 'bob@bob123.com', 'this is a test, you passed')
    });
 })