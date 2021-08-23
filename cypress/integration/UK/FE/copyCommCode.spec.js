describe.skip('🇬🇧 💡 | copyCommCode | Copy comm code UK and XI  |', function () {
    it('Copy commod code and paste ', function () {
        cy.visit('commodities/0201100021')
        //copy comm code
        cy.contains('Copy commodity code')
        cy.get('span#copy_comm_code').click()
        cy.contains('Code copied')
        //pasting copied comm code 
        cy.get('a#proposition-name').click()
        cy.contains('UK Integrated Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select.js-show  input#q').trigger('contextmenu')
         //   .invoke('val', 'pasted text').trigger('input')
   //     cy.get('input[name=\'new_search\']').click()
   //     cy.wait(500)
   //     cy.contains('Commodity information for 0201100021')

    })

})
