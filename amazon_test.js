//describe('Rozetka', () => {
//   it('By', () => {
//      cy.visit('https://rozetka.com.ua/')

//   });
//});

describe('Rozetka', () => {
   it('By iphone', () => {
      cy.visit("https://www.amazon.in/");
      cy.viewport(1920, 1080);
      cy.get('input[type= "text"]').type('iphone');
      cy.get('input[type="submit"]').click();
      //cy.get('[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click();
      cy.get('[data-index="3"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click();
      //cy.get('[data-index="3"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section')
      //   .invoke('attr', 'target', '_self') // Добавляем атрибут target="_self" к ссылке
      //   .click();
      cy.visit("https://www.amazon.in/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_1_sspa?crid=25XATXYZID878&keywords=iphone&qid=1690283679&sprefix=ip%2Caps%2C577&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1");
      cy.get('#add-to-cart-button').click();


   })
})