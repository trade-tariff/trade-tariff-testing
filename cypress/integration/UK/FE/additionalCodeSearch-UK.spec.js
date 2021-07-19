describe('🇬🇧 💡 | additionalCode-UK | Additional Code Search - UK services |',function() {
    
    it('UK Additional Code Search : 2 - Tariff preference', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let tpadcodes_ids = ["2500","2501"]
        for (let i = 0; i < tpadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('2 - Tariff preference')
            cy.get('input#code')
                .clear()
                .type(`${tpadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${tpadcodes_ids[i]}`)

        }
    })
    it('UK Additional Code Search : 3 - Prohibition/Restriction/Surveillance', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let prsadcodes_ids = ["3000","3002"]
        for (let i = 0; i < prsadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('3 - Prohibition/Restriction/Surveillance')
            cy.get('input#code')
                .clear()
                .type(`${prsadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${prsadcodes_ids[i]}`)

        }
    })
    it('UK Additional Code Search : 4 - Restrictions', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let radcodes_ids = ["4008","4010"]
        for (let i = 0; i < radcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('4 - Restrictions')
            cy.get('input#code')
                .clear()
                .type(`${radcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${radcodes_ids[i]}`)

        }
    })

    it('UK Additional Code Search : 6 - Agricultural Tables (non-Meursing)', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('6 - Agricultural Tables (non-Meursing)')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })

    it('UK Additional Code Search : 7 - Agricultural Tables (Meursing)', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('7 - Agricultural Tables (Meursing)')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })
    it('UK Additional Code Search : 8 - Anti-dumping/countervailing', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let adadcodes_ids = ["8042","8044"]
        for (let i = 0; i < adadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('8 - Anti-dumping/countervailing')
            cy.get('input#code')
                .clear()
                .type(`${adadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${adadcodes_ids[i]}`)

        }
    })

    it('UK Additional Code Search : 9 - Export Refunds', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('9 - Export Refunds')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })


    it('UK Additional Code Search : A - Anti-dumping/countervailing', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let adcadcodes_ids = ["057","097"]
        for (let i = 0; i < adcadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('A - Anti-dumping/countervailing')
            cy.get('input#code')
                .clear()
                .type(`${adcadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${adcadcodes_ids[i]}`)

        }
    })


    it('UK Additional Code Search : B - Anti-dumping/countervailing', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let badcadcodes_ids = ["001","002"]
        for (let i = 0; i < badcadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('B - Anti-dumping/countervailing')
            cy.get('input#code')
                .clear()
                .type(`${badcadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${badcadcodes_ids[i]}`)

        }
    })

    it('UK Additional Code Search : C - Anti-dumping/countervailing', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        let cadcadcodes_ids = ["046","047"]
        for (let i = 0; i < cadcadcodes_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('C - Anti-dumping/countervailing')
            cy.get('input#code')
                .clear()
                .type(`${cadcadcodes_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Additional code search results')
            cy.get('.govuk-table')
            cy.contains(`${cadcadcodes_ids[i]}`)

        }
    })


    it('UK Additional Code Search : D - Dual Use', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('D - Dual Use')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })


    it('UK Additional Code Search : F - Reference prices fishery products', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('F - Reference prices fishery products')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })

    it('UK Additional Code Search : P - Refund for basic products', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('P - Refund for basic products')

        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('There are no matching results')

    })

    it.skip(' UK Additional Code Search : V - VAT', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('V - VAT')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

    })
    it.skip('UK Additional Code Search : X - EXCISE', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')

        //select type of certificate from drop down menu
        cy.get('select#type').select('X - EXCISE')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

    })


})