describe('🚀 | test.spec.js | Front end - mainpage |', function() {
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/sections');
    cy.MainPageUK();
  });
});