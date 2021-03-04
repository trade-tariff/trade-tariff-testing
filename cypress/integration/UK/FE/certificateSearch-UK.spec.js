describe('🇬🇧 💡 | certificateSearch-UK | Certificate Search - UK services |',function() {
    Cypress.config('baseUrl')

    it(' UK Certificate Search : 9 - National Document', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let ndcerts_ids = ["9100","9103","9104","9105"]
        for (let i = 0; i < ndcerts_ids.length; i++) {

            cy.get('select#type').select('9 - National Document')
            cy.get('input#code')
                .clear()
                .type(`${ndcerts_ids[i]}`)
          //  cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ndcerts_ids[i]}`)

        }
    })

    it(' UK Certificate Search : A - Certificate of authenticity', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let adcerts_ids = ["022","023","030","017"]
        for (let i = 0; i < adcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('A - Certificate of authenticity')
            cy.get('input#code')
                .clear()
                .type(`${adcerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${adcerts_ids[i]}`)

        }

    })

    it(' UK Certificate Search : C - Other certificates', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        let ccerts_ids = ["C014", "C015", "C017", "C018", "C052", "C084", "C644", "C652"]
        for (let i = 0; i < ccerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('C - Other certificates')
            cy.get('input#code')
                .clear()
                .type(`${ccerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ccerts_ids[i]}`)
        }
    })

    it(' UK Certificate Search : D - Anti-dumping/countervailing document', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        let dcerts_ids = ["005", "008", "017"]
        for (let i = 0; i < dcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('D - Anti-dumping/countervailing document')
            cy.get('input#code')
                .clear()
                .type(`${dcerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${dcerts_ids[i]}`)
        }

    })
    it(' UK Certificate Search : E - Export certificate/licence/document from country of origin', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        let ecerts_ids = ["012", "013", "990"]
        for (let i = 0; i < ecerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('E - Export certificate/licence/document from country of origin')
            cy.get('input#code')
                .clear()
                .type(`${ecerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ecerts_ids[i]}`)
        }

    })
    it(' UK Certificate Search : H - HANDI, LOOMS certificate', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('H - HANDI, LOOMS certificate')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')
    })

    it(' UK Certificate Search : I - Surveillance certificate/licence/ document issued by one of the Member States', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        let icerts_ids = ["004"]
        for (let i = 0; i < icerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('I - Surveillance certificate/licence/ document issued by one of the Member States')
            cy.get('input#code')
                .clear()
                .type(`${icerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${icerts_ids[i]}`)
        }
    })
    it(' UK Certificate Search : K - Tariff quota', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('K - Tariff quota')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })

    it(' UK Certificate Search : L - Import certificate/licence/document', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let lcerts_ids = ["L001"]
        for (let i = 0; i < lcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('L - Import certificate/licence/document')
            cy.get('input#code')
                .clear()
                .type(`${lcerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${lcerts_ids[i]}`)

        }

    })

    it(' UK Certificate Search : N - UN/EDIFACT certificates', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let ncerts_ids = ["002","853","865","990","954"]
        for (let i = 0; i < ncerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('N - UN/EDIFACT certificates')
            cy.get('input#code')
                .clear()
                .type(`${ncerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ncerts_ids[i]}`)

        }

    })

    it(' UK Certificate Search : P - Ingredients', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('P - Ingredients')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it(' UK Certificate Search : R - Export refunds', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('R - Export refunds')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it(' UK Certificate Search : T - T-Document', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('T - T-Document')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it(' UK Certificate Search : U - Proofs of origin', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let ucerts_ids = ["003","004","059","062"]
        for (let i = 0; i < ucerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('U - Proofs of origin')
            cy.get('input#code')
                .clear()
                .type(`${ucerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ucerts_ids[i]}`)
        }

    })
    it(' UK Certificate Search : X - Export licence', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let xcerts_ids = ["001","018","035"]
        for (let i = 0; i < xcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('X - Export licence')
            cy.get('input#code')
                .clear()
                .type(`${xcerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${xcerts_ids[i]}`)
        }
    })

    it(' UK Certificate Search : Y - Particular provisions', function () {
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')

        let ycerts_ids = ["036","058","072","073","076","077","078","079","929","930","945","946","999"]

        for (let i = 0; i < ycerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('Y - Particular provisions')
            cy.get('input#code')
                .clear()
                .type(`${ycerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ycerts_ids[i]}`)

        }

    })

    it(' UK Certificate Search : Z - More certificates', function(){
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('Z - More certificates')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })


})
