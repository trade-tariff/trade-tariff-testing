import dayjs from 'dayjs';

const todaysDate = dayjs().format('YYYY/MM/DD');
const datePrefixFormat = dayjs().format('DD/MM/YYYY');
const space = Cypress.env('SPACE');
const adminSuffix = Cypress.env(`${space}_ADMIN_SUFFIX`);
const adminUrl = `https://admin.${adminSuffix}.trade-tariff.service.gov.uk`;

Cypress.Commands.add('loginOrRestoreAdminSession', () => {
  cy.session('adminLogin', () => {
    cy.visit(adminUrl);
    cy.contains('Sign in to GOV.UK');
    cy.contains('Email');
    cy.contains('Password');
    cy.get('#new_user > button').contains('Sign in');
    cy.contains('Forgot your password?');

    const username = Cypress.env('ADMIN_USERNAME');
    const password = Cypress.env('ADMIN_PASSWORD');

    cy.get('input[name="user[email]"]').type(username);
    cy.get('input[name="user[password]"]').type(password);
    cy.get('[type="submit"]').click();

    cy.contains('2-step verification');

    const otpSecret = Cypress.env('ADMIN_OTP_SECRET');
    cy.task('generateOTP', otpSecret).then((token) => {
      cy.get('input[name="code"]').type(token);
      cy.get('[type=submit]').click();
    });
  });
});

Cypress.Commands.add('verifySectionChapterNotes', (service) => {
  cy.visit(`${adminUrl}/${service}`);
  cy.verifyService(service);
  cy.contains('Section Notes');
  cy.contains('Edit').click();
  cy.url().should('include', '/edit');
  cy.contains('Edit Section Note');
  cy.contains('Section title');
  cy.contains('Content');
  cy.contains('Preview');
  cy.get('button.govuk-button').contains('Update Section note');
  cy.contains('Remove section note');
  cy.contains('Remove this section note');
  cy.get('a.govuk-button:nth-child(5)').contains('Remove');
});

Cypress.Commands.add('verifySectionSearchReferences', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.contains('Search references');
  cy.url().should('include', '/search_references/sections');
  cy.contains('Live animals; animal products');
  cy.get('#section_2').contains('Vegetable products');
  cy.get('#section_2 td a').click();
  cy.url().should('include', '/search_references/sections/2/chapters');
  cy.get('.govuk-breadcrumbs').contains('Sections');
  cy.get('.govuk-breadcrumbs').contains('Section II');
  cy.contains('Search references of section II: Vegetable products');
  cy.contains('Edit').click();
  cy.contains('Search references for Chapter (06)');
  cy.url().should('include', '/search_references/chapters/06/search_references');
  cy.contains('Create new search reference').click();
  cy.url().should('include', '/search_references/chapters/06/search_references/new');
  cy.contains('New Search reference');
  cy.contains('Back');
});

Cypress.Commands.add('verifySearchReferencesHeading', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.get('#section_4').contains('Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes');
  cy.get('#section_4 td a').click();
  cy.get('#chapter_20').contains('Preparations Of Vegetables, Fruit, Nuts Or Other Parts Of Plants');
  cy.get('#chapter_20').contains('1 to 9').click();
  cy.get('#heading_2008').contains('Fruit, Nuts And Other Edible Parts Of Plants');
  cy.get('#heading_2008').contains('Edit').click();
  cy.contains('Search references for heading 2008: Fruit, nuts');
  cy.contains('Create new search reference');
  cy.get('#main-content > div.govuk-auto-classes > table').contains('Title');
  cy.get('#main-content > div.govuk-auto-classes > table').contains('Actions');
});

Cypress.Commands.add('verfiySearchReferences', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.contains('Import and Export search references');
  cy.contains('Import multiple search references from a CSV file');
  cy.contains('Import search references CSV');
  cy.contains('Export all search references as a CSV file');
  cy.contains('Export all search references as a CSV');
});

