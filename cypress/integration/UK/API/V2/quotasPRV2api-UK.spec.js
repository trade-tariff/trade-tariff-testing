/* eslint-disable camelcase */
describe('🇬🇧 ⚙️ | quotasPRV2api-UK | UK- version v2 api Quotas , P&R to be availabe ', function() {
  // ----Quotas to be available for UK version  -----
  it('1.Quotas:046 Tariff quota/ceiling - available', function() {
    cy.request('/api/v2/commodities/1006209600')
        .then((response) => {
          cy.hasMeasureType(response, '122', 'Non preferential tariff quota');
        });
  });
  it('2.Quotas:122-Non Preferential quota - available', function() {
    cy.request('/api/v2/commodities/1006209600')
        .then((response) => {
          cy.hasMeasureType(response, '122', 'Non preferential tariff quota');
        });
  });
  it('3.Quotas:123 - Non preferential quota under end use - available', function() {
    cy.request('/api/v2/commodities/1701131000')
        .then((response) => {
          cy.hasMeasureType(response, '123', 'Non preferential tariff quota under authorised use');
        });
  });

  it('4.Quotas:143 Preferential tariff quota - available', function() {
    cy.request('/api/v2/commodities/1601009991')
        .then((response) => {
          cy.hasMeasureType(response, '143', 'Preferential tariff quota');
        });
  });

  it('5.Quotas:146 Preferential tariff quota under end-use - available', function() {
    cy.request('/api/v2/commodities/0709921000')
        .then((response) => {
          cy.hasMeasureType(response, '146', 'Preferential tariff quota under authorised use');
        });
  });

  it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota - available', function() {
    cy.request('/api/v2/commodities/1701149000')
        .then((response) => {
          cy.hasMeasureType(response, '143', 'Preferential tariff quota');
        });
  });

  // ---------------------------National Prohibitions and restrictions (P&R)---------------------------
  it('1.P&R:AHC - Animal Health Certificate - available', function() {
    cy.request('/api/v2/commodities/6403990510')
        .then((response) => {
          cy.hasMeasureType(response, '350', 'Animal Health Certificate');
        });
  });

  it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition - available', function() {
    cy.request('/api/v2/commodities/9305200010').then((response) => {
      cy.hasMeasureType(response, '351', 'Health and Safety Executive Import Licensing Firearms and Ammunition');
    });
  });

  it('3.P&R:ATT - Attestation Document (horticulture and potatoes - available)', function() {
    cy.request('/api/v2/commodities/1210209099').then((response) => {
      cy.hasMeasureType(response, '352', 'Attestation Document (horticulture and potatoes)');
    });
  });

  // exports
  it('4.P&R:CEX - DCMS Open General Export Licence - available', function() {
    cy.request('/api/v2/commodities/9702900010').then((response) => {
      cy.hasMeasureType(response, '353', 'DCMS Open General Export Licence');
    });
  });

  // exports
  it('6.P&R:COE - Home Office Controlled Drugs (export) - available', function() {
    cy.request('/api/v2/commodities/2934910000').then((response) => {
      cy.hasMeasureType(response, '354', 'Home Office Controlled Drugs (export)');
    });
  });

  it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK - available', function() {
    cy.request('/api/v2/commodities/0806101090').then((response) => {
      cy.hasMeasureType(response, '355', 'HMI Conformity Certificate (fruit and veg) issued in UK');
    });
  });

  it('8.P&R:CVD - Common Veterinary Entry Document (CVED) - available', function() {
    cy.request('/api/v2/commodities/1605531090').then((response) => {
      cy.hasMeasureType(response, '410', 'Veterinary control');
    });
  });

  // export
  it('12.P&R:EQC Certificate of Conformity - available', function() {
    cy.request('/api/v2/commodities/0805220020').then((response) => {
      cy.hasMeasureType(response, '357', 'Certificate of Conformity');
    });
  });

  // export
  it('14.P&R:HOP Home Office pre-cursor chemical authorisation - available', function() {
    cy.request('/api/v2/commodities/2932940000').then((response) => {
      cy.hasMeasureType(response, '358', 'Home Office pre-cursor chemical authorisation');
    });
  });

  it('15.P&R:HSE Health and Safety Executive (imports) - available', function() {
    cy.request('/api/v2/commodities/3102309000').then((response) => {
      cy.hasMeasureType(response, '359', 'Health and Safety Executive (imports)');
    });
  });

  it('17.P&R:PHC-Phytosanitary Certificate (import) - available', function() {
    cy.request('/api/v2/commodities/1001990013').then((response) => {
      cy.hasMeasureType(response, '360', 'Phytosanitary Certificate (import)');
    });
  });

  // export
  it('18.P&R:PRE Home Office Pre-cursor chemicals - available', function() {
    cy.request('/api/v2/commodities/3004490000').then((response) => {
      cy.hasMeasureType(response, '361', 'Home Office Pre-cursor chemicals');
    });
  });

  it('19.P&R:PRT Home Office Controlled Drugs (import) - available', function() {
    cy.request('/api/v2/commodities/1211500000').then((response) => {
      cy.hasMeasureType(response, '362', 'Home Office Controlled Drugs (import)');
    });
  });

  it('20.P&R:QRC Quarantine Release Certificate - available', function() {
    cy.request('/api/v2/commodities/4403219090').then((response) => {
      cy.hasMeasureType(response, '363', 'Quarantine Release Certificate');
    });
  });
});

