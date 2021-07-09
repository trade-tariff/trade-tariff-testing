describe('🇪🇺 💡 |certificateSearch-XI | Certificate Search - XI services |',function() {
    it('XI Certificate Search : 9 - National Document', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let ndcerts_ids = ["9100", "9103", "9104", "9105"]
        for (let i = 0; i < ndcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('9 - National Document')
            cy.get('input#code')
                .clear()
                .type(`${ndcerts_ids[i]}`)
            cy.wait(2000)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ndcerts_ids[i]}`)

        }
    })

    it('XI Certificate Search : A - Certificate of authenticity', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let adcerts_ids = ["022", "023", "030", "017"]
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

    it('XI Certificate Search : C - Other certificates', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        let ccerts_ids = ["C014", "C015", "C017", "C018", "C052"]
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

    it('XI Certificate Search : D - Anti-dumping/countervailing document', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        let dcerts_ids = ["D005", "D017"]
        for (let i = 0; i < dcerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('D - Anti-dumping/countervailing document')
            cy.get('input#code')
                .clear()
                .type(`${dcerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            cy.wait(7000)
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${dcerts_ids[i]}`)
        }

    })
    it('XI Certificate Search : E - Export certificate/licence/document from country of origin', function () {
        cy.visit('/xi/certificate_search')
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

    it('XI Certificate Search : H - HANDI, LOOMS certificate', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('H - HANDI, LOOMS certificate')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })

    it('XI Certificate Search : I - Surveillance certificate/licence/ document issued by one of the Member States', function () {
        cy.visit('/xi/certificate_search')
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

    it('XI Certificate Search : K - Tariff quota', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('K - Tariff quota')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })

    it('XI Certificate Search : L - Import certificate/licence/document', function () {
        cy.visit('/xi/certificate_search')
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

    it('XI Certificate Search : N - UN/EDIFACT certificates', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let ncerts_ids = ["002", "853", "865", "954"]
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

    it('XI Certificate Search : P - Ingredients', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('P - Ingredients')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it('XI Certificate Search : R - Export refunds', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('R - Export refunds')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it('XI Certificate Search : T - T-Document', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('T - T-Document')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')

    })
    it('XI Certificate Search : U - Proofs of origin', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let ucerts_ids = ["004", "059", "062"]
        for (let i = 0; i < ucerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('U - Proofs of origin')
            cy.get('input#code')
                .clear()
                .type(`${ucerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            cy.wait(900)
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ucerts_ids[i]}`)
        }

    })
    it('XI Certificate Search : X - Export licence', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let xcerts_ids = ["X018", "X035"]
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

    it('XI Certificate Search : Y - Particular provisions', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')

        let ycerts_ids = ["Y058", "Y072", "Y073", "Y076", "Y077", "Y078", "Y079", "Y929", "Y930", "Y945", "Y946"]

        for (let i = 0; i < ycerts_ids.length; i++) {
            //select type of certificate from drop down menu
            cy.get('select#type').select('Y - Particular provisions')
            cy.get('input#code')
                .clear()
                .type(`${ycerts_ids[i]}`)
            cy.wait(500)
            cy.get('form#new_search > input[name=\'new_search\']').click()
            cy.wait(3000)
            // check it contains relevant certificate information as requested
            cy.get('.govuk-heading-l')
                .contains('Certificate search results')
            cy.get('.govuk-table')
            cy.contains(`${ycerts_ids[i]}`)

        }
    })

    it('XI Certificate Search : Z - More certificates', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('select#type').select('Z - More certificates')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.get('.govuk-heading-l')
        cy.contains('There are no matching results')
    })

})
