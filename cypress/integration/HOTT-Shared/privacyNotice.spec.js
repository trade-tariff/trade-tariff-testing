describe('🇬🇧 🇪🇺 💡 | Privacy Notice for UK and XI |', function () {
    let country = ["uk", "xi"]
    let titles = ["UK Global Online Tariff", "Northern Ireland Online Tariff"]
    
    it('Privacy - link works', function () {
        for (let i = 0; i < country.length; i++) {
            cy.visit(`${country[i]}/sections`)
            cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').click()
            cy.contains('Privacy notice')
            cy.contains(`${titles[i]}`)
            //breadcrumb Home 
            cy.get('.govuk-breadcrumbs__link').click()
            cy.contains(`${titles[i]}`)
        }
    })
    it('Privacy - Page content and links',function(){
        for (let i = 0; i < country.length; i++) {
        cy.visit(`${country[i]}/sections`)
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').click()
        cy.contains('Privacy notice')
        cy.contains(`${titles[i]}`)

        //related content and links 
        //about gov uk
        cy.contains('Related content')
        cy.get('li:nth-of-type(1) > .gem-c-related-navigation__section-link.gem-c-related-navigation__section-link--other.gem-c-related-navigation__section-link--sidebar.govuk-link').should("have.attr", "href", "https://www.gov.uk/help/about-govuk")
        //terms and conditions
        cy.get('li:nth-of-type(2) > .gem-c-related-navigation__section-link.gem-c-related-navigation__section-link--other.gem-c-related-navigation__section-link--sidebar.govuk-link').should("have.attr", "href", "https://www.gov.uk/help/terms-conditions")
        //goverment digital services link
        cy.get(".direction-ltr.disable-youtube.gem-c-govspeak.govuk-govspeak > p:nth-of-type(1) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/government/organisations/government-digital-service")

        //pip link 
        cy.get("p:nth-of-type(2) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/pip")
        //universal credit link
        cy.get(".example > p > a:nth-of-type(1)").should("have.attr","href","https://www.universal-credit.service.gov.uk/postcode-checker")
        //privacy note 
        cy.get('.example > p > a:nth-of-type(2)').should("have.attr", "href", "https://www.universal-credit.service.gov.uk/privacypolicy")
        //Data protection 
        cy.get("p:nth-of-type(4) > a[rel='external']").should("have.attr", "href", "https://ico.org.uk/ESDWebPages/Entry/Z7414053")
        //school term dates 
        cy.get("ul:nth-of-type(2) > li:nth-of-type(2) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/school-term-holiday-dates")
        //browsers
        cy.get("li:nth-of-type(5) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/support/browsers")
        //cookies 
        cy.get("li:nth-of-type(6) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/support/cookies")
        //Google Analytics 
        cy.get("p:nth-of-type(6) > a:nth-of-type(1)").should("have.attr", "href", "https://support.google.com/analytics/topic/2919631")
        //RUM
        cy.get("p:nth-of-type(6) > a:nth-of-type(2)").should("have.attr", "href", "https://speedcurve.com/features/lux/")
        //Site improvement 
        cy.get("ul:nth-of-type(5)  a[rel='external']").should("have.attr", "href", "https://insidegovuk.blog.gov.uk/2015/03/26/new-tool-to-see-trending-searches/")
        //EEA link
        cy.get("p:nth-of-type(24) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/eu-eea" )
        //accounts trial 
        cy.get("p:nth-of-type(36) > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/government/publications/govuk-accounts-trial-full-privacy-notice-and-accessibility-statement")
        }
    
    })
    it('Privacy - All pages ',function(){
        for (let i = 0; i < country.length; i++) {
            let pages = [`${country[i]}/sections/1`, `${country[i]}/chapters/01`, `${country[i]}/headings/0101`, `${country[i]}/commodities/0101210000`, `${country[i]}/a-z-index/a`, `${country[i]}/tools`]
        for (let j = 0; j < pages.length; j++) {
            cy.visit(`${pages[j]}`)
            cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').contains('Privacy')
        }
    }
    })

    
})
