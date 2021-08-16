describe('🇬🇧 💡 | legalBaseColumn-UK | Legal base Column UK |',function() {
//HOT-58 Suppressing Legal Base Column for UK
    // front end
    it('☑️ 1.Prove that the legal base column exists on import measures tab on UK - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('exist')
        //eu regulation
        cy.contains('R2658/87')
        cy.get("tr:nth-of-type(2)  a[title='NC - 1988 (UTS)']").should('have.attr', 'href', 'http://eur-lex.europa.eu/search.html?instInvStatus=ALL&or0=DN%3D31987R2658*,DN-old%3D31987R2658*&DTC=false&type=advanced')
        //uk regulation
        cy.get('#measure-20134281').contains('S.I. 2021/241')
        cy.get(".AL  a[title^='The Customs Tariff (Preferential Trade Arrangements) (EU Exi']").should('have.attr', 'href', 'https://www.legislation.gov.uk/uksi/2021/241')
        cy.get(".AL  a[title^='The Customs Tariff (Preferential Trade Arrangements) (EU Exi']").trigger('mouseover').wait(600)

    })

    it('☑️ 2.Prove that the legal base column exists on export measures tab on UK - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#export')
        cy.wait(500)
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('exist')
        cy.get('.numerical').contains('R2658/87')
        cy.get("[data-module] [role='tabpanel']:nth-child(4) .govuk-table .govuk-link").should('have.attr', 'href', 'http://eur-lex.europa.eu/search.html?instInvStatus=ALL&or0=DN%3D31987R2658*,DN-old%3D31987R2658*&DTC=false&type=advanced')
    })
    it('🚫 3.Binding Tariff Information link - not visible',function(){
        cy.visit('commodities/0102290500')
        cy.get('.govuk-tabs__panel')
        cy.contains('Binding tariff information').should('not.exist')
    })
})
