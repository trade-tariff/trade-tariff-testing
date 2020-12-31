describe(' 🇪🇺 🇬🇧 💡 New ,Terminated comm codes from 1st Jan 2021',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])


    it('Terminated comm codes from 01 Jan 2021', function () {
        let termcodes_ids = Cypress.config('termcodes');

        for (let i = 0; i < termcodes_ids.length; i++) {
            //commodity information available on 31/12/2020 termcodes
            cy.visit(`/commodities/${termcodes_ids[i]}?day=31&month=12&year=2020`)
            cy.contains(`Commodity information for ${termcodes_ids[i]}`)

            //Change Date to 01/01/2021 ,commodity information should not be available
  /*
            cy.get('.js-show.text > a[role=\'button\']').click()
            cy.get('input#tariff_date_date')
                .clear()
                .type('09/01/2021')
            cy.wait(2000)
            cy.get('.fields > a[role=\'button\']')
                .contains('Set date').click()
   */
            cy.visit(`/commodities/${termcodes_ids[i]}?day=1&month=1&year=2021`)
            cy.contains('Choose the commodity code below that best matches your goods to see more information')

            cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
                .contains('This tariff is for 1 January 2021')

        }
    })

    it('New comm codes starting from 01 Jan 2021', function () {

        let newcodes_ids = Cypress.config('termcodes');

        for (let i = 0; i < newcodes_ids.length; i++) {
            //commodity information available on 01/01/2020 termcodes
            cy.visit(`/commodities/${newcodes_ids[i]}?day=1&month=2&year=2021`)
            cy.contains(`Commodity information for ${newcodes_ids[i]}`)
            //Change Date to 01/01/2021 ,commodity information should not be available
            cy.get('.js-show.text > a[role=\'button\']').click()
            cy.get('input#tariff_date_date')
                .clear()
                .type('31/12/2020')
            cy.get('.fields > a[role=\'button\']')
                .contains('Set date').click()


            cy.contains('Choose the commodity code below that best matches your goods to see more information')

            cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
                .contains('This tariff is for 31 December 2020')

        }
    })

})


/*
"termcodes": [
    "0302910095",
    "0303541090",
    "0303919091"

  "newcodes": [
    "0302910096",
    "0303398580",
    "0303541095"
  ]
 */





