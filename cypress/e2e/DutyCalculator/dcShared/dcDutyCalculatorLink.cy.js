 
describe('💡 | dcDutyCalculatorLink | Duty Cal link on Comcodes + supressed on headings -  UK services |', function() {
  const country = ['', 'xi'];
  for (let j = 0; j < country.length; j++) {
    //   console.log(j)
    it(`${country[j]} - Duty calculator link to be suppressed on commodities which are also headings `, function() {
      const comms = ['1801000000', '0510000000', '8804000000', '2509000000', '2802000000', '3101000000', '4004000000', '4812000000', '5001000000', '4112000000', '4705000000'];
      for (let i=0; i<comms.length; i++) {
        cy.visit(`${country[j]}/sections`);
        cy.searchForCommodity(`${comms[i]}`);
        cy.checkCommPage(`${comms[i]}`);
        cy.contains('Duty calculation').should('not.exist');
      }
    });
    it(`${country[j]} - Duty calculator link to be suppressed on headings `, function() {
      const headings = ['1801', '8804', '2509', '2802', '3101', '4004', '4812', '5001', '4112', '4705'];
      for (let i=0; i<headings.length; i++) {
        cy.visit(`${country[j]}/headings/${headings[i]}`);
        cy.checkCommPage(`${headings[i]}000000`);
        cy.contains('Duty calculation').should('not.exist');
      }
    });
    it(`${country[j]} - Duty calculator link to be available on commodities`, function() {
      const comms2 = ['8905101000', '0208907000'];
      const comms3 = ['8905 1010 00', '0208 9070 00'];
      for (let i=0; i<comms2.length; i++) {
        cy.visit(`${country[j]}/sections`);
        cy.searchForCommodity(`${comms2[i]}`);
        cy.checkCommPage(`${comms2[i]}`);
        cy.contains('Use our tariff duty calculator');
        cy.contains(`work out the duties and taxes applicable to the import of commodity ${comms3[i]}`);
      }
    });
  }
});
