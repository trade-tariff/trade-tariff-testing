class CommodityPage {
  elements = {
    tabChemicals: () => cy.get('#tab_chemicals'),
    chemicals: () => cy.get('#chemicals').eq(0),
  };

  clkChemicalsTab() {
    this.elements.tabChemicals().click();
  }

  verifyChemicalsContains(txtToVerify) {
    this.elements.chemicals().contains(txtToVerify);
  }
}

module.exports = new CommodityPage();
