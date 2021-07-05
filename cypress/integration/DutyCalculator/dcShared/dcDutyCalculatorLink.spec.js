describe('💡 | dcDutyCalculatorLink | Duty Cal link on Comcodes + supressed on headings -  UK services |',function() {
    Cypress.config('baseUrl')
    let country = ["", "xi"]
    let pagetitles = ["UK Global Online Tariff", "Northern Ireland Online Tariff"]
    for (let j = 0; j < country.length; j++) {
        console.log(j)

    it(`${country[j]} - Duty calculator link to be suppressed on commodities which are also headings `, function () {
        let comms = ["0409000000","0510000000","8804000000","2509000000","2802000000","3101000000","3914000000","4004000000","4812000000","5001000000","4112000000","4705000000"]
        for (let i=0;i<comms.length;i++)
        {
        cy.visit(`${country[j]}/sections`)
        cy.contains(`${pagetitles[j]}`)
        cy.get('.js-commodity-picker-select').click().type(`${comms[i]}`)
        cy.wait(950)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(500)
        cy.contains(`Commodity information for ${comms[i]}`)
        cy.contains('Duty calculation').should('not.exist')
        }
    })
    it(`${country[j]} - Duty calculator link to be suppressed on headings `, function () {
        let headings = ["0409","0510","8804","2509","2802","3101","3914","4004","4812","5001","4112","4705"]
        for (let i=0;i<headings.length;i++)
        {
        cy.visit(`${country[j]}/headings/${headings[i]}`)
        cy.contains(`Commodity information for ${headings[i]}000000`)
        cy.contains('Duty calculation').should('not.exist')
        }
    })
    it(`${country[j]} - Duty calculator link to be available on commodities`, function () {
        cy.visit(`${country[j]}/sections`)
        cy.get('.js-commodity-picker-select').click().type('8803100010')
        cy.wait(1000)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(500)
        cy.contains('Commodity information for 8803100010')
        cy.contains('Duty calculation').should('exist') 
    })
}
})
