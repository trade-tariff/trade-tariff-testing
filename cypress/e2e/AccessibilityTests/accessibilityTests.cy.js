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
    it('Duty calculator page - Northern Ireland to GB United Kingdom - Accessibility Test', () => {
        cy.visit('/commodities/6004100091'); 
        cy.dutyCalLink('6004100091');
        cy.axeValidDate();
        cy.axeSelectDestination('gb');
        cy.axeOriginList({value: 'Northern Ireland'});
        cy.axeNoDuty();
    });
    it('ROO - importing goods into the UK from Japan - Not Wholely Obtained + One Scheme + Insufficient processing - Japan - Accessibility Test', () => {
        cy.visit('/commodities/6004100091?country=JP#rules-of-origin'); 
        cy.axeCheckRoO();
        cy.axeImpOrExp('Japan', 'import');
        cy.axeHowOrginating('Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
        cy.axeHowWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
        cy.axeWhatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
        cy.axeWhollyObtained('Japan', 'no');
        cy.axeNotWhollyObtained('Japan');
        cy.axeCumulation('japan', '6004100091', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
        cy.axeMinimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
        cy.axeRooNotMet('Importing', 'Japan', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement');
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