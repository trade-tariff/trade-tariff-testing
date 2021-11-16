/* eslint-disable max-len */
describe('UK 🇬🇧 XI 🇪🇺 | breadcrumbLinks.spec.js | Validate breadcrumb links are working on commodities and headings page |', function() {
  /* Test commodities & headings
    Please can we test this on both shallow and deep hierarchies
    Shallow = 0101210000 and the heading above that 0101
    Deep(est) = 2007993944 and the heading above that 2007
    X - Browser test(usual browsers)
    Mobile and desktop
    */
  // ['2007993944', '0101210000', '0501000000'];
  const countries = ['', 'xi'];
  const pageheadings = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
  for (let i =0; i<countries.length; i++) {
    it(`Desktop ${countries[i]} - 2007993944 commodity page`, function() {
      cy.visit(`${countries[i]}/commodities/2007993944`);
      cy.get('.govuk-breadcrumbs__list').contains('Commodity 2007993944');
      cy.checkCommPage('2007993944');
      cy.get('.govuk-breadcrumbs__list').contains('Heading 2007').click();
      cy.contains('Heading 2007 - Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes, obtained by cooking, whether or not containing added sugar or other sweetening matter');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 20').click();
      cy.contains('Chapter 20 - Preparations of vegetables, fruit, nuts or other parts of plants');
      cy.get('.govuk-breadcrumbs__list').contains('Section IV').click();
      cy.contains('Section IV: Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes');
      // breadcrumbs at tree section
      cy.get('.desktop-only > ul  .full-width').click();
      cy.contains('Choose the chapter that best matches your goods');
      cy.contains('All sections').click();
      // cy.contains(/Look up commodity codes, duty and VAT rates/i);
      cy.go(-1);
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
      // cy.contains('Look up commodity codes, duty and VAT rates');;
    });

    it(`Desktop ${countries[i]} - 0501000000 Headings page`, function() {
      cy.visit(`${countries[i]}/commodities/0501000000`);
      cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      cy.checkCommPage('0501000000');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-table__body').contains('Products of animal origin, not elsewhere specified or included');
      cy.contains('Date of trade');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I: Live animals; animal products');
      // breadcrumbs at tree section
      cy.get('.desktop-only > ul  .full-width').click();
      cy.contains('Choose the chapter that best matches your goods');
      cy.contains('All sections').click();
      // cy.contains(/Look up commodity codes, duty and VAT rates/i);
      cy.go(-1);
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      // cy.contains('Look up commodity codes, duty and VAT rates');;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });

    it(`Desktop ${countries[i]} - Chapter page`, function() {
      cy.visit(`${countries[i]}/chapters/05`);
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-table__body').contains('Products of animal origin, not elsewhere specified or included');
      cy.contains('Date of trade');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I: Live animals; animal products');
      // breadcrumbs at tree section
      cy.get('.desktop-only > ul  .full-width').click();
      cy.contains('Choose the chapter that best matches your goods');
      cy.contains('All sections').click();
      // cy.contains(/Look up commodity codes, duty and VAT rates/i);
      cy.go(-1);
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      // cy.contains('Look up commodity codes, duty and VAT rates');;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });

    it(`Mobile - iOS ${countries[i]} commodity page`, function() {
      cy.viewport('iphone-x');
      cy.visit(`${countries[i]}/commodities/0501000000`);
      cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      cy.checkCommPage('0501000000');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });
    it(`Mobile - android ${countries[i]} commodity page`, function() {
      cy.viewport('samsung-note9');
      cy.visit(`${countries[i]}/commodities/0501000000`);
      cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I: Live animals; animal products');
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      // cy.contains('Look up commodity codes, duty and VAT rates');;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });
  }
});
