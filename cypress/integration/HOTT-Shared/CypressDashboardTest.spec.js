describe('cypress dashboard',function(){
    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD-MM-YYYY')
    it('dashboard from GHA',function(){
        cy.visit(`https://trade-tariff.github.io/trade-tariff-testing/${todaysDate}/`)
        cy.wait(5000)
        cy.scrollTo('bottom', { easing: 'linear' })
        cy.wait(2000)
        cy.get("li[title='Failed']  .material-icons.quick-summary--circle-icon---1HDS7.quick-summary--icon---TW1oG").click()
        cy.wait(2000)
        //   cy.scrollTo(0, 2000) //
        cy.scrollTo('bottom')
    })
    
})