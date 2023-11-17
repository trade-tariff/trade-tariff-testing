import dayjs from 'dayjs';
//import helpers from '../lib/helpers';
const commonPage = require('./commonPage');
const todaysDate = dayjs().format('D MMM YYYY');
const previousDate = dayjs().subtract(1, 'M').format('D MMM YYYY');
const futureDate = dayjs().add(7, 'day').format('D MMM YYYY');
const helpers = {
    dateToUrl: (date) => {
      let parsedDate = null;
  
      if (date instanceof dayjs) {
        parsedDate = date.toDate();
      } else if (date instanceof Date) {
        parsedDate = date;
      } else {
        parsedDate = new Date(Date.parse(date));
      }
  
      return `day=${parsedDate.getDate()}&month=${parsedDate.getMonth() + 1}&year=${parsedDate.getFullYear()}`;
    },
  };
  
const helpersPreDtVal = helpers.dateToUrl(previousDate);
const helpersFtrDtVal = helpers.dateToUrl(futureDate);

class QuotasPopupPage {

    elements = {
       
        quotasPanelTxt: () => cy.get('.govuk-tabs__panel'),
        quotasPopupHeadTxt: () => cy.get('#popup > div > div > article > h2'),
        quotasPopupTxt: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > th'),
        quotasPopupTableNumVal1: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td'),
        quotasPopupTableNumVal2: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(2) > td'),
        quotasPopupTableColTxt: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(2)'),
        quotasPopupDsiplayTxt: () => cy.get('#popup'),
        popupInnerTxtHead: () => cy.get('.info-inner > article > .govuk-heading-m'),
        quotasPopupViewBalDt: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(1) > td > a'),
        quotasPopupRowTxt1: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4)'),
        quotasPopupRowTxt2: () => cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(4) > .numerical'),
        quotasPopupRowTxt3: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5) > th'),
        quotasPopupRowTxt4: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6) > th'),
        quotasPopupRowTxt5: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(7)'),
        quotasPopupRowTxt6: () => cy.get('.info-inner > article > .govuk-table > .govuk-table__body > :nth-child(7) > .numerical'),
        quotasPopupStaticTxt: () => cy.get('#popup > div > div > article > p').contains('The status given is correct at the time'),
        quotasPopupStaTxt: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4) > th'),
        quotasPopupExhstTxt: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(4) > td'),
        quotasInnerTextStatDate: () => cy.get('.info-inner'),
        quotasPopupText: () =>  cy.get('#popup > div > div > article'),
        quotasPopupRowTxt7: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(5) '),
        quotasPopupRowTxt8: () => cy.get('#popup > div > div > article > table > tbody > tr:nth-child(6) '),
        quotasOrderDetails: () => cy.get('.table-line'),
        quotasPopupTextDtls: () => cy.get('.tariff-info')
        
    }

    verifyQuotasPanelTableColTxt(text){
        this.elements.quotasPanelTxt().contains(text);
    }

    verifyQuotasOrderDetailsAndClk(text){
        this.elements.quotasOrderDetails().contains(text).click();
    }

    verifyQuotasPopupTextDtls(text){
        this.elements.quotasPopupTextDtls().contains(text);
    }

    verifyQuotasPopupText(textContains){
        this.elements.quotasPopupText().should('not.have.text', textContains);
    }

    verifyQuotasPopupHeadTxt(text){
        this.elements.quotasPopupHeadTxt().contains(text);
    }

    verifyQuotasPopupColHeadTxt(colText){
        this.elements.quotasPopupTxt().should('not.contain', colText)
    }

    verifyQuotasPopupDateVal(){
       this.elements.quotasPopupTxt().contains(`Balance (as of ${todaysDate})`);
    }

    verifyQuotasPopupTableNumVal1(){
        this.elements.quotasPopupTableNumVal1().contains(',');
     }

     verifyQuotasPopupTableNumVal2(){
        this.elements.quotasPopupTableNumVal2().contains(',');
     }

     verifyQuotasPopupTableColVal(colTxt){
        this.elements.quotasPopupTableColTxt().contains(colTxt);
     }

     verifyQuotasPopupContainsTxt(txtVerify){
         this.elements.quotasPopupDsiplayTxt().contains(txtVerify);
     }

     verifyQuotasPopupContainsTxt1(txtVerify){
        this.elements.quotasPopupDsiplayTxt().should('not.contain', txtVerify);
    }

    verifyQuotasPopupContainsTxt2(txtVerify){
        this.elements.quotasPopupDsiplayTxt().contains(txtVerify).should('not.be.visible');
    }
     
    verifyQuotasStaticDtLink(staticDtVal, commodity){
        cy.visit(`/commodities/${commodity}?${helpers.dateToUrl(staticDtVal)}#quotas`);
     }

     verifyQuotasImportUrl(commodity){
        cy.visit(`/commodities/${commodity}#import`);
    }
   
    verifyQuotasStatic4DtLink(staticDtVal, commodity){
        cy.visit(`/commodities/${commodity}?${helpers.dateToUrl(staticDtVal)}#quotas`);
     }

     verifyQuotasUrlPreDtLink(commodity){
        cy.visit(`/commodities/${commodity}?${helpersPreDtVal}#quotas`);
     }

     verifyQuotasFutrDtUrlLink(commodity){
        cy.visit(`/commodities/${commodity}?${helpersFtrDtVal}#quotas`);
     }
    
     verifyQuotasStatic5DtLink(staticDtVal){
        cy.visit(`/commodities/7306290000?${helpers.dateToUrl(staticDtVal)}`);
     }

     verifyQuotasPopupInrTxtHeading(text1){
        this.elements.popupInnerTxtHead().contains(text1);
    }

    verifyQuotasPopupViewBalDt(){
        this.elements.quotasPopupViewBalDt().contains(`View balance for ${todaysDate}`);
     }

     clickQuotasPopupViewBalDt(){
        this.elements.quotasPopupViewBalDt().click();
     }

    verifyQuotasPopupPreDateVal(){
        this.elements.quotasPopupTxt().contains(`Balance (as of ${previousDate})`)
     }

     verifyQuotasPopupStatDateVal(staticDate){
        this.elements.quotasPopupTxt().contains(staticDate)
     }
     
     verifyQuotasPopupFutrDateVal(){
        this.elements.quotasPopupTxt().contains(`Balance (as of ${futureDate})`)
     }

     verifyQuotasPopupRowTxt1(popupTxt1){
        this.elements.quotasPopupRowTxt1().contains(popupTxt1);
    }

    verifyQuotasPopupRowTxt2(popupTxt2){
        this.elements.quotasPopupRowTxt2().contains(popupTxt2);
    }

    verifyQuotasPopupStaTxt(popupTxt1){
        this.elements.quotasPopupStaTxt().contains(popupTxt1);
    }
    
    verifyQuotasPopupExhstTxt(popupTxt2){
        this.elements.quotasPopupExhstTxt().contains(popupTxt2);
    }

    verifyQuotasPopupRowTxt3(popupTxt3){
        this.elements.quotasPopupRowTxt3().contains(popupTxt3);
    }

    verifyQuotasPopupRowTxt7(popupTxt7){
        this.elements.quotasPopupRowTxt7().contains(popupTxt7);
    }

    verifyQuotasPopupRowTxt8(popupTxt8){
        this.elements.quotasPopupRowTxt8().contains(popupTxt8);
    }

    verifyQuotasPopupRowTxt4(popupTxt4){
        this.elements.quotasPopupRowTxt4().contains(popupTxt4);
    }

    verifyQuotasPopupRowTxt5(popupTxt5){
        this.elements.quotasPopupRowTxt5().contains(popupTxt5);
    }

    verifyQuotasPopupRowTxt6(popupTxt6){
        this.elements.quotasPopupRowTxt6().contains(popupTxt6);
    }

    verifyQuotasPopupStaticTxt(popupStaticTxt){
        this.elements.quotasPopupStaticTxt().contains(popupStaticTxt);
    }

    verifyQuotasInnerTextStatDate(innerTxt){
        this.elements.quotasInnerTextStatDate(innerTxt);
    }
        
}

export default new QuotasPopupPage();
