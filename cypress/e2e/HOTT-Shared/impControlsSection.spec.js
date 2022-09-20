/* eslint-disable max-len */
// 1932 , 1974 Import Control Section for prohibhited commodities
describe('impControlsSection.spec ', function() {
  it('Conditionally prohibited - additional code', function() {
    cy.visit('/commodities/8708923500');
    // no country selected
    cy.contains('To check how to import commodity 8708923500, select the country from which you are importing.');
    // country with no prohibition but additional code - Afghanistan
    cy.searchForCountry('(AF)').type('{enter}');
    cy.contains('The import of commodity 8708923500 from Afghanistan may be prohibited, depending on the additional code used.');
    // country with prohibition - North Korea
    cy.searchForCountry('(KP)').type('{enter}');
    cy.contains('The import of commodity 8708923500 from North Korea is prohibited.');
  });
  it('No prohibitions - STW link', function() {
    cy.visit('/commodities/0307299010');
    cy.contains('To check how to import commodity 0307299010, select the country from which you are importing.');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 11, month: 11, year: 2022});
    cy.contains('11 November 2022');
    // check import tab
    cy.get('a#tab_import').click();
    cy.contains('Importing into the UK');
    // select France
    cy.searchForCountry('(FR)').type('{enter}');
    cy.contains('Check how to import commodity 0307299010 from France (opens in a new tab).');
    cy.get('[href=\'https\:\/\/check-how-to-import-export-goods\.service\.gov\.uk\/manage-this-trade\/check-licences-certificates-and-other-restrictions\?commodity\=0307299010\&destinationCountry\=GB\&goodsIntent\=bringGoodsToSell\&importDateDay\=11\&importDateMonth\=11\&importDateYear\=2022\&importDeclarations\=yes\&importOrigin\=\&originCountry\=FR\&tradeType\=import\&userTypeTrader\=true\']').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=0307299010&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=11&importDateMonth=11&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=FR&tradeType=import&userTypeTrader=true');

    // Change to Turkey - Prohibited
    cy.searchForCountry('(TR)').type('{enter}');
    cy.contains('The import of commodity 0307299010 from Turkey is prohibited.');
    // Change to North Korea - Prohibited
    cy.searchForCountry('(KP)').type('{enter}');
    cy.contains('The import of commodity 0307299010 from North Korea is prohibited.');
  });
  it('Prohibitive - All countries', function() {
    cy.visit('/commodities/4402200010');
    cy.contains('To check how to import commodity 4402200010, select the country from which you are importing.');
    // Change to indonesia - Prohibited
    cy.searchForCountry('(ID)').type('{enter}');
    cy.contains('The import of commodity 4402200010 from Indonesia is prohibited.');
    // Select North Korea
    cy.searchForCountry('(KP)').type('{enter}');
    cy.contains('The import of commodity 4402200010 from North Korea is prohibited.');
  });
});
