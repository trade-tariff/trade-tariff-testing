describe('Quotas , P&R suppression - (XI version) *** Change URLs *** ',function() {
    //---------------------------Quotas to be suppressed for XI ---------------------------
    it('1.Quotas:046 Tariff quota/ceiling', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/6301909021#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('2.Quotas:122-Non Preferential quota', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1006209600#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('3.Quotas:123 - Non preferential quota under end use', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1701131000#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('4.Quotas:143 Preferential tariff quota', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1601009991#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('5.Quotas:146 Preferential tariff quota under end-use', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0709921000#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('6.Quotas:147 Customs Union Quota', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1806208012#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1701149000#import')
        cy.get('.govuk-tabs__panel')
            .contains('quota').should('be.visible')
    })
    // ---------------------------National Prohibitions and restrictions (P&R)---------------------------
    it('1.P&R:AHC - Animal Health Certificate', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/6403990510#import')
        cy.get('.govuk-tabs__panel')
            .contains('Animal Health Certificate').should('be.visible')
    })
    it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/9305200010#import')
        cy.get('.govuk-tabs__panel')
            .contains('Health and Safety Executive Import Licensing Firearms and Ammunition').should('be.visible')
    })
    it('3.P&R:ATT - Attestation Document (horticulture and potatoes)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1210209099#import')
        cy.get('.govuk-tabs__panel')
            .contains('Attestation Document (horticulture and potatoes)').should('be.visible')
    })
    //exports
    it('4.P&R:CEX - DCMS Open General Export Licence', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/9702000010#export')
        cy.get('.govuk-tabs__panel')
            .contains('DCMS Open General Export Licence').should('be.visible')
    })
    //exports
    it('6.P&R:COE - Home Office Controlled Drugs (export)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/2934910000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Controlled Drugs (export)').should('be.visible')
    })
    it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0806101090#import')
        cy.get('.govuk-tabs__panel')
            .contains('HMI Conformity Certificate (fruit and veg) issued in UK').should('be.visible')
    })
    it('8.P&R:CVD - Common Veterinary Entry Document (CVED)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1605531090#import')
        cy.get('.govuk-tabs__panel')
            .contains('Common Veterinary Entry Document (CVED)').should('be.visible')
    })
    //export
    it('12.P&R:EQC Certificate of Conformity', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0709939000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Certificate of Conformity').should('be.visible')
    })
    //export
    it('14.P&R:HOP Home Office pre-cursor chemical authorisation', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/2932940000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Pre-cursor chemicals').should('be.visible')
    })

    it('15.P&R:HSE Health and Safety Executive (imports)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/3102309000#import')
        cy.get('.govuk-tabs__panel')
            .contains('Health and Safety Executive (imports)').should('be.visible')
    })
    it('17.P&R:PHC-Phytosanitary Certificate (import)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0809290000#import')
        cy.get('.govuk-tabs__panel')
            .contains('Phytosanitary Certificate (import)').should('be.visible')
    })
    //export
    it('18.P&R:PRE Home Office Pre-cursor chemicals', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/2915240000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Pre-cursor chemicals').should('be.visible')
    })
    it('19.P&R:PRT Home Office Controlled Drugs (import)', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/1211500000#import')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Controlled Drugs (import)').should('be.visible')
    })
    it('20.P&R:QRC Quarantine Release Certificate', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/4403219090#import')
        cy.get('.govuk-tabs__panel')
            .contains('Quarantine Release Certificate').should('be.visible')
    })
})

/*
------------------------------------------------
Quotas
------------------------------------------------
 046	Tariff quota/ceiling
 122	Non preferential tariff quota
 123	Non preferential tariff quota under end-use
 143	Preferential tariff quota
 146	Preferential tariff quota under end-use
 147	Customs Union Quota
 653	Security based on representative price, reduced under the benefit of a tariff quota
 654	Additional duty based on CIF price, reduced under the benefit of a tariff quota
 907	Preferential quota (test)
------------------------------------------------
National Prohibitions and restrictions (P&R)
------------------------------------------------
AHC	Animal Health Certificate
AIL	Health and Safety Executive Import Licensing Firearms and Ammunition
ATT	Attestation Document (horticulture and potatoes)
CEX	DCMS Open General Export Licence
CHM	Controlled Chemical licence / authorisation
COE	Home Office Controlled Drugs (export)
COI	HMI Conformity Certificate (fruit and veg) issued in UK
CVD	Common Veterinary Entry Document (CVED)
DPO	Documentary Proof of Origin
ECM	Controlled Chemical licence / authorisation
EHC	DEFRA - Health Certificate  (e.g. Live Animals)
EQC	Certificate of Conformity
EWP	DEFRA Waste Shipment Permit
HOP	Home Office pre-cursor chemical authorisation
HSE	Health and Safety Executive (imports)
IWP	EA Import waste permit
PHC	Phytosanitary Certificate (import)
PRE	Home Office Pre-cursor chemicals
PRT	Home Office Controlled Drugs (import)
QRC	Quarantine Release Certificate
SFS	Seal Fur
------------------------------------------------

 */