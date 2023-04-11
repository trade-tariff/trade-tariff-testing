describe('verify import_export_dates behaviour', function() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', {month: 'long'});
  const day = today.getDate();

  context('when on the UK service', function() {
    it('enables picking a date', function() {
      cy.visit('/commodities/6406905010');
      cy.contains(`${day} ${month} ${year}`);

      cy.get('a[href^=\'/import_export_dates\']').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
      cy.url().should('include', 'day=22&month=12&year=2022');

      cy.get('a[href^=\'/import_export_dates\']').click();
      cy.url().should('include', '/import_export_dates');
      cy.get('a').contains('Cancel').click();
      cy.url().should('include', '/commodities/6406905010');
    });
  });

  context('when on the XI service', function() {
    it('enables picking a date', function() {
      cy.visit('/xi/commodities/6406905010');
      cy.contains(`${day} ${month} ${year}`);

      cy.get('a[href^=\'/xi/import_export_dates\']').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
      cy.url().should('include', 'day=22&month=12&year=2022');

      cy.get('a[href^=\'/xi/import_export_dates\']').click();
      cy.url().should('include', '/import_export_dates');
      cy.get('a').contains('Cancel').click();
      cy.url().should('include', '/xi/commodities/6406905010');
    });
  });
});