Cypress.Commands.add('verifyImportSearchReferencesPageAndClkBackBtn', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.verfiySearchReferences(service);
  cy.contains('Import search references CSV').click();
  cy.url().should('include', '/search_references/import');
  cy.contains('Import search references');
  cy.get('#new_import_task').contains('Sample CSV file:');
  cy.contains('Upload CSV with search references. Search references are overriden if ID is provided');
  cy.get('#import-task-file-field').should('be.visible');
  cy.contains('Back').click();
  cy.url().should('include', '/search_references/sections');
  cy.verfiySearchReferences(service);
});

Cypress.Commands.add('verifyImportSearchReferencesPageAndClkImportRefsBtn', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.verfiySearchReferences(service);
  cy.contains('Import search references CSV').click();
  cy.url().should('include', '/search_references/import');
  cy.contains('Import search references');
  cy.get('#new_import_task').contains('Sample CSV file:');
  cy.contains('Upload CSV with search references. Search references are overriden if ID is provided');
  cy.get('#import-task-file-field').should('be.visible');
  cy.contains('Back');
  cy.contains('Import references from CSV').click();
});

Cypress.Commands.add('verifyExportAllSearchReferencesAsCSVBtn', (service) => {
  cy.visit(`${adminUrl}/${service}/search_references/sections`);
  cy.verifyService(service);
  cy.verfiySearchReferences(service);
  cy.contains('Export all search references as a CSV').click();
});

Cypress.Commands.add('createNewsItem', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.contains('Manage news stories');
  cy.removeNewsItemIfExists('Automated Test');
  cy.contains('Add a News story').click();
  cy.contains('New News story');
  cy.get('#news-item-title-field').type('Automated Test - Sample News Story');
  cy.contains('Precis');
  cy.contains('Preview');
  cy.get('#news-item-precis-field').type('Automated Test - Sample News Story');
  cy.get('[data-preview-for="#news-item-precis-field"]').contains('Automated Test - Sample News Stor');
  cy.get('.govuk-grid-column-one-half a[href^="http://govspeak-preview.herokuapp.com/guide"]').contains('Markdown guide');
  cy.contains('Content');
  cy.get('#news-item-content-field').type('Automated Test - Sample News Story');
  cy.get('[data-preview-for=\'#news-item-content-field\']').contains('Automated Test - Sample News Stor');
  cy.get('.govuk-details__summary').contains('Replaceable service tags');
  cy.contains('Start_date');
  cy.contains('YYYY/MM/DD');
  cy.get('#news-item-start-date-field').type(`${todaysDate}`);
  cy.contains('End_date');
  cy.contains('YYYY/MM/DD or leave blank for no end date');
  cy.get('#news-item-end-date-field').type(`${todaysDate}`);
  cy.contains('Pages to include on');
  cy.contains('Show on UK service').click();
  cy.contains('Show on XI service').click();
  cy.contains('Show News story on the Updates page').click();
  cy.contains('Show in News collections');
  cy.contains('Tariff notices').click();
  cy.contains('Tariff stop press').click();
  cy.contains('Trade news').click();
  cy.contains('Service updates').click();
  cy.contains('Back');
  cy.get('[type=\'submit\']').contains('Create Item').click();
  cy.contains('Success');
  cy.contains('News item created');
});

Cypress.Commands.add('editNewsStoryCollections', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.contains('Manage news stories');
  cy.contains('manage news story collections').click();
  cy.url().should('include', '/news_collections');
  cy.contains('Manage news story collections');
  cy.get('.govuk-button').contains('Add a news story collection');
  cy.contains('Trade news');
  cy.contains('Edit').click();
  cy.url().should('include', '/news_collections/1/edit');
  cy.contains('Edit a news story collection');
  cy.get('#news-collection-name-field').should('have.value', 'Trade news');
  cy.get('#news-collection-priority-field').should('have.value', '1');
  cy.contains('Is this collection published?');
  cy.get('#news-collection-published-true-field').check();
  cy.get('.govuk-button').contains('Update Collection');
  cy.get('.govuk-button.govuk-button--secondary').contains('Back');
  cy.get('.govuk-breadcrumbs__link').contains('Back to news story collections');
});

