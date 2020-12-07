describe('end to end test ',function() {

    it('1.main page ', function () {
        cy.visit('https://www.gov.uk/trade-tariff')
        cy.wait(1000)
        cy.get('p#get-started > a[role=\'button\']').contains('Start now').should('be.visible').click()
        })

    it('2.sections page',function(){
        cy.url().should('include', 'sections', {timeout: 5000})
        cy.contains('All sections')
        cy.wait(1000)
        cy.get('tr:nth-of-type(1) > .govuk-table__cell.title > a').contains(' Live animals; animal products').click()
        cy.contains(' Live animals; animal products')
    })

    it('3.chapters page',function(){
        cy.contains('Section I: Live animals; animal products')
        cy.wait(1000)
        cy.get('tr:nth-of-type(1) > td:nth-of-type(2) > a').contains(' Live animals').click()
        cy.contains('Choose the heading that best matches your goods')
    })

    it('4.headings page',function(){
        cy.contains('Live horses, asses, mules and hinnies')
        cy.wait(1000)
        cy.get('tr:nth-of-type(1) > td:nth-of-type(2) > a').contains('Live horses, asses, mules and hinnies').click()
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })

    it('5.Commodity code selection',function(){
        cy.contains('Horses').click()
        cy.wait(1000)
        cy.contains('Pure-bred breeding animals').click()
        cy.contains('Commodity information for 0101210000').should('be.visible')
        cy.contains('Overview').should('be.visible')
        cy.contains('Import').should('be.visible')
        cy.contains('Export').should('be.visible')
        cy.wait(1000)
        cy.get('a#tab_import').contains('Import').click()
    })

    it('6.imports tab',function(){
        cy.contains('Trade between the UK and').should('be.visible')

    })

    it('7.Footnotes',function(){
        cy.get('[data-module] [role=\'tabpanel\']:nth-child(3) .small-table .govuk-table__caption').should('be.visible')
       // cy.contains('Footnotes').should('be.visible')
    })

    it('8.Forum Section',function(){
        cy.get('li:nth-of-type(9) > .govuk-header__link').should('be.visible')
    })
    })
