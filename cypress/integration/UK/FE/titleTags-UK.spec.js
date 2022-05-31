describe('🇬🇧 💡 | titleTags-UK | Validating page titles tags - meta data -UK |', function() {
  it('🧷 Landing Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/find_commodity');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Browse Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/browse');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Tools Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/tools');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 A-Z Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/a-z-index/a');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Updates Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/news');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Help Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
    cy.visit('/help');
    cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('🧷 Section Page - Live animals; animal products - UK Integrated Online Tariff - GOV.UK', function() {
    cy.visit('/sections/1');
    cy.title().should('eq', 'Live animals; animal products - UK Integrated Online Tariff - GOV.UK');
  });
  it('🧷 Chapter Page - Live animals - UK Integrated Online Tariff - GOV.UK', function() {
    cy.visit('/chapters/01');
    cy.title().should('eq', 'Live animals - UK Integrated Online Tariff - GOV.UK');
  });
  it('🧷 Headings Page - Live horses, asses, mules and hinnies - UK Integrated Online Tariff - GOV.UK', function() {
    cy.visit('/headings/0101');

    cy.title().should('eq', 'Live horses, asses, mules and hinnies - UK Integrated Online Tariff - GOV.UK');
  });
  it('🧷 Commodity Page - Commodity code 0101210000: Pure-bred breeding animals - UK Integrated Online Tariff - GOV.UK ', function() {
    cy.visit('/commodities/0101210000');

    cy.title().should('eq', 'Commodity code 0101210000: Pure-bred breeding animals - UK Integrated Online Tariff - GOV.UK');
  });
});
