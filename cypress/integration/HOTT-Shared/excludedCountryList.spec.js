describe('| excludedCountriesList | Exclude certain countries from the autocompleting country list |', function () {
        //QU', 'QR', 'EU', 'QZ', 'QV', 'QW', 'QY', 'QX', 'QP', 'XU', 'IO', 'QS', 'XI', 'QQ', 'ZB', 'ZD', 'ZF', 'ZG', 'ZE', 'ZH', 'ZN', 'ZU', 'GG', 'JE'
        it(`UK - Autocomplete excluded countries list`, function () {
                //select future date 
                cy.visit(`/commodities/0702000007#import`)
                cy.contains('Measures and restrictions for importing into the UK under the UKGT')
                let countries = ["certificates", "1005", "1006", "6006", "Home Office", "OECD", "goods", "United Kingdom Continental Shelf", "Norwegian Continental Shelf", "Netherlands Continental Shelf", "Irish Continental Shelf", "German Continental Shelf", "French Continental Shelf", "Danish Continental Shelf", "Belgian Continental Shelf"]
                for (var i = 0; i < countries.length; i++) {

                        cy.get('input#search_country').clear().wait(500).type(`${countries[i]}`).wait(300)
                        cy.get("[id='search_country__listbox']")
                                .contains('No results found')
                }

        })
        it(`XI - Autocomplete excluded countries list`, function () {
                //select future date 
                cy.visit(`xi/commodities/0702000007#import`)
                cy.contains('Measures and restrictions for importing goods into Northern Ireland')
                let countries = ["certificates", "1005", "1006", "6006", "Home Office", "OECD", "goods", "United Kingdom Continental Shelf", "Norwegian Continental Shelf", "Netherlands Continental Shelf", "Irish Continental Shelf", "German Continental Shelf", "French Continental Shelf", "Danish Continental Shelf", "Belgian Continental Shelf"]
                for (var i = 0; i < countries.length; i++) {

                        cy.get('input#search_country').clear().wait(500).type(`${countries[i]}`).wait(300)
                        cy.get("[id='search_country__listbox']")
                                .contains('No results found')
                }

        })

})
