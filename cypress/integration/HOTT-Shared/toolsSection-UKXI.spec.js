/* eslint-disable max-len */
describe('🇪🇺 🇬🇧 💡 | toolsSection-UKXI | Tools Section - breadcrumbs  - UK and XI services |', function() {
  const countries = ['uk', 'xi'];
  for ( let i =0; i< countries.length; i++) {
    it(`Tools Section in header ${countries[i]}`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('.govuk-header').should('be.visible', 'The Online Trade Tariff')
          .contains('Tools').click();
      cy.contains('Tariff tools');

      cy.contains('Certificate, licenses and documents');
      cy.contains('Search for certificates, licenses and other document codes.');

      cy.contains('Additional codes');
      cy.contains('Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.');

      cy.contains('Footnote Search');
      cy.contains('Search the tariff for footnotes');

      cy.contains('Chemicals');
      cy.contains('Search the tariff for chemicals by CAS Registry Number (RN)');
    });

    it(` Certificates ,licences and documents - breadcrumbs ${countries[i]}`, function() {
      cy.visit(`${countries[i]}/certificate_search`);
      cy.contains('Search by Certificate');
      cy.get('.govuk-breadcrumbs')
          .contains('Certificate');
      cy.get('.govuk-breadcrumbs__list')
          .contains('Tools').click();
      cy.contains('Tariff tools');
    });
    it(`Additional codes - breadcrumbs ${countries[i]}`, function() {
      cy.visit(`${countries[i]}/additional_code_search`);
      cy.contains('Search by Additional Code');
      cy.get('.govuk-breadcrumbs')
          .contains('Additional codes');
      cy.get('.govuk-breadcrumbs__list')
          .contains('Tools').click();
      cy.contains('Tariff tools');
    });

    it(`Footnote Search - breadcrumbs ${countries[i]}`, function() {
      cy.visit(`${countries[i]}/footnote_search`);
      cy.get('.govuk-breadcrumbs')
          .contains('Footnote Search');
      cy.get('.govuk-breadcrumbs__list')
          .contains('Tools').click();
      cy.contains('Tariff tools');
    });
    it(` Chemicals - breadcrumbs ${countries[i]}`, function() {
      cy.visit(`${countries[i]}/chemical_search`);
      cy.contains('Search by Chemical');
      cy.get('.govuk-breadcrumbs')
          .contains('Chemicals');
      cy.get('.govuk-breadcrumbs__list')
          .contains('Tools').click();
      cy.contains('Tariff tools');
    });
  }
  it(' Quotas - breadcrumbs - UK ', function() {
    cy.visit('/tools');
    cy.get('.govuk-list')
        .contains('Quotas').click();
    cy.contains('Search for quotas');
    cy.get('.govuk-breadcrumbs')
        .contains('Quotas');
    cy.get('.govuk-breadcrumbs__list')
        .contains('Tools').click();
    cy.contains('Tariff tools');
    cy.get('.govuk-breadcrumbs__list')
        .contains('Home').click();
    //cy.contains('Look up commodity codes, duty and VAT rates');;
  });
  it(' Meursing Code finder -XI', function() {
    cy.visit('/xi/tools');
    // add breadcrumbs ?
    cy.contains('Find the Meursing code for your composite agrifood.');
    cy.contains('Meursing code finder').click();
    cy.contains('Look up a Meursing code');
  });
});