Cypress.Commands.add('verifyAddNewsStoryCollections', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.contains('Manage news stories');
  cy.contains('Updates');
  cy.contains('manage news story collections').click();
  cy.url().should('include', '/news_collections');
  cy.contains('Manage news story collections');
  cy.get('.govuk-button').contains('Add a news story collection').click();
  cy.contains('Add a news story collection');
  cy.get('#news-collection-name-field').should('have.value', '');
  cy.get('#news-collection-priority-field').should('have.value', '');
  cy.get('#news-collection-description-field').should('have.value', '');
  cy.contains('Is this collection published?');
  cy.contains('Yes');
  cy.contains('No');
  cy.get('.govuk-button').contains('Create Collection');
  cy.get('.govuk-button.govuk-button--secondary').contains('Back');
  cy.get('.govuk-breadcrumbs__link').contains('Back to news story collections');
});

Cypress.Commands.add('verifyNewsItemOnTariffServices', () => {
  cy.visit('/news');
  cy.get('.govuk-breadcrumbs__list').contains('News bulletin');
  cy.contains('Automated Test - Sample News Story');
});

Cypress.Commands.add('verifyAndUpdateNewsItem', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.get('tbody > tr > td:nth-child(2)').each(($elm, index, _$list) => {
    // text captured from column1
    const t = $elm.text();
    // matching criteria
    if (t.includes('Automated Test - Sample')) {
      // assertion
      expect(t).to.contains('Automated Test - Sample');
      cy.get('tbody > tr > td:nth-child(2)').eq(index).next().then(function(d) {
        const r = d.text();
        // assertion
        expect(r).to.contains(datePrefixFormat);
      });
    }
  });
  cy.contains('Edit').click();
  cy.url().should('include', '/edit');

  cy.contains('Slug');
  cy.contains('Leave blank to automatically assign');
  cy.get('input[name="news_item[slug]"]').invoke('val').should((value) => {
    expect('automated-test---sample-news-story').to.contains(`${value}`);
  });

  // Update news item
  cy.contains('Pages to include on');
  cy.contains('Show News story on the Updates page').click();
  cy.contains('Back');
  cy.get('[type=\'submit\']').contains('Update Item').click();
  cy.contains('Success');
  cy.contains('News item updated');
});

Cypress.Commands.add('removeNewsItem', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.contains('Manage news stories');
  cy.contains('No pages');
  cy.contains('Edit').click();
  cy.url().should('include', '/edit');
  cy.contains('Remove News item');
  cy.contains('Remove this News item');
  cy.get('a.govuk-button:nth-child(7)').contains('Remove').click();
  cy.contains('Success');
  cy.contains('News item removed');
});

Cypress.Commands.add('searchQuotas', (quotaOrderNumber) => {
  cy.visit(`${adminUrl}/quotas/new`);
  cy.contains('Search for a quota order number');
  cy.contains('Enter the 6-digit quota order number ID');
  cy.get('#quota-search-order-number-field').type(quotaOrderNumber);
  cy.get('button.govuk-button').contains('Search').click();
  cy.contains(`Quota ${quotaOrderNumber}`);
  cy.contains(`Quota ${quotaOrderNumber} - definitions and balances`);
  cy.contains(`Definition periods for quota ${quotaOrderNumber}`);
  cy.url().should('include', `${quotaOrderNumber}`);
});

