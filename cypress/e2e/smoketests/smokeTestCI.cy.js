describe('Smoke tests to cover basic functionality', {tags: ['smokeTest']}, function() {
  context('when on the UK service', function() {
    it('Main Page Validation', function() {
      cy.visit('/find_commodity');
      cy.mainPageUK();
    });
    it('Verify date pickers are working', function() {
      cy.visit('/find_commodity');
      cy.get('input[name="day"]').click();
      cy.get('input[name="day"]').clear();
      cy.get('input[name="day"]').type(21);
      cy.get('input[name="month"]').click();
      cy.get('input[name="month"]').clear();
      cy.get('input[name="month"]').type(12);
      cy.get('input[name="year"]').click();
      cy.get('input[name="year"]').clear();
      cy.get('input[name="year"]').type(2022);
      cy.searchForCommodity('3808941000');
      cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2022');
      cy.get('a[href^=\'/import_export_dates\']').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
    });
    it('Main Page - Switching link to XI available & works', function() {
      cy.visit('/find_commodity');
      cy.get('.govuk-header')
          .contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff').click();
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
      cy.get('.govuk-main-wrapper');
      cy.contains('UK Integrated Online Tariff').click();
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff');
    });
    it('Quota numbers - 054xxx Licensed', function() {
      cy.visit('/commodities/0201100021#import');
      cy.get('.govuk-tabs__panel');
      cy.contains('Non preferential tariff quota');
      cy.get('.table-line');
      cy.contains('054002').click();
      cy.get('.tariff-info').contains('UK tariff rate quotas');
      cy.get('.close [href]').click();
    });
    it('Quota numbers - 057xxx Non-Licensed', function() {
      cy.visit('/commodities/0201100021#import');
      cy.get('.govuk-tabs__panel');
      cy.contains('Preferential tariff quota');
      cy.get('.table-line');
      cy.contains('057300').click();
      cy.get('.tariff-info').contains('Quota order number 057300');
      cy.get('.close [href]').click();
    });
    it('Search Commodity by name', function() {
      cy.visit('/find_commodity');
      cy.contains('Search for a commodity');
      cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');
      cy.searchForCommodity('gherkins');
      cy.contains('Gherkins').click();
      cy.url().should('include', '/commodities/0707009000');
    });
    it('Country Selection', function() {
      cy.visit('/commodities/0208909800');
      cy.searchForCountry('(XI)').contains('No results found');
      cy.searchForCountry('(AD)').contains('Andorra (AD)');
      cy.searchForCountry('(GB)').contains('No results found');
      cy.searchForCountry('(XU)').contains('No results found');
    });
    it('API V2 - Commodity - validate response headers,status,content', function() {
      cy.request('/api/v2/commodities/2007993943').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 - Heading - validate response headers,status,content', function() {
      cy.request('/api/v2/commodities/5001000000').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 Health Check', function() {
      cy.request('/api/v2/healthcheck').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.have.property('sidekiq').to.eq(true);
      });
    });
    it('Duty Calculator e2e - ( NI to GB ) | 101 |', function() {
      cy.visit('/duty-calculator/uk/0702001007/import-date');
      cy.contains('UK Integrated Online Tariff');
      cy.validDate();
      cy.selectDestination('gb');
      cy.originList({value: 'Northern Ireland'});
      cy.contains('There is no import duty to pay');
      cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
      cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
      cy.contains('When will the goods be imported?');
    });
  });
});
