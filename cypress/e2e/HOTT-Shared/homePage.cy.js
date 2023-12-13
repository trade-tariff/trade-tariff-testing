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

  context('global search function on UK and XI service ** Unreleased **', () => {
    // {tags: ['config', 'unreleased-tag']}, {tags: ['config', 'xbrowser-tag']}, function() {
    it.only('Availabilty all pages', function() {
      // search for commodity by number
      commonPage.goToUrl('/find_commodity');
      homePage.verifyGlbllSrchForCmdty(data.commodityCode);
      commonPage.verifyUrlShudInclude(data.url);

      // search for commodity by search reference
      commonPage.goToUrl('/find_commodity');
      homePage.verifyGlbllSrchForCmdty(data.searchRef);
      commonPage.verifyUrlShudInclude(data.urlWithSearchRef);
    });
  });
});
