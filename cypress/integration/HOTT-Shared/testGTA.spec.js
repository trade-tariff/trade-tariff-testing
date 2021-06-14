describe.skip('| Google tags - UK & XI | validate google tags on UK & XI services |', function () {

    Cypress.config('baseUrl')

    //Main Page
    it('-  Page tags', function () {
        cy.visit('/sections')
        console.log(cy.get('iframe'))
   //     cy.get('noscript').debug().should('have.attr', 'id=GTM-MNNT6SX')
     //   cy.get(' noscript').debug()
    //    console.log(cy.get(' noscript'))
   //     cy.document.contains('id=GTM-MNNT6SX')
       
    })
})