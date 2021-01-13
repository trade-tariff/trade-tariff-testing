describe('🇬🇧 💡 A-Z - UK services)',function() {
    Cypress.config('baseUrl')

    it('All links accessible', function () {
      //  cy.visit('/a-z-index/a')
        let az_ids = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let AZ_ids = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        for (let i = 0; i < az_ids.length; i++) {
            //select alphabet from list
            cy.visit(`/a-z-index/${az_ids[i]}`)
            cy.contains('A–Z of Classified Goods')
            cy.get('.govuk-table__caption')
                .contains(`${AZ_ids[i]}`)
        }

        })




})