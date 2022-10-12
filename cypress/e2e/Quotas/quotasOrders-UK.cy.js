describe('Check specific quota Quota details', function() {
  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line').contains('054002').click();
    cy.get('.tariff-info').contains('Rural Payments Agency');
    cy.get('.close [href]').click();
  });

  it('UK quota numbers post 1 Jan 2021 -052xxx Non-Licensed', function() {
    cy.visit('/commodities/0204501100#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line');
    cy.contains('052016').click();
    cy.get('.tariff-info')
        .contains('Quota order number 052016');
    cy.get('.close [href]').click();
  });

  it('UK quota numbers post 1 Jan 2021 -058xxx Non-Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line');
    cy.contains('058400').click();
    cy.get('.tariff-info')
        .contains('Quota order number 058400');
    cy.get('.close [href]').click();
  });

  it('Quota information available - litres ', function() {
    cy.visit('/commodities/2207100020#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.get('.table-line').contains('051894').click();
    cy.get('.tariff-info').focus()
        .contains('Quota order number 051894');
    cy.contains('Quota order number');
    cy.contains('Balance');
    cy.contains('Opening balance');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Litre (l)');
    cy.contains('Suspension / blocking periods');
    cy.get('.close [href]').click();
  });

  it('Quota information available - kilogram ', function() {
    cy.visit('/commodities/7211233091#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line').contains('058005').click();
    cy.get('.tariff-info').focus().contains('Quota order number 058005');
    cy.contains('Quota order number');
    cy.contains('Balance');
    cy.contains('Opening balance');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Kilogram (kg)');
    cy.contains('Suspension / blocking periods');
    cy.get('.close [href]').click();
  });

  it('Quota information available - Steel quotas', function() {
    cy.visit('/commodities/7214993100#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line').contains('058105').click();
    cy.get('.tariff-info').focus().contains('Quota order number 058105');
    cy.contains('Quota order number');
    cy.contains('Balance');
    cy.contains('Opening balance');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Suspension / blocking periods');
    cy.get('.close [href]').click();
  });
});
