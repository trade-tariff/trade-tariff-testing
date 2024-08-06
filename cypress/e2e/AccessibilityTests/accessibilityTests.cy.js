describe('Accessibility Test Suite', () => {
  context('when on the UK service', function() {
    it('Find commodity page - Accessibility Test', () => {
      cy.visit('/find_commodity'); 
      cy.injectAndCheckA11y();
    });
    it('Browse page - Accessibility Test', () => {
      cy.visit('/browse'); 
      cy.injectAndCheckA11y();
    });
    it('A-z index page - Accessibility Test', () => {
      cy.visit('/a-z-index/a'); 
      cy.injectAndCheckA11y();
    });
    it('Tools page - Accessibility Test', () => {
      cy.visit('/tools'); 
      cy.injectAndCheckA11y();
    });
    it('News page - Accessibility Test', () => {
      cy.visit('/news'); 
      cy.injectAndCheckA11y();
    });
    it('Help page - Accessibility Test', () => {
      cy.visit('/help'); 
      cy.injectAndCheckA11y();
    });
    it('Quota search page - Accessibility Test', () => {
        cy.visit('/quota_search'); 
        cy.injectAndCheckA11y();
    });
    it('Additional code search page - Accessibility Test', () => {
        cy.visit('/additional_code_search'); 
        cy.injectAndCheckA11y();
    });
    it('Certificate search page - Accessibility Test', () => {
        cy.visit('/certificate_search'); 
        cy.injectAndCheckA11y();
    });
    it('Footnote search page - Accessibility Test', () => {
        cy.visit('/footnote_search'); 
        cy.injectAndCheckA11y();
    });
    it('Chemical search page - Accessibility Test', () => {
        cy.visit('/chemical_search'); 
        cy.injectAndCheckA11y();
    });
    it('Import page - Accessibility Test', () => {
        cy.visit('/commodities/6004100091?country=JP#import'); 
        cy.injectAndCheckA11y();
    });
    it('Export page - Accessibility Test', () => {
        cy.visit('/commodities/6004100091?country=JP#export'); 
        cy.injectAndCheckA11y();
    });
    it('Origin page - Accessibility Test', () => {
        cy.visit('/commodities/6004100091?country=JP#rules-of-origin'); 
        cy.injectAndCheckA11y();
    });
    it('Notes page - Accessibility Test', () => {
        cy.visit('/commodities/6004100091?country=JP#footnotes'); 
        cy.injectAndCheckA11y();
    });
  });
  context('when on the XI service', function() {
    it('Find commodity page - Accessibility Test', () => {
      cy.visit('/xi/find_commodity'); 
      cy.injectAndCheckA11y();
    });
    it('Browse page - Accessibility Test', () => {
      cy.visit('/xi/browse'); 
      cy.injectAndCheckA11y();
    });
    it('A-z index page - Accessibility Test', () => {
      cy.visit('/xi/a-z-index/a'); 
      cy.injectAndCheckA11y();
    });
    it('Tools page - Accessibility Test', () => {
      cy.visit('/xi/tools'); 
      cy.injectAndCheckA11y();
    });
    it('News page - Accessibility Test', () => {
      cy.visit('/xi/news'); 
      cy.injectAndCheckA11y();
    });
    it('Help page - Accessibility Test', () => {
      cy.visit('/xi/help'); 
      cy.injectAndCheckA11y();
    });
    it('Additional code search page - Accessibility Test', () => {
        cy.visit('/xi/additional_code_search'); 
        cy.injectAndCheckA11y();
    });
    it('Certificate search page - Accessibility Test', () => {
        cy.visit('/xi/certificate_search'); 
        cy.injectAndCheckA11y();
    });
    it('Footnote search page - Accessibility Test', () => {
        cy.visit('/xi/footnote_search'); 
        cy.injectAndCheckA11y();
    });
    it('Chemical search page - Accessibility Test', () => {
        cy.visit('/xi/chemical_search'); 
        cy.injectAndCheckA11y();
    });
    it('Import page - Accessibility Test', () => {
        cy.visit('/xi/commodities/6004100091?country=JP'); 
        cy.injectAndCheckA11y();
    });
    it('Export page - Accessibility Test', () => {
        cy.visit('/xi/commodities/6004100091?country=JP#export'); 
        cy.injectAndCheckA11y();
    });
    it('Origin page - Accessibility Test', () => {
        cy.visit('/xi/commodities/6004100091?country=JP#rules-of-origin'); 
        cy.injectAndCheckA11y();
    });
    it('Notes page - Accessibility Test', () => {
        cy.visit('/xi/commodities/6004100091?country=JP#footnotes'); 
        cy.injectAndCheckA11y();
    });
  })
})