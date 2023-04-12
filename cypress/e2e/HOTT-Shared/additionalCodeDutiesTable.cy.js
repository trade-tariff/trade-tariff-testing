describe('additional code duties table', function() {
  context('when on the UK service', function() {
    it('UK - Shows the correct heading additional code duties table', function() {
      cy.visit('/headings/3906');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.00 %');
      cy.get('.govuk-table.additional-code-table').contains('No code');
    });

    it('UK - Start heading displays one tier further down', function() {
      cy.visit('/headings/1512');
      cy.get('article.tariff').contains('Open all headings');
      cy.get('article.tariff').contains('Close all headings');
      cy.get('article.tariff').contains('1512111000');
      cy.get('article.tariff').contains('Depends on additional code');
      cy.get('article.tariff').contains('Close all headings').click();
      cy.get('ul[aria-hidden="true"]').should('be.hidden');
      cy.get('.govuk-list a[href]').contains('1512111000').should('not.be.visible');
      cy.get('article.tariff').contains('Open all headings').click();
      cy.get('article.tariff').contains('1512111000');
      cy.get('article.tariff').contains('Depends on additional code');
    });

    it('UK - Shows the correct subheading additional code duties table', function() {
      cy.visit('/subheadings/3204130000-80');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.00 %');
      cy.get('.govuk-table.additional-code-table').contains('No code');
    });
  });

  context('when on the XI service', function() {
    it('shows the correct heading additional code duties table', function() {
      cy.visit('/xi/headings/3906');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('6.50 %');
    });

    it('XI - Start heading displays one tier further down', function() {
      cy.visit('/xi/headings/1512');
      cy.get('article.tariff').contains('Open all headings');
      cy.get('article.tariff').contains('Close all headings');
      cy.get('article.tariff').contains('1512111000');
      cy.get('article.tariff').should('not.have.text', 'Depends on additional code');
      cy.get('article.tariff').contains('Close all headings').click();
      cy.get('ul[aria-hidden="true"]').should('be.hidden');
      cy.get('.govuk-list a[href]').contains('1512111000').should('not.be.visible');
      cy.get('article.tariff').contains('Open all headings').click();
      cy.get('article.tariff').contains('1512111000');
      cy.get('article.tariff').should('not.have.text', 'Depends on additional code');
    });

    it('XI - Shows the correct subheading additional code duties table', function() {
      cy.visit('/xi/subheadings/3204130000-80');
      cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
      cy.get('.govuk-table.additional-code-table').contains('Code');
      cy.get('.govuk-table.additional-code-table').contains('Duty');
      cy.get('.govuk-table.additional-code-table').contains('2500');
      cy.get('.govuk-table.additional-code-table').contains('0.00 %');
      cy.get('.govuk-table.additional-code-table').contains('2501');
      cy.get('.govuk-table.additional-code-table').contains('6.50 %');
    });
  });
});
