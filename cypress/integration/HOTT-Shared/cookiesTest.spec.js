
describe('🇬🇧 🇪🇺 💡 | 🍪 CookiesTest |',function() {
  let country = ["", "xi"]
  for (let i = 0; i < country.length; i++) {
    
    it(`${country[i]} - Cookies Main Banner `,function(){
        cy.visit(`${country[i]}/cookies`)
        cy.contains('Cookies on the Online Tariff')
        cy.contains('We use some essential cookies to make our services work.')
        cy.contains('We would like to set additional cookies so we can remember your settings, understand how people use our services and make improvements.')
        cy.contains('Accept additional cookies')
        cy.contains('Reject additional cookies')
        cy.contains('View cookies')
      })
    it(`${country[i]} - No cookies selection made`,function(){
        cy.visit(`${ country[i]}/sections`)
        cy.getCookie('cookies_policy').should('eq', null)
        cy.getCookie('cookies_preferences_set').should('eq', null)
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(700)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(700)
        cy.contains('Commodity information for 3808941000')

      })

    it(`${ country[i]} - Cookies on all pages`,function(){
        cy.clearCookies()
      let pages = ['sections','a-z-index/a','tools','help']
        for (let j =0 ; j< pages.length ; j++)
        {
          cy.visit(`${country[i]}/${pages[j]}`)
        cy.contains('Cookies on the Online Tariff')
        cy.contains('We use some essential cookies to make our services work.')
        cy.contains('We would like to set additional cookies so we can remember your settings, understand how people use our services and make improvements.')
        cy.contains('Accept additional cookies')
        cy.contains('Reject additional cookies')
        cy.contains('View cookies')
        }
    
      })
      
    it(`${country[i]} - Accept Cookies ,Hide Banner`,function(){
        cy.visit(`${ country[i]}/sections`)
        cy.get('.govuk-button.cookie_accept_all').wait(400).click().wait(200)
        cy.contains('Hide this message').click()
        cy.getCookie('cookies_policy').should('have.property','value','%7B%22settings%22%3Atrue%2C%22usage%22%3A%22true%22%2C%22remember_settings%22%3A%22true%22%7D');
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(650)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(700)
        cy.contains('Commodity information for 3808941000')
        cy.clearCookies()
      })
      
      
    it(`${country[i]} - Reject Cookies ,Hide Banner`,function(){
        cy.visit(`${country[i]}/sections`)
        cy.get('.govuk-button.cookie_reject_all').wait(200).click()
        cy.contains('Hide this message').click().wait(200)
        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22false%22%2C%22remember_settings%22%3A%22false%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        //search function enabled
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(650)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(700)
        cy.contains('Commodity information for 3808941000')
        cy.clearCookies()
      })

    it(`${country[i]} - View Cookies - Yes / No Selection - combinations `,function(){
        cy.clearCookies()
        cy.visit(`${country[i]}/sections`)
        // view cookies
        cy.get('.govuk-cookie-banner .govuk-link').click()
        cy.contains('Cookies on the UK Integrated Online Tariff')
        cy.get('.govuk-grid-row').contains('Your cookie settings were saved').should('not.exist')
        cy.get('.govuk-grid-row').contains('You can update these settings at any time.').should('not.exist')
      
        // Yes / No selection
        cy.get('input#cookie_consent_usage_true').click()
        cy.get("input[name='commit']").click()
        cy.contains('Success')
        cy.contains('Your cookie settings were saved')
        cy.contains('You can update these settings at any time.')
        cy.contains('Hide this message').click()

        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22true%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')
        cy.clearCookies()
      })

    it(`${country[i]} - View Cookies - No / Yes - combinations `,function(){
        cy.clearCookies()
        cy.visit(`${country[i]}/sections`)
        // view cookies
        cy.get('.govuk-cookie-banner .govuk-link').click()
        cy.contains('Cookies on the UK Integrated Online Tariff')
        // No /Yes selection
        cy.get("input#cookie_consent_usage_false").click()
        cy.get("input#cookie_remember_settings_true").click()
        cy.get("input[name='commit']").click()
        cy.contains('Success')
        cy.contains('Your cookie settings were saved')
        cy.contains('You can update these settings at any time.')
        cy.contains('Hide this message').click()
        
        cy.getCookie('cookies_policy').should('have.property','value',
        '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22false%22%2C%22remember_settings%22%3A%22true%22%7D')
        cy.getCookie('cookies_preferences_set').should('have.property','value','true')      
})

  }

})
