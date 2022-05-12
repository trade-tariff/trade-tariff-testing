/* eslint-disable max-len */
// taken from scenario document
describe('| searchScenarios.spec.js | UK and XI services |', function() {
  const countries = ['', 'xi'];
  for (let j=0; j<countries.length; j++) {
    it(`${countries[j]} - Clicks on a link from a third-party website or from a bookmark - Should redirect to subheading`, function() {
      const commodities = ['0102291000', '0101290000'];
      for (let i=0; i<commodities.length; i++) {
        // 8 digit and 6 digit  non declarable - subheading
        cy.visit(`${countries[j]}/commodities/${commodities[i]}`);
        cy.get('.govuk-heading-l').contains('Subheading');
      }
      // 4 digit non declarable - heading
      cy.visit(`${countries[j]}/commodities/0101000000`);
      cy.get('.govuk-heading-l').contains('Heading');
    });
    it(`${countries[j]} - Enters a commodity code directly or selects from type-ahead in the search bar`, function() {
      cy.visit(`${countries[j]}/browse`);
      // non declarable - heading page
      cy.searchForCommodity2('0101');
      cy.get('.govuk-heading-l').contains('Heading');
      // declarable - commodity page
      cy.searchForCommodity2('0903');
      cy.get('.govuk-heading-l').contains('Commodity');
      // user directly types a 6-digit non-declarable heading into search - subheading page
      cy.searchForCommodity2('010129');
      cy.get('.govuk-heading-l').contains('Subheading');
      // user directly types a 6-digit declarable heading into search - commodity page
      cy.searchForCommodity2('010121');
      cy.get('.govuk-heading-l').contains('Commodity');
      // user directly types a an 8-digit non-declarable heading into search - subheading page
      cy.searchForCommodity2('01022910');
      cy.get('.govuk-heading-l').contains('Subheading');
      // user selects an 8-digit non-declarable heading from type-ahead dropdown into search - subheading page
      cy.searchForCommodity2('0102291000');
      cy.get('.govuk-heading-l').contains('Subheading');
      // user selects a 10-digit declarable heading from type-ahead dropdown into search - commodity page
      cy.searchForCommodity2('0102295911');
      cy.get('.govuk-heading-l').contains('Commodity');
    });
  }
  it(`UK - Clicks on a link from the Quota search tool`, function() {
    // A user clicks a 4-digit non-declarable code (heading).
    // A user clicks a 4-digit declarable code (commodity).
    // A user clicks a 8-digit non-declarable code (subheading).

    const quotaOrders = ['057140', '051218', '050146'];
    const decCodes = ['3920000000', '0409000000', '0102294900'];
    const type = ['Heading', 'Commodity', 'Subheading'];
    const maps = ['m', 'l', 'l'];
    for (let k=0; k<quotaOrders.length; k++) {
      cy.quotaSearch({ordernumber: `${quotaOrders[k]}`, commcode: ' ', country: ' ', day: ' ', month: ' ', year: ' ', critical: '', status: ''});
      cy.get('a[title=\'Reset country picker\'] > .long-text').click();
      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.contains('Quota search results');
      cy.contains(`${decCodes[k]}`).click();
      cy.get(`.govuk-heading-${maps[k]}`).contains(`${type[k]}`);
    // A user clicks a 4-digit declarable code (commodity).
    }
  });
  it.only('UK - subheading from A-Z directs to correct subheading page', function() {
    cy.visit('/a-z-index/a');
    cy.contains('Abscess Needles, Dental').click();
    cy.contains('Subheading 901841 - Other instruments and appliances, used in dental sciences');
  });
});
