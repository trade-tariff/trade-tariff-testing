before(() => {
   //   cy.injectAxe()
  //  cy.clearCookies()
 //   cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')

})
beforeEach(() => {
   cy.clearCookies()
  //  cy.injectAxe()
  //  cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')

})

Cypress.Commands.add("checkPageAlly",(path)=>{
   cy.visit(path);
   cy.injectAxe();
   cy.checkA11y(null,null,callback);
})
