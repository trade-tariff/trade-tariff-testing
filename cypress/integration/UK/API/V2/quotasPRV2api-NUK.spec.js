describe('🇬🇧 ⚙️ 🆕 UK- version v2 api Quotas , P&R to be availabe ',function() {

    //----Quotas to be available for UK version  -----
  //  Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')

    it('1.Quotas:046 Tariff quota/ceiling - available', function () {
   //     cy.request('/api/v2/commodities/6301909021#import.json')
        cy.request('/api/v2/commodities/1006209600#import.json')

            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Non preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
    it('2.Quotas:122-Non Preferential quota - available', function () {
        cy.request('/api/v2/commodities/1006209600#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Non preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
    it('3.Quotas:123 - Non preferential quota under end use - available', function () {
        cy.request('/api/v2/commodities/1701131000#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Non preferential tariff quota under end-use') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
    it('4.Quotas:143 Preferential tariff quota - available', function () {
        cy.request('/api/v2/commodities/1601009991#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
    it('5.Quotas:146 Preferential tariff quota under end-use - available', function () {
        cy.request('/api/v2/commodities/0709921000#import.json')
        .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Preferential tariff quota under end-use') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
    it('6.Quotas:147 Customs Union Quota - available', function () {
        cy.request('/api/v2/commodities/1806208012#import.json')
        .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Customs Union Quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
        it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota - available', function () {
        cy.request('/api/v2/commodities/1701149000#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
// ---------------------------National Prohibitions and restrictions (P&R)---------------------------
    it('1.P&R:AHC - Animal Health Certificate - available', function () {
        cy.request('/api/v2/commodities/6403990510#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Animal Health Certificate') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })

    })
    it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition - available', function () {
        cy.request('/api/v2/commodities/9305200010#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Health and Safety Executive Import Licensing Firearms and Ammunition') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    it('3.P&R:ATT - Attestation Document (horticulture and potatoes - available)', function () {
        cy.request('/api/v2/commodities/1210209099#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Attestation Document (horticulture and potatoes)') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    //exports
    it('4.P&R:CEX - DCMS Open General Export Licence - available', function () {
        cy.request('/api/v2/commodities/9702000010#export').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'DCMS Open General Export Licence') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    //exports
    it('6.P&R:COE - Home Office Controlled Drugs (export) - available', function () {
        cy.request('/api/v2/commodities/2934910000#export').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Home Office Controlled Drugs (export)') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })

    })
    it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK - available', function () {
        cy.request('/api/v2/commodities/0806101090#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'HMI Conformity Certificate (fruit and veg) issued in UK') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    it('8.P&R:CVD - Common Veterinary Entry Document (CVED) - available', function () {
        cy.request('/api/v2/commodities/1605531090#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Veterinary control') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    //export
    it('12.P&R:EQC Certificate of Conformity - available', function () {
        cy.request('/api/v2/commodities/0709939000#export').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Certificate of Conformity') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    //export
    it('14.P&R:HOP Home Office pre-cursor chemical authorisation - available', function () {
        cy.request('/api/v2/commodities/2932940000#export').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Home Office pre-cursor chemical authorisation') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
             
    })

    it('15.P&R:HSE Health and Safety Executive (imports) - available', function () {
        cy.request('/api/v2/commodities/3102309000#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Health and Safety Executive (imports)') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
             
    })
    it('17.P&R:PHC-Phytosanitary Certificate (import) - available', function () {
        cy.request('/api/v2/commodities/0809290000#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Phytosanitary Certificate (import)') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    //export
    it('18.P&R:PRE Home Office Pre-cursor chemicals - available', function () {
        cy.request('/api/v2/commodities/2915240000#export').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Home Office Pre-cursor chemicals') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    it('19.P&R:PRT Home Office Controlled Drugs (import) - available', function () {
        cy.request('/api/v2/commodities/1211500000#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Home Office Controlled Drugs (import)') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
    it('20.P&R:QRC Quarantine Release Certificate - available', function () {
        cy.request('/api/v2/commodities/4403219090#import.json').then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].attributes.description == 'Quarantine Release Certificate') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
         
            
    })
})
    