Cypress.Commands.add('quotaDefinitionsBalances', (quotaOrderNumber, eventType, definitionID) => {
  cy.visit(`${adminUrl}/quotas/search?quota_search%5Border_number%5D=${quotaOrderNumber}`);
  cy.contains(`Quota ${quotaOrderNumber} - definitions and balances`);
  cy.get(`.govuk-auto-classes a[href^="/quotas/new"]`).contains('Back');
  cy.contains('Core quota data');
  cy.contains(`Definition periods for quota ${quotaOrderNumber}`);
  cy.contains('Show all definitions').click();
  cy.contains('Core definition data');
  if (`${quotaOrderNumber}` == '090007') {
    cy.contains('Tonne (1000 kg)');
  } else {
    cy.contains('Kilogram (kg)');
  }
  cy.get('#accordion-default-content-1 > dl > div:nth-child(6)').contains('Critical state');
  cy.get('#accordion-default-content-1 > dl > div:nth-child(6)').contains('Y');
  cy.contains(`Balance events for quota ${quotaOrderNumber}`);
  cy.contains('Additional events');
  cy.contains(`${eventType}`);
  cy.get(`.govuk-accordion__section-content a[href^="/quotas/${definitionID}?order_number=${quotaOrderNumber}"]`)
      .contains('See the graph of quota balance events').click();
  cy.get(`.govuk-auto-classes a[href^="/quotas/search?quota_search%5Border_number%5D=${quotaOrderNumber}"]`).contains('Back');
  cy.contains(`Quota ${quotaOrderNumber}`);
  cy.contains('Changes to quota balance for quota definition');
  cy.contains('Initial volume is');
  if (`${quotaOrderNumber}` == '090007') {
    cy.contains('Tonne (1000 kg)');
  } else {
    cy.contains('Kilogram (kg)');
  }
  cy.url().should('include', quotaOrderNumber);
});

Cypress.Commands.add('verifyRollbacks', (service) => {
  cy.visit(`${adminUrl}/${service}/rollbacks`);
  cy.verifyService(service);
  cy.contains('Database rollbacks');
  cy.url().should('include', 'rollbacks');
  cy.contains('New Rollback').click();
  cy.contains('New Rollback');
  cy.contains('Reason');
  cy.contains('Rollback to date');
  cy.contains('Keep');
  cy.contains('Back');
  cy.get('button.govuk-button').contains('Create Rollback');
});

Cypress.Commands.add('tariffUpdates', (service) => {
  cy.visit(`${adminUrl}/${service}/tariff_updates`);
  cy.verifyService(service);
  cy.contains(`Tariff Updates`);
  cy.contains('Review inserts');
  cy.contains('Rollback');
  cy.contains('Download');
  cy.get('.govuk-pagination').contains('1');
  cy.get('.govuk-pagination').contains('Next');
});

Cypress.Commands.add('reports', (service) => {
  cy.visit(`${adminUrl}/${service}/reports`);
  cy.verifyService(service);
  cy.contains('Reports');
  cy.get('#table-reports').contains('Commodities extract');
  cy.get('#table-reports').contains('All the commodities');
  cy.get('#table-reports').contains('CSV');
  cy.get('#table-reports a[href$="/reports/commodities.csv"]').contains('Download');
});

Cypress.Commands.add('verifyService', (service) => {
  cy.get('.current-service').contains(`You are currently using the ${service.toUpperCase()} service`);
});


Cypress.Commands.add('removeNewsItemIfExists', (matchingText) => {
  cy.get('table').find('tr').each(($row) => {
    // Find the text in the row
    if ($row.text().includes(matchingText)) {
      // Find the Edit link within the row and click it
      cy.wrap($row).find('a:contains("Edit")').click();
      // On the next page, find the Remove link and click it along with the confirm popup
      cy.get('a:contains("Remove")').click();
      cy.on('window:confirm', () => true);
    }
  });
});

Cypress.Commands.add('verifyTableTitleData', (service) => {
  cy.visit(`${adminUrl}/${service}/news_items`);
  cy.contains('Manage news stories');
  cy.verifyTableData();
});

Cypress.Commands.add('verifyTableData', () => {
  cy.get('table tbody tr').each(($row) => {
    cy.wrap($row).within(() => {
      cy.get('td').each(($col) => {
        cy.get('td').eq(1).should('have.length', 1);
        cy.get('td').eq(1).should('not.have.text', '...');
      });
    });
  });
});

