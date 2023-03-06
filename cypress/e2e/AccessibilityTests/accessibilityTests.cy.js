describe('Page accessibility tests', () => {
  it('Find commodity url - should have no accessibility violations', function() {
    cy.visit('/');
    cy.accessibilityTest();
  });
  it('Browser page - should have no accessibility violations', function() {
    cy.visit('/browse');
    cy.accessibilityTest();
  });
  it('Sections page - should have no accessibility violations', function() {
    cy.visit('/sections/1');
    cy.accessibilityTest();
  });
  it('Chapters page - should have no accessibility violations', function() {
    cy.visit('/chapters/05');
    cy.accessibilityTest();
  });
  it('Headings page - should have no accessibility violations', function() {
    cy.visit('/headings/3906');
    cy.accessibilityTest();
  });
  it('Subheadings page - should have no accessibility violations', function() {
    cy.visit('/subheadings/0302110000-10');
    cy.accessibilityTest();
  });
  it('A-Z index page - should have no accessibility violations', function() {
    cy.visit('/a-z-index/a');
    cy.accessibilityTest();
  });
  it('Tools page - should have no accessibility violations', function() {
    cy.visit('/tools');
    cy.accessibilityTest();
  });
  it('News page - should have no accessibility violations', function() {
    cy.visit('/news');
    cy.accessibilityTest();
  });
  it('Help page - should have no accessibility violations', function() {
    cy.visit('/help');
    cy.accessibilityTest();
  });
  it('Quota search page - should have no accessibility violations', function() {
    cy.visit('/quota_search');
    cy.accessibilityTest();
  });
  it('Certificate search page - should have no accessibility violations', function() {
    cy.visit('/certificate_search');
    cy.accessibilityTest();
  });
  it('Additional code search page - should have no accessibility violations', function() {
    cy.visit('/additional_code_search');
    cy.accessibilityTest();
  });
  it('Footnote search page - should have no accessibility violations', function() {
    cy.visit('/footnote_search');
    cy.accessibilityTest();
  });
  it('Chemical search page - should have no accessibility violations', function() {
    cy.visit('/chemical_search');
    cy.accessibilityTest();
  });
  it('Glossary page - should have no accessibility violations', function() {
    cy.visit('/glossary');
    cy.accessibilityTest();
  });
  it('Duty drawback help page - should have no accessibility violations', function() {
    cy.visit('/help/rules_of_origin/duty_drawback');
    cy.accessibilityTest();
  });
  it('Feedback page - should have no accessibility violations', function() {
    cy.visit('/feedback');
    cy.accessibilityTest();
  });
  it('Commodity page - import tab - should have no accessibility violations ', function() {
    cy.visit('/commodities/0102211000?country=ZA#import');
    cy.accessibilityTest();
  });
  it('Commodity page - export tab - should have no accessibility violations ', function() {
    cy.visit('/commodities/3910000015?country=AD#export');
    cy.accessibilityTest();
  });
  it('Commodity page - RoO tab - should have no accessibility violations ', function() {
    cy.visit('/commodities/3910000015?country=AD#rules-of-origin');
    cy.accessibilityTest();
  });
  it('Footnotes page - should have no accessibility violations', function() {
    cy.visit('/commodities/0307229500#footnotes');
    cy.accessibilityTest();
  });
  it('Measure types - third country duty page - should have no accessibility violations', function() {
    cy.visit('/measure_types/103/preference_codes/100?geographical_area_id=1011');
    cy.accessibilityTest();
  });
  it('Import controls conditions popup - should have no accessibility violations', function() {
    cy.visit('/commodities/0307229500?country=AD#uk_import_controls');
    cy.get('#measure-20200277').contains('Conditions').click();
    cy.accessibilityTest();
  });
  it('Import controls footnotes popup - should have no accessibility violations', function() {
    cy.visit('/commodities/0307229500?country=AD#uk_import_controls');
    cy.get('#measure-20200277').contains('Footnotes').click();
    cy.accessibilityTest();
  });
  it('Quota popup - should have no accessibility violations', function() {
    cy.visit('/commodities/0702000007#quotas');
    cy.get('#measure-20161556').contains('051304').click();
    cy.accessibilityTest();
  });
  it('Preferential tariff quota page - should have no accessibility violations', function() {
    cy.visit('/commodities/0702000007#quotas');
    cy.get('#measure-20161556').contains('Preferential tariff quota').click();
    cy.accessibilityTest();
  });
});
