/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// NWO + Multi-NonGSP + Insufficient processing = RoO Not met
//
describe.skip('| 602-RoO-e2e-NWO-MultiSchm-NonGSP-InsuffPro.spec | NWO + Multi-NonGSP + Insufficient processing |', function() {
  const trade_type = ['import', 'export'];
  const trade_country = ['Vietnam', 'United Kingdom'];
  const trade_country2 = ['Vietnam', 'the UK'];
  const trade_selection = ['Vietnam', 'UK'];
  for ( let i=0; i<trade_type.length; i++) {
    it(`${trade_type[i]} - NWO + Multi-NonGSP + Insufficient processing  + Vietnam`, function() {
      cy.visit('/commodities/6004100091?country=VN#rules-of-origin');
      // click Check Rules of Origin button
      cy.checkRoO();
      // Select one agreement
      cy.multipleAgreements('Vietnam', 'vietnam');
      // Import
      cy.impOrExp('Vietnam', `${trade_type[i]}`);
      // How Originating is defined
      cy.howOrginating(`${trade_country[i]}`, 'UK-Vietnam Free Trade Agreement');
      // How wholly obtained is defined
      cy.howWhollyObtained('UK-Vietnam Free Trade Agreement');
      // what components
      cy.whatComponents('UK-Vietnam Free Trade Agreement');
      // Wholly Obtained ?
      cy.whollyObtained(`${trade_country2[i]}`, 'no');
      // Your goods are not wholly obtained
      cy.notWhollyObtained(`${trade_selection[i]}`);
      // cumulation
      cy.cumulation('vietnam', 'UK-Vietnam Free Trade Agreement');
      // min Operations met ?
      cy.minimalOps('UK-Vietnam Free Trade Agreement', 'no');
      // Origin requirements NOT met
      cy.rooNotMetMulti('Vietnam', '6004100091', 'UK-Vietnam Free Trade Agreement');
    });
  }
});