Cypress.Commands.add('categoryAssessments', (service) => {
  if (service == 'uk') {
    cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`, {failOnStatusCode: false});
    cy.get('#navigation').should('not.contain', 'Category assessments');
    cy.contains('Page not found');
  } else {
    cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`);
    cy.get('#navigation').contains('Category assessments');
    // cy.get('.govuk-phase-banner__text.current-service').contains('You are currently using the XI service');
    cy.contains('Manage category assessments');
    cy.get('.govuk-auto-classes > table').contains('Measure type id');
    cy.get('#green_lanes_category_assessment_94').contains('464');
    cy.get('.govuk-pagination').contains('1');
    cy.get('.govuk-pagination').contains('Next').click();
    cy.url().should('include', '/category_assessments?page=2');
    cy.get('.govuk-auto-classes > table').contains('Measure type id');
    cy.get('#green_lanes_category_assessment_60').contains('277');
    cy.get('.govuk-pagination').contains('5').click();
    cy.url().should('include', '/category_assessments?page=5');
    cy.get('.govuk-auto-classes > table').contains('Measure type id');
    cy.get('#green_lanes_category_assessment_1').contains('481');
    cy.get('.govuk-pagination').contains('Previous').click();
    cy.url().should('include', '/category_assessments?page=4');
    cy.get('.govuk-auto-classes > table').contains('Measure type id');
    cy.get('#green_lanes_category_assessment_20').contains('465');
    cy.get('.govuk-pagination').contains('Previous');
    cy.get('.govuk-pagination').contains('Next');
  }
});

Cypress.Commands.add('verifyNewCategoryAssessmentPage', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`);
  cy.contains('Manage category assessments');
  cy.contains('Add a Category Assessment').click();
  cy.url().should('include', '/xi/green_lanes/category_assessments/new');
  cy.contains('Category Assessments');
  cy.contains('New Category Assessment');
  cy.contains('Measure Type Id');
  cy.get('#category-assessment-measure-type-id-field').should('be.empty');
  cy.contains('Regulation Id');
  cy.get('#category-assessment-regulation-id-field').should('be.empty');
  cy.contains('Regulation Role');
  cy.get('#category-assessment-regulation-role-field').should('be.empty');
  cy.contains('Select Theme');
  cy.get('#category-assessment-theme-id-field').select('Select Theme');
  cy.contains('Create Category assessment').click();
  // submit form without entering values and checking errors
  cy.get('.govuk-error-summary').contains('Measure type is not present');
  cy.get('.govuk-error-summary').contains('Theme is not present');
  cy.get('.govuk-error-summary').contains('Regulation role is not present');
  cy.get('.govuk-error-summary').contains('Regulation is not present');
  cy.get('#category-assessment-measure-type-id-error').contains('Measure type is not present');
  cy.get('#category-assessment-regulation-id-error').contains('Regulation is not present');
  cy.get('#category-assessment-regulation-role-error').contains('Regulation role is not present');
  cy.get('#category-assessment-theme-id-error').contains('Theme is not present');
  // verify the Category Assessment hyperlink functionality in NewCategoryAssessmentPage
  cy.get('.govuk-breadcrumbs__link').should('have.attr', 'href', '/xi/green_lanes/category_assessments').click();
  cy.url().should('include', '/xi/green_lanes/category_assessments');
  cy.contains('Manage category assessments');
  cy.contains('Add a Category Assessment').click();
  cy.contains('Back').click();
  cy.contains('Manage category assessments');
  cy.contains('Add a Category Assessment');
  cy.get('.govuk-pagination').contains('1');
  cy.get('.govuk-pagination').contains('Next');
});

Cypress.Commands.add('createNewCategoryAssessment', (service, duplicateCategory) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`);
  cy.contains('Manage category assessments');
  cy.contains('Add a Category Assessment').click();
  cy.url().should('include', '/xi/green_lanes/category_assessments/new');
  cy.contains('Category Assessments');
  cy.contains('New Category Assessment');
  cy.contains('Measure Type Id');
  cy.get('#category-assessment-measure-type-id-field').type('454');
  cy.contains('Regulation Id');
  cy.get('#category-assessment-regulation-id-field').type('12');
  cy.contains('Regulation Role');
  cy.get('#category-assessment-regulation-role-field').type('2');
  cy.contains('Select Theme');
  cy.get('#category-assessment-theme-id-field').select('32');
  cy.contains('Back');
  cy.contains('Create Category assessment').click();
  if (duplicateCategory == 'yes') {
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.get('.govuk-error-summary').contains('[:measure type id, :regulation id, :regulation role] is already taken');
  } else {
    cy.contains('Success');
    cy.contains('Category Assessment created');
    cy.get('tbody').contains('454');
    cy.get('tbody').contains('Edit');
  }
});

