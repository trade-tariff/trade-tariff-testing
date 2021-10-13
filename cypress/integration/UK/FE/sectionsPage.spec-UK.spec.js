/* eslint-disable max-len */
describe('🇬🇧 💡 🔍  | sectionsPage.spec-UK | Sections page content validation |', function() {
  it('Search the tariff text/box visible', function() {
    cy.visit('/sections');
    cy.get('.govuk-label').should('be.visible');
    cy.get('.js-commodity-picker-select.js-show  input#q').should('be.visible');
  });
  it('Top menu section displayed ', function() {
    cy.url().should('include', 'sections', {timeout: 5000});
    cy.visit('/sections');
    cy.get('.govuk-header ');
    cy.contains('Search or browse the Tariff');
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Additional code').should('not.exist');
    cy.contains('Certificate').should('not.exist');
    cy.contains('Footnotes').should('not.exist');
    cy.contains('Quotas').should('not.exist');
    cy.contains('CAS').should('not.exist');
    cy.contains('Exchange rates').should('not.exist');
    cy.contains('Forum').should('not.exist');
  });
  it('All 21 sections titles displayed ', function() {
    cy.url().should('include', 'sections', {timeout: 5000});
    cy.contains('All sections');
    cy.contains('Section title');
    cy.contains('Section');
    cy.contains('Chapters');
    cy.get('tr:nth-of-type(1) > .govuk-table__cell.title > a');
    cy.contains(' Live animals; animal products');
    cy.contains('Vegetable products');
    cy.contains(' Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes');
    cy.contains(' Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes');
    cy.contains(' Mineral products');
    cy.contains(' Products of the chemical or allied industries');
    cy.contains(' Plastics and articles thereof; rubber and articles thereof');
    cy.contains(' Raw hides and skins, leather, furskins and articles thereof; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silkworm gut)');
    cy.contains(' Wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basket-ware and wickerwork');
    cy.contains(' Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard; paper and paperboard and articles thereof');
    cy.contains(' Textiles and textile articles');
    cy.contains(' Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair');
    cy.contains(' Articles of stone, plaster, cement, asbestos, mica or similar materials; ceramic products; glass and glassware');
    cy.contains(' Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal and articles thereof; imitation jewellery; coins');
    cy.contains('Base metals and articles of base metal');
    cy.contains('Machinery and mechanical appliances; electrical equipment; parts thereof, sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles');
    cy.contains('Vehicles, aircraft, vessels and associated transport equipment');
    cy.contains('Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; clocks and watches; musical instruments; parts and accessories thereof');
    cy.contains('Arms and ammunition; parts and accessories thereof');
    cy.contains('Miscellaneous manufactured articles');
    cy.contains('Works of art, collectors\' pieces and antiques');
  });
});
