/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable camelcase */
describe('🇬🇧 💡 | A-Z - UK and XI services |', function() {
  const country = ['uk', 'xi'];
  const titles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  it('All links accessible', function() {
    for (let j = 0; j < country.length; j++) {
      const az_ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const AZ_ids = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      for (let i = 0; i < az_ids.length; i++) {
        // select alphabet from list
        cy.visit(`${country[j]}/a-z-index/${az_ids[i]}`);
        cy.contains('A–Z of Classified Goods');
        cy.get('.govuk-table__caption')
            .contains(`${AZ_ids[i]}`);
        cy.contains('Commodity').should('not.exist');
      }
    }
  });
  it('Selecting specific item from list - Heading ', function() {
    for (let j = 0; j < country.length; j++) {
      cy.visit(`${country[j]}/a-z-index/s`);
      cy.get('.govuk-main-wrapper')
          .contains('Scanning Electron Microscopes')
          .click();
      cy.contains('Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
    }
  });
  it('Selecting specific item from list - Chapter ', function() {
    for (let j = 0; j < country.length; j++) {
      cy.visit(`${country[j]}/a-z-index/i`);
      cy.get('.govuk-main-wrapper')
          .contains('Insects')
          .click();
      cy.get('.service.govuk-width-container > nav > ol > li:nth-child(4)').contains('Chapter').click();
      cy.contains('Choose the heading that best matches your goods');
    }
  });
});
