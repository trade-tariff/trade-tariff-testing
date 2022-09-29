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
    it(`Desktop ${countries[i]} - 2007993944 Commodity page`, function() {
      cy.visit(`${countries[i]}/commodities/2007993944`);
      cy.get('.govuk-breadcrumbs__list').contains('Commodity 2007993944');
      cy.checkCommPage('2007993944');
      // Heading breadcrumb
      cy.get('.govuk-breadcrumbs__list').contains('Heading 2007').click();
      cy.contains('Heading 2007 - Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes, obtained by cooking, whether or not containing added sugar or other sweetening matter');
      // Chapter breadcrumb
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 20').click();
      cy.contains('Chapter 20 - Preparations of vegetables, fruit, nuts or other parts of plants');
      cy.get('.govuk-breadcrumbs__list').contains('Section IV').click();
      cy.contains('Section IV - Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes');
      // Browse breadcrumb
      cy.get('.govuk-breadcrumbs__list').contains('Browse').click();
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
      cy.contains('Browse the tariff');
      // Home breadcrumb
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
      cy.contains('Look up commodity codes, import duties, taxes and controls');
    });

    it(`Desktop ${countries[i]} - 0501000000 Headings page`, function() {
      cy.visit(`${countries[i]}/commodities/0501000000`);
      // cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      // cy.checkCommPage('0501000000');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.contains('Products of animal origin, not elsewhere specified or included');
      cy.contains('Date of trade');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I - Live animals; animal products');
      // Home
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });

    it(`Desktop ${countries[i]} - Chapter page`, function() {
      cy.visit(`${countries[i]}/chapters/05`);
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.contains('Products of animal origin, not elsewhere specified or included');
      cy.contains('Date of trade');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I - Live animals; animal products');
      // Home
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });

    it(`Mobile - iOS iphone-x - ${countries[i]} Commodity page`, function() {
      cy.viewport('iphone-x');
      cy.visit(`${countries[i]}/commodities/0501000000`);
      // cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      // cy.checkCommPage('0501000000');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });
    it(`Mobile - Android - Samsung-note9 ${countries[i]} Commodity page`, function() {
      cy.viewport('samsung-note9');
      cy.visit(`${countries[i]}/commodities/0501000000`);
      // cy.get('.govuk-breadcrumbs__list').contains('Heading 0501');
      cy.get('.govuk-breadcrumbs__list').contains('Chapter 05').click();
      cy.contains('Chapter 05 - Products of animal origin, not elsewhere specified or included');
      cy.get('.govuk-breadcrumbs__list').contains('Section I').click();
      cy.contains('Section I - Live animals; animal products');
      cy.get('.govuk-breadcrumbs__list').contains('Home').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
      cy.get('.govuk-header__content').contains(`${pageheadings[i]}`);
    });
  }
  it('Headings which are also commodities', function() {
    const headings = ['3101', '0409', '5406', '6216', '6906', '7402', '7802', '8604', '9304', '0903'];
    // 9905
    for (let j =0; j<headings.length; j++) {
      cy.visit(`/headings/${headings[j]}`);
      cy.get('.govuk-breadcrumbs__list').contains(`Commodity ${headings[j]}`+ '000000');
      cy.get('.govuk-summary-list').contains(`${headings[j]}`+ '000000');
      // const n = (heading+ '000000');
      cy.get('.govuk-heading-l.commodity-header').contains(`Commodity ${headings[j]}`+ '000000');
    }
  });
});