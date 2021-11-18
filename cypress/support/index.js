// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './otherCommands'
//import 'cypress-axe'
import 'cypress-fill-command'
//require('@shelex/cypress-allure-plugin');
//import ‘cypress-audit/commands’
require('cypress-grep')()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
const Helpers = {
  sayHello: (name)=> { console.log('hello ' + name) }
}


