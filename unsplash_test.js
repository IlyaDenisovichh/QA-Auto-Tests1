describe('Log in', () => {
   it("Sing in", () => {
      cy.visit('https://unsplash.com/');
      cy.contains("Log in").click();
      cy.get('input[type = "email"]').type("ilya.denisovishh@gmail.com");
      cy.get('#user_password').type('qwerty123');
      cy.get(':nth-child(7) > .btn').click();

   });
})