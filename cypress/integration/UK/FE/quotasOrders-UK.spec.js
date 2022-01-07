/* eslint-disable max-len */
describe('🇬🇧 💡 | quotasOrders-UK | Check specific quota Quotadetails |', function() {
  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('054002').click();
    cy.get('.tariff-info')
        .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.');
    cy.get('.close [href]').click();
  });

  it('UK quota numbers post 1 Jan 2021 -052xxx Non-Licensed', function() {
    cy.visit('/commodities/0204501100#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('052016').click();
    cy.get('.tariff-info')
        .contains('Quota 052016');
    cy.get('.close [href]').click();
  });
  it('UK quota numbers post 1 Jan 2021 -058xxx Non-Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('058400').click();
    cy.get('.tariff-info')
        .contains('Quota 058400');
    cy.get('.close [href]').click();
  });

  it('Quota information available - litres ', function() {
    cy.visit('/commodities/2202999910#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('056721').click();
    cy.get('.tariff-info').focus()
        .contains('Quota 056721');
    cy.contains('In an effort to facilitate UK importers HMRC endeavours to keep quotas \'OPEN\' where possible, therefore the information displayed above may differ slightly from the current UK position. If you require further information contact the Tariff Quota Management Team by email: tariff.management@hmrc.gov.uk.');
    cy.contains('Quota order number');
    cy.contains('Current balance');
    cy.contains('Opening balance');
    cy.contains('68000.0 Kilogram (kg)');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Suspension period');
    cy.contains('Litre (l)');
    cy.contains('Blocking period');
    cy.get('.close [href]').click();
  });
  it('Quota information available - kilogram ', function() {
    cy.visit('/commodities/2302101000#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('056711').click();
    cy.get('.tariff-info').focus()
        .contains('Quota 056711');
    cy.contains('Quota order number');
    cy.contains('Current balance');
    cy.contains('Opening balance');
    cy.contains('2860000.0');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Suspension period');
    cy.contains('Kilogram (kg)');
    cy.contains('Blocking period');
    cy.get('.close [href]').click();
  });
  it.skip('Quota information available - New Quota - Eastern and Southern Africa States ', function() {
    cy.visit('/commodities/1604207094#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.contains('Quotas allow a limited amount of goods to be imported at a lower duty rate. Once the quota has been used up, you will revert to the out-of-quota rate, which may be the third-country duty or a preferential rate.');
    cy.contains('Quotas can be non-preferential (open to many countries) or preferential (restricted to a particular trading partner).');
    cy.get('.table-line');
    cy.contains('051618').click();
    cy.get('.tariff-info').focus()
        .contains('Quota 051618');
    cy.contains('Quota order number');
    cy.contains('Current balance');
    cy.contains('Opening balance');
    cy.contains('6300.0');
    cy.contains('Start and end dates');
    cy.contains('Status');
    cy.contains('Last allocation date');
    cy.contains('Suspension period');
    cy.contains('Tonne (1000 kg)');
    cy.contains('Blocking period');
    cy.get('.close [href]').click();
  });
});
