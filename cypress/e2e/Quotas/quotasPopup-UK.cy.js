/* eslint-disable camelcase */
/* eslint-disable max-len */
const dayjs = require('dayjs');

describe('🇬🇧 💡 | quotasPopup-UK | Verify quota dialogs |', function() {
  const todaysDate = dayjs().format('DD MMM YYYY');
  const previous_Date = dayjs().subtract(1, 'M').format('DD MMM YYYY');
  const past_month = dayjs().subtract(0, 'M').month();
  const past_date = dayjs().subtract(0, 'd').date();
  const year = dayjs().subtract(0, 'y').year();
  const future_Date = dayjs().add(7, 'day').format('DD MMM YYYY');
  const future_date = dayjs().add(7, 'day').date();
  const future_month = dayjs().add(1, 'M').month();
  it('Quota Popup - Verify change the title to quota order number', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 058039');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').should('not.contain', 'Quota order number');
  });
  it(`Quota Popup - Verify Balance as of ${todaysDate}`, function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 058039');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.should('not.contain', 'Current balance');
  });
  it('Quota Popup - Verify Comma separator in quota balance', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains(',');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(2) > td').contains(',');
  });
  it('Quota Popup - Show pending balance', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3)').contains('Kilogram (kg) remains available from the previous quota period. This will be transferred to the current quota period c. 20 working days after the end of the previous quota period.');
  });
  it('Quota Popup - Verify Footer content', function() {
    cy.visit('/commodities/7306110000#quotas');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > p').contains('The status given is correct at the time of the ‘last allocation’. Quota allocations are processed daily (excluding weekends and bank holidays), and the updated balance will be displayed on the Online Tariff Tool the next working day. The information provided within this tool is the most up-to-date information that HMRC can provide at any given time.');
  });
  it(`Quota Popup - Verify balance as of ${previous_Date} and click and view balance for ${todaysDate} popup`, function() {
    cy.visit(`/commodities/7306110000?day=${past_date}&month=${past_month}&year=${year}#quotas`);
    cy.contains('058041').click();
    cy.get('.info-inner > article > .govuk-heading-m').contains('Quota order number 058041');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${previous_Date})`);
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    // Click View balance for xxxxx - link and verify balance as of xxxxx
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').click();
    cy.get('.info-inner > article > .govuk-heading-m').contains('Quota order number 058041');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(2)').contains('Opening balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3)').contains('Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('Status');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(4) > .numerical').contains('Open');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5) > th').contains('Start and end dates');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6) > th').contains('Last allocation date');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(7)').contains('Suspension / blocking periods');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(7) > .numerical').contains('n/a');
    cy.get('#popup > div > div > article > p').contains('The status given is correct at the time of the ‘last allocation’. Quota allocations are processed daily (excluding weekends and bank holidays), and the updated balance will be displayed on the Online Tariff Tool the next working day. The information provided within this tool is the most up-to-date information that HMRC can provide at any given time.');
  });
  it(`Quota Popup - Verify balance as of ${future_Date} and click and view balance for ${todaysDate} popup`, function() {
    cy.visit(`/commodities/7306110000?day=${future_date}&month=${future_month}&year=${year}#quotas`);
    cy.contains('058949').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 058949');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${future_Date})`);
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    // Click View balance for xxxxx - link and verify balance as of xxxxx
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 058949');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(2)').contains('Opening balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3)').contains('Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('Status');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(4) > .numerical').contains('Open');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5) > th').contains('Start and end dates');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6) > th').contains('Last allocation date');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(7)').contains('Suspension / blocking periods');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(7) > .numerical').contains('n/a');
    cy.get('#popup > div > div > article > p').contains('The status given is correct at the time of the ‘last allocation’. Quota allocations are processed daily (excluding weekends and bank holidays), and the updated balance will be displayed on the Online Tariff Tool the next working day. The information provided within this tool is the most up-to-date information that HMRC can provide at any given time.');
  });
  it('Quota Popup - No pending balance in the past date', function() {
    cy.visit('/commodities/7306111000?day=11&month=10&year=2021');
    cy.contains('058039').click();
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
  });
  it('Quota Popup - Verify quota status and no suspension or blocking period', function() {
    cy.visit('/commodities/0302990040?country=IS#quotas');
    cy.contains('050793').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 050793');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains(`Balance (as of ${todaysDate})`);
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains('0.000 Kilogram (kg)');
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > th').contains('Status');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > td').contains('Exhausted');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('Suspension / blocking periods');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(6) > .numerical').contains('n/a');
  });
  it('Quota Popup - Verify quota status and blocking period', function() {
    cy.visit('/commodities/0302990040?country=NO&day=31&month=12&year=2020#quotas');
    cy.contains('090716').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 090716');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 31 Dec 2020)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > th').contains('Status');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > td').contains('Open');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('Blocking period');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(6) > .numerical').contains('11 December 2020 to 31 December 2020');
  });
  it('Quota Popup - Verify quota status and suspension period', function() {
    cy.visit('/commodities/0806101090?country=LB&day=1&month=5&year=2022#quotas');
    cy.contains('051180').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 051180');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 1 May 2022)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > th').contains('Status');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > td').contains('Open');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('Start and end dates');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('1 October 2021 to 11 July 2022');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('Last allocation date');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('n/a');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('Suspension period');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(6) > .numerical').contains('1 May 2022 to 31 May 2022');
  });
  it('Quota Popup - Verify quota status and suspension and blocking periods', function() {
    cy.visit('/commodities/0809290000?country=MD&day=23&month=1&year=2020#quotas');
    cy.contains('096806').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 096806');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 23 Jan 2020)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > th').contains('Status');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > td').contains('Critical');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('Start and end dates');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('23 January 2020 to 31 December 2020');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('Last allocation date');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('n/a');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('Suspension period');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(6) > .numerical').contains('23 January 2020 to 30 April 2020');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(7)').contains('Blocking period');
    cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(7) > .numerical').contains('23 January 2020 to 7 May 2020');
  });
  // Verify 'this quota is not available on the selected date.' message
  it('Quota Popup - Verify `This quota is not available on the selected date message`', function() {
    cy.visit('/commodities/0805290021?day=29&month=4&year=2022#quotas');
    cy.contains('050027').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 050027');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th').contains('Balance (as of 29 Apr 2022)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td').contains('Kilogram (kg)');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').contains(`View balance for ${todaysDate}`);
    cy.get('#popup > div > div').should('not.contain', 'Pending balance');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > th').contains('Status');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(3) > td').contains('Open');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('Start and end dates');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)').contains('1 February 2022 to 30 April 2022');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('Last allocation date');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5)').contains('n/a');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('Suspension / blocking periods');
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6)').contains('n/a');
    // Click view balance for todaysDate link and verify `This quota is not available on the selected date message` message
    cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a').click();
    cy.get('#popup > div > div > article > h2').contains('Quota order number 050027');
    cy.get('#popup > div > div > article > p').contains('This quota is not available on the selected date.');
  });
});
