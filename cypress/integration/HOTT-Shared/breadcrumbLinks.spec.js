describe('UK 🇬🇧 XI 🇪🇺 | breadcrumbLinks | Validate breadcrum links are working on commodities and headings page |',function () {
    /*Test commodities & headings
    Please can we test this on both shallow and deep hierarchies
    Shallow = 0101210000 and the heading above that 0101
    Deep(est) = 2007993944 and the heading above that 2007
    X - Browser test(usual browsers)
    Mobile and desktop
    */
    Cypress.config('baseUrl')
    let comm = ["2007993944", "0101210000","0501000000"]
    for (let i = 0; i < comm.length; i++){

        it(`Desktop UK - ${comm[i]} commodity,headings page`,function(){
            cy.visit(`/commodities/${comm[i]}`)
            cy.get('.desktop-only > ul  .full-width').click()
            cy.contains('Choose the chapter that best matches your goods')
            cy.contains('All sections').click()
            cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
    })
        it(`Mobile UK - ${comm[i]} commodity,headings page`,function(){
            cy.viewport('iphone-x')
            cy.visit(`/commodities/${comm[i]}`)
            cy.get('.mobile-only > ul  .full-width').click()
            cy.contains('Choose the chapter that best matches your goods')
            cy.contains('All sections').click()
            cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
    })

        it(`Desktop XI - ${comm[i]} commodity,headings page`, function () {
            cy.visit(`xi/commodities/${comm[i]}`)
            cy.get('.desktop-only > ul  .full-width').click()
            cy.contains('Choose the chapter that best matches your goods')
            cy.contains('All sections').click()
            cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        })
        it(`Mobile XI - ${comm[i]} commodity,headings page`, function () {
            cy.viewport('iphone-x')
            cy.visit(`xi/commodities/${comm[i]}`)
            cy.get('.mobile-only > ul  .full-width').click()
            cy.contains('Choose the chapter that best matches your goods')
            cy.contains('All sections').click()
            cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        })
}
})