/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | docCodePopUps.spec.js | Validate document / certificate description + validity period |', function() {
  // HOTT-1255 - remove certificate document title from pop up window
  it(`UK - Certificate / Document details pop up `, function() {
    cy.visit(`/commodities/0104103000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 0104103000');
    cy.checkCommPage('0104103000');
    cy.get('div#import > table:nth-of-type(1) > .govuk-table__body > tr:nth-of-type(1)  a[role=\'button\']').click();
    cy.get('.info-inner').contains('Other certificates:').should('not.exist');
    cy.get('.info-inner').contains('Particular provisions:').should('not.exist');
    cy.get('.info-inner').contains('Import control - CITES for All countries');
    cy.get('.info-inner').contains(' From 29 Jan 2022 to 30 Sep 2023');
    cy.get('.close [href]').click();
  });
  it(`XI - Certificate / Document details pop up `, function() {
    cy.visit(`xi/commodities/9706100000`);
    cy.get('.govuk-breadcrumbs__list').contains('Commodity 9706100000');
    cy.checkCommPage('9706100000');
    cy.get('#measure-3896733').contains('Conditions').click();
    cy.contains('Other certificates:').should('not.exist');
    cy.contains('Particular provisions:').should('not.exist');
    cy.get('.info-inner').contains('Import control - CITES for All countries');
    cy.contains('From 19 Jan 2022');
    cy.get('.close [href]').click().wait(350);
    cy.get('table:nth-of-type(4) > .govuk-table__body > .KP.govuk-table__row  a[role=\'button\']').wait(200).click().wait(0);
    cy.get('.info-inner').contains('Import control on luxury goods for North Korea');
    cy.get('.info-inner').contains('From 1 Jan 2021');
    cy.get('div#popup a').click().wait(500);
    cy.contains('Goods necessary for the official purposes of diplomatic or consular missions of Member States in the DPRK or international organisations enjoying immunities in accordance with international law, or to the personal effects of their staff (Art 10.3 of Regulation (EU) 2017/1509)');
  });
  // 999L code - HOTT-1362
  it('UK Condition Code 999L - Separated with new text at the bottom', function() {
    cy.visit('/commodities/0702000007');
    cy.get('#measure-20164273').contains('Conditions').click();
    cy.get('.info-content').contains('Phytosanitary Certificate (import) for All countries');
    cy.code999L();
  });
  it('XI Condition Code 999L - Not to be shown in UK measures', function() {
    cy.visit('xi/commodities/0702000007');
    cy.get('#measure-20164273').contains('Conditions').click();
    cy.get('.info-content').contains('Phytosanitary Certificate (import) for All countries');
    cy.get('.info-content').should('not.contain', '999L');
  });
  it('XI EPS - Entry Price System on Cherry tomatoes', function() {
    cy.visit('/xi/commodities/0702000007');
    cy.get('#measure-3878181').contains('Conditions').click();
    cy.get('.info-content').contains('Third country duty for All countries');
    cy.get('.info-content').contains('Threshold condition');
    cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
    cy.get('.info-content').contains('The price of your goods is greater than or equal to');
    cy.get('.info-content').contains('Apply the amount of the action');
    cy.get('.info-content').contains('The price of your goods is greater than or equal to 0.00 EUR / 100 kg');
    cy.get('.info-content').contains('Apply the amount of the action 14.40 % + 29.80 EUR / 100 kg');
    cy.get('.info-content').should('not.contain', '999L');
    cy.get('.info-content').should('not.contain', 'Guidance for completing Box 44 or Data Element 2/3');
  });
  // Matt's examples HOTT -1449
  const countries = ['', 'xi'];
  for (let j=0; j<countries.length; j++) {
    it(`${countries[j]} - Animal Health Certificate on frog\'s legs`, function() {
      cy.visit(`${countries[j]}/commodities/0208907000`);
      cy.get('#measure-20170972').contains('Conditions').click();
      cy.get('.info-content').contains('Animal Health Certificate for All countries ');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.contains('Meet the following condition and supply the relevant document code(s) on your declaration. ');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.contains('Enter GBAHC followed by the licence number.');
    });
    it(`${countries[j]} - Organic control on frog\'s legs`, function() {
      cy.visit(`${countries[j]}/commodities/0208907000`);
      cy.get('#measure-20183386').contains('Conditions').click();
      cy.get('.info-content').contains('Import control of organic products for All countries');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.get('.info-content').contains('Complete the statement ‘Excluded from regulation 834/2007’.');
      cy.get('.info-content').contains('Enter the reference number of the Certificate.');
    });
    it(`${countries[j]} - Veterinary control on frog\'s legs`, function() {
      cy.visit(`${countries[j]}/commodities/0208907000`);
      cy.get('#measure-20098001').contains('Conditions').click();
      cy.get('.info-content').contains('Veterinary control for All third countries');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('Y058 + Threshold condition');
      cy.contains('Meet both conditions');
      cy.contains('The weight of your goods does not exceed 2.00 kg');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.get('.info-content').contains('Enter GBCHDyyyy. and the reference number of the CHED-P.');
      cy.get('.info-content').contains('Complete the statement ‘regulation 2019/2122 exempt’.');
      cy.get('.info-content').contains('Complete the statement: ‘Exempt personal consignment’ in the Document Identifier (Second Component).');
    });
    it(`${countries[j]} - Showing a threshold condition on its own - Restriction on entry into free circulation for Switzerland on wine`, function() {
      cy.visit(`${countries[j]}/commodities/2204299310`);
      cy.get('#measure-20101060').contains('Conditions').click();
      cy.get('.info-content').contains('Restriction on entry into free circulation for Switzerland');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('Threshold condition');
      cy.contains('The volume of your goods does not exceed 100.00 l');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.get('.info-content').contains('Enter the country code for the country of issue (GB for the UK) followed by the Measure type (VID) and the reference number of the document.');
    });
    it(`${countries[j]} - Fluorinated gases - multiple condition code groups`, function() {
      cy.visit(`${countries[j]}/commodities/8479899738`);
      cy.get('#measure-20161393').contains('Conditions').click();
      cy.get('.info-content').contains('Import control of fluorinated greenhouse gases for All countries');
      cy.get('.info-content').contains('Meet the following condition and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('Goods not concerned by import prohibition on fluorinated greenhouse gases (as retained in UK law and as applicable in Great Britain)');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.get('.info-content').contains('Complete the statement ‘Excluded from prohibition’.');
    // second conditions 5a/5b info
    // cy.get('div#popup article > .govuk-details  .govuk-details__summary-text').contains('Guidance for completing Box 44 or Data Element 2/3').click();
    });
    it(`${countries[j]} - Waste controls - pair of doc codes paired together`, function() {
      cy.visit(`${countries[j]}/commodities/2804501000`);
      cy.get('#measure-20100004').contains('Conditions').click();
      cy.get('.info-content').contains('Import control - waste for All countries');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('C669 + C670');
      cy.contains('Provide both documents');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.get('.info-content').contains('Enter the reference number of the Information document.');
      cy.contains('Complete the statement ‘Excluded product’.');
      cy.contains('Enter the reference number of the Notification document.');
      cy.contains('Enter the country code for the country of issue (GB for the UK) followed by IWP and the reference number of the movement document.');
    });
    it(`${countries[j]} - Pet food from USA - multiple pairs of doc codes paired together`, function() {
      cy.visit(`${countries[j]}/commodities/2309902000`);
      cy.get('#measure-20101211').contains('Conditions').click();
      cy.get('.info-content').contains('Restriction on entry into free circulation for United States');
      cy.get('.info-content').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('C666 + C668');
      cy.contains('C667');
      cy.contains('C666 + C693');
      cy.contains('Provide both documents');
      cy.contains('Laboratory analysis');
      cy.get('.info-content').should('not.contain', 'No document provided');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.contains('Enter the Certificate reference number followed by the appropriate document status code');
      cy.contains('Enter: ‘Laboratory analysis required’ in Document Identifier (Second Component) and in.');
      cy.contains('Enter the Certificate reference number followed by the appropriate document status code');
      cy.contains('Enter the reference number of the Certificate.');
    });
    // Small brewery Relief - excise duty on beer
    it(`${countries[j]} - Small Brewery Relief - Excise duty on beer`, function() {
      cy.visit(`${countries[j]}/commodities/2203000100`);
      cy.get('#measure--1009514008').contains('Conditions').click();
      cy.get('.info-content').contains('Excises for All countries');
      cy.contains('Threshold condition');
      cy.contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
      cy.contains('5000.00 Gross Production');
      cy.contains('Apply the amount of the action (see components) 9.54 GBP / % vol');
      cy.contains('600000.00 Gross Production');
      cy.contains('Apply the amount of the action (see components) 19.08 GBP / % vol');
      cy.get('.info-content').should('not.contain', '999L');
      cy.get('.info-content').should('not.contain', 'Guidance for completing Box 44 or Data Element 2/3');
      cy.contains('Excise duty on beer from small breweries');
      cy.contains('Excise code 440 - Beer made in the UK – small brewery beer eligible to reduced rates (variable rate, that is, annual production more than 5,000 hectolitres but not exceeding for 60,000 hectolitres)');
      cy.get('div#popup article  a')
          .should('have.attr', 'href').and('include', 'https://www.gov.uk/government/publications/excise-notice-226-beer-duty/excise-notice-226-beer-duty--2#small-brewery-beer');
    });
    // Declarable headings - headings which are also commodities
    it(`${countries[j]} - Headings which are declarable / also commodities- fall back option enabled`, function() {
      cy.visit(`${countries[j]}/commodities/5609000000`);
      cy.get('#measure-20187981').contains('Conditions').click();
      cy.get('.info-content').contains('Import control on cat and dog fur for All countries');
      cy.get('.info-content').contains('Other than cats and dogs fur as mentioned by Regulation (EC) No 1523/2007 (OJ L 343)');
      cy.get('.info-content').contains('Meet the following condition and supply the relevant document code(s) on your declaration.');
      cy.get('.info-content').contains('Other than cats and dogs fur as mentioned by Regulation (EC) No 1523/2007 (OJ L 343)');
      cy.get('.info-content').contains('Guidance for completing Box 44 or Data Element 2/3').click();
      cy.contains('Complete either statement ‘Education and taxidermy only’ or ‘No cat or dog fur’.');
      cy.get('.close [href]').click();
    });
  }
  it('UK Belarus/Russia conditions', function() {
    cy.visit('/commodities/0101210000#export');
    // Belarus conditions
    cy.get('#measure-20185288').contains('Conditions').click();
    cy.get('.info-content').contains('The price of your goods does not exceed 250.00 GBP');
    cy.get('.close [href]').click();
    // Russia conditions
    cy.wait(200);
    cy.get('#measure-20179932').contains('Conditions').click();
    cy.get('.info-content').contains('The price of your goods does not exceed 250.00 GBP / p/st');
    cy.get('.close [href]').click();
  });
});
