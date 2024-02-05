import _ from 'underscore';
import {resolveRefs} from '@ovotech/json-refs';
import dayjs from 'dayjs';
import commonHelpers from '../helpers/commonHelpers';

const importDate = dayjs().format('DD MMMM YYYY');
class CommonPage {
  elements = {
    ukBannerTariff: () => cy.get('.govuk-header__content').contains('UK Integrated Online Tariff'),
    xiBannerTariff: () => cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff'),
    ukTariff: () => cy.get('#content').contains('UK Integrated Online Tariff'),
    xiTariff: () => cy.get('#content').contains('Northern Ireland Online Tariff'),
    imageCheck: () => cy.get('.image-guide'),
    webChatLink: () => cy.get('#webchat-link > p > a'),
    closePopupBtn: () => cy.get('.close [href]'),
    backLnk: () => cy.get('.govuk-back-link'),
    hrefLnk: () => cy.get('#main-content .govuk-link'),
    govUKBtn: () => cy.get('.govuk-button'),
    clkContinue: () => 'Continue',
    clkStartAgain: () => 'Start again',
  };

  setTestData(fileName) {
    cy.fixture(fileName).then((testData) => {
      Cypress.env('testData', testData);
      this.getRefsData(testData);
    });
  }

  getTestDataBasedOnTestCaseName() {
    const testCaseData = [];
    const data = Cypress.env('testData');
    if (`${data}` != null && `${data}` != 'undefined') {
      for (const [key, value] of Object.entries(data)) {
        if (key == this.getTestCaseName()) {
          testCaseData.push(value);
        } else if (key == 'commonData') {
          testCaseData.push(value);
        }
      }
      return Object.assign({}, testCaseData[0], testCaseData[1]);
    }
  }

  getRefsData(testData) {
    resolveRefs(testData).then((res) => {
      Cypress.env('testDataRefs', res.refs);
    });
  }

  getTestCaseName() {
    return Cypress.currentTest.title;
  }

  getTestCaseSpecificStaticData(staticData, keysToRemove) {
    return _.omit(staticData, keysToRemove);
  }

  findAndReplaceKeyValue(staticData, replaceValueWith, replaceValueTo) {
    return Object.fromEntries(Object.entries(staticData).map(([key, val]) => [
      key, val.toString().replace(replaceValueWith, replaceValueTo)]));
  }

  // Get data from check your answers table or similar and compare with json test data to assert
  getTableDataAndAssert(element, data, replaceWith, replaceTo) {
    const items = []; let itemStr; const arrayObj = []; const actualData = {}; let expectedData = {};
    element.each(($li) => items.push($li.text())).then(() => {
      itemStr = items.join(':').toString().split(':');
      for (const str of itemStr) {
        if (str.includes('Change')) {
          arrayObj.push(str.replace('Change', '').trim('\n \n').replace('\n    ', ':').replace('\n  ', ':'));
        } else {
          arrayObj.push(str.replace('\n        \n         ', '').replace('\n         ', '')
              .replace('\n        \n      ', '').replace('\n         ', '').replace(' \n         ', ''));
        }
      }
      let strArray;
      for (let i = 0; i < arrayObj.length; i++) {
        if (JSON.stringify(arrayObj[i]).includes(':')) {
          strArray = arrayObj[i].split(':');
          actualData[strArray[0]] = strArray[1];
        } else {
          for (let j = 1; j < arrayObj.length;) {
            if (i >= 0) {
              if (JSON.stringify(arrayObj[j]).includes(replaceWith)) {
                expectedData = this.findAndReplaceKeyValue(data, replaceWith, arrayObj[j]);
              }
              actualData[arrayObj[i].toString().replace(' ', '')] = arrayObj[j];
              i = i + 2;
              j = j + 2;
            }
          }
        }
      }
      if (replaceTo != null) {
        expectedData = this.findAndReplaceKeyValue(data, replaceWith, replaceTo);
      }
      expect(JSON.stringify(actualData)).to.be.equal(JSON.stringify(expectedData));
    });
  }

