describe('🇪🇺 💡 quotas-PR-XI.spec | Quotas to be suppressed for XI version ,P&R to be available', function() {
  // ----------------Quotas to be suppressed for XI -------------
  it('🚫 1.Quotas:046 Tariff quota/ceiling', function() {
    cy.clearCookies();
    cy.visit('/xi/commodities/6301909021#import');
    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 2.Quotas:122-Non Preferential quota', function() {
    cy.visit('/xi/commodities/1006209600#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 3.Quotas:123 - Non preferential quota under end use', function() {
    cy.visit('/xi/commodities/1701131000#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 4.Quotas:143 Preferential tariff quota', function() {
    cy.visit('/xi/commodities/1601009991#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 5.Quotas:146 Preferential tariff quota under end-use', function() {
    cy.visit('/xi/commodities/0709921000#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 6.Quotas:147 Customs Union Quota', function() {
    cy.visit('/xi/commodities/1806208012#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  it('🚫 7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota', function() {
    cy.visit('/xi/commodities/1701149000#import');

    cy.get('.govuk-tabs__panel').should('not.have.value', 'quota');
  });
  // ---------------------------National Prohibitions and restrictions (P&R)---------------------------
  it('✅ 1.P&R:AHC - Animal Health Certificate', function() {
    cy.visit('/xi/commodities/6403990510#import');
    cy.contains('Animal Health Certificate');
    cy.get('#measure-20174652').contains('Conditions').click();
    cy.contains('Animal Health Certificate for All countries');
    cy.commodityGuidance();
  });
  it('✅  2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition', function() {
    cy.visit('/xi/commodities/9305200010#import');
    cy.get('#measure-20088554').contains('Conditions').click();
    cy.contains('Health and Safety Executive Import Licensing Firearms and Ammunition');
    cy.commodityGuidance();
  });
  it('✅ 3.P&R:ATT - Attestation Document (horticulture and potatoes)', function() {
    cy.visit('/xi/commodities/1210209099#import');
    cy.get('#measure-20133453').contains('Conditions').click();
    cy.contains('Attestation Document (horticulture and potatoes) for All countries');
    cy.commodityGuidance();
  });
  // exports
  it.skip('🚫 4.P&R:CEX - DCMS Open General Export Licence', function() {
    cy.visit('/xi/commodities/9702000010#export');
    cy.get('#measure-3349252').contains('Conditions').click();
    cy.contains('DCMS Open General Export Licence');
    cy.commodityGuidance();
  });
  // exports
  it.skip('🚫 6.P&R:COE - Home Office Controlled Drugs (export)', function() {
    cy.visit('/xi/commodities/2934910000#export');

    cy.contains('Home Office Controlled Drugs (export)').should('not.exist');
  });
  it('✅ 7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK', function() {
    cy.visit('/xi/commodities/0806101090#import');
    cy.get('#measure-20132660').contains('Conditions').click();
    cy.contains('HMI Conformity Certificate (fruit and veg) issued in UK');
    cy.commodityGuidance();
  });
  it('✅ 8.P&R:CVD - Common Veterinary Entry Document (CVED)', function() {
    cy.visit('/xi/commodities/1605531090#import');
    cy.get('#measure-3830376').contains('Conditions').click();
    cy.contains('Veterinary control');
    cy.commodityGuidance();
  });
  // export
  it.skip('🚫 12.P&R:EQC Certificate of Conformity - export ', function() {
    cy.visit('/xi/commodities/0709939000#export');

    cy.contains('Certificate of Conformity').should('not.exist');
  });
  // export
  it.skip('🚫 14.P&R:HOP Home Office pre-cursor chemical authorisation - export ', function() {
    cy.visit('/xi/commodities/2932940000#export');

    cy.contains('Home Office Pre-cursor chemicals').should('not.exist');
  });

  it('✅ 15.P&R:HSE Health and Safety Executive (imports)', function() {
    cy.visit('/xi/commodities/3102309000#import');
    cy.get('#measure-20088577').contains('Conditions').click();
    cy.contains('Health and Safety Executive (imports)');
    cy.commodityGuidance();
  });
  it('✅ 17.P&R:PHC-Phytosanitary Certificate (import)', function() {
    cy.visit('/xi/commodities/0809290000#import');
    cy.get('#measure-20164297').contains('Conditions').click();
    cy.contains('Phytosanitary Certificate (import)');
  });
  // export
  it('🚫 18.P&R:PRE Home Office Pre-cursor chemicals - export ', function() {
    cy.visit('/xi/commodities/2934100015#export');
    cy.reload();
    //

    cy.contains('Home Office Pre-cursor chemicals').should('not.exist');
  });
  it('✅ 19.P&R:PRT Home Office Controlled Drugs (import)', function() {
    cy.visit('/xi/commodities/1211500000#import');
    cy.get('#measure-20175770').contains('Conditions').click();
    cy.contains('Home Office Controlled Drugs (import)');
  });
  it('✅ 20.P&R:QRC Quarantine Release Certificate', function() {
    cy.visit('/xi/commodities/4403219090#import');
    cy.get('#measure-20186913').contains('Conditions').click();
    cy.contains('Quarantine Release Certificate');
    cy.commodityGuidance();
  });
});
