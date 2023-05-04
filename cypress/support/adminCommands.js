import dayjs from 'dayjs';

const todaysDate = dayjs().format('YYYY/MM/DD');
const datePrefixFormat = dayjs().format('DD/MM/YYYY');
const space = Cypress.env('SPACE');
const adminSuffix = Cypress.env(`${space}_ADMIN_SUFFIX`);
const adminUrl = `https://tariff-admin-${adminSuffix}.london.cloudapps.digital`;

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
