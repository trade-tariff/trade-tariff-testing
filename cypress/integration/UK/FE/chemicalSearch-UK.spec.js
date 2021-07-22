describe('🇬🇧 💡 | chemicalSearch-UK | Chemical Search 🧪  UK services |',function() {
    it('UK Chemical Search -using CAS number', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')
        let casno_ids = ["149177-92-4", "249561-98-6", "94-05-3","13338-63-1"]
        for (let i = 0; i < casno_ids.length; i++) {
            //enter CAS number
            cy.get('input#cas')
                .clear()
                .type(`${casno_ids[i]}`)
            cy.wait(500)
            cy.get('.button.govuk-button').click()
            cy.get('.govuk-heading-l')
                .contains('Chemical search results for')
            cy.contains(`${casno_ids[i]}`)
        }
    })

    it('UK Chemical Search -using Chemical Name', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')

        let cname_ids = ["methyl N-(phenoxycarbonyl)-L-valinate","hexafluorophosphate(3-)", "ethyl 3,4-dihydroxybenzoate", "dimethyl cyanocarbonimidodithioate", "3,4,5-trimethoxyphenylacetonitrile", "6(2Z,3R)-3-O-decyl-2-deoxy-6-O-2-deoxy-3-O-(3-metoxydecyl)-6-methyl-2-(1-oxo-11-octadecenyl)amino-4-O-phosphono-β-D-glucopyranosyl-2-(1,3-dioxotetradecyl)amino-α-D-glucopyranose 1-(dihydrogen phosphate) tetrasodium salt", "(±)-1-azabicyclo2.2.1heptan-3-one"]
        for (let i = 0; i < cname_ids.length; i++) {
            //enter Chemical name
            cy.get('input#name')
                .clear()
                .type(`${cname_ids[i]}`)
            cy.wait(500)
            cy.get('.button.govuk-button').click()
            cy.get('.govuk-heading-l')
                .contains('Chemical search results for')
            cy.get('.search-results').should('be.visible',`${cname_ids[i]}`)

        }
    })
})
