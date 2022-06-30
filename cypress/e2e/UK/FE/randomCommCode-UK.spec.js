/* eslint-disable camelcase */
describe.skip('🇬🇧 💡 | randomCommCode-UK  | random comm code test |', function() {
  it('💻 Commodity Search - random codes', function() {
    cy.fixture(`randomcommcodes.csv`).then((fixture) => {
      const randomcommcodes_ids = fixture.split(',');

      for (let i = 0; i < randomcommcodes_ids.length; i++) {
        cy.visit('/find_commodity');
        cy.searchForCommodity(`${randomcommcodes_ids[i]}`);

        cy.checkCommPage(`${randomcommcodes_ids[i]}`);
      }
    });
  });
});
