describe('Admin tool smoke tests', {tags: ['adminOnly']}, function() {
  beforeEach(() => {
    cy.loginOrRestoreAdminSession();
  });

  context('when on the UK service', function() {
    const service = 'uk';

    it('verify sections and chapter notes', function() {
      cy.verifySectionChapterNotes(service);
    });

    it('verify section search references', function() {
      cy.verifySectionSearchReferences(service);
    });

    it('verify heading search references', function() {
      cy.verifySearchReferencesHeading(service);
    });

    it('verify import search references and click back button', function() {
      cy.verifyImportSearchReferencesPageAndClkBackBtn(service);
    });

    it('verify import search references and click import references button', function() {
      cy.verifyImportSearchReferencesPageAndClkImportRefsBtn(service);
    });

    it('verify export all search references as a CSV button', function() {
      cy.verifyExportAllSearchReferencesAsCSVBtn(service);
    });

    it('verify rollbacks', function() {
      cy.verifyRollbacks(service);
    });

    it('verify tariff updates', function() {
      cy.tariffUpdates(service);
    });

    it('reports', function() {
      cy.reports(service);
    });

    it('search quota order number', function() {
      cy.searchQuotas('058011');
    });

    it('quota - definitions and balances - exhaustion event', function() {
      cy.quotaDefinitionsBalances('050071', 'Exhaustion event', '20846');
    });

    it('quota - definitions and balances - reopening event', function() {
      cy.quotaDefinitionsBalances('050086', 'Reopening event', '20852');
    });

    it('quota - definitions and balances - unblocking event', function() {
      cy.quotaDefinitionsBalances('090007', 'Unblocking event', '1892');
    });

    it('quota - definitions and balances - unsuspension event', function() {
      cy.quotaDefinitionsBalances('090204', 'Unsuspension event', '1691');
    });
    it('No access to Green Lanes Category Assessments', function() {
      cy.categoryAssessments(service);
    });
  });

  context('when on the XI service', function() {
    const service = 'xi';

    it('verify sections and chapter notes', function() {
      cy.verifySectionChapterNotes(service);
    });

    it('verify search references', function() {
      cy.verifySectionSearchReferences(service);
    });

    it('verify search references heading', function() {
      cy.verifySearchReferencesHeading(service);
    });

    it('verify import search references and click back button', function() {
      cy.verifyImportSearchReferencesPageAndClkBackBtn(service);
    });

    it('verify import search references and click import references button', function() {
      cy.verifyImportSearchReferencesPageAndClkImportRefsBtn(service);
    });

    it('verify export all search references as a CSV button', function() {
      cy.verifyExportAllSearchReferencesAsCSVBtn(service);
    });

    it('verify rollbacks', function() {
      cy.verifyRollbacks(service);
    });

    it('verify tariff updates', function() {
      cy.tariffUpdates(service);
    });

    it('reports', function() {
      cy.reports(service);
    });
    it('view green lanes category assessments page', function() {
      cy.categoryAssessments(service);
    });
    it('verify new category assessment page - green lanes', function() {
      cy.verifyNewCategoryAssessmentPage(service);
    });
    it('create new category assessment - green lanes', function() {
      cy.createNewCategoryAssessment(service);
    });
    it('create new category assessment with exisiting category details - green lanes', function() {
      cy.createNewCategoryAssessment(service, 'yes');
    });
    it('update new category assessment - green lanes', function() {
      cy.updateNewCategoryAssessment(service);
    });
    it('remove new category assessment - green lanes', function() {
      cy.removeNewCategoryAssessment(service);
    });
    it('View green lanes exempting certificate overrides page', function() {
      cy.exemptingCertificateOverrides(service);
    });
    it('verify new exempting certificate overrides page - green lanes', function() {
      cy.verifyNewExemptingCertificateOverrides(service);
    });
    it('create new exempting certificate overrides - green lanes', function() {
      cy.createNewExemptingCertificateOverride(service);
    });
    it('remove new exempting certificate overrides - green lanes', function() {
      cy.removeNewExemptincertificateOverride(service);
    });
  });
});
