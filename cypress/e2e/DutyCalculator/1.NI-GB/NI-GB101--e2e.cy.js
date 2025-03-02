describe('| NI-GB101--e2e | Northern Ireland to GB United Kingdom |', function() {
  it('e2e NI to GB | 101 |', function() {
    cy.visit('/commodities/0702001007');
    cy.dutyCalLink('0702001007');
    cy.contains('UK Integrated Online Tariff');
    cy.validDate();
    // select England ,Scotland or Wales (GB)
    cy.selectDestination('gb');
    cy.contains('Which country are the goods coming from?');
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.');
    cy.contains('Where are the goods coming from?');
    cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select.');
    cy.contains('Touch device users, explore by touch or with swipe gestures.');
    // select country from list
    cy.originList({value: 'Northern Ireland'});
    cy.noDuty();
    cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
    cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).');
    cy.get('.govuk-grid-row .govuk-link')
        .should('have.attr', 'href', 'https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland');
    // Back Button on page
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    // Start again button
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    cy.contains('When will the goods be imported?');
  });
});
