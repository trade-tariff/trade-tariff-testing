describe('UK 🇬🇧 XI 🇪🇺 | customsDuties.spec.js | validate new customs duties on Front end |', function () {
/*
 Add new measure types (485, 487, 488) to customs duties section
 Move reassigned measure types (464, 481, 482, 483) from 'hide me' to customs duties section
464 Declaration of subheading submitted to authorised use provisions
481 Declaration of subheading submitted to restrictions (import)
482 Declaration of subheading submitted to restrictions (net weight/supplementary unit)
483 Declaration of subheading submitted to restrictions (value)
*485 Declaration of subheading submitted to restrictions (export)
*487 Representative price (poultry)
*488 Unit price
489 Representative price
490 Standard import value
*/
    it('Customs Duties 481', function () {
        cy.visit('/commodities/2204219413#import')
        cy.contains('Customs duties').click()
        cy.contains('Declaration of subheading submitted to restrictions (import)')
        cy.contains('TM640').click()
        cy.contains('Declaration of subheading submitted to restrictions (import) for All countries')      
    })
    it('Customs Duties 489', function () {
        cy.visit('/commodities/1703100000#import')
        cy.contains('Customs duties').click()
        cy.contains('Representative price')
    })
    it('Customs Duties 464', function () {
        cy.visit('/commodities/8714999011#import')
        cy.contains('Customs duties').click()
        cy.contains('Declaration of subheading submitted to authorised use provisions')
        cy.contains('CD501').click()
        cy.contains('Declaration of subheading submitted to authorised use provisions')
    })
    
})