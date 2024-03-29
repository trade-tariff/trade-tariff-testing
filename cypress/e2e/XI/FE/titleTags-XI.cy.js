describe('🇪🇺 💡 | titleTags-XI | Validating page titles tags - meta data -XI', function() {
  it('🧷 Landing Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/sections');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Browse Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/browse');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Tools Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/tools');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 A-Z Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/a-z-index/a');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Updates Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/news');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Help Page - Northern Ireland Online Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/xi/help');
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Section Page - Live animals; animal products - The Northern Ireland (EU) Tariff - GOV.UK', function() {
    cy.visit('/xi/sections/1');
    cy.title().should('eq', 'Live animals; animal products - Northern Ireland Online Tariff - GOV.UK');
  });
  it('🧷 Chapter Page - Live animals - Northern Ireland Online Tariff - GOV.UK', function() {
    cy.visit('/xi/chapters/01');
    cy.title().should('eq', 'Live animals - Northern Ireland Online Tariff - GOV.UK');
  });
  it('🧷 Heading Page - Live horses, asses, mules and hinnies - Northern Ireland Online Tariff - GOV.UK', function() {
    cy.visit('/xi/headings/0101');
    cy.title().should('eq', 'Live horses, asses, mules and hinnies - Northern Ireland Online Tariff - GOV.UK');
  });
  it('🧷 Subheadings Page - Rosin and resin acids - Northern Ireland Online Tariff - GOV.UK', function() {
    cy.visit('/xi/subheadings/3806100000-80');
    cy.title().should('eq', 'Rosin and resin acids - Northern Ireland Online Tariff - GOV.UK');
  });
  it('🧷 Commodity Page - Commodity code 0101210000: Pure-bred breeding animals - Northern Ireland Online Tariff - GOV.UK ', function() {
    cy.visit('/xi/commodities/0101210000');
    cy.log(cy.title());
    cy.title().should('eq', 'Commodity code 0101210000: Pure-bred breeding animals - Northern Ireland Online Tariff - GOV.UK');
  });
});
