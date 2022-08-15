/* eslint-disable max-len */
// page title , dynamic content - agreements ,ticket number

// Click Check rules of origin button
Cypress.Commands.add('checkRoO', ()=>{
  cy.contains('UK Integrated Online Tariff ');
  cy.get('div#rules-of-origin  button[name=\'button\']').click();
});
// import or export
Cypress.Commands.add('impOrExp', (country, selection)=>{
  cy.contains('Details of your trade');
  cy.contains(`Are you importing goods into the UK or into ${country}?`);
  cy.get(`#rules-of-origin-steps-import-export-import-or-export-${selection}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
});
Cypress.Commands.add('multipleAgreements', (country, selection)=>{
  cy.contains('Details of your trade');
  cy.contains(`Select agreement for trading with ${country}`);
  cy.get(`#rules-of-origin-steps-scheme-scheme-code-${selection}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
});

// how originating is defined
Cypress.Commands.add('howOrginating', (country, agreement)=>{
  cy.contains('Are your goods originating?');
  cy.contains(`How to work out if your goods are classed as 'originating' in ${country}`);
  cy.get('.govuk-body-l').contains(`${agreement}`);
  cy.contains(`Click on the ‘Continue’ button to view the definition of ‘wholly obtained’ in the ${agreement}.`);
  cy.get('.govuk-button').contains('Continue').click();
});

// how wholly obtained is defined
Cypress.Commands.add('howWhollyObtained', (agreement)=>{
  cy.contains('Are your goods originating?');
  cy.contains(`How 'wholly obtained' is defined in the ${agreement}`);
  cy.contains(`Click on the ‘Continue’ button to see which parts and processes should be included or disregarded in determining originating status for the ${agreement}.`);
  cy.get('.govuk-button').contains('Continue').click();
});

Cypress.Commands.add('whatComponents', (agreement)=>{
  cy.contains('Are your goods originating?');
  cy.contains('What components do you need to take into account?');
  cy.contains('In determining whether a product originates in a given country, you should disregard the origin of neutral elements, meaning equipment and materials used in the production, but not physically incorporated into the final product, such as fuel, tools or machinery.');
  cy.contains(`Neutral elements in the ${agreement}`);
  cy.contains(`Packing materials in the ${agreement}`);
  cy.contains(`Accessories, spare parts and tools in the ${agreement}`);
  cy.contains(`Click on the 'Continue' button to indicate if your goods are wholly obtained, based on the rules of the ${agreement}.`);
  cy.get('.govuk-button').contains('Continue').click();
});
// Are your goods Wholly obtained?
Cypress.Commands.add('whollyObtained', (country, select)=>{
  cy.contains('Are your goods originating?');
  cy.contains(`Are your goods wholly obtained in ${country}`);
  cy.get(`#rules-of-origin-steps-wholly-obtained-wholly-obtained-${select}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
});
// Origin requirements met
Cypress.Commands.add('originMet', (country, code, agreement)=>{
  cy.contains('Origin requirements met');
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${agreement}.`);
  // links
  cy.get('.govuk-list').contains('See valid proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.get('.govuk-back-link').click();

  cy.get('.govuk-list').contains('See detailed processes and requirements for proving the origin for goods').click();
  cy.contains('Obtaining and verifying proofs of origin');
  cy.get('.govuk-back-link').click();

  cy.get('.govuk-list').contains('How proofs of origin are verified').click();
  cy.contains('Obtaining and verifying proofs of origin');
  cy.get('.govuk-back-link').click();
});

// Importing page - GSP
Cypress.Commands.add('importGSP', (code, country)=>{
  cy.contains(`Trading commodity ${code} with ${country}`);
  cy.contains('Importing goods into the United Kingdom from countries which belong to the GSP scheme');
  cy.get('.govuk-body-l').contains('Generalised System of Preferences (GSP)').click();
  cy.contains('Trading with developing nations');
  cy.go(-1);
  cy.contains(`Importing goods from ${country}`);
  cy.get('.govuk-button').contains('Continue').click();
});
// not Wholly Obtained
Cypress.Commands.add('notWhollyObtained', (country)=>{
  cy.contains('Are your goods originating?');
  cy.contains('Your goods are not wholly obtained');
  cy.contains(`If your product is not wholly obtained in ${country}, it will have to comply with other product-specific rules.`);
  cy.get('.govuk-button').contains('Continue').click();
});
// including parts
Cypress.Commands.add('cumulation', (scheme)=>{
  cy.contains('Are your goods originating?');
  cy.contains('Including parts or components from other countries');
  cy.contains('In order to qualify for preferential treatment, you may be able to include parts that come from other countries. This depends on the cumulation rules of the trade agreement, which are described below.');
  cy.contains(`Cumulation in the ${scheme}`);
  cy.get('.govuk-button').contains('Continue').click();
});
// minimal operations
Cypress.Commands.add('minimalOps', (scheme, selection)=>{
  cy.contains('Are your goods originating?');
  cy.contains('Minimal operations: Have non-originating parts been sufficiently processed?');
  cy.contains(`'Insufficient processing' operations according to the ${scheme}`);
  cy.contains('Have non-originating parts been subject to sufficient processing to qualify for preferential treatment?');
  cy.get(`#rules-of-origin-steps-sufficient-processing-sufficient-processing-${selection}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
});

// Origin requirement not met
Cypress.Commands.add('rooReqMet', (country, code, scheme)=>{
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains('Origin requirements met');
  cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${scheme}.`);
});
// Origin not met
Cypress.Commands.add('rooNotMet', (country, code, scheme)=>{
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains('Rules of Origin not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');
  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.go(-1);
  cy.get('.govuk-warning-text__text').contains('start again').click();
  cy.contains(`Are you importing goods into the UK or into ${country}?`);
});

// Origin not met GSP
Cypress.Commands.add('rooNotMetGSP', (country, code, scheme)=>{
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains('Rules of Origin not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');
  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.go(-1);
  cy.get('.govuk-warning-text__text').contains('start again').click();
  cy.contains(`Importing goods into the United Kingdom from countries which belong to the GSP scheme`);
});
// Origin not met non GSP-multipleAgreements
Cypress.Commands.add('rooNotMetMulti', (country, code, scheme)=>{
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains('Rules of Origin not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');
  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.go(-1);
  cy.get('.govuk-warning-text__text').contains('start again').click();
  cy.contains(`Select agreement for trading with ${country}`);
});
Cypress.Commands.add('prodSpecRules', (rule)=>{
  cy.contains('Do your goods meet the product-specific rules?');
  cy.contains('Your goods must meet one of these rules in order to qualify for originating status. Select an option to indicate if you meet the rule.');
  cy.contains(`${rule}`).click();
  // cy.get(`#rules-of-origin-steps-product-specific-rules-rule-${rule}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
} );
Cypress.Commands.add('subDivision', (code, subDiv)=>{
  cy.contains('Provide more information about your product');
  cy.contains(`The rules of origin for commodity ${code} depend on the type of product that you are trading.`);
  cy.contains(`${subDiv}`).click();
  cy.get('.govuk-button').contains('Continue').click();
})
