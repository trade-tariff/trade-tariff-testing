/* eslint-disable max-len */
/*
EA,EA(R)     - AC
ASDZ,ASDZ(R) - SD
ADFM,ADFM(R) - FD

1011	Erga Omnes
2012	EEA (Norway, Iceland, Liechtenstein)
2200	Central America
CH	Switzerland
EC	Ecuador
EG	Egypt
IL	Israel
IS	Iceland
JP	Japan
NO	Norway
SG	Singapore

 REDUCTION INDICATOR FOR ISRAEL
*/
describe('| meursingCalculations | Third Country Duty and Tariff Preference calculations', function() {
  it('| EA , EAR | 1901100000 - Costa Rica |', function() {
    cy.visit('/xi/commodities/1901100000');
    cy.checkCommPage('1901100000');
    cy.get('input#search_country').click().clear().wait(500).type('CR');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Costa Rica (CR)').click();
    cy.get('a#tab_import').click();
    cy.get('#measure-2772105').contains('7.60 % + EA');
  //  cy.get('#measure-3803683').contains('0.00 % + EAR');
    cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').click().clear().type('507');
    cy.get('form#new_meursing_lookup_result > .govuk-button').click();
    cy.get('#measure-2772105').contains('7.60 % + 99.88 EUR / 100 kg');
    // 7.60 % + 99.88 EUR/100kg
    // cy.get('#measure-3803683').contains('0.00 % + 9.90 EUR / 100 kg');
    // 0 % + 9.90 EUR/100kg
    // https://ec.europa.eu/taxation_customs/dds2/taric/measures.jsp?Lang=en&SimDate=20211006&Taric=1901100000&LangDescr=en
  });

  it('| ASDZ , ASDZR | 1806909019 - Iceland |', function() {
    cy.visit('/xi/commodities/1806909019');
    cy.checkCommPage('1806909019');
    cy.get('input#search_country').click().clear().wait(500).type('(IS)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Iceland (IS)').click();
    cy.get('a#tab_import').click();
    cy.get('#measure-2051553').contains('8.30 % + EA MAX 18.70 % +ADSZ');
    cy.get('#measure-2972478').contains('0.00 % + EAR MAX 18.70 % +ADSZR');
    cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').click().clear().type('476');
    cy.get('form#new_meursing_lookup_result > .govuk-button').click();
    cy.get('#measure-2051553').contains('8.30 % + 117.11 EUR / 100 kg MAX 18.70 % + 10.06 EUR / 100 kg');
    // 8.30 % + 117.11 EUR/100kg MAX 18.70 % + 10.06 EUR/100kg
    cy.get('#measure-2972478').contains('117.11 EUR / 100 kg MAX 18.70 % + 9.75 EUR / 100 kg');
    // 0 % + 117.11 EUR/100kg MAX 18.70 % + 9.75 EUR/100kg
    // https://ec.europa.eu/taxation_customs/dds2/taric/measures.jsp?Lang=en&SimDate=20211006&Taric=1806909019&LangDescr=en
  });

  it('| ADFM , ADFMR | 1905320500 - Norway |', function() {
    cy.visit('/xi/commodities/1905320500');
    cy.checkCommPage('1905320500');
    cy.get('input#search_country').click().clear().wait(500).type('(NO)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Norway (NO)').click();
    cy.get('a#tab_import').click();
    cy.get('#measure-2544964').contains('9.00 % + EA MAX 20.70 % +ADFM');
    cy.get('#measure-2972782').contains('0.00 % + EAR MAX 20.70 % +ADFMR');
    cy.get('input#meursing-lookup-result-meursing-additional-code-id-field').click().clear().type('476');
    cy.get('form#new_meursing_lookup_result > .govuk-button').click();
    cy.get('#measure-2544964').contains('9.00 % + 117.11 EUR / 100 kg MAX 20.70 % + 13.99 EUR / 100 kg');
    // 9.00 % + 117.11 EUR/100kg MAX 20.70 % + 13.99 EUR/100kg
    cy.get('#measure-2972782').contains('0.00 % + 117.11 EUR / 100 kg MAX 20.70 % + 11.22 EUR / 100 kg');
    // 0 % + 117.11 EUR/100kg MAX 20.70 % + 11.22 EUR/100kg
    // 0 % + EAR(1) MAX 20.70 % +ADFMR(1)
    // https://ec.europa.eu/taxation_customs/dds2/taric/measures.jsp?Lang=en&SimDate=20211006&Taric=1905320500&LangDescr=en
  });
  it('| Validate old meursing links are removed |', function() {
    cy.visit('/xi/commodities/1905320500');
    cy.checkCommPage('1905320500');
    cy.contains('This commodity has a meursing code').should('not.exist');
  });
});
