
import dayjs from 'dayjs';

const currentDate = dayjs().format('DD');
const currentMonth = dayjs().format('MM');
const currentYear = dayjs().format('YYYY');

beforeEach(() => {
    cy.clearCookies();
});

Cypress.Commands.add('axeIgnoreVio', (destination) => {
    cy.injectAxe();
  cy.checkA11y(null, null, (violations) => {
    cy.log('Accessibility Violations:', violations);
    violations.forEach(v => {
      cy.log(`Violation: ${v.id} - ${v.description}`);
    });
  }, true);
  });

Cypress.Commands.add('axeValidDate', () => {
    cy.contains('When will the goods be imported?');
    cy.title().should('eq', 'When will the good be imported - Online Tariff Duty calculator');
    cy.get('#steps_import_date_import_date_3i').click();
    cy.get('#steps_import_date_import_date_3i').clear();
    cy.get('#steps_import_date_import_date_3i').type(currentDate);
    cy.get('#steps_import_date_import_date_2i').click();
    cy.get('#steps_import_date_import_date_2i').clear();
    cy.get('#steps_import_date_import_date_2i').type(currentMonth);
    cy.get('#steps_import_date_import_date_1i').click();
    cy.get('#steps_import_date_import_date_1i').clear();
    cy.get('#steps_import_date_import_date_1i').type(currentYear);
    cy.axeIgnoreVio();
    cy.contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeSelectDestination', (destination) => {
    cy.contains('Which part of the UK are you importing into?');
    cy.title().should('eq', 'Which part of the UK are you importing into - Online Tariff Duty calculator');
    if (destination === 'xi') {
      cy.get('#steps-import-destination-import-destination-xi-field').check();
    } else {
      cy.get('#steps-import-destination-import-destination-uk-field').check();
    }
    cy.contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeOriginList', (origin) => {
    cy.contains('Where are the goods coming from?');
    cy.title().should('eq', 'Which country are the goods dispatched from - Online Tariff Duty calculator');
    cy.get('#steps-country-of-origin-country-of-origin-field').click();
    cy.get('#steps-country-of-origin-country-of-origin-field').clear();
    cy.get('#steps-country-of-origin-country-of-origin-field').type(origin.value);
    cy.contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeNoDuty', (_options) => {
    cy.contains('There is no import duty to pay');
    cy.title().should('eq', 'There is no import duty to pay - Online Tariff Duty calculator');
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeCheckRoO', ()=>{
    cy.contains('UK Integrated Online Tariff ');
    cy.get('div#rules-of-origin  button[name=\'button\']').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeImpOrExp', (country, selection)=>{
    cy.contains('Details of your trade');
    cy.contains(`Are you importing goods into the UK or into ${country}?`);
    cy.get(`#rules-of-origin-steps-import-export-import-or-export-${selection}-field`).check();
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeHowOrginating', (country, agreement)=>{
    cy.contains('Are your goods originating?');
    cy.contains(`How to work out if your goods are classed as 'originating' in ${country}`);
    cy.get('.govuk-body-l').contains(`${agreement}`);
    cy.contains(`Click on the ‘Continue’ button to view the definition of ‘wholly obtained’ in the ${agreement}.`);
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeHowWhollyObtained', (agreement)=>{
    cy.contains('Are your goods originating?');
    cy.contains(`How 'wholly obtained' is defined in the ${agreement}`);
    cy.contains(`Click on the ‘Continue’ button to see which parts and processes should be included or disregarded in determining originating status for the ${agreement}.`);
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeWhatComponents', (agreement)=>{
    cy.contains('Are your goods originating?');
    cy.contains(`Neutral elements in the ${agreement}`);
    cy.contains(`Packing materials in the ${agreement}`);
    cy.contains(`Accessories, spare parts and tools in the ${agreement}`);
    cy.contains(`Click on the 'Continue' button to indicate if your goods are wholly obtained, based on the rules of the ${agreement}.`);
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeWhollyObtained', (country, select)=>{
    cy.get(`#rules-of-origin-steps-wholly-obtained-wholly-obtained-${select}-field`).check();
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeNotWhollyObtained', (country)=>{
    cy.contains('Are your goods originating?');
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeCumulation', (country, code, countryShortName, scheme)=>{
    cy.contains('Are your goods originating?');
    cy.get('form#edit_rules_of_origin_steps_cumulation_cumulation  a[target=\'_blank\']').should('have.attr', 'href', `/cumulation_maps/${country}.png`);
    cy.contains('Bilateral cumulation - an example').click();
    cy.contains('insufficient processing clause').should('have.attr', 'href', `/rules_of_origin/${code}/${countryShortName}/sufficient_processing`);
    if (`${countryShortName}` === 'JP') {
      cy.contains('Extended cumulation - an example').click();
      cy.contains('insufficient processing clause').should('have.attr', 'href', `/rules_of_origin/${code}/${countryShortName}/sufficient_processing`);
    } else if (`${countryShortName}` === 'KR') {
      cy.contains('Diagonal cumulation - an example').click();
      cy.should('not.contain.text', 'insufficient processing clause');
    }
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeMinimalOps', (scheme, selection)=>{
    cy.contains('Are your goods originating?');
    cy.get(`#rules-of-origin-steps-sufficient-processing-sufficient-processing-${selection}-field`).check();
    cy.get('.govuk-button').contains('Continue').click();
    cy.axeIgnoreVio();
  });

  Cypress.Commands.add('axeRooNotMet', (tradetype, country, code, scheme)=>{
    cy.contains(`${tradetype} commodity ${code} from ${country}`);
    cy.contains('Product-specific rules not met');
    // tolerance link
  
  
    // No duty drawback link
    cy.should('not.have.text', 'Find out about duty drawback');
  
    cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.go('back');
    cy.get('.govuk-warning-text__text').contains('start again').click();
    cy.contains(`Are you importing goods into the UK or into ${country}?`);
    cy.axeIgnoreVio();
  });

