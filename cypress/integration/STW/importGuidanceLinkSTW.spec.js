/* eslint-disable max-len */
describe('| importGuidanceLinkSTW.spec | STW content on commodity import page |', function() {
  it('| UK Service - STW content on Commodity import page |', function() {
    cy.visit('/commodities/2612201000#import');

    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 11, month: 11, year: 2022});
    cy.wait(300);
    cy.contains('11 November 2022');
    // check import tab
    cy.get('a#tab_import').click();
    cy.contains('To use the new \'Check how to import or export goods\' service to find out which licences and certificates you need to import commodity code 2612201000, select the country of origin from the dropdown above.');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Andorra')
        .type('{enter}');
    //  cy.searchForCountry('Andorra');
    cy.contains('Check how to import commodity 2612201000 from Andorra.');
    cy.get('[href=\'https\:\/\/check-how-to-import-export-goods\.service\.gov\.uk\/manage-this-trade\/check-licences-certificates-and-other-restrictions\?commodity\=2612201000\&destinationCountry\=GB\&goodsIntent\=bringGoodsToSell\&importDateDay\=11\&importDateMonth\=11\&importDateYear\=2022\&importDeclarations\=yes\&importOrigin\=\&originCountry\=AD\&tradeType\=import\&userTypeTrader\=true\']').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=2612201000&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=11&importDateMonth=11&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=AD&tradeType=import&userTypeTrader=true');

    // Change Date and country and validate
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 12, month: 10, year: 2022});
    cy.wait(300);
    cy.contains('12 October 2022');
    cy.get('a[role=\'button\'] > .long-text').click().wait(100);
    cy.get('a#tab_import').click();
    cy.contains('To use the new \'Check how to import or export goods\' service to find out which licences and certificates you need to import commodity code 2612201000, select the country of origin from the dropdown above.');

    cy.get('a#tab_import').click().wait(100);
    cy.get('input#search_country').click().clear().wait(500)
        .type('India')
        .type('{enter}');


    cy.contains('Check how to import commodity 2612201000 from India.');
    cy.get('[href=\'https\:\/\/check-how-to-import-export-goods\.service\.gov\.uk\/manage-this-trade\/check-licences-certificates-and-other-restrictions\?commodity\=2612201000\&destinationCountry\=GB\&goodsIntent\=bringGoodsToSell\&importDateDay\=12\&importDateMonth\=10\&importDateYear\=2022\&importDeclarations\=yes\&importOrigin\=\&originCountry\=IN\&tradeType\=import\&userTypeTrader\=true\']').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=2612201000&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=12&importDateMonth=10&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=IN&tradeType=import&userTypeTrader=true');
  });
  it('| UK Service - STW content on heading which is also a commodity import page |', function() {
    cy.visit('/commodities/8804000000#import');
    cy.contains('To use the new \'Check how to import or export goods\' service to find out which licences and certificates you need to import commodity code 8804000000, select the country of origin from the dropdown above.');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 11, month: 11, year: 2022});
    cy.wait(300);
    cy.contains('11 November 2022');
    // check import tab
    cy.get('a#tab_import').click();
    cy.contains('To use the new \'Check how to import or export goods\' service to find out which licences and certificates you need to import commodity code 8804000000, select the country of origin from the dropdown above.');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Iraq')
        .type('{enter}');
    cy.contains('Check how to import heading 8804000000 from Iraq.');
    cy.get('[href=\'https\:\/\/check-how-to-import-export-goods\.service\.gov\.uk\/manage-this-trade\/check-licences-certificates-and-other-restrictions\?commodity\=8804000000\&destinationCountry\=GB\&goodsIntent\=bringGoodsToSell\&importDateDay\=11\&importDateMonth\=11\&importDateYear\=2022\&importDeclarations\=yes\&importOrigin\=\&originCountry\=IQ\&tradeType\=import\&userTypeTrader\=true\']').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=8804000000&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=11&importDateMonth=11&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=IQ&tradeType=import&userTypeTrader=true');
  });
  it('| XI Service - should not exist - STW content on Commodity import page |', function() {
    cy.visit('xi/commodities/2612201000#import');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 11, month: 11, year: 2022});
    cy.wait(300);
    cy.contains('11 November 2022');
    // check import tab
    cy.get('a#tab_import').click();
    cy.contains('To use the new \'Check how to import or export goods\' service to find out which licences and certificates you need to import commodity code 2612201000, select the country of origin from the dropdown above.').should('not.exist');
  });
});
