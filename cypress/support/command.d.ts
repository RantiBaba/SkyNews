
declare namespace Cypress {
    interface Chainable {
      /**
       * This command tells cypress to switch to the embedded iFrame document
       * The command can be found in: cypress/support/command.js
       * 
       * @example cy.switchToIframe('put-iframe-ID-here')
       */

       switchToIframe()
      
    }
  }