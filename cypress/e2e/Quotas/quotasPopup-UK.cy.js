import dayjs from 'dayjs';
import helpers from '../../lib/helpers';

describe('🇬🇧 💡 | quotasPopup-UK | Verify quota dialogs |', function() {
  const todaysDate = dayjs().format('D MMM YYYY');
  const previousDate = dayjs().subtract(1, 'd').format('D MMM YYYY');
  const futureDate = dayjs().add(7, 'day').format('D MMM YYYY');

  it('Quota Popup - Verify change the title to quota order number', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('.govuk-tabs__panel').contains('Non preferential tariff quota');
    cy.get('.info-inner > article > h2').contains('Quota order number 058039');
    cy.get('.info-inner> article > table > tbody > tr:nth-child(1) > th').should('not.contain', 'Quota order number');
    cy.get('.close [href]').click();
  });

  it(`Quota Popup - Verify Balance as of ${todaysDate}`, function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 058039');
    cy.get('.info-inner> article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.should('not.contain', 'Current balance');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify Comma separator in quota balance', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.get('.govuk-tabs__panel').contains('Non preferential tariff quota');
    cy.contains('058039').click();
    cy.get('.info-inner> article > table > tbody > tr:nth-child(1) > td').contains(',');
    cy.get('.info-inner> article > table > tbody > tr:nth-child(2) > td').contains(',');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify Footer content', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('.info-inner> article > p').contains('The status given is correct at the time');
    cy.get('.close [href]').click();
  });

  it(`Quota Popup - Verify balance as of ${previousDate} and click and view balance for ${todaysDate} popup`, function() {
    cy.visit(`/commodities/7306110000?${helpers.dateToUrl(previousDate)}#quotas`);
    cy.contains('058041').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 058041');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${previousDate})`);
    // Click View balance for xxxxx - link and verify balance as of xxxxx
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').click();
     //OTT-348(OTT-488) - issue exist with popup when we click on verify balance as of xxxxx to skip this for now used the below statement
    cy.contains('058041').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 058041');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').contains('Opening balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > th').contains('Status');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > td').contains('Open');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(5) > th').contains('Start and end dates');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(6) > th').contains('Last allocation date');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > th').contains('Suspension / blocking periods');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > td').contains('n/a');
    cy.get('.info-inner > article > p').contains('The status given is correct at the time');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify quota status and no suspension or blocking period', function() {
    cy.visit('/commodities/1904103000?day=6&month=1&year=2023#quotas');
    cy.contains('050233').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 050233');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of 6 Jan 2023)`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td').contains('0.000 Kilogram (kg)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').contains('Opening balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > th').contains('Status');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > td').contains('Exhausted');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > th').contains('Suspension / blocking periods');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > td').contains('n/a');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify quota status and blocking period', function() {
    cy.visit('/commodities/0302990040?country=NO&day=31&month=12&year=2020#quotas');
    cy.contains('090716').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 090716');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 31 Dec 2020)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').contains('Opening balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > th').contains('Status');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > td').contains('Open');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > th').contains('Blocking period');
    cy.get('.info-inner').contains('11 December 2020 to 31 December 2020');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify quota status and suspension period', function() {
    cy.visit('/commodities/0806101090?country=LB&day=1&month=5&year=2022#quotas');
    cy.contains('051180').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 051180');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 1 May 2022)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').contains('Opening balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').should('not.have.text', 'Pending balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > th').contains('Status');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > td').contains('Open');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(5) > th').contains('Start and end dates');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(5) > td').contains('1 October 2021 to 11 July 2022');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(6) > th').contains('Last allocation date');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(6) > td').contains('n/a');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > th').contains('Suspension period');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > td').contains('1 May 2022 to 31 May 2022');
    cy.get('.close [href]').click();
  });

  it('Quota Popup - Verify quota status and suspension and blocking periods', function() {
    cy.visit('/commodities/0809290000?country=MD&day=23&month=1&year=2020#quotas');
    cy.contains('096806').click();
    cy.get('.info-inner > article > h2').contains('Quota order number 096806');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 23 Jan 2020)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').contains('Opening balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(2) > th').should('not.have.text', 'Pending balance');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > th').contains('Status');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(4) > td').contains('Critical');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(5) > th').contains('Start and end dates');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(5) > td').contains('23 January 2020 to 31 December 2020');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(6) > th').contains('Last allocation date');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(6) > td').contains('n/a');
    cy.get('.info-inner > article > table > tbody > tr:nth-child(7) > th').contains('Suspension period');
    cy.get('.info-inner').contains('23 January 2020 to 30 April 2020');
    cy.get('.info-inner').contains('Blocking period');
    cy.get('.info-inner').contains('23 January 2020 to 7 May 2020');
    cy.get('.close [href]').click();
  });

  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line').contains('054002').click();
    cy.get('.tariff-info').contains('UK tariff rate quotas');
    cy.get('.close [href]').click();
  });

  context('when the commodity safeguard quota measure has transfer events', function() {
    it('does not show any balance transfers before HMRC started managing them', function() {
      cy.visit('/commodities/7306290000?day=1&month=2&year=2022');
      cy.contains('058041').click();
      cy.get('.info-inner').should('not.contain', 'Transferred balance');
      cy.get('.info-inner').contains('Pending balance').should('not.be.visible');
      cy.get('.close [href]').click();
    });

    it('shows a pending balance before the closing date', function() {
      cy.visit('/commodities/7306290000?day=28&month=10&year=2022');
      cy.contains('058041').click();
      cy.get('.info-inner').contains('Pending balance');
      cy.get('.info-inner').contains('Kilogram (kg) remains available');
      cy.get('.close [href]').click();
    });

    it('shows a transfer balance after the closing date', function() {
      cy.visit('/commodities/7306290000?day=29&month=10&year=2022');
      cy.contains('058041').click();
      cy.get('.info-inner').contains('Transferred balance');
      cy.get('.info-inner').contains('Kilogram (kg), transferred');
      cy.get('.close [href]').click();
    });
  });
});
