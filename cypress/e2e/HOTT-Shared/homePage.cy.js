import commonPage from '../../pages/commonPage';
import homePage from '../../pages/homePage';

describe('GOV.UK_HomePage', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('homePage');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
  });

  context('cookie banner', () => {
    it('Accept Cookies', () => {
      commonPage.goToUrl('/find_commodity');
      commonPage.verifyTxtAndClk(data.acptButton);
      commonPage.verifyTxtAndClk(data.hideButton);
      homePage.verifyFetchCookie(data, data.policy1);
      homePage.verifyFetchCookie(data, data.policy2);
    });

    it('Reject Cookies', () => {
      commonPage.goToUrl('/find_commodity');
      commonPage.verifyTxtAndClk(data.rejctButton);
      commonPage.verifyTxtAndClk(data.hideButton);
      homePage.verifyFetchCookie(data, data.policy1);
      homePage.verifyFetchCookie(data, data.policy2);
    });
  });
  context('cookie policy', () => {
    it('allows the user to choose their own cookie policy', function() {
      commonPage.goToUrl('/cookies/policy');
      homePage.chkPlcyUsgRadioBtn();
      homePage.chkPlcyRmbrStngsRadioBtn();
      commonPage.verifyTxtAndClk(data.saveButton);
      homePage.verifyFetchCookie(data, data.policy1);
      homePage.verifyBannerHeadr(data.successTxt);
    });
  });
  context('when on the UK service_tools', () => {
    it('has the right links', () => {
      commonPage.goToUrl('/tools');
    });
  });
  context('when on the XI service_tools', () => {
    it('has the right links', () => {
      commonPage.goToUrl('/tools');
    });
  });
  context('Privacy Notice for UK and XI |', () => {
    it('Privacy - Page content and links', () => {
      commonPage.goToUrl('/sections');
      homePage.clkFooterLnk();
      homePage.verifyStaticTxt(data.staticDataToVerify);
      homePage.clkSubAcsLink();
      commonPage.verifyContains(data.accsRqustHeadTxt);
      commonPage.clkBckButn();
      homePage.clkComplntLink();
      commonPage.verifyContains(data.complntHeadTxt);
      commonPage.clkBckButn();
      commonPage.verifyTxtAndClk(data.dataProLink);
      commonPage.verifyContains(data.dataProHeadTxt);
      commonPage.clkBckButn();
    });
  });
  context('🇬🇧 💡 | titleTags-UK | Validating page titles tags - meta data -UK |', () => {
    it('Landing Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/find_commodity');
      commonPage.verifyTitleShudMatch(data.title);
    });
    it('Browse Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/browse');
      commonPage.verifyTitleShudMatch(data.BrowsePgtitle);
    });
    it('Tools Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/tools');
      commonPage.verifyTitleShudMatch(data.ToolsPgtitle);
    });
    it('A-Z Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/a-z-index/a');
      commonPage.verifyTitleShudMatch(data.AZPgtitle);
    });
    it('Updates Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/news');
      commonPage.verifyTitleShudMatch(data.UpdtsPgtitle);
    });
    it('Help Page - The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK', function() {
      commonPage.goToUrl('/help');
      commonPage.verifyTitleShudMatch(data.HelpPgtitle);
    });
    it('Section Page - Live animals; animal products - UK Integrated Online Tariff - GOV.UK', function() {
      commonPage.goToUrl('/sections/1');
      commonPage.verifyTitleShudEq(data.secPgTitle);
    });
    it('Chapter Page - Live animals - UK Integrated Online Tariff - GOV.UK', function() {
      commonPage.goToUrl('/chapters/01');
      commonPage.verifyTitleShudEq(data.chptPgTitle);
    });
    it('Heading Page - Live horses, asses, mules and hinnies - Northern Ireland Online Tariff - GOV.UK', function() {
      commonPage.goToUrl('/headings/0101');
      commonPage.verifyTitleShudEq(data.hdngPgTitle);
    });
    it('Subheadings Page - Rosin and resin acids - UK Integrated Online Tariff - GOV.UK', function() {
      cy.visit('/subheadings/3806100000-80');
      commonPage.goToUrl('/subheadings/3806100000-80');
      commonPage.verifyTitleShudEq(data.subhdngPgTitle);
    });
    it('Commodity Page - Commodity code 0101210000: Pure-bred breeding animals - UK Integrated Online Tariff - GOV.UK', function() {
      commonPage.goToUrl('/commodities/0101210000');
      commonPage.verifyTitleShudEq(data.cmdtyPgTitle);
    });
  });

  context('additional code duties table - UK service', () => {
    it('UK - Shows the correct heading additional code duties table', function() {
      commonPage.goToUrl('/headings/3906');
      homePage.verifyEleStaticData(data.adlCodeDutiesTablData);
    });

    it('UK - Start heading displays one tier further down', function() {
      commonPage.goToUrl('/headings/1512');
      homePage.verifyEleStaticData(data.dataTreeCtrls);
      homePage.verifyEleStaticData(data.dataTree);
      homePage.clkDataTreeOpnLnk(data.dataTreeCtrls[1]);
      homePage.verifyHidden();
      homePage.verifyCmdtyArea(data.dataTree[0]);
      homePage.clkDataTreeOpnLnk(data.dataTreeCtrls[0]);
      homePage.verifyEleStaticData(data.dataTree);
    });

    it('UK - Shows the correct subheading additional code duties table', function() {
      commonPage.goToUrl('/subheadings/3204130000-80');
      homePage.verifyEleStaticData(data.adlCodeDutiesTablData);
    });
  });

  context('additional code duties table - XI service', function() {
    it('XI - shows the correct heading additional code duties table', function() {
      commonPage.goToUrl('/xi/headings/3906');
      homePage.verifyEleStaticData(data.adlCodeDutiesTablData);
    });

    it('XI - Start heading displays one tier further down', function() {
      commonPage.goToUrl('/xi/headings/1512');
      homePage.verifyEleStaticData(data.dataTreeCtrls);
      homePage.verifyCmdtyArea(data.commodity, 1);
      homePage.verifyNotHaveText(data.commodityTreeData);
      homePage.clkDataTreeOpnLnk(data.dataTreeCtrls[1]);
      homePage.verifyHidden();
      homePage.verifyCmdtyArea(data.commodity, 0);
      homePage.clkDataTreeOpnLnk(data.dataTreeCtrls[0]);
      homePage.verifyCmdtyArea(data.commodity, 1);
      homePage.verifyNotHaveText(data.commodityTreeData);
    });

    it('XI - Shows the correct subheading additional code duties table', function() {
      commonPage.goToUrl('/xi/subheadings/3204130000-80');
      homePage.verifyEleStaticData(data.adlCodeDutiesTablData);
    });
  });
  context('chapter 99 specific warnings', function() {
    it('shows specific warning messaging for a commodity', function() {
      commonPage.goToUrl('/commodities/9919000010');
      commonPage.verifyContains(data.cmndMsg);
    });

    it('shows specific warning messaging for a heading', function() {
      commonPage.goToUrl('/commodities/9905000000');
      commonPage.verifyContains(data.cmndMsg);
    });
  });
  context('measure footnotes', function() {
    it('VAT and Excise on XI service', function() {
      commonPage.goToUrl('/xi/commodities/9305200010');
      commonPage.verifyTxtAndClk(data.vat_excise);
      commonPage.verifyTxtAndClk(data.footNotes);
      commonPage.verifyContains(data.headTxt);
    });
  });

  context('UK - Verify commodity code page', function() {
    it('Commodity does not have an end date', function() {
      commonPage.goToUrl('/commodities/2206003100');
      commonPage.verifyContains(data.headTxt);
      homePage.verifyHeadrList(data.staticData[0]);
      homePage.verifyEleStaticData(data.staticData);
    });
    it('Commodity does have an end date', function() {
      commonPage.goToUrl('/commodities/3911901910?day=31&month=12&year=2022');
      commonPage.verifyContains(data.headTxt);
      homePage.verifyHeadrList(data.staticData[0]);
      homePage.verifyStaticTxt(data.staticData);
    });
    it('End dated commodities - 0602905000 child comm code', function() {
      commonPage.goToUrlVistOption('/commodities/0602905010');
      commonPage.verifyContains(data.commodityTxt);
      homePage.verifyStaticTxt(data.staticData);
    });
  });
  context('when on the XI service', function() {
    it('XI - Commodity does not have an end date', function() {
      commonPage.goToUrl('/xi/commodities/2206003100');
      commonPage.verifyContains(data.headTxt);
      homePage.verifyHeadrList(data.staticData[0]);
      homePage.verifyEleStaticData(data.staticData);
    });
    it('XI - Commodity does have an end date', function() {
      commonPage.goToUrl('/xi/commodities/3911901910?day=31&month=12&year=2022');
      commonPage.verifyContains(data.headTxt);
      homePage.verifyHeadrList(data.staticData[0]);
      homePage.verifyEleStaticData(data.staticData);
    });
    it('XI - End dated commodities - 0602905000 child comm code', function() {
      commonPage.goToUrlVistOption('/xi/commodities/0602905010');
      commonPage.verifyContains(data.commodityTxt);
      homePage.verifyStaticTxt(data.staticData);
    });
  });
  it('Condition Code 999L - Separated with new text at the bottom', function() {
    commonPage.goToUrl('/commodities/0702000007');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
  });

  it('Organic control on frog legs', function() {
    commonPage.goToUrl('/commodities/0208907000');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
  });
  it('Fluorinated gases - multiple condition code groups', function() {
    commonPage.goToUrl('/commodities/8479899738');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
  });
  it('Waste controls - pair of doc codes paired together', function() {
    commonPage.goToUrl('/commodities/2804501000');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
    homePage.verifyStaticTxt(data.staticTxt);
  });
  it('Pet food from USA - multiple pairs of doc codes paired together', function() {
    commonPage.goToUrl('/commodities/2309902000');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
    homePage.verifyStaticTxt(data.staticTxt);
  });

  it('Headings which are declarable / also commodities- fall back option enabled', function() {
    commonPage.goToUrl('/commodities/5609000000');
    commonPage.verifyConditionsAndClk(data.measure, data.conditions);
    homePage.verifyEleStaticData(data.staticContent);
    homePage.verifyStaticTxt(data.staticTxt);
    commonPage.verifyPopupCloseBtn();
  });

  context('when a commodity has a price threshold measure for Belarus and Russia', function() {
    it('shows the correct threshold requirements on the export tab', function() {
      commonPage.goToUrl('/commodities/0101210000#export');
      commonPage.verifyConditionsAndClk(data.measureBelarus, data.conditions);
      homePage.verifyEleStaticData(data.staticContentMeasureBelarus);
      commonPage.verifyPopupCloseBtn();
      commonPage.verifyConditionsAndClk(data.measureRussia, data.conditions);
      homePage.verifyEleStaticData(data.staticContentMeasureRussia);
    });
  });

  context('when a commodity has a threshold measure which uses the entry price system', function() {
    it('shows the correct threshold requirements', function() {
      commonPage.goToUrl('/xi/commodities/0805501010');
      commonPage.verifyConditionsAndClk(data.measure, data.conditions);
      homePage.verifyEleStaticData(data.staticContent);
      homePage.verifyStaticTxt(data.staticTxt);
    });
  });

  context('when a commodity has credibility checks', function() {
    it('shows credibility checks correctly', function() {
      commonPage.goToUrl('/xi/commodities/2204219313');
      homePage.verifyMeasureType(data.measureType);
      commonPage.verifyConditionsAndClk(data.measure, data.conditions);
      homePage.verifyEleStaticData(data.staticContent);
      commonPage.verifyPopupCloseBtn();
    });
  });

  context('when there are LPA-based components on alcohol duties', function() {
    it.only('shows the correct popup information_LPA', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      homePage.verifyExciseAdditionalCodePopup(data.exciseCode, data.dutyAmount);
      homePage.verifyExciseAdditionalCodePopup(data.exciseCode1, data.dutyAmount1);
    });
  });

  context('when there are ASVX components on alcohol duties', function() {
    it.only('shows the correct popup information_ASVX', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      homePage.verifyExciseAdditionalCodePopup(data.exciseCode, data.dutyAmount);
      homePage.verifyExciseAdditionalCodePopup(data.exciseCode1, data.dutyAmount1);
    });
  });
});
