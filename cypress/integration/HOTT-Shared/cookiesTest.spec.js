describe.skip('🇬🇧 🇪🇺 💡 | CookiesTest |',function() {
    //  Cypress.config('baseUrl')
        Cypress.config('baseUrl')
  
      it('Commodity Search - New codes',function(){
          cy.visit('/sections')
         cy.log(cy.getCookie('authenticity_token'))

      })
})