Cypress.Commands.add('updateNewCategoryAssessment', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`);
  cy.contains('Manage category assessments');
  cy.get('tbody').contains('454');
  cy.get('tbody').contains('Edit').click();
  cy.url().should('include', '/edit');
  cy.contains('Category Assessments');
  cy.contains('Edit Category Assessment');
  cy.get('.govuk-form-group:has(label:contains("Measure Type Id"))').find('input')
      .should('have.value', '454').and('id', 'category-assessment-measure-type-id-field');
  cy.get('.govuk-form-group:has(label:contains("Regulation Id"))').find('input')
      .should('have.value', '12').and('id', 'category-assessment-regulation-id-field');
  cy.get('.govuk-form-group:has(label:contains("Regulation Role"))').find('input')
      .should('have.value', '2').and('id', 'category-assessment-regulation-role-field');
  cy.get('.govuk-form-group:has(label:contains("Select Theme"))').find('select')
      .should('have.value', '32').and('id', 'category-assessment-theme-id-field');
  cy.get('.govuk-form-group:has(label:contains("Select Theme"))').find('select')
      .and('id', 'category-assessment-theme-id-field').select('35');
  cy.contains('Back');
  cy.contains('Update Category assessment').click();
  cy.contains('Success');
  cy.contains('Category Assessment updated');
  cy.get('tbody').contains('454');
});

Cypress.Commands.add('removeNewCategoryAssessment', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/category_assessments`);
  cy.contains('Manage category assessments');
  cy.get('tbody').contains('454');
  cy.get('tbody').contains('Edit').click();
  cy.url().should('include', '/edit');
  cy.contains('Category Assessments');
  cy.contains('Edit Category Assessment');
  cy.get('.govuk-form-group:has(label:contains("Measure Type Id"))').find('input')
      .should('have.value', '454').and('id', 'category-assessment-measure-type-id-field');
  cy.get('.govuk-form-group:has(label:contains("Regulation Id"))').find('input')
      .should('have.value', '12').and('id', 'category-assessment-regulation-id-field');
  cy.get('.govuk-form-group:has(label:contains("Regulation Role"))').find('input')
      .should('have.value', '2').and('id', 'category-assessment-regulation-role-field');
  cy.get('.govuk-form-group:has(label:contains("Select Theme"))').find('select')
      .should('have.value', '35').and('id', 'category-assessment-theme-id-field');
  cy.get('.govuk-form-group:has(label:contains("Select Theme"))').find('select')
      .and('id', 'category-assessment-theme-id-field').select('35');
  cy.contains('Back');
  cy.contains('Update Category assessment');
  cy.contains('Remove Category Assessment');
  cy.contains('Remove this Category Assessment');
  cy.get('#main-content > div.govuk-auto-classes > a').contains('Remove').click();
  cy.on('window:alert', ()=>{
    // Assertion
    expect('Are you sure?').to.contains('Are you sure?');
  });
  cy.on('window:confirm', () => true);
  cy.url().should('include', '/xi/green_lanes/category_assessments');
  cy.contains('Success');
  cy.contains('Category Assessment removed');
  cy.get('tbody').should('not.contain.value', '454');
  cy.get('tbody').contains('Edit').click();
});

