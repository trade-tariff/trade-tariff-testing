/* eslint-disable max-len */
describe(' | updatesTab.spec.js | updates page on UK and XI services', function() {
  it('Updates CN21 -> CN22 page', function() {
    const countries = ['', 'xi'];
    for (let i=0; i<countries.length; i++) {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('Updates').click();
      cy.contains('Latest news');
      cy.contains('UK Goods classification 2021 to 2022 correlation table');
      cy.contains('correlation of commodity codes, at 8-digit level, from the 2021 Tariff to that of 2022').click();
      cy.contains('UK goods classification 2021 to 2022 correlation table');
      cy.contains('The table below shows the correlation of commodity codes to the 8-digit level from the 2021 tariff to that of 2022. This incorporates the changes made to the Harmonised System Nomenclature for 2022 (opens in new tab) by the WCO.');
      cy.contains('Commodity code changes are currently available to 8-digits only. We will update this page with 10-digit changes as soon as they are available.');
      cy.contains('Ex: means that the content of the code for the year 2022 comes partly from the code of the previous year which can be found opposite.');
    }
  });
});
