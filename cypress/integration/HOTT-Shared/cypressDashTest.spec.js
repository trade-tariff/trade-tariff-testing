describe('Cypress Dashboard',function(){
    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD-MM-YYYY')
    it('Cypress Dashboard from GHA',function(){
        cy.wait(100)
        console.log(`${todaysDate}`)
        cy.visit({ url: `https://trade-tariff.github.io/trade-tariff-testing/${todaysDate}/`, failOnStatusCode: false })

        let title = cy.title()
        console.log(title)
        console.log(cy.title())

        if (title == 'Mochawesome Report'){
            
            cy.scrollTo('bottom', { easing: 'linear' })
            cy.wait(2000)
            cy.get("li[title='Failed']  .material-icons.quick-summary--circle-icon---1HDS7.quick-summary--icon---TW1oG").click()
            cy.wait(2000)
            cy.scrollTo('bottom', { easing: 'linear' })
            cy.wait(2000)
        }
        else {
            window.close();

        }
    
        
    })
    
})