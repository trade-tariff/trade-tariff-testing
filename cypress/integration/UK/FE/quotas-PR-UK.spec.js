describe(' 🇬🇧 💡 Quotas , P&R to be available for UK service ',function() {

 //   Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')
        it('1.Quotas:046 Tariff quota/ceiling', function () {
            cy.visit('/commodities/1006209600#import')
            cy.get('.govuk-tabs__panel')
                .contains('Non preferential tariff quota').should('exist')

        })
        it('2.Quotas:122-Non Preferential quota', function () {
            cy.visit('/commodities/1006209600#import')
            cy.get('.govuk-tabs__panel')
                .contains('Non preferential tariff quota').should('exist')
        })
        it('3.Quotas:123 - Non preferential quota under end use', function () {
            cy.visit('/commodities/1701131000#import')
            cy.get('.govuk-tabs__panel')
                .contains('Non preferential duty under end-use').should('exist')
        })
        it('4.Quotas:143 Preferential tariff quota', function () {
            cy.visit('/commodities/1601009991#import')
            cy.get('.govuk-tabs__panel')
                .contains('Preferential tariff quota').should('exist')
        })
        it('5.Quotas:146 Preferential tariff quota under end-use', function () {
            cy.visit('/commodities/0709921000#import')
            cy.get('.govuk-tabs__panel')
                .contains('quota').should('exist')
        })
        it.skip('6.Quotas:147 Customs Union Quota', function () {
            cy.visit('/commodities/1806208012#import')
            cy.get('.govuk-tabs__panel')
                .contains('Customs Union Quota').should('exist')
         })
        it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota', function () {
            cy.visit('/commodities/1701149000#import')
            cy.get('.govuk-tabs__panel')
                .contains('Preferential tariff quota').should('exist')
        })
    // ---------------------------National Prohibitions and restrictions (P&R)---------------------------
        it('1.P&R:AHC - Animal Health Certificate', function () {
            cy.visit('/commodities/6403990510#import')
            cy.get('.govuk-tabs__panel')
                .contains('Animal Health Certificate').should('exist')
        })
    it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition', function () {
        cy.visit('/commodities/9305200010#import')
        cy.get('.govuk-tabs__panel')
            .contains('Health and Safety Executive Import Licensing Firearms and Ammunition').should('exist')
    })
    it('3.P&R:ATT - Attestation Document (horticulture and potatoes)', function () {
        cy.visit('/commodities/1210209099#import')
        cy.get('.govuk-tabs__panel')
            .contains('Attestation Document (horticulture and potatoes)').should('exist')
    })
    //exports
    it('4.P&R:CEX - DCMS Open General Export Licence', function () {
        cy.visit('/commodities/9702000010#export')
        cy.get('.govuk-tabs__panel')
            .contains('DCMS Open General Export Licence').should('exist')
    })
    //exports
    it('6.P&R:COE - Home Office Controlled Drugs (export)', function () {
        cy.visit('/commodities/2934910000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Controlled Drugs (export)').should('exist')
    })
    it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK', function () {
        cy.visit('/commodities/0806101090#import')
        cy.get('.govuk-tabs__panel')
            .contains('HMI Conformity Certificate (fruit and veg) issued in UK').should('exist')
    })
    it('8.P&R:CVD - Common Veterinary Entry Document (CVED),Veterinary control', function () {
        cy.visit('/commodities/1605531090#import')
        cy.get('.govuk-tabs__panel')
            .contains('Veterinary control').should('exist')
    })
    //export
    it('12.P&R:EQC Certificate of Conformity', function () {
        cy.visit('/commodities/0709939000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Certificate of Conformity').should('exist')
    })
    //export
    it('14.P&R:HOP Home Office pre-cursor chemical authorisation', function () {
        cy.visit('/commodities/2932940000#export')
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Pre-cursor chemicals').should('exist')
    })

    it('15.P&R:HSE Health and Safety Executive (imports)', function () {
        cy.visit('/commodities/3102309000#import')
        cy.reload()
       // cy.get('.govuk-tabs__panel')
            cy.get('.govuk-template ')
            .contains('Health and Safety Executive (imports)').should('exist')
    })
    it('17.P&R:PHC-Phytosanitary Certificate (import)', function () {
        cy.visit('/commodities/0809290000#import')
        cy.get('.govuk-tabs__panel')
            .contains('Phytosanitary Certificate (import)').should('exist')
    })

    it('18.P&R:PRE Home Office Pre-cursor chemicals', function () {
        cy.visit('/commodities/3004490000#export')
       // cy.reload()
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Pre-cursor chemicals').should('exist')
    })
    it('19.P&R:PRT Home Office Controlled Drugs (import)', function () {
        cy.visit('/commodities/1211500000#import')
        cy.reload()
        cy.get('.govuk-tabs__panel')
            .contains('Home Office Controlled Drugs (import)').should('exist')
    })
    it('20.P&R:QRC Quarantine Release Certificate', function () {
        cy.visit('/commodities/4403219090#import')
        cy.get('.govuk-tabs__panel')
            .contains('Quarantine Release Certificate').should('exist')
    })
})
