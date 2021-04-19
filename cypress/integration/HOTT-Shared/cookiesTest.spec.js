
describe('🇬🇧 🇪🇺 💡 | 🍪 CookiesTest |',function() {
    //  Cypress.config('baseUrl')
        Cypress.config('baseUrl')
  
      it('Cookies Main Banner ',function(){
        cy.visit('/cookies')
        cy.contains('Cookies on HMRC services')
        cy.contains('We use some essential cookies to make our services work.')
        cy.contains('We would like to set additional cookies so we can remember your settings, understand how people use our services and make improvements.')
        cy.contains('Accept additional cookies')
        cy.contains('Reject additional cookies')
        cy.contains('View cookies')
      })
      it('No cookies selection made',function(){
        cy.visit('/sections')
        cy.getCookie('cookies_policy').should('eq', null)
        cy.getCookie('cookies_preferences_set').should('eq', null)
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Commodity information for 3808941000')

      })

      it('Cookies on all pages',function(){
        cy.clearCookies()
      let pages = ['sections','a-z-index/a','tools','xi/sections','xi/a-z-index/a','xi/tools']
        for (let i =0 ; i< pages.length ; i++)
        {
        cy.visit(`/${pages[i]}`)
        cy.contains('Cookies on HMRC services')
        cy.contains('We use some essential cookies to make our services work.')
        cy.contains('We would like to set additional cookies so we can remember your settings, understand how people use our services and make improvements.')
        cy.contains('Accept additional cookies')
        cy.contains('Reject additional cookies')
        cy.contains('View cookies')
        }
    
      })
      
      it('Accept Cookies ,Hide Banner',function(){
        cy.visit('/sections')
        cy.get('.govuk-button.cookie_accept_all').wait(400).click().wait(200)
        cy.contains('Hide this message').click()
        cy.getCookie('cookies_policy').should('have.property','value','%7B%22settings%22%3Atrue%2C%22usage%22%3A%22true%22%2C%22remember_settings%22%3A%22true%22%7D');
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Commodity information for 3808941000')
        cy.clearCookies()
      })
      
      
      it('Reject Cookies ,Hide Banner',function(){
       // cy.clearCookies()
        cy.visit('/sections')
        cy.get('.govuk-button.cookie_reject_all').wait(100).click()
        cy.contains('Hide this message').click().wait(200)
        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22false%22%2C%22remember_settings%22%3A%22false%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Commodity information for 3808941000')
        cy.clearCookies()

      })

      it('View Cookies - Yes / No Selection - combinations ',function(){
        cy.clearCookies()
        cy.visit('/sections')
        // view cookies
        cy.get('.banner-govuk-link.govuk-link').click()
        cy.contains('Cookies on the UK Global Online Tariff')
        // Yes / No selection
        cy.get('input#cookie_consent_usage_true').click()
        cy.get("input[name='commit']").click()
        cy.contains('Hide this message').click()
        cy.contains('Your cookie settings were saved')
        cy.contains('You can update these settings at any time.')
        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22true%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        

        cy.clearCookies()
      })
      it('View Cookies - No / Yes - combinations ',function(){
        cy.clearCookies()
        cy.visit('/sections')
        // view cookies
        cy.get('.banner-govuk-link.govuk-link').click()
        cy.contains('Cookies on the UK Global Online Tariff')
        // No /Yes selection
        cy.get("input#cookie_consent_usage_false").click()
        cy.get("input#cookie_remember_settings_true").click()
        cy.get("input[name='commit']").click()
        cy.contains('Hide this message').click()
        cy.contains('Your cookie settings were saved')
        cy.contains('You can update these settings at any time.')
        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22false%22%2C%22remember_settings%22%3A%22true%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
      
})



})