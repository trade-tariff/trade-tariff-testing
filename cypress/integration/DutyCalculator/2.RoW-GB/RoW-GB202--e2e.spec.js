// 🇨🇳 China to  🇬🇧 GB
// Comm code :0304829010 - no Measure Units

describe('| RoW-GB202--e2e.spec |🇹🇷 Turkey to  🇬🇧 GB | 202-e2e.spec | ', function() {
  //

  const country = ['uk', 'xi'];

  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e RoW to GB 🐠 - 🇹🇷 Turkey to  🇬🇧 GB  - ${country[i]}`, function() {
      // select future date
      cy.visit(`/${country[i]}/commodities/0304829010/`);
      cy.dutyCalLink('0304829010');
      cy.validDate();
      cy.contains('Which part of the UK are you importing into?');

      // select GB as country of destination
      cy.get('#steps-import-destination-import-destination-uk-field').check();
      cy.contains('Continue').click();
      cy.contains('Which country are the goods coming from?');

      // select country from list
      cy.get('#steps-country-of-origin-country-of-origin-field')
          .click().clear()
          .type('Turkey').wait(500);
      cy.contains('Continue').click();
      // Monetary value page
      cy.contains('What is the customs value of this import?');
      cy.get('input#steps-customs-value-monetary-value-field').clear().type('5000.50');
      cy.get('input#steps-customs-value-shipping-cost-field').clear().type('455.7533');
      cy.get('input#steps-customs-value-insurance-cost-field').clear().type('4545.987654');
      cy.contains('Continue').click();

      cy.additionalCode({uk: 'B964'});

      // Check your answers page
      cy.contains('Check your answers');
      //  cy.get('.govuk-grid-column-three-quarters')
      //   cy.get('.govuk-summary-list__key')
      cy.contains('Commodity code');
      cy.contains('Date of import');
      cy.contains('Destination');
      cy.contains('Coming from');
      cy.contains('Customs value');


      //   cy.get('.govuk-summary-list__value')
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0304 82 90 10');
      cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('B964');
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('31 October 2022');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Turkey');
      cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('£10,002.24');

      // confirm
      cy.get('.govuk-button').click().wait(200);

      // Final Page - duty page
      cy.contains('Import duty calculation');
      cy.contains('You are importing commodity');
      cy.contains('from Turkey on 31 October 2022.');

      //     cy.contains('0304 82 90 10').click()
      //     cy.checkCommPage('0304829010')
      //     cy.get('.govuk-back-link').click()
      // keys
      cy.get('.govuk-details > .govuk-details__summary');
      cy.contains('Details of your trade').click();
      cy.get('.govuk-details__text');
      cy.contains('Origin:');
      cy.contains('Commodity:');
      cy.contains('Import date:');
      cy.contains('Valuation of import:');
      // values
      cy.contains('0304 82 90 10');
      cy.contains('0304 82 90 10 (B964) Of the species Oncorhynchus mykiss');
      cy.contains('31 October 2022');
      cy.contains('£10,002.24');

      // information

      cy.get('.govuk-table__row');
      cy.contains('Data');
      cy.contains('Calculation');
      cy.contains('Value');
      // first row
      cy.contains('Valuation for import');
      cy.contains('Value of goods + freight + insurance costs');
      cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24');
      // import duty
      cy.contains('Import duty Third-country duty (UK)');
      cy.contains('12.00% * £10,002.24');

      cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£690.15');
      // Last row
      cy.contains('Duty Total');

      // Final Page
      cy.contains('Import duty calculation');
      cy.contains('Option 1: Third-country duty');
      cy.contains('Option 2: Tariff preference - Turkey');
      cy.contains('Definitive countervailing duty (UK)');
      cy.dcRooLink({country: 'Turkey'});
    });
  }
});
