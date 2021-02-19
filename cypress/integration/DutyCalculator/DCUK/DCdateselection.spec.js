
import date from "../../pageObjects/date"
import Date from "../pageObjects/dateselection"

describe('date selector ',function() {

    it('PO model test',function(){
        cy.visit('/')
      //  cy.DCMainPage()
        const dateselection = new Date()
        
        date.day.type('31')

      //  d.dateValue('31')
     //   dt.monthValue('12')
     //   dt.yearValue('2022')
        
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')


    })


})