class ToolsPage {
  elements = {
    clkMeursingCodeFinder: () => cy.contains('Meursing code finder'),
  };

  clkMeursingCodeFinderLnk() {
    this.elements.clkMeursingCodeFinder().click();
  }
}

export default new ToolsPage();
