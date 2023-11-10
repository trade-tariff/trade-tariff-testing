class quotasSearchPage {

    elements = {
        txtContains: () => cy.contains('Search for quotas'),
        commodityCodeField: () => cy.get('input#goods_nomenclature_item_id'),
        searchQuotasBtn: () => cy.get('form#new_search > input[name=\'new_search\']'),
        orderNumberColHead: () => cy.get('.govuk-table__head'),
        tableRow: () => cy.get('.govuk-table__row'),
        countryPicker: () => cy.get('.js-quota-country-picker'),
        countryField: () =>  cy.get('input#geographical_area_id'),
        resetCountryBtn: () => cy.get('.reset-country-picker'),
        orderNumberField: () => cy.get('input#order_number'),
        criticaState: () => cy.get('select#critical'),
        statusText: () =>  cy.get('select#status'),
        dayVal: () => cy.get('input#day'),
        monVal: () => cy.get('input#month'),
        yearVal: () => cy.get('input#year')

    }

    verifyCommodityCode(commodityCode){
        this.elements.commodityCodeField().click();
        this.elements.commodityCodeField().clear();
        this.elements.commodityCodeField().type(`${commodityCode}{enter}`);
    
    }
    verifyOrderNumber(corderNumber){
        this.elements.orderNumberField().click();
        this.elements.orderNumberField().clear();
        this.elements.orderNumberField().type(`${corderNumber}{enter}`);
    
    }
    // enterDateVal(day){
    //     this.elements.dayVal().click();
    //     this.elements.dayVal().clear();
    //     this.elements.dayVal().type('09');
    // }
    enterDateVal(day, month, year){
        this.elements.dayVal().click();
        this.elements.dayVal().clear();
        this.elements.dayVal().type(day);
        this.elements.monVal().click();
        this.elements.monVal().clear();
        this.elements.monVal().type(month);
        this.elements.yearVal().click();
        this.elements.yearVal().clear();
        this.elements.yearVal().type(year);

    }
    verifySearchQuotasBtn(){
       this.elements.searchQuotasBtn().click();
    }
    
    verifySearchCriteriaErrorTxtNotExist(){
        this.this.elements.noDataErrorTxt().should('not.exist');
    }
    selectCountry(countryName) {
        this.elements.countryPicker().click
        this.elements.countryField().type(`${countryName}{enter}`);
    }
    verifyTableRow(tableRowdData){
        this.elements.tableRow().contains(tableRowdData);

    }
    verifyColHeadingSearchResult(orderName){
        this.elements.orderNumberColHead().contains(orderName)
    }
    verifyRecetCountryBtn(){
        this.elements.resetCountryBtn().click();
    }
    selectCriticalText(text){
        //this.elements.criticaState().select();
        this.elements.criticaState().select(text);
    }
    selectStatusText(text){
        //this.elements.criticaState().select();
        this.elements.statusText().select(text);
    }
}
   

module.exports = new quotasSearchPage();