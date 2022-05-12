describe.skip('| specialBanner.spec.js | special banners on both UK and XI services', function() {
//
  const country = ['xi', 'uk'];
  for (let i=0; i<country.length; i++) {
    it(`🇷🇺 🇺🇦  ${country[i]} Russia Sanctions banner`, function() {
      const titles = ['Northern Ireland Online Tariff', 'UK Integrated Online Tariff'];
      const pages = ['find_commodity', 'browse', 'a-z-index/a', 'tools', 'help', 'commodities/0702000007'];
      for (let j =0; j< pages.length; j++) {
        cy.visit(`${country[i]}/${pages[j]}`);
        cy.contains(`${titles[i]}`);
        cy.specialBanner();
      }
    });
  }
});
