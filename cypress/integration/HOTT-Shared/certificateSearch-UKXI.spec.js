/* eslint-disable max-len */
/* eslint-disable camelcase */
describe('🇬🇧 🇪🇺 💡 | certificateSearch - UK & XI | Certificate Search - UK and XI services |', function() {
  const countries = ['uk', 'xi'];
  for (let j=0; j < countries.length; j++) {
    it(`${countries[j]} Certificate Search : 9 - National Document`, function() {
      cy.visit(`${countries[j]}/certificate_search`);
      cy.certificateSearch();

      const ndcerts_ids = ['9100', '9103', '9104', '9105'];
      for (let i = 0; i < ndcerts_ids.length; i++) {
        cy.get('select#type').select('9 - National Document');
        cy.get('input#code')
            .clear()
            .type(`${ndcerts_ids[i]}`);
        //  cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ndcerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : A - Certificate of authenticity`, function() {
      cy.visit(`${countries[j]}/certificate_search`);
      const adcerts_ids = ['022', '023', '030', '017'];
      for (let i = 0; i < adcerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('A - Certificate of authenticity');
        cy.get('input#code')
            .clear()
            .type(`${adcerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${adcerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : C - Other certificates`, function() {
      cy.visit(`${countries[j]}/certificate_search`);
      const ccerts_ids = ['C014', 'C015', 'C017', 'C018', 'C052', 'C084', 'C644', 'C652'];
      for (let i = 0; i < ccerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('C - Other certificates');
        cy.get('input#code')
            .clear()
            .type(`${ccerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ccerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : D - Anti-dumping/countervailing document`, function() {
      cy.visit(`${countries[j]}/certificate_search`);
      const dcerts_ids = ['005', '008', '017'];
      for (let i = 0; i < dcerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('D - Anti-dumping/countervailing document');
        cy.get('input#code')
            .clear()
            .type(`${dcerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${dcerts_ids[i]}`);
      }
    });
    it(`${countries[j]} Certificate Search : E - Export certificate/licence/document from country of origin`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      const ecerts_ids = ['012', '013', '990'];
      for (let i = 0; i < ecerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('E - Export certificate/licence/document from country of origin');
        cy.get('input#code')
            .clear()
            .type(`${ecerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ecerts_ids[i]}`);
      }
    });
    it(`${countries[j]} Certificate Search : H - HANDI, LOOMS certificate`, function() {
      cy.visit(`${countries[j]}/certificate_search`); cy.visit(`${countries[j]}/certificate_search`);
      cy.get('select#type').select('H - HANDI, LOOMS certificate');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });

    it(`${countries[j]} Certificate Search : I - Surveillance certificate/licence/ document issued by one of the Member States`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      const icerts_ids = ['004'];
      for (let i = 0; i < icerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('I - Surveillance certificate/licence/ document issued by one of the Member States');
        cy.get('input#code')
            .clear()
            .type(`${icerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${icerts_ids[i]}`);
      }
    });
    it(`${countries[j]} Certificate Search : K - Tariff quota`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      cy.get('select#type').select('K - Tariff quota');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });

    it(`${countries[j]} Certificate Search : L - Import certificate/licence/document`, function() {
      cy.visit(`${countries[j]}/certificate_search`);


      const lcerts_ids = ['L001'];
      for (let i = 0; i < lcerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('L - Import certificate/licence/document');
        cy.get('input#code')
            .clear()
            .type(`${lcerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${lcerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : N - UN/EDIFACT certificates`, function() {
      cy.visit(`${countries[j]}/certificate_search`);
      const ncerts_ids = ['002', '853', '865', '990', '954'];
      for (let i = 0; i < ncerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('N - UN/EDIFACT certificates');
        cy.get('input#code')
            .clear()
            .type(`${ncerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ncerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : P - Ingredients`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      cy.get('select#type').select('P - Ingredients');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });
    it(`${countries[j]} Certificate Search : R - Export refunds`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      cy.get('select#type').select('R - Export refunds');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });
    it(`${countries[j]} Certificate Search : T - T-Document`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      cy.get('select#type').select('T - T-Document');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });
    it(`${countries[j]} Certificate Search : U - Proofs of origin`, function() {
      cy.visit(`${countries[j]}/certificate_search`);


      const ucerts_ids = ['003', '004', '059', '062'];
      for (let i = 0; i < ucerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('U - Proofs of origin');
        cy.get('input#code')
            .clear()
            .type(`${ucerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ucerts_ids[i]}`);
      }
    });
    it(`${countries[j]} Certificate Search : X - Export licence`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      const xcerts_ids = ['001', '018', '035'];
      for (let i = 0; i < xcerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('X - Export licence');
        cy.get('input#code')
            .clear()
            .type(`${xcerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${xcerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : Y - Particular provisions`, function() {
      cy.visit(`${countries[j]}/certificate_search`);


      const ycerts_ids = ['036', '058', '072', '073', '076', '077', '078', '079', '929', '930', '945', '946', '999'];

      for (let i = 0; i < ycerts_ids.length; i++) {
      // select type of certificate from drop down menu
        cy.get('select#type').select('Y - Particular provisions');
        cy.get('input#code')
            .clear()
            .type(`${ycerts_ids[i]}`);

        cy.get('form#new_search > input[name=\'new_search\']').click();
        // check it contains relevant certificate information as requested
        cy.get('.govuk-heading-l')
            .contains('Certificate search results');
        cy.get('.govuk-table');
        cy.contains(`${ycerts_ids[i]}`);
      }
    });

    it(`${countries[j]} Certificate Search : Z - More certificates`, function() {
      cy.visit(`${countries[j]}/certificate_search`);

      cy.get('select#type').select('Z - More certificates');

      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.get('.govuk-heading-l');
      cy.contains('There are no matching results');
    });
  }
});