  getDutyPageTableDataAndCompare(element, data) {
    const items = []; let itemStr; let splitData = []; const arrayObj1 = {}; const arrayObj2 = {}; let dataKeySplit = [];
    const actualData = {}; const expectedData = {}; let key1 = {}; let value1 = {}; let key2 = {}; let value2 = {}; const strContains = [];
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    if (dataKeys.length == 1 || dataKeys.length == 2) {
      key1 = dataKeys[0]; value1 = dataValues[0]; key2 = dataKeys[1]; value2 = dataValues[1];
    } else {
      key1 = dataKeys[1]; value1 = dataValues[1]; key2 = dataKeys[2]; value2 = dataValues[2];
      if (key2 != null) {
        dataKeySplit = key2.split('-');
      }
    }
    element.each(($li) => items.push($li.text())).then(() => {
      itemStr = items.join(':').toString().split(':');
      for (let i = 0; i < itemStr.length; i ++) {
        const dataStr = itemStr[i].trim('\n \n').replace('\n    ', ':').replace('      ', '').replace('\n          ', ':')
            .replace('\n        \n      \n      \n        \n    ', ':').replace('\n    ', ':').replace('\n\n\n    ', ':')
            .replace('\n    ', ':').replace('\n\n\n    ', ':').replace('\n    ', ':').replace('\n\n\n    ', ':').replace('\n    ', ':')
            .replace('\n    ', ':').replace('\n    ', ':').replace('\n    \n    ', ':');
        splitData = dataStr.split(':');
        if (splitData[6].includes(key1)) {
          strContains[0] = splitData[6];
          arrayObj1[splitData[0]] = [splitData[3], splitData[6], splitData[9].replace(' ', ''), splitData[12]];
          arrayObj1[splitData[1]] = [splitData[4], splitData[7], splitData[10]];
          arrayObj1[splitData[2]] = [splitData[5], splitData[8], splitData[11], splitData[13]];
          actualData[key1] = arrayObj1;
        } else if (splitData[6].includes(dataKeySplit[0])) {
          strContains[1] = splitData[6];
          arrayObj2[splitData[0]] = [splitData[3], splitData[6], splitData[9].replace(' ', ''), splitData[12]];
          arrayObj2[splitData[1]] = [splitData[4], splitData[7], splitData[10]];
          arrayObj2[splitData[2]] = [splitData[5], splitData[8], splitData[11], splitData[13]];
          actualData[key2] = arrayObj2;
        }
      }
      for (let i = 0; i < strContains.length; i ++) {
        if (strContains[i].includes(key1)) {
          expectedData[key1] = value1;
        } else if (strContains[i].includes(dataKeySplit[0])) {
          expectedData[key2] = value2;
        }
      }
      const dataToVerify = this.getTestCaseSpecificStaticData(data, [key1, key2]);
      if (JSON.stringify(dataToVerify).includes('tradeOptionsOnImportDutyPage')) {
        commonHelpers.verifyStaticContent(dataToVerify.tradeOptionsOnImportDutyPage);
      }
      expect(JSON.stringify(actualData)).to.be.equal(JSON.stringify(expectedData));
    });
  }

  // Sort the data based on key and refs based and return proper test data to execute corresponding test case
  getTestData() {
    const data = this.getTestDataBasedOnTestCaseName();
    const dataRefs = this.returnNewDataRefsByAssigningNewValues();
    for (const [dataRefsKey, dataRefsValue] of Object.entries(dataRefs)) {
      for (const [dataKey, dataValue] of Object.entries(data)) {
        if (JSON.stringify(dataValue).includes('$ref')) {
          for (const [replaceDataKey, replaceDataValue] of Object.entries(dataValue)) {
            if (JSON.stringify(replaceDataValue).includes('$ref')) {
              this.replaceRefsValuesBasedOnKeyName(dataRefsKey, dataRefsValue, data, dataKey, dataValue, replaceDataKey, replaceDataValue);
            }
          }
          // Replace dataValues which has ref in the value with actual dataRefsValue
          this.replaceRefsValuesBasedOnKeyName(dataRefsKey, dataRefsValue, data, dataKey, dataValue);
        }
      }
      // Replace dataValues which has ref in the value and it does not match key and value
      for (const [dataKey, dataValue] of Object.entries(data)) {
        if (JSON.stringify(dataValue).includes('$ref')) {
          for (const [replaceDataKey, replaceDataValue] of Object.entries(dataValue)) {
            if (JSON.stringify(replaceDataValue).includes('$ref')) {
              this.returnDataByReplacingRefsDataWithActualValues(
                  dataRefsKey, dataRefsValue, data, dataKey, dataValue, replaceDataKey, replaceDataValue);
              const objRefsData = Object.values(replaceDataValue);
              for (const [objKey, objValue] of Object.entries(objRefsData)) {
                if (JSON.stringify(objValue).includes('$ref') && dataRefsKey == objValue.$ref) {
                  this.returnDataByReplacingRefsDataWithActualValues(
                      dataRefsKey, dataRefsValue, data, dataKey, dataValue, replaceDataKey, objValue, objKey, objRefsData);
                }
              }
            }
          }
        }
      }
    }
    if (data != null) {
      return data;
    }
    return data;
  }

