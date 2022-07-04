/* eslint-disable camelcase */
describe('🇪🇺 💡  Additional Code Search -XI services)', function() {
  it(' XI Additional Code Search : 2 - Tariff preference', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const tpadcodes_ids = ['2500', '2501'];
    for (let i = 0; i < tpadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('2 - Tariff preference');
      cy.get('input#code')
          .clear()
          .type(`${tpadcodes_ids[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${tpadcodes_ids[i]}`);
    }
  });
  it(' XI Additional Code Search : 3 - Prohibition/Restriction/Surveillance', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const prsadcodes_ids = ['3000', '3002'];
    for (let i = 0; i < prsadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('3 - Prohibition/Restriction/Surveillance');
      cy.get('input#code')
          .clear()
          .type(`${prsadcodes_ids[i]}`);
      
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${prsadcodes_ids[i]}`);
    }
  });
  it(' XI Additional Code Search : 4 - Restrictions', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const radcodes_ids = ['4008', '4010'];
    for (let i = 0; i < radcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('4 - Restrictions');
      cy.get('input#code')
          .clear()
          .type(`${radcodes_ids[i]}`);
      
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${radcodes_ids[i]}`);
    }
  });


  it(' XI Additional Code Search : 8 - Anti-dumping/countervailing', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const adadcodes_ids = ['8042', '8044'];
    for (let i = 0; i < adadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('8 - Anti-dumping/countervailing');
      cy.get('input#code')
          .clear()
          .type(`${adadcodes_ids[i]}`);
      
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${adadcodes_ids[i]}`);
    }
  });



  it(' XI Additional Code Search : A - Anti-dumping/countervailing', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const adcadcodes_ids = ['057', '097'];
    for (let i = 0; i < adcadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('A - Anti-dumping/countervailing');
      cy.get('input#code')
          .clear()
          .type(`${adcadcodes_ids[i]}`);
      
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${adcadcodes_ids[i]}`);
    }
  });


  it(' XI Additional Code Search : B - Anti-dumping/countervailing', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const badcadcodes_ids = ['001'];
    for (let i = 0; i < badcadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('B - Anti-dumping/countervailing');
      cy.get('input#code')
          .clear()
          .type(`${badcadcodes_ids[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${badcadcodes_ids[i]}`);
    }
  });

  it(' XI Additional Code Search : C - Anti-dumping/countervailing', function() {
    cy.visit('/xi/additional_code_search');
    cy.contains('Search by Additional Code');

    const cadcadcodes_ids = ['046', '047'];
    for (let i = 0; i < cadcadcodes_ids.length; i++) {
      // select type of certificate from drop down menu
      cy.get('select#type').select('C - Anti-dumping/countervailing');
      cy.get('input#code')
          .clear()
          .type(`${cadcadcodes_ids[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      // check it contains relevant certificate information as requested
      cy.get('.govuk-heading-l')
          .contains('Additional code search results');
      cy.get('.govuk-table');
      cy.contains(`${cadcadcodes_ids[i]}`);
    }
  });
});
