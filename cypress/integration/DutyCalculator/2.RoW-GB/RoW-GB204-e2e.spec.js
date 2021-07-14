
describe('|RoW-GB204-e2e.spec | 🇦🇫🇸Afghanistan to 🇬🇧 GB  |', function () {
   //


   it(`e2e RoW to GB 🇦🇫 Afghanistan to 🇬🇧 GB`, function () {
      //select future date 
      cy.visit(`/duty-calculator/uk/3926909790/import-date`)
      //   cy.visit(`/import-date?referred_service=uk&commodity_code=3926909790`)
      cy.wait(700)
      cy.validDate()
      cy.selectDestination('gb')
      cy.originList({ value: 'Afghanistan' })
      cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
      //  cy.quantity({tne:'1',dtnr:'1',dap:'1'})
      cy.additionalCode({ uk: '2601' })
      cy.vat('20')
      cy.confirmPage()
      cy.dutyPage()
      cy.contains(' VAT')
      cy.contains('Option 1: Third-country duty')
      cy.contains('Option 2: Tariff preference - GSP – Least Developed Countries')
      //   cy.contains('Option 3: Autonomous tariff suspension')
      cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
      cy.contains('Option 4: Airworthiness tariff suspension')
   })

})