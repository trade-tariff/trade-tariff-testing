import dayjs from 'dayjs';

const dateToTrade = dayjs().format('YYYY/MM/DD');
const todaysDate = dateToTrade.split('/');

const urlContains = (commodityCode, originCountry) => `commodity_code=${commodityCode}&country_of_origin=${originCountry}&moving_date=${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`;

// SPIMM - Simplified process for internal market movements from Great Britain to Northern Ireland.

// SPIMM process start page
Cypress.Commands.add('verifySpimmPage', () => {
    cy.contains('Check if you are eligible for the simplified process for internal market movements');
    cy.contains('from Great Britain to Northern Ireland (SPIMM)');
    cy.contains('Categorisation of goods');
    cy.contains('Before you start');
    cy.contains('the commodity code for your goods');
    cy.contains('the non-preferential origin of your goods');
});

Cypress.Commands.add('clkBtnToContinue', () => {
    cy.get('[type="submit"]').click();
});

// Answer eligibility questions page
Cypress.Commands.add('verifyEligibilityNewPage', (answer) => {
    cy.url().should('include', '/green_lanes/eligibility/new');
    cy.contains('Tell us about the movement of goods');
    cy.contains('Are you moving goods from Great Britain to Northern Ireland?');
    cy.get(`#green-lanes-eligibility-form-moving-goods-gb-to-ni-${answer}-field`).click();
    cy.contains('Are your goods in free circulation in the UK (England, Wales, Scotland and Northern Ireland)?');
    cy.get(`#green-lanes-eligibility-form-free-circulation-in-uk-${answer}-field`).click();
    cy.contains('Are your goods intended to be sold to, or used by, end consumers in the UK (England, Wales, Scotland and Northern Ireland)?');
    cy.get(`#green-lanes-eligibility-form-end-consumers-in-uk-${answer}-field`).click();
    cy.contains('Are you authorised to trade under the UK Internal Market Scheme (UKIMS)?');
    cy.get(`#green-lanes-eligibility-form-ukims-${answer}-field`).click();
    cy.contains('If you need help using this tool');
});

// Check the category of your goods page
Cypress.Commands.add('checkCategoryOfYourGoods', () => {
    cy.url().should('include', '/green_lanes/eligibility_result/new?end_consumers_in_uk=yes&free_circulation_in_uk=yes&moving_goods_gb_to_ni=yes&ukims=yes');
    cy.contains('Check the category of your goods');
    cy.contains('‘not at risk’ of onward movement to the EU (opens in new tab)');
    cy.contains('UK Internal Market Scheme (UKIMS) authorised traders (opens in new tab)');
});

// Tell us about your goods
Cypress.Commands.add('tellUsAboutYourGoodsPage', (commodityCode, originCountry) => {
    const movingDate = (index) => `#green_lanes_moving_requirements_form_moving_date_${index}i`;

    cy.url().should('include', '/green_lanes/moving_requirements/new?commit=Continue');
    cy.contains('Tell us about your goods');
    // enter commodity code
    cy.contains('What is the commodity code?');
    cy.get('#green-lanes-moving-requirements-form-commodity-code-field').type(`${commodityCode}`);
    cy.contains('search for a commodity (opens in a new tab).');
    cy.contains('What is the non-preferential origin of your goods?');
    // select origin country
    cy.get('#green-lanes-moving-requirements-form-country-of-origin-field').select(`${originCountry}`);
    cy.contains('find out how to determine the non-preferential origin of goods (opens in a new tab).');
    // enter future date to continue
    cy.contains('When is the internal movement of goods taking place?');
    cy.get(movingDate(3)).type(`${todaysDate[2]}`);
    cy.get(movingDate(2)).type(`${todaysDate[1]}`);
    cy.get(movingDate(1)).type(`${todaysDate[0]}`);
});

// Tell us if your goos meet any excemptions - Category 2 exceptions
Cypress.Commands.add('category2ExceptionsPage', (commodityCode, originCountry, documentCode1, documentCode2, documentCode3) => {
    const documentCodes = [documentCode1, documentCode2, documentCode3]
    const exceptionsCat2 = (documentCode) => {
        if (documentCode == 'y900') {
            return `#exemptions-category-assessment-818-${documentCode}-field`;
        } else {
            return `#exemptions-category-assessment-23-${documentCode}-field`;
        }
    };

    cy.url().should('include',
        `/green_lanes/applicable_exemptions/new?category=2&${urlContains(commodityCode, originCountry)}`);

    cy.contains('Tell us if your goods meet any exemptions');
    cy.contains('Your goods may be Category 2. Tell us more about your goods so that we can determine their category.');

    // cy.get('#content .govuk-form-group input').then((elm) => {
    //     console.log(elm);
    //     cy.get(elm).check(documentCode1);
    // });

    // Select one exception from each category
    for (var i = 0; i < documentCodes.length; i ++) {
        cy.contains('Do your goods meet any of these Category 2 exemptions?')
        cy.contains('View EU Regulation document');
        cy.contains('Select all that apply');
        cy.get(exceptionsCat2(documentCodes[i])).click();
    }
});

// Check your answers page
Cypress.Commands.add('checkYourAnswersPage', (commodityCode, originCountry, withExceptions) => {
    if (withExceptions == true) {
        const cat2Exceptions = 'ans%5B2%5D%5B23%5D%5B%5D=Y170&ans%5B2%5D%5B23%5D%5B%5D=Y058&ans%5B2%5D%5B818%5D%5B%5D=Y900&c2ex=true&category=2';
        cy.url().should('include',
            `/green_lanes/check_your_answers?${cat2Exceptions}&${urlContains(commodityCode, originCountry)}`);
    } else {
        cy.url().should('include',
            `/green_lanes/check_your_answers?${urlContains(commodityCode, originCountry)}`);
    }
    cy.contains('Check your answers');
    cy.contains('About your goods');
    cy.get('.govuk-summary-card__content').contains(`${commodityCode}`);
    cy.get('.govuk-summary-card__content').contains(`${originCountry}`);
    cy.get('.govuk-summary-card__content').contains(`${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`);
});

// Resuls Page
Cypress.Commands.add('verifyResultsPage', (commodityCode, originCountry, categoryResult) => {
    cy.url().should('include', '/green_lanes/results');
    if (`${categoryResult}` == 'standard') {
        cy.contains('Standard Category');
    }
    cy.contains('Goods are eligible to move through the simplified process for internal market movements (SPIMM)');
    cy.contains('Find out more about SPIMM');
    cy.contains('Become an authorised trader under the UK Internal Market Scheme (UKIMS) (opens in a new tab)');
    cy.contains('Trader Support Service (TSS) (opens in a new tab).');
    cy.contains('About the categorisation of your goods');
    cy.get('.govuk-summary-card__content').contains(`${commodityCode}`);
    cy.get('.govuk-summary-card__content').contains(`${originCountry}`);
    cy.get('.govuk-summary-card__content').contains(`${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`);
    cy.contains('Check the category of other goods').click();
});