Cypress.Commands.add('exemptingCertificateOverrides', (service) => {
  if (service == 'uk') {
    cy.visit(`${adminUrl}/${service}/green_lanes/exempting_certificate_overrides`, {failOnStatusCode: false});
    cy.get('#navigation').should('not.contain', 'Exempting Certificate Overrides');
    cy.contains('Page not found');
  } 
    else{
      cy.visit(`${adminUrl}/${service}/green_lanes/exempting_certificate_overrides`);
      cy.get('#navigation').contains('Exempting Certificate Overrides');
      cy.contains('Manage exempting certificate overrides');
      cy.get('.govuk-auto-classes > table').contains('ID');
      cy.get('.govuk-auto-classes > table').contains('Certificate Type Code');
      cy.get('.govuk-auto-classes > table').contains('Certificate Code');
      cy.get('.govuk-auto-classes > table').contains('Action');
    }
});

Cypress.Commands.add('verifyNewExemptingCertificateOverrides', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/exempting_certificate_overrides`);
  cy.contains('Manage exempting certificate overrides');
  cy.contains('Add a Exempting Certificate Override').click();
  cy.url().should('include', '/xi/green_lanes/exempting_certificate_overrides/new');
  cy.contains('Exempting Certificate Override');
  cy.contains('New Exempting Certificate Override');
  cy.contains('Certificate Type Code');
  cy.get('#exempting-certificate-override-certificate-type-code-field').should('be.empty');
  cy.contains('Certificate Code');
  cy.get('#exempting-certificate-override-certificate-code-field').should('be.empty');
  cy.contains('Create Exempting certificate override').click();
  // submit form without entering values and checking errors
  cy.get('.govuk-error-summary').contains('Certificate type code is not present');
  cy.get('.govuk-error-summary').contains('Certificate code is not present');
  cy.get('#exempting-certificate-override-certificate-type-code-error').contains('Certificate type code is not present');
  cy.get('#exempting-certificate-override-certificate-code-error').contains('Certificate code is not present');
  // verify the Exempting Certificate Override hyperlink functionality in New Exempting Certificate Override
  cy.get('.govuk-breadcrumbs__link').should('have.attr', 'href', '/xi/green_lanes/exempting_certificate_overrides').click();
  cy.url().should('include', '/xi/green_lanes/exempting_certificate_overrides');
  cy.contains('Manage exempting certificate overrides');
  cy.contains('Add a Exempting Certificate Override').click();
  cy.contains('Back').click();
  cy.contains('Manage exempting certificate overrides');
  cy.contains('Add a Exempting Certificate Override')
});

Cypress.Commands.add('createNewExemptingCertificateOverride', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/exempting_certificate_overrides`);
  cy.contains('Manage exempting certificate overrides');
  cy.contains('Add a Exempting Certificate Override').click();
  cy.url().should('include', '/xi/green_lanes/exempting_certificate_overrides/new');
  cy.contains('Exempting Certificate Override');
  cy.contains('New Exempting Certificate Override');
  cy.contains('Certificate Type Code');
  cy.get('#exempting-certificate-override-certificate-type-code-field').type('Y');
  cy.contains('Certificate Code');
  cy.get('#exempting-certificate-override-certificate-code-field').type('100');
  cy.contains('Back');
  cy.contains('Create Exempting certificate override').click();
});

Cypress.Commands.add('removeNewExemptincertificateOverride', (service) => {
  cy.visit(`${adminUrl}/${service}/green_lanes/exempting_certificate_overrides`);
  cy.contains('Manage exempting certificate overrides');
  cy.get('tbody').contains('100');
  cy.get('tbody').contains('Remove').click();
  cy.on('window:alert', ()=>{
    expect('Are you sure?').to.contains('Are you sure?');
  });
  cy.on('window:confirm', () => true);
  cy.contains('Success');
  cy.contains('Exempting Certificate Override removed');
  cy.get('tbody').should('not.contain.value', '100');
});


