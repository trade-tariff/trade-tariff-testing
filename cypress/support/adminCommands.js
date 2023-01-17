import dayjs from 'dayjs';

const todaysDate = dayjs().format('YYYY/MM/DD');
const datePrefixFormat = dayjs().format('DD/MM/YYYY');

// Admin tool login
Cypress.Commands.add('adminLogin', (path) => {
  const space = Cypress.env('SPACE');
  const adminSuffix = Cypress.env(`${space}_ADMIN_SUFFIX`);
  const adminUrl = `https://tariff-admin-${adminSuffix}.london.cloudapps.digital`;

  cy.visit(`${adminUrl}`);
  cy.contains('Sign in to GOV.UK');
  cy.contains('Email');
  cy.contains('Password');
  cy.get('#new_user > button').contains('Sign in');
  cy.contains('Forgot your password?');

  const username = Cypress.env('ADMIN_USERNAME');
  const password = Cypress.env('ADMIN_PASSWORD');

  cy.get('input[name="user[email]"]').type(`${username}`);
  cy.get('input[name="user[password]"]').type(`${password}`);
  cy.get('[type="submit"]').click();

  cy.contains('2-step verification');

  const otpSecret = Cypress.env('ADMIN_OTP_SECRET');
  cy.task('generateOTP', otpSecret).then((token) => {
    cy.get('input[name="code"]').type(token);
  });
  cy.get('[type=submit]').click();

  const sentArgs = {adminUrl: `${adminUrl}`, path: `${path}`};

  cy.origin(`${adminUrl}`, {args: sentArgs}, ({adminUrl, path}) => {
    cy.visit(`${adminUrl}${path}`);
    if (`${path}` === '/') {
      cy.contains('Section Notes');
    }
  });
});

// Verify sections and chapter notes
Cypress.Commands.add('verifySectionChapterNotes', () => {
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

// Search references
Cypress.Commands.add('searchReferences', () => {
  cy.contains('Search references');
  cy.url().should('include', '/search_references/sections');
  cy.contains('Live animals; animal products');
  cy.get('#section_2').contains('Vegetable products');
  cy.get('#section_2 td a').click();
  cy.url().should('include', '/search_references/sections/2/chapters');
  cy.get('.govuk-breadcrumbs').contains('Sections');
  cy.get('.govuk-breadcrumbs').contains('Section II');
  cy.contains('Search references of section II: Vegetable products');
  cy.contains('Import and Export search references');
  cy.contains('Import multiple search references from a CSV file');
  cy.contains('Import search references CSV');
  cy.contains('Export all search references as a CSV file');
  cy.contains('Export all search references as CSV');
  cy.contains('Edit').click();
  cy.contains('Search reference for Chapter (06)');
  cy.url().should('include', '/search_references/chapters/06/search_references');
  cy.contains('New Search reference').click();
  cy.url().should('include', '/search_references/chapters/06/search_references/new');
  cy.contains('New Search reference');
  cy.contains('Search Reference');
  cy.contains('Create Search reference');
  cy.contains('Back');
});

Cypress.Commands.add('searchReferencesHeading', (country) => {
  cy.contains('Search references');
  cy.url().should('include', `${country}/search_references/sections`);
  cy.get('#section_4').contains('Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes');
  cy.get('#section_4 td a').click();
  cy.url().should('include', `${country}/search_references/sections/4/chapters`);
  cy.get('#chapter_20').contains('Preparations Of Vegetables, Fruit, Nuts Or Other Parts Of Plants');
  cy.get('#chapter_20').contains('1 to 9').click();
  cy.url().should('include', `${country}/search_references/chapters/20/headings`);
  cy.get('#heading_2008').contains('Fruit, Nuts And Other Edible Parts Of Plants');
  cy.get('#heading_2008').contains('Edit').click();
  cy.url().should('include', `${country}/search_references/headings/2008/search_references`);
  cy.contains('Search references Heading (2008)');
  cy.contains('New Search reference');
  cy.get('#main-content > div.govuk-auto-classes > table').contains('Title');
  cy.get('#main-content > div.govuk-auto-classes > table').contains('Actions');
});

// Create news item for all services and all collections
Cypress.Commands.add('createNewsItem', () => {
  cy.contains('News stories');
  cy.contains('Add News story').click();
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

// Verify news item on uk and xi services
Cypress.Commands.add('verifyNewsItemOnTariffServices', (tariffServiceName, serviceName) => {
  cy.get('.govuk-breadcrumbs__list').contains('News bulletin');
  cy.contains(`${tariffServiceName}`);
  if (`${serviceName}` === 'xi') {
    cy.get(`.news-item a[href^="/${serviceName}/news/stories/automated-test---sample-news-story"]`)
        .contains('Automated Test - Sample News Story');
  } else {
    cy.get(`.news-item a[href^="/news/stories/automated-test---sample-news-story"]`).contains('Automated Test - Sample News Story');
  }
});

// Verify and update news item created
Cypress.Commands.add('verifyAndUpdateNewsItem', () => {
  cy.get('tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
    // text captured from column1
    const t = $elm.text();
    // matching criteria
    if (t.includes('Automated Test - Sample')) {
      // assertion
      expect(t).to.contains('Automated Test - Sample');
      cy.get('tbody > tr > td:nth-child(2)').eq(index).next().then(function(d) {
        const r = d.text();
        // assertion
        expect(r).to.contains(`${datePrefixFormat}`);
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

// Remove news item
Cypress.Commands.add('removeNewsItem', () => {
  cy.contains('News stories');
  cy.contains('Edit').click();
  cy.url().should('include', '/edit');
  cy.contains('Remove News item');
  cy.contains('Remove this News item');
  cy.get('a.govuk-button:nth-child(7)').contains('Remove').click();
  cy.contains('Success');
  cy.contains('News item removed');
});

// Search quotas
Cypress.Commands.add('searchQuotas', (quotaNumber) => {
  cy.contains('Search for a quota order number');
  cy.contains('Enter the 6-digit quota order number ID to return the details of the quota\'s definitions, balance updates');
  cy.get('#quota-search-order-number-field').type(`${quotaNumber}`);
  cy.get('button.govuk-button').contains('Search').click();
  cy.contains(`Quota ${quotaNumber}`);
  cy.contains('Changes to quota balance for quota definition');
  cy.contains('Initial volume is');
  cy.url().should('include', `${quotaNumber}`);
});

// Verify rollbacks
Cypress.Commands.add('rollbacks', () => {
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

// Verify tariff updates
Cypress.Commands.add('tariffUpdates', (databaseName) => {
  cy.contains(`Tariff Updates - ${databaseName}`);
  cy.contains('Review inserts');
  cy.contains('Rollback');
  cy.contains('Download');
  cy.get('.govuk-pagination').contains('1');
  cy.get('.govuk-pagination').contains('Next');
});

// Verify reports tab
Cypress.Commands.add('reports', (serviceName) => {
  cy.contains('Reports');
  cy.get('#table-reports').contains('Commodities extract');
  cy.get('#table-reports').contains('All the commodities');
  cy.get('#table-reports').contains('CSV');
  if (`${serviceName}` === 'xi') {
    cy.get(`#table-reports a[href^="/${serviceName}/reports/commodities.csv"]`).contains('Download');
  } else {
    cy.get(`#table-reports a[href^="/reports/commodities.csv"]`).contains('Download');
  }
});