  returnDataByReplacingRefsDataWithActualValues(dataRefsKey, dataRefsValue, data, dataKey,
      dataValue, replaceDataKey, replaceDataValue, objKey, objRefsData) {
    if (dataRefsKey == replaceDataValue.$ref) {
      if (objKey != null) {
        objRefsData[objKey] = dataRefsValue;
        dataValue[replaceDataKey] = objRefsData;
        data[dataKey] = dataValue;
      } else {
        dataValue[replaceDataKey] = dataRefsValue;
        data[dataKey] = dataValue;
      }
    }
    if (dataValue[replaceDataKey] == 'Date') {
      dataValue[replaceDataKey] = importDate;
      data[dataKey] = dataValue;
    }
    return data;
  }

  returnNewDataRefsByAssigningNewValues() {
    const dataRefs = Cypress.env('testDataRefs');
    for (const [dataRefsKey, dataRefsValue] of Object.entries(dataRefs)) {
      if (JSON.stringify(dataRefsValue).includes('$ref')) {
        const dataRefsRefsValue = dataRefs[dataRefsValue.$ref];
        if (dataRefsRefsValue != null && dataRefsRefsValue != 'undefined') {
          dataRefs[dataRefsKey] = dataRefsRefsValue;
        }
      }
    }
    return dataRefs;
  }

  replaceRefsValuesBasedOnKeyName(dataRefsKey, dataRefsValue, data, dataKey, dataValue, replaceDataKey, replaceDataValue ) {
    if (dataRefsKey.includes(replaceDataKey) && !dataRefsKey.includes(this.getTestCaseName())) {
      this.returnDataByReplacingRefsDataWithActualValues(
          dataRefsKey, dataRefsValue, data, dataKey, dataValue, replaceDataKey, replaceDataValue);
    } else if (dataRefsKey == dataValue.$ref) {
      data[dataKey] = dataRefsValue;
    } else if (dataRefsKey.includes(this.getTestCaseName()) && !Object.values(dataValue).includes(dataRefsValue)) {
      if (JSON.stringify(dataRefsKey).includes(replaceDataKey)) {
        dataValue[replaceDataKey] = dataRefsValue;
        data[dataKey] = dataValue;
      }
    }
    return data;
  }

  goToBaseUrl(url) {
    cy.visit(url);
    this.elements.ukTariff();
    this.elements.xiTariff();
  }

  goToUrl(urlPathToVisit) {
    cy.visit(urlPathToVisit);
  }

  goToSpecificUrlToCheckPageAccess(urlPathToVisit) {
    cy.visit(urlPathToVisit, {failOnStatusCode: false});
  }

  verifyCountryBanner(country) {
    if (country == 'xi') {
      this.elements.xiBannerTariff();
    } else {
      this.elements.ukBannerTariff();
    }
  }

  verifyContains(strToVerify) {
    cy.contains(strToVerify);
  }

  verifyTxtAndClk(txtToClk) {
    cy.contains(txtToClk).click();
  }

  imgShudExist() {
    this.elements.imageCheck().should('exist');
  }

  imgShudNotExist() {
    this.elements.imageCheck().should('not.exist');
  }

  verifyUrlShudInclude(urlStrToCheck) {
    cy.url().should('include', `${urlStrToCheck}`);
  }

  verifyUrlShudNotInclude(urlStrToCheck) {
    cy.url().should('not.include', `${urlStrToCheck}`);
  }

  verifyTxtShudVisible(element, txt) {
    cy.get(element).contains(txt).should('be.visible');
  }

  verifyTxtShudNotVisible(element, txt) {
    cy.get(element).contains(txt).should('not.be.visible');
  }

  verifyUrlShudMatch(urlStrToCheck) {
    const regexp = new RegExp(urlStrToCheck);
    cy.url().should('match', regexp);
  }

  verifyPageShudHaveLnk(link) {
    this.elements.hrefLnk().should(
        'have.attr',
        'href',
        `${link}`,
    );
  }

  verifyWebChatShudHaveLnk(webChatLink) {
    this.elements.webChatLink().eq(1)
        .should(
            'have.attr',
            'href',
            `${webChatLink}`,
        );
  }

  textShudNotExist(txtToVerify) {
    cy.contains(txtToVerify).should('not.exist');
  }

  verifyPopupCloseBtn() {
    this.elements.closePopupBtn().click();
  }

  verifyShudNotContains(txtToVerify) {
    cy.should('not.contain', txtToVerify);
  }

  verifyBackLnk() {
    this.elements.backLnk();
  }

  clkBackLnk() {
    this.elements.backLnk().click();
  }

  goBack() {
    cy.go('back');
  }

  clkContinueBtn() {
    this.verifyTxtAndClk(this.elements.clkContinue());
  }

  clkStartAgainBtn() {
    this.verifyTxtAndClk(this.elements.clkStartAgain());
  }

  clkSpecificChangeLnk(element, txtToVerify) {
    cy.get(element).each(($el) => {
      const href = $el.attr('href');
      if (href.includes(txtToVerify)) {
        cy.visit(href);
      }
    });
  }
}

export default new CommonPage();
