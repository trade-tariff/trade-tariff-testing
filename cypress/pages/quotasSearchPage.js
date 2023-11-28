const commonPage = require('./commonPage');
class QuotasSearchPage {
  elements = {
    searchForQuotasTxt: () => cy.contains('Search for quotas'),
    commodityCode: () => cy.get('input#goods_nomenclature_item_id'),
    searchForQuotasBtn: () => cy.get('form#new_search > input[name=\'new_search\']'),
    quotasSearchResultsTableData: () => cy.get('.govuk-table'),
    countryPicker: () => cy.get('.js-quota-country-picker'),
    country: () => cy.get('input#geographical_area_id'),
    resetToAllCountries: () => cy.get('.reset-country-picker'),
    orderNumber: () => cy.get('input#order_number'),
    criticalSate: () => cy.get('select#critical'),
    status: () => cy.get('select#status'),
    day: () => cy.get('input#day'),
    month: () => cy.get('input#month'),
    year: () => cy.get('input#year'),
  };

  verifyCommodityCode(commodity) {
    this.elements.commodityCode().click().clear().type(`${commodity}{enter}`);
  }

  verifyOrderNumber(orderNum) {
    this.elements.orderNumber().click().clear().type(`${orderNum}{enter}`);
  }

  verifyDate(dayVal, monthVal, yearVal) {
    this.elements.day().click().clear().type(dayVal);
    this.elements.month().click().clear().type(monthVal);
    this.elements.year().click().clear().type(yearVal);
  }

  verifySearchForQuotasBtn() {
    this.elements.searchForQuotasBtn().click();
  }

  selectCountry(countryName) {
    this.elements.countryPicker().click;
    this.elements.country().type(`${countryName}{enter}`);
  }
  verifyQuotasSearchResults(tableData) {
    this.elements.quotasSearchResultsTableData().contains(tableData);
  }

  verifyResetCountryBtn() {
    this.elements.resetToAllCountries().click();
  }

  selectCriticalState(text) {
    this.elements.criticalSate().select(text);
  }

  selectSearchForQuotasStatusTxt(text) {
    this.elements.status().select(text);
  }

  verifySearchForQuotasTxt() {
    commonPage.verifyContains('Search for quotas');
  }

  verifyQuotasSearchResult() {
    commonPage.verifyContains('Quota search results');
  }
}


export default new QuotasSearchPage();
