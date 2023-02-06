/* eslint-disable camelcase */
/* eslint-disable max-len */
// page title , dynamic content - agreements ,ticket number


// Click Check rules of origin button
Cypress.Commands.add('checkRoO', ()=>{
  cy.contains('UK Integrated Online Tariff ');
  cy.get('div#rules-of-origin  button[name=\'button\']').click();
});

Cypress.Commands.add('RoOContentCountrySelected', (agreement, country, origin )=>{
  cy.contains(`Preferential rules of origin for trading with ${country}`);
  cy.contains(`Preferential tariff treatment reduces the duties you are required to pay when importing or exporting goods to or from ${country}`);
  cy.contains(`In order to qualify for preferential tariff treatment under the ${agreement}, the product must originate in the ${origin} or ${country}.`);
});
Cypress.Commands.add('RoORelatedContent', ()=>{
  cy.get('#rules-of-origin__related-content').contains('Related content');
  cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(1) > a').should('have.attr', 'href', 'https://www.gov.uk/guidance/check-your-goods-meet-the-rules-of-origin');
  // cy.get('nav[role=\'navigation\'] > ul > li:nth-of-type(2) > a').should('have.attr', 'href', `https://www.gov.uk/government/collections/${agreement}`);
});
Cypress.Commands.add('roOTab', ()=>{
  cy.contains('Non-preferential rules of origin');
  cy.contains('Non-preferential rules of origin allows the implementation of several commercial policy measures such as:');
  cy.contains('The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020 (opens in new tab)');
  cy.get('p:nth-of-type(1) > a[target=\'blank\']').should('have.attr', 'href', 'https://www.gov.uk/government/publications/reference-document-for-the-customs-origin-of-chargeable-goods-eu-exit-regulations-2020');
  cy.contains('anti-dumping duties');
  cy.contains('countervailing duties');
  cy.contains('trade embargoes');
  cy.contains('safeguarding measures');
  cy.contains('quantitative restrictions');
  cy.contains('tariff quotas');
  cy.contains('They are also used for trade statistics, public tenders and origin marking.');
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
// Product-specific rules met
Cypress.Commands.add('originMet', (country, code, agreement)=>{
  cy.contains('Product-specific rules met');
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

// proof verification
Cypress.Commands.add('proofVerification', (country)=>{
  cy.contains('Obtaining and verifying proofs of origin');
  cy.contains(`Verification for proving the origin for goods coming from ${country}`);
  cy.contains('Refer to the full text of the Origin Reference Document').click();
  cy.get('.downloadable-document__text').contains('Articles 32 and 33 ');
});

// Duty drawback stage into the RoO journey
Cypress.Commands.add('dutyDrawback', (country, agreement)=>{
  cy.get('.govuk-list').contains('Find out about duty drawback').click();
  cy.contains('Obtaining and verifying proofs of origin');
  cy.contains(`Duty drawback for trade with ${country}`);
  cy.contains('Some trade agreements allow a duty drawback.');
  cy.contains('This means that, if you pay duties on non-originating materials that you use to make a product which you then export under a preferential tariff, you can apply for a refund of those duties.');
  cy.contains('Duty drawback - an example');
  cy.contains('The provision of duty drawback depends on the specifics of the trade agreement.');
  cy.contains(`Prohibition of drawback of, or exemption from, customs duties according to the ${agreement}`);
  cy.get('.govuk-back-link').click();
});

// Direct Transport rule validation
Cypress.Commands.add('directTransport', (agreement)=>{
  cy.get('.govuk-list').contains('Find out about the direct transport rule').click();
  cy.contains('Obtaining and verifying proofs of origin');
  cy.contains(`Direct transport rule for ${agreement}`);
  cy.contains('The purpose of the direct transport rule is to ensure that the goods arriving in the country of import are the same as those which left the country of export without alteration.');
  cy.contains('Refer to the full text of the Origin Reference Document');
  cy.get('.govuk-back-link').click();
});

// Direct Transport rule validation
Cypress.Commands.add('nonAlteration', (country)=>{
  cy.get('.govuk-list').contains('Find out about the non-alteration rule').click();
  cy.contains('Obtaining and verifying proofs of origin');
  cy.contains(`Non-alteration rule for trade with ${country}`);
  cy.contains('The purpose of the non-alteration rule is to ensure that the goods arriving in the country of import are the same as those which left the country of export without alteration.');
  cy.contains('Refer to the full text of the Origin Reference Document');
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
Cypress.Commands.add('cumulation', (country, code, country_short_name, scheme)=>{
  cy.contains('Are your goods originating?');
  cy.contains('Including parts or components from other countries');
  cy.contains('In order to qualify for preferential treatment, you may be able to include parts that come from other countries. This depends on the cumulation rules of the trade agreement, which are described below.');
  cy.contains(`Methods of cumulation in the ${scheme}`);
  cy.contains(`Map showing countries where cumulation may apply to the ${scheme}`);
  cy.get('form#edit_rules_of_origin_steps_cumulation_cumulation  a[target=\'_blank\']').should('have.attr', 'href', `/cumulation_maps/${country}.png`);
  cy.contains('Bilateral cumulation - an example').click();
  cy.contains('insufficient processing clause').should('have.attr', 'href', `/rules_of_origin/${code}/${country_short_name}/sufficient_processing`);
  if (`${country_short_name}` === 'JP') {
    cy.contains('Extended cumulation - an example').click();
    cy.contains('insufficient processing clause').should('have.attr', 'href', `/rules_of_origin/${code}/${country_short_name}/sufficient_processing`);
  } else if (`${country_short_name}` === 'KR') {
    cy.contains('Diagonal cumulation - an example').click();
    cy.should('not.contain.text', 'insufficient processing clause');
  }
  cy.get('.govuk-button').contains('Continue').click();
});
// form#edit_rules_of_origin_steps_cumulation_cumulation > img
// minimal operations
Cypress.Commands.add('minimalOps', (scheme, selection)=>{
  cy.contains('Are your goods originating?');
  cy.contains('Minimal operations: Have non-originating parts been sufficiently processed?');
  cy.contains(`'Insufficient processing' operations according to the ${scheme}`);
  cy.contains('Have non-originating parts been subject to sufficient processing to qualify for preferential treatment?');
  cy.get(`#rules-of-origin-steps-sufficient-processing-sufficient-processing-${selection}-field`).check();
  cy.get('.govuk-button').contains('Continue').click();
});

// product-specific rules
Cypress.Commands.add('prodSpecificRules', (rule, country_short_name)=>{
  cy.contains('Do your goods meet the product-specific rules?');
  cy.contains('Your goods must meet one of these rules in order to qualify for originating status. Select an option to indicate if you meet the rule.');
  cy.contains('CC except from chapter 2.');
  cy.get('div.govuk-radios > div:nth-child(1) > label > p > a').should('have.attr', 'href', '/chapters/02');
  cy.contains('A maximum of 60% of the ex-works price (EXW) is made up of non-originating parts (MaxNOM).');
  cy.get('div.govuk-radios > div:nth-child(2) > label > p > a').should('have.attr', 'href', `/glossary/exw?country=${country_short_name}`);
  cy.get('div.govuk-radios > div:nth-child(2) > label > p > a:nth-child(3)').should('have.attr', 'href', `/glossary/max_nom?country=${country_short_name}`);
  cy.contains('Your goods contain a Regional Value Content (RVC) of at least 45% of the Free on Board (FOB) cost of the goods.');
  cy.get('div.govuk-radios > div:nth-child(3) > label > p > a').should('have.attr', 'href', `/glossary/rvc?country=${country_short_name}`);
  cy.get('div.govuk-radios > div:nth-child(3) > label > p > a:nth-child(3)').should('have.attr', 'href', `/glossary/fob?country=${country_short_name}`);
  cy.contains('Your goods do not meet any of these rules.');
  cy.contains('Introductory notes to the product-specific rules');
  cy.contains('About this commodity code');
  cy.contains(`${rule}`).click();
  cy.get('.govuk-button').contains('Continue').click();
});

// Provide more information about your product
Cypress.Commands.add('moreInfoAboutProduct', (code, selection) => {
  cy.contains('Are your goods originating?');
  cy.contains('Provide more information about your product');
  cy.contains(`The rules of origin for commodity ${code} depend on the type of product that you are trading.`);
  cy.get('.govuk-grid-column-two-thirds > details > summary > span').contains('About this commodity code');
  cy.get('.govuk-radios > div > label').contains(`${selection}`).click();
  cy.get('.govuk-button').contains('Continue').click();
});

// Origin requirement not met - Import
Cypress.Commands.add('rooReqMet', (tradetype, country, code, scheme)=>{
  cy.contains(`${tradetype} commodity ${code} from ${country} to the UK`);
  cy.contains('Product-specific rules met');
  cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${scheme}.`);
});
// Origin requirement not met - Export
Cypress.Commands.add('rooReqMetEx', (tradetype, country, code, scheme)=>{
  cy.contains(`${tradetype} commodity ${code} from ${country}`);
  cy.contains('Product-specific rules met');
  cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${scheme}.`);
});
// Origin not met - Import
Cypress.Commands.add('rooNotMet', (tradetype, country, code, scheme)=>{
  cy.contains(`${tradetype} commodity ${code} from ${country}`);
  cy.contains('Product-specific rules not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');

  // No duty drawback link
  cy.should('not.have.text', 'Find out about duty drawback');

  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.go(-1);
  cy.get('.govuk-warning-text__text').contains('start again').click();
  cy.contains(`Are you importing goods into the UK or into ${country}?`);
});

// Tolerance page verification
Cypress.Commands.add('tolerance', (tradetype, code, country, scheme) => {
  cy.contains('Tolerances');
  cy.contains('Tolerance rules allow you to use a limited quantity of non-originating materials that are normally prohibited by the product specific rule.');
  cy.get('#tolerances-section > p:nth-child(3) > a').contains('Find out more about tolerances').click();
  cy.contains('Are your goods originating?');
  cy.contains('Tolerances');
  cy.contains('‘Tolerances’ represent a provision for the relaxation of the rules of origin under certain conditions.');
  cy.contains(`Tolerances in the ${scheme}`);
  cy.go(-1);
  cy.contains(`${tradetype} commodity ${code} from ${country}`);
  cy.contains('Product-specific rules not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
});

// Click cumulation link on Product-specific rules not met
Cypress.Commands.add('clkCumulationLnk', () => {
  cy.contains('Cumulation rules');
  cy.contains('Check what cumulation rules apply to the movement of goods under the UK-Japan Comprehensive Economic Partnership Agreement.');
  cy.get('#cumulation-section > p:nth-child(3) > a').click();
});

// Origin not met - Import
Cypress.Commands.add('rooNotMetImp', (tradetype, country, code, scheme)=>{
  cy.contains(`${tradetype} commodity ${code} from ${country}`);
  cy.contains('Product-specific rules not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');
  // No duty drawback link
  cy.should('not.have.text', 'Find out about duty drawback');
  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin').click();
});

// Origin not met - Export
Cypress.Commands.add('rooNotMetEx', (tradetype, country1, code, scheme, country2)=>{
  cy.contains(`${tradetype} commodity ${code} from ${country1}`);
  cy.contains('Product-specific rules not met');
  cy.contains(`Your product does not appear to meet the rules of origin requirements for the ${scheme}.`);
  cy.contains('Based on your answers, it is likely that your product does not class as ‘originating’ and cannot benefit from preferential tariff treatment under the agreement.');
  // tolerance link

  // cumulation link
  cy.contains('What\'s next');
  cy.contains('If you have read the flexibilities above and you now consider your goods to be originating in the United Kingdom, read more about obtaining and verifying proofs of origin.');
  cy.contains('Alternatively, if your trade still does not meet the rules of origin, start again.');

  // No duty drawback link
  cy.should('not.have.text', 'Find out about duty drawback');

  cy.get('.govuk-warning-text__text').contains('obtaining and verifying proofs of origin').click();
  cy.contains('Valid proofs of origin');
  cy.go(-1);
  cy.get('.govuk-warning-text__text').contains('start again').click();
  // cy.contains(`Are you importing goods into the UK or into ${country}?`);
  cy.contains(`Are you importing goods into the UK or into ${country2}?`);
});


// Origin not met GSP
Cypress.Commands.add('rooNotMetGSP', (country, code, scheme)=>{
  cy.contains(`Importing commodity ${code} from ${country}`);
  cy.contains('Product-specific rules not met');
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
Cypress.Commands.add('rooNotMetMulti', (trade_selection, country, code, scheme)=>{
  if (`${trade_selection}` === 'Exporting') {
    cy.contains(`${trade_selection} commodity ${code} from the UK to ${country}`);
  } else {
    cy.contains(`${trade_selection} commodity ${code} from ${country}`);
  }
  cy.contains('Product-specific rules not met');
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
});
Cypress.Commands.add('subDivision', (code, subDiv)=>{
  cy.contains('Provide more information about your product');
  cy.contains(`The rules of origin for commodity ${code} depend on the type of product that you are trading.`);
  cy.contains(`${subDiv}`).click();
  cy.get('.govuk-button').contains('Continue').click();
});
Cypress.Commands.add('impDutyBox', (copy)=>{
  cy.get('.govuk-list.govuk-list--bullet').contains(`${copy}`);
});
Cypress.Commands.add('feebackSection', ()=>{
  cy.get('.govuk-inset-text.tariff-inset-meursing').contains('The rules of origin wizard is new functionality.');
  cy.get('.govuk-inset-text.tariff-inset-meursing').contains('Your feedback will help us to improve it.');
  cy.get('.govuk-inset-text a[href^="/feedback"]').contains('feedback');
});
// Verify proofs of origin page
Cypress.Commands.add('proofsOfOriginPage', (commCode, country, country_short_name) => {
  cy.url().should('include', `/rules_of_origin/${commCode}/${country_short_name}/proofs_of_origin`);
  cy.contains(`Importing commodity ${commCode} from ${country} to the UK`);
  cy.contains('Valid proofs of origin');
  cy.contains('Proof of origin - overview');
  cy.contains('Statement on origin').click();
  cy.contains('Importer\'s knowledge').click();
  cy.contains('Next step');
  cy.contains('See detailed processes and requirements for proving the origin for goods');
  cy.contains('How proofs of origin are verified');
  cy.get('.govuk-back-link').contains('Back');
});
