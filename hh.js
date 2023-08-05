describe('Функции сайта HH.ru', () => {
   it('Найти профессию', () => {
      cy.visit('https://hh.ru/?hhtmFrom=vacancy');
      cy.get('#a11y-search-input').type('QA Engineer');
      cy.get('.supernova-search-submit-text').click();
   });
});