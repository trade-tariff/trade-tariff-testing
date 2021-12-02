describe('| dcCommodityCodeLink | Duty Calculation link on commodities', function() {
  const country = ['uk', 'xi'];
  const destination = ['United Kingdom', 'Northern Ireland'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
  const commcodes = ['0304829010', '0804100030'];

  for (let i = 0; i < country.length; i++) {
    it(`Duty Calculator link on Commodity page ${country[i]} `, function() {
      cy.visit(`/duty-calculator/${country[i]}/${commcodes[i]}/import-date`);
      //    cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=${commcodes[i]}`)
      cy.contains(`${pagetitles[i]}`);
      cy.contains('About this commodity code').click();
      cy.get('.govuk-details  .govuk-link').click();
      cy.checkCommPage(`${commcodes[i]}`);
      // cy.checkCommPage('0409000000');
      cy.contains(`${pagetitles[i]}`);
      cy.contains('Use our tariff duty calculator to work out the');
      cy.contains(`duties applicable to the import of commodity ${commcodes[i]} into the ${destination[i]}`);
      cy.get('.govuk-grid-row.import-and-export-boxes .govuk-link').click();
      cy.contains('When will the goods be imported?');
    });
  }
});
