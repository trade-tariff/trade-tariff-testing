describe.skip('cypress dashboard', function () {
    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD-MM-YYYY')
 //   cy.contains('span', `Order shipped on: ${todaysDate}`)

    it('dashboard from GHA', function () {
        console.log(`${todaysDate}`)
        cy.visit(`https://trade-tariff.github.io/trade-tariff-testing/${todaysDate}/`)
            cy.get('body').should('have.class', 'finished-loading');
            cy.percySnapshot();

            cy.get('button').click();
            cy.percySnapshot('Clicked button');
    
     //   cy.wait(5000)
     //   cy.scrollTo('bottom', { easing: 'linear' })
     
    })
})