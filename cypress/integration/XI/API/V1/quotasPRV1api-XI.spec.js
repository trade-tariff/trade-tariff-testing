describe('🇪🇺  ⚙️ XI-version v1 api Quotas , P&R suppression  ',function() {
    //----Quotas to be suppressed for XI version  -----
    it('1.Quotas:046 Tariff quota/ceiling - suppressed', function () {
        cy.request('xi/api/v1/commodities/6301909021#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Non preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('2.Quotas:122-Non Preferential quota - suppressed', function () {
        cy.request('xi/api/v1/commodities/1006209600#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Non preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('3.Quotas:123 - Non preferential quota under end use - suppressed', function () {
        cy.request('xi/api/v1/commodities/1701131000#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Non preferential tariff quota under end-use') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('4.Quotas:143 Preferential tariff quota - suppressed', function () {
        cy.request('xi/api/v1/commodities/1601009991#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('5.Quotas:146 Preferential tariff quota under end-use - suppressed', function () {
        cy.request('xi/api/v1/commodities/0709921000#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Preferential tariff quota under end-use') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('6.Quotas:147 Customs Union Quota - suppressed', function () {
        cy.request('xi/api/v1/commodities/1806208012#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Customs Union Quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
    it('7.Quotas:653 Security based on representative price, reduced under the benefit of a tariff quota - suppressed', function () {
        cy.request('xi/api/v1/commodities/1701149000#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Preferential tariff quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })
    })
// ---------------------------National Prohibitions and restrictions (P&R)---------------------------
    it('1.P&R:AHC - Animal Health Certificate - suppressed', function () {
        cy.request('xi/api/v1/commodities/6403990510#import.json')
            .then((response) => {
                let measure_types = response.body.import_measures
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].measure_type.description == 'Animal Health Certificate') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.false
            })

    })
    it('2.P&R:AIL - Health and Safety Executive Import Licensing Firearms and Ammunition - suppressed', function () {
        cy.request('xi/api/v1/commodities/9305200010#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Health and Safety Executive Import Licensing Firearms and Ammunition') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    it('3.P&R:ATT - Attestation Document (horticulture and potatoes - suppressed)', function () {
        cy.request('xi/api/v1/commodities/1210209099#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Attestation Document (horticulture and potatoes)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    //exports
    it('4.P&R:CEX - DCMS Open General Export Licence - suppressed', function () {
        cy.request('xi/api/v1/commodities/9702000010#export').then((response) => {
            let measure_types = response.body.export_measures
            let found = false
            console.log(measure_types.length)
            console.log(response.body)
            for (let i = 0; i < measure_types.length; i++) {
                console.log(measure_types[i].measure_type)
                if (measure_types[i].measure_type.id == 'CEX') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    //exports
    it('6.P&R:COE - Home Office Controlled Drugs (export) - suppressed', function () {
        cy.request('xi/api/v1/commodities/2934910000#export').then((response) => {
            let measure_types = response.body.export_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Home Office Controlled Drugs (export)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })

    })
    it('7.P&R:COI HMI Conformity Certificate (fruit and veg) issued in UK - suppressed', function () {
        cy.request('xi/api/v1/commodities/0806101090#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'HMI Conformity Certificate (fruit and veg) issued in UK') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    it('8.P&R:CVD - Common Veterinary Entry Document (CVED) - suppressed', function () {
        cy.request('xi/api/v1/commodities/1605531090#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Common Veterinary Entry Document (CVED)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    //export
    it('12.P&R:EQC Certificate of Conformity - suppressed', function () {
        cy.request('xi/api/v1/commodities/0709939000#export').then((response) => {
            let measure_types = response.body.export_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Certificate of Conformity') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    //export
    it('14.P&R:HOP Home Office pre-cursor chemical authorisation - suppressed', function () {
        cy.request('xi/api/v1/commodities/2932940000#export').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Home Office pre-cursor chemical authorisation') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })

    it('15.P&R:HSE Health and Safety Executive (imports) - suppressed', function () {
        cy.request('xi/api/v1/commodities/3102309000#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Health and Safety Executive (imports)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    it('17.P&R:PHC-Phytosanitary Certificate (import) - suppressed', function () {
        cy.request('xi/api/v1/commodities/0809290000#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Phytosanitary Certificate (import)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    //export
    it.skip('18.P&R:PRE Home Office Pre-cursor chemicals - suppressed', function () {
        cy.request('xi/api/v1/commodities/2915240000#export').then((response) => {
            let measure_types = response.body.export_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Home Office Pre-cursor chemicals') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    it('19.P&R:PRT Home Office Controlled Drugs (import) - suppressed', function () {
        cy.request('xi/api/v1/commodities/1211500000#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Home Office Controlled Drugs (import)') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
    it('20.P&R:QRC Quarantine Release Certificate - suppressed', function () {
        cy.request('xi/api/v1/commodities/4403219090#import.json').then((response) => {
            let measure_types = response.body.import_measures
            let found = false
            for (let i = 0; i < measure_types.length; i++) {
                if (measure_types[i].measure_type.description == 'Quarantine Release Certificate') {
                    found = true
                    break
                }
            }
            expect(found).to.be.false
        })


    })
})