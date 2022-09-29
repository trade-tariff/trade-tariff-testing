/* eslint-disable camelcase */
describe('🇪🇺 ⚙️ quotasPRV2api-XI | XI-version v2 api Quotas , P&R suppression', function() {
  // ----------------Quotas to be suppressed for XI -------------
  it('1.Quotas:046 Tariff quota/ceiling -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/6301909021')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '122');
        });
  });

  it('2.Quotas:122-Non Preferential quota -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/1006209600#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '122');
        });
  });
  it('3.Quotas:123 - Non preferential quota under end use -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/1701131000#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '123');
        });
  });
  it('4.Quotas:143 Preferential tariff quota -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/1601009991#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '143');
        });
  });
  it('5.Quotas:146 Preferential tariff quota under end-use -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/0709921000#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '146');
        });
  });
  it('6.Quotas:147 Customs Union Quota -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/1806208012#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '147');
        });
  });
  it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/1701149000#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '143');
        });
  });
  // ---------------------------National Prohibitions and restrictions (P&R)---------------------------
  it('1.P&R:AHC - Animal Health Certificate -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/6403990510#import.json')
        .then((response) => {
          cy.doesNotHaveMeasureType(response, '350');
        });
  });
  it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition -   suppressed ', function() {
    cy.request('/xi/api/v2/commodities/9305200010#import.json').then((response) => {
      cy.doesNotHaveMeasureType(response, '351');
    });
  });
  it('3.P&R:ATT - Attestation Document (horticulture and potatoes -   suppressed )', function() {
    cy.request('/xi/api/v2/commodities/1210209099#import.json').then((response) => {
      cy.doesNotHaveMeasureType(response, '352');
    });
    // exports
    it('4.P&R:CEX - DCMS Open General Export Licence -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/9702900010#export').then((response) => {
        cy.doesNotHaveMeasureType(response, '353');
      });
    });
    // exports
    it('6.P&R:COE - Home Office Controlled Drugs (export) -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/2934910000#export').then((response) => {
        cy.doesNotHaveMeasureType(response, '354');
      });
    });
    it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/0806101090#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '355');
      });
    });
    it('8.P&R:CVD - Common Veterinary Entry Document (CVED) -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/1605531090#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '410');
      });
    });
    // export
    it('12.P&R:EQC Certificate of Conformity -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/0709939000#export').then((response) => {
        cy.doesNotHaveMeasureType(response, '357');
      });
    });
    // export
    it('14.P&R:HOP Home Office pre-cursor chemical authorisation -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/2932940000#export').then((response) => {
        cy.doesNotHaveMeasureType(response, '358');
      });
    });

    it('15.P&R:HSE Health and Safety Executive (imports) -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/3102309000#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '359');
      });
    });
    it('17.P&R:PHC-Phytosanitary Certificate (import) -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/0809290000#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '360');
      });
    });
    // export
    it.skip('18.P&R:PRE Home Office Pre-cursor chemicals -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/2915240000#export').then((response) => {
        cy.doesNotHaveMeasureType(response, '361');
      });
    });
    it('19.P&R:PRT Home Office Controlled Drugs (import) -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/1211500000#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '362');
      });
    });
    it('20.P&R:QRC Quarantine Release Certificate -   suppressed ', function() {
      cy.request('/xi/api/v2/commodities/4403219090#import.json').then((response) => {
        cy.doesNotHaveMeasureType(response, '363');
      });
    });
  });
});
