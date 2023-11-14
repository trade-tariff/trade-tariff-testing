const commonPage = require('./commonPage');
class QuotasSearchPage {
  elements = {
    txtContains: () => cy.contains('Search for quotas'),
    commodityCodeField: () => cy.get('input#goods_nomenclature_item_id'),
    searchQuotasBtn: () => cy.get('form#new_search > input[name=\'new_search\']'),
    orderNumberColHead: () => cy.get('.govuk-table__head'),
    tableRow: () => cy.get('.govuk-table__row'),
    countryPicker: () => cy.get('.js-quota-country-picker'),
    countryField: () => cy.get('input#geographical_area_id'),
    resetCountryBtn: () => cy.get('.reset-country-picker'),
    orderNumberField: () => cy.get('input#order_number'),
    criticaState: () => cy.get('select#critical'),
    statusText: () => cy.get('select#status'),
    dayVal: () => cy.get('input#day'),
    monVal: () => cy.get('input#month'),
    yearVal: () => cy.get('input#year'),
  };

  verifyQuotaSearchCommodityCode(commodityCode) {
    this.elements.commodityCodeField().click().clear().type(`${commodityCode}{enter}`);
  }

  verifyQuotaSearchOrderNumber(orderNumber) {
    this.elements.orderNumberField().click().clear().type(`${orderNumber}{enter}`);
  }

  enterDateValForQuotasSearchResults(day, month, year) {
    this.elements.dayVal().click().clear().type(day);
    this.elements.monVal().click().clear().type(month);
    this.elements.yearVal().click().clear().type(year);
  }
  verifySearchForQuotasBtn() {
    this.elements.searchQuotasBtn().click();
  }

  selectCountryForQuotas(countryName) {
    this.elements.countryPicker().click;
    this.elements.countryField().type(`${countryName}{enter}`);
  }
  verifyQuotasSearchResTableRow(tableRowdData) {
    this.elements.tableRow().contains(tableRowdData);
  }
  verifyQuotasSearchResColHeading(orderName) {
    this.elements.orderNumberColHead().contains(orderName);
  }
  verifyRecetCountryBtn() {
    this.elements.resetCountryBtn().click();
  }
  selectSearchForQuotasCriticalText(text) {
    this.elements.criticaState().select(text);
  }
  selectSearchForQuotasStatusText(text) {
    this.elements.statusText().select(text);
  }
  verifyQuotasHeading() {
    commonPage.verifyContains('Search for quotas');
  }
  verifyQuotasSearchResult() {
    commonPage.verifyContains('Quota search results');
  }
}


export default new QuotasSearchPage();
