describe('cypress dashboard', function () {
    it('dashboard from GHA', function () {
        console.log(`$('#date').text(new Date().toJSON())`)
        cy.visit('https://trade-tariff.github.io/trade-tariff-testing/26-05-2021/')
        cy.scrollTo(0, 2000) //
        cy.get("li[title='Failed']  .material-icons.quick-summary--circle-icon---1HDS7.quick-summary--icon---TW1oG").click()
        cy.wait(2000)
        cy.scrollTo(0, 2000) //
        cy.scrollTo('bottom')
    })
})