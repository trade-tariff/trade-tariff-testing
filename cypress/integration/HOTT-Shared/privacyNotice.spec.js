/* eslint-disable max-len */
describe('🇬🇧 🇪🇺 💡 | PrivacyNotice.spec | Privacy Notice for UK and XI |', function() {
  const country = ['uk', 'xi'];
  const titles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  it('Privacy - link works', function() {
    for (let i = 0; i < country.length; i++) {
      cy.visit(`${country[i]}/sections`);
      cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').click();
      cy.contains('Privacy notice');
      cy.contains(`${titles[i]}`);
      // breadcrumb Home
      cy.get('.govuk-breadcrumbs__link').click();
      cy.contains(`${titles[i]}`);
    }
  });
  it('Privacy - Page content and links', function() {
    for (let i = 0; i < country.length; i++) {
      cy.visit(`${country[i]}/sections`);
      cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').click();
      cy.contains('Privacy notice');
      cy.contains(`${titles[i]}`);
      cy.contains('This notice sets out how we will use your personal data, and your rights. It is made under Articles 13 and/or 14 of the General Data Protection Regulation (GDPR).');
      cy.contains('How we use your data');
      cy.contains('The purposes for which we are processing your personal data are to:');
      cy.contains(`provide online support to users of the \'${titles[i]}\' service`);
      cy.contains('collect web analytics to help us to monitor usage of our service for the purposes of improving it');
      cy.get('p:nth-of-type(20) > a').click();
      cy.contains('Make a subject access request to HMRC');
      cy.go(-1);
      // headings
      cy.contains('Complaints');
      cy.contains('International transfers');
      cy.contains('Your rights');
      cy.contains('Data retention');
      cy.contains('Data security');
      cy.contains('Who we share your data with');
      cy.contains('The legal basis of using your data');
      cy.contains('The data we will process');
      // complaining
      cy.get('p:nth-of-type(21) > a').click();
      cy.contains('Make a complaint about HMRC');
      cy.go(-1);
      // page links
      cy.get('p:nth-of-type(19) > a').contains('Office of the Data Protection Officer Privacy Notice').click();
      cy.contains('HMRC Office of the Data Protection Officer Privacy Notice');
      cy.go(-1);
      // email links
      cy.contains('advice.dpa@hmrc.gov.uk.');
      cy.contains('casework@ico.org.uk');
    }
  });
  it('Privacy - All pages ', function() {
    for (let i = 0; i < country.length; i++) {
      const pages = [`${country[i]}/sections/1`, `${country[i]}/chapters/01`, `${country[i]}/headings/0101`, `${country[i]}/commodities/0101210000`, `${country[i]}/a-z-index/a`, `${country[i]}/tools`];
      for (let j = 0; j < pages.length; j++) {
        cy.visit(`${pages[j]}`);
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link').contains('Privacy');
      }
    }
  });
});
