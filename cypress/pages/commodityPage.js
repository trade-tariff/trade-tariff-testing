import commonPage from './commonPage';
import dutyCalculatorPage from './dutyCalculatorPage';

class CommodityPage {
  elements = {
    dutyCalcLnk: () => cy.contains('work out the duties and taxes applicable to the import of commodity'),
    tabChemicals: () => cy.get('#tab_chemicals'),
    chemicals: () => cy.get('#chemicals').eq(0),
    goToUKCommodityLnk: (commCode) => `/uk/commodities/${commCode}`,
    goToXICommodityLnk: (commCode) => `/xi/commodities/${commCode}`,
  };

  goToCommCodePage(commcode, country) {
    if (country == 'xi') {
      commonPage.goToUrl(this.elements.goToXICommodityLnk(commcode));
      commonPage.elements.xiBannerTariff();
    } else {
      commonPage.goToUrl(this.elements.goToUKCommodityLnk(commcode));
      commonPage.elements.ukBannerTariff();
    }
  }

  // validate commodity page heading
  checkCommPage(commcode) {
    commonPage.verifyContains(new RegExp(`Commodity .*${commcode}`, 'i'));
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
}

export default new CommodityPage();
