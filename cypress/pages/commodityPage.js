import commonHelpers from '../helpers/commonHelpers';
import commonPage from './commonPage';
import dutyCalculatorPage from './dutyCalculatorPage';

class CommodityPage {
  elements = {
    dutyCalcLnk: () => cy.contains('work out the duties and taxes applicable to the import of commodity'),
    tabImport: () => cy.get('a#tab_import'),
    tabExport: () => cy.get('a#tab_export'),
    measure: (measureId) => cy.get(`#measure-${measureId}`),
    tabChemicals: () => cy.get('#tab_chemicals'),
    chemicals: () => cy.get('#chemicals').eq(0),
    tradePartner: () => cy.get('input#trading_partner_country'),
    tradePartnerListbox: () => cy.get('[id=\'trading_partner_country__listbox\']'),
    meursingInputPrefix: () => cy.get('span.govuk-input__prefix'),
    meursingAdditionalCode: () => cy.get('input#meursing-lookup-result-meursing-additional-code-id-field'),
    clkMeursingCodeFinderLnk: () => cy.get('div#meursing-lookup-result-meursing-additional-code-id-hint > .govuk-link'),
    goToCommodityLnk: (country, commCode) => `/${country}/commodities/${commCode}`,
    meursingLookUpBtn: () => cy.get('#new_meursing_lookup_result > button'),
  };

  goToCommCodePage(commcode, country) {
    commonPage.goToUrl(this.elements.goToCommodityLnk(country, commcode));
    if (country == 'xi') {
      commonPage.elements.xiBannerTariff();
    } else {
      commonPage.elements.ukBannerTariff();
    }
  }

  // validate commodity page heading
  checkCommPage(commcode) {
    commonPage.verifyContains(new RegExp(`Commodity .*${commcode}`, 'i'));
  }

  clkImportTab() {
    this.elements.tabImport().click();
  }

  clkExportTab() {
    this.elements.tabExport().click();
  }

  // click duty calculator link on the commodity page
  clkDutyCalcLnk(commcode) {
    this.checkCommPage(commcode);
    this.elements.dutyCalcLnk().click();
    commonPage.verifyContains(dutyCalculatorPage.elements.goodsImportHeading());
  }

  clkChemicalsTab() {
    this.elements.tabChemicals().click();
  }

  verifyChemicalsContains(txtToVerify) {
    this.elements.chemicals().contains(txtToVerify);
  }

  clkMeursingCodeFinderLnk() {
    this.elements.clkMeursingCodeFinderLnk().click();
  }

  enterAndSelectTradePartnerCountryNameFromDropDown(tradePartner, countryShortCode) {
    this.elements.tradePartner().clear().click().type(tradePartner);
    this.elements.tradePartnerListbox().contains(tradePartner).click();
    commonPage.verifyUrlShudInclude(countryShortCode);
  }

  verifyMeursingLookUpResultsTxt(staticData, inputPrefix) {
    commonHelpers.verifyStaticContent(staticData);
    this.elements.meursingInputPrefix().contains(inputPrefix);
  }

  enterAdditionalCodeAndclkSaveCodeBtn(additionalCode) {
    this.elements.meursingAdditionalCode().click().clear().type(additionalCode);
    this.elements.meursingLookUpBtn().click();
  }

  verifyImportDutiesMeasureContainsOrDutyRates(measureId, txtToVerify) {
    this.elements.measure(measureId).contains(txtToVerify);
  }
}

export default new CommodityPage();
