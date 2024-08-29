import dayjs from 'dayjs';

const dateToTrade = dayjs().format('YYYY/MM/DD');
const todaysDate = dateToTrade.split('/');

// build url query param based on the number of exception documents user selected dynamically
const urlContains = (commodityCode, originCountry) => `commodity_code=${commodityCode}&country_of_origin=${originCountry}&moving_date=${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`;

// SPIMM - Simplified process for internal market movements from Great Britain to Northern Ireland.

// SPIMM process start page
Cypress.Commands.add('verifySpimmPage', () => {
    cy.contains('Check if you are eligible for the simplified process for internal market movements') +
        ('from Great Britain to Northern Ireland (SPIMM)');
    cy.contains('Categorisation of goods');
    cy.contains('Before you start');
    cy.contains('the commodity code for your goods');
    cy.get('.govuk-list > li:nth-child(1) > a').should('have.attr', 'href', 'https://www.trade-tariff.service.gov.uk/find_commodity');
    cy.contains('the non-preferential origin of your goods');
    cy.get('.govuk-list > li:nth-child(2) > a').should('have.attr', 'href', 'https://www.trade-tariff.service.gov.uk/howto/origin');
});

Cypress.Commands.add('clkBtnToContinue', () => {
    cy.get('[type="submit"]').click();
});

// Answer eligibility questions page
Cypress.Commands.add('verifyEligibilityNewPage', (answer) => {
    cy.url().should('include', '/check_spimm_eligibility/eligibility/new');
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
    cy.url().should('include', '/check_spimm_eligibility/eligibility_result/new?end_consumers_in_uk=yes&free_circulation_in_uk=yes&moving_goods_gb_to_ni=yes&ukims=yes');
    cy.contains('Check the category of your goods');
    cy.contains('‘not at risk’ of onward movement to the EU (opens in new tab)');
    cy.get('.govuk-grid-column-two-thirds > p:nth-child(2) > a').should('have.attr', 'href',) +
        ('https://www.gov.uk/guidance/check-if-you-can-declare-goods-you-bring-into-northern-ireland-not-at-risk-of-moving-to-the-eu');
    cy.contains('UK Internal Market Scheme (UKIMS) authorised traders (opens in new tab)');
    cy.get('.govuk-grid-column-two-thirds > p:nth-child(3)> a').should('have.attr', 'href',) +
        ('https://www.gov.uk/guidance/apply-for-authorisation-for-the-uk-internal-market-scheme-if-you-bring-goods-into-northern-ireland');
});

// Tell us about your goods
Cypress.Commands.add('tellUsAboutYourGoodsPage', (commodityCode, originCountry) => {
    const movingDate = (index) => `#green_lanes_moving_requirements_form_moving_date_${index}`;

    cy.url().should('include', '/check_spimm_eligibility/moving_requirements/new?commit=Continue');
    cy.contains('Tell us about your goods');
    // enter commodity code
    cy.contains('What is the commodity code?');
    cy.get('#green-lanes-moving-requirements-form-commodity-code-field').type(`${commodityCode}`);
    cy.contains('search for a commodity (opens in a new tab).');
    cy.get('.new_green_lanes_moving_requirements_form > div:nth-child(3) > div >a').should('have.attr', 'href', 'https://www.gov.uk/trade-tariff');
    cy.contains('What is the non-preferential origin of your goods?');
    // select origin country
    cy.get('#green-lanes-moving-requirements-form-country-of-origin-field').select(`${originCountry}`);
    cy.contains('find out how to determine the non-preferential origin of goods (opens in a new tab).');
    cy.get('.new_green_lanes_moving_requirements_form > div:nth-child(4) > div >a').should('have.attr', 'href',) +
        ('https://www.trade-tariff.service.gov.uk/howto/origin');
    // enter future date to continue
    cy.contains('When is the internal movement of goods taking place?');
    cy.get(movingDate(3)).type(`${todaysDate[2]}`);
    cy.get(movingDate(2)).type(`${todaysDate[1]}`);
    cy.get(movingDate(1)).type(`${todaysDate[0]}`);
});

// Get list of exception codes available on the exception page, compare with data and click to select that apply including 'None' exemptions.
Cypress.Commands.add('getListOfExceptionCodesAndSelectThatApply', (documentCodes) => {
    cy.get('#content .govuk-checkboxes input[type="checkbox"]').each(($checkbox) => {
        for (var i = 0; i < documentCodes.length; i++) {
            if ($checkbox.attr('id').includes(documentCodes[i])) {
                cy.get('#' + $checkbox.attr('id')).as('checkboxes');
                cy.get('@checkboxes').each(($checkboxElem, index) => {
                    cy.get('#content .govuk-checkboxes').find($checkboxElem[index]).check({ multiple: true }).should('be.checked');
                });
            }
        }
    });
});

// Get Exemptions list required to build url params based on exemption document codes that user selected
Cypress.Commands.add('getCategoryExemptions', (documentCodes, category) => {
    let captureUrlParams = new Array();
    let caseDocCode = '';
    cy.get('form > div > fieldset > div input').each(($checkBox) => {
        for (var i = 0; i < documentCodes.length; i++) {
            if ($checkBox.attr('id').includes(documentCodes[i])) {
                const strSplit = $checkBox.attr('id').split('-');
                if (documentCodes[i] == 'none') {
                    caseDocCode = documentCodes[i];
                } else {
                    caseDocCode = documentCodes[i].toUpperCase();
                }
                captureUrlParams.push(`ans%5B${category}%5D%5B` + `${strSplit[3]}` + "%5D%5B%5D=" + `${caseDocCode}` + "&");
            }
        }
    });
    cy.wrap(captureUrlParams).as('cat');
});

Cypress.Commands.add('sortCat1ExemptionList', (documentCodes, category) => {
    let onlyCat1Exemptions = new Array();
    let cat1UrlParams = new String();
    cy.getCategoryExemptions(documentCodes, category);
    cy.get('@cat').then(($cat1Exemptions) => {
        onlyCat1Exemptions = Object.values($cat1Exemptions).reverse().sort();
        for (var i = 0; i < onlyCat1Exemptions.length; i++) {
            if (!cat1UrlParams.includes(onlyCat1Exemptions[i])) {
                cat1UrlParams += onlyCat1Exemptions[i];
            }
        }
        cy.wrap(cat1UrlParams).as('cat1');
    });
});

Cypress.Commands.add('sortCat2ExemptionList', (documentCodes, category) => {
    let onlyCat2Exemptions = new Array();
    let cat2UrlParams = new String();
    cy.getCategoryExemptions(documentCodes, category);
    cy.get('@cat').then(($cat2Exemptions) => {
        onlyCat2Exemptions = Object.values($cat2Exemptions).reverse().sort();
        for (var i = 0; i < onlyCat2Exemptions.length; i++) {
            if (!cat2UrlParams.includes(onlyCat2Exemptions[i])) {
                cat2UrlParams += onlyCat2Exemptions[i];
            }
        }
        cy.wrap(cat2UrlParams).as('cat2');
    });
});

Cypress.Commands.add('getCategoriesAlias', () => {
    const testData = {};
    cy.get('@cat1').then((cat1) => {
        testData.cat1 = cat1;
    });
    cy.get('@cat2').then((cat2) => {
        testData.cat2 = cat2;
    });
    return cy.wrap(testData).as('categoriesData');
});

// We need more information about your goods
Cypress.Commands.add('category1ExemptionsPage', (commodityCode, originCountry, documentCodes) => {
    if (typeof (documentCodes) == 'string') {
        documentCodes = JSON.parse("[\"" + documentCodes + "\"]");
    }
    cy.url().should('include',
        `/check_spimm_eligibility/applicable_exemptions/new?category=1&${urlContains(commodityCode, originCountry)}`);

    cy.contains('We need more information about your goods');
    cy.contains('Your goods may be Category 1. Tell us more about your goods so that we can determine their category.');

    // Select one exception from each category that apply
    cy.contains('Do your goods meet any of these Category 1 exemptions?');
    cy.contains('View EU Regulation document');
    cy.contains('Select all that apply');

    cy.getListOfExceptionCodesAndSelectThatApply(documentCodes);

    // Get Exemptions list required to build url params based on exemption document codes
    cy.sortCat1ExemptionList(documentCodes, '1');
});

// Tell us if your goos meet any excemptions - Category 2 Exemptions
Cypress.Commands.add('category2ExemptionsPage', (commodityCode, originCountry, documentCodes, withExemptions) => {
    if (typeof (documentCodes) == 'string') {
        documentCodes = JSON.parse("[\"" + documentCodes + "\"]");
    }
    if (withExemptions == true) {
        cy.get('@cat1').then((cat1ExemptionsUrlParams) => {
            cy.url().should('include',
                `/check_spimm_eligibility/applicable_exemptions/new?${cat1ExemptionsUrlParams}c1ex=true&category=2&${urlContains(commodityCode, originCountry)}`);
        });
    } else {
        cy.url().should('include',
            `/check_spimm_eligibility/applicable_exemptions/new?category=2&${urlContains(commodityCode, originCountry)}`);
    }

    cy.contains('Tell us if your goods meet any exemptions');
    cy.contains('Your goods may be Category 2. Tell us more about your goods so that we can determine their category.');

    // Select one exception from each category that apply
    cy.contains('Do your goods meet any of these Category 2 exemptions?');
    cy.contains('View EU Regulation document');
    cy.contains('Select all that apply');

    cy.getListOfExceptionCodesAndSelectThatApply(documentCodes);

    // Get Exemptions list required to build url params for check your answers page based on exemption document codes
    cy.sortCat2ExemptionList(documentCodes, '2');
});

Cypress.Commands.add('verifyExemptionsMet', (documentCodes, exemptMetOrCertNeed) => {
    cy.get('.govuk-summary-card .govuk-summary-list .govuk-summary-list__row').each(($row) => {
        if (documentCodes == 'none' || documentCodes == null) {
            if ($row.text().includes(exemptMetOrCertNeed)) {
                cy.contains(exemptMetOrCertNeed).should('be.visible');
            }
        } else {
            for (var i = 0; i < documentCodes.length; i++) {
                const upperCaseDocCode = documentCodes[i].toUpperCase();
                if ($row.text().includes(upperCaseDocCode)) {
                    cy.wrap($row.text()).should('include', upperCaseDocCode);
                    cy.wrap($row.text()).should('include', exemptMetOrCertNeed);
                }
            }
        }
    });
});

Cypress.Commands.add('VerifyAboutGoodsAndCategorisationOfGoods', (commodityCode, originCountry, cat1DocCodes,
    cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed) => {

    // Verify about goods table
    cy.get('.govuk-summary-card__content').contains(`${commodityCode}`);
    cy.get('.govuk-summary-card__content').contains(`${originCountry}`);
    cy.get('.govuk-summary-card__content').contains(`${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`);

    // Verify exemptions have met category section on the results page
    let documentCodes;
    if (typeof (cat1DocCodes) == 'string' && typeof (cat2DocCodes) == 'string') {
        cy.get('.govuk-summary-card__title-wrapper h2').should('not.contain', cat1ExemptOrHaveMet);
        cy.get('.govuk-summary-card__title-wrapper h2').should('not.contain', cat2ExemptOrHaveMet);
        cy.should('not.contain', exemptMetOrCertNeed);
    } else if (cat1DocCodes != null && cat2DocCodes != null) {
        documentCodes = cat1DocCodes.concat(cat2DocCodes);
        cy.get('.govuk-summary-card__title-wrapper h2').contains(cat1ExemptOrHaveMet);
        cy.get('.govuk-summary-card__title-wrapper h2').contains(cat2ExemptOrHaveMet);
    } else if (cat1DocCodes != null || cat1DocCodes == 'none') {
        documentCodes = cat1DocCodes;
        cy.get('.govuk-summary-card__title-wrapper h2').contains(cat1ExemptOrHaveMet);
    } else if (cat2DocCodes != null || cat2DocCodes == 'none') {
        documentCodes = cat2DocCodes;
        cy.get('.govuk-summary-card__title-wrapper h2').contains(cat2ExemptOrHaveMet);

    } else {
        cy.get('.govuk-summary-card__title-wrapper h2').should('not.contain', cat1ExemptOrHaveMet);
        cy.get('.govuk-summary-card__title-wrapper h2').should('not.contain', cat2ExemptOrHaveMet);
        cy.should('not.contain', exemptMetOrCertNeed);
    }
    if (exemptMetOrCertNeed != null) {
        cy.verifyExemptionsMet(documentCodes, exemptMetOrCertNeed);
    }
});

// Check your answers page
Cypress.Commands.add('checkYourAnswersPage',
    (commodityCode, originCountry, onlyCat1Exemptions, onlyCat2Exemptions, withExemptions,
        cat1DocCodes, cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed) => {
        let c1exValue; let c2exValue;
        if (onlyCat2Exemptions == true) {
            if (cat2DocCodes != 'none' || cat2DocCodes == 'none') {
                if (cat2DocCodes != 'none') {
                    c2exValue = true;
                }
                else {
                    c2exValue = false;
                }
                cy.log('c2exValue', c2exValue);
                cy.get('@cat2').then((cat2ExemptionsUrlParams) => {
                    cy.url().should('include',
                        `/check_spimm_eligibility/check_your_answers?${cat2ExemptionsUrlParams}c2ex=${c2exValue}&category=2&${urlContains(commodityCode, originCountry)}`);
                });
            } else {
                cy.url().should('include',
                    `/check_spimm_eligibility/check_your_answers?&c2ex=true&category=2&${urlContains(commodityCode, originCountry)}`);
            }
        } else if (onlyCat1Exemptions == true) {
            if (cat1DocCodes != 'none') {
                c1exValue = true;
            }
            else {
                c1exValue = false;
            }
            cy.get('@cat1').then((cat1ExemptionsUrlParams) => {
                cy.url().should('include',
                    `/check_spimm_eligibility/check_your_answers?${cat1ExemptionsUrlParams}c1ex=${c1exValue}&category=1&${urlContains(commodityCode, originCountry)}`);
            });
        } else if (withExemptions == true) {
            if (cat2DocCodes != 'none') {
                c1exValue = true, c2exValue = true;
            }
            else {
                c1exValue = true, c2exValue = false;
            }
            cy.getCategoriesAlias();
            cy.get('@categoriesData').then((categoriesDataDict) => {
                let categoriesData = Object.values(categoriesDataDict).toString();
                categoriesData = categoriesData.replace(',', '');
                cy.url().should('include',
                    `/check_spimm_eligibility/check_your_answers?${categoriesData}c1ex=${c1exValue}&c2ex=${c2exValue}&category=2&${urlContains(commodityCode, originCountry)}`);
            });
        } else {
            cy.url().should('include',
                `/check_spimm_eligibility/check_your_answers?${urlContains(commodityCode, originCountry)}`);
        }

        // Verify the check your answers table
        cy.get('.govuk-heading-l').contains('Check your answers');
        cy.get('.govuk-summary-card__title-wrapper h2').contains('About your goods');

        // Verify Categories exemptions met
        cy.VerifyAboutGoodsAndCategorisationOfGoods(commodityCode, originCountry, cat1DocCodes,
            cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed);
    });

// Results Page
Cypress.Commands.add('verifyResultsPage', (commodityCode, originCountry, categoryResult, cat1DocCodes, cat2DocCodes,
    cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed) => {
    cy.url().should('include', '/check_spimm_eligibility/results');
    if (`${categoryResult}` == 'standard') {
        cy.contains('Standard Category');
    } else if (`${categoryResult}` == 'Category 2') {
        cy.contains('Category 2');
    } else if (`${categoryResult}` == 'Category 1') {
        cy.contains('Category 1');
        cy.contains('Goods are not eligible to move through the simplified process for internal market movements (SPIMM)');
    }
    if (`${categoryResult}` == 'Category 2' || `${categoryResult}` == 'standard') {
        cy.contains('Goods are eligible to move through the simplified process for internal market movements (SPIMM)');
    }
    cy.contains('Find out more about SPIMM');
    cy.get('.tariff > #content > p:nth-child(5) > a').should('have.attr', 'href',) +
        ('https://www.figma.com/proto/k0Vb4ZCE5gjcsevbke0R6Q/Online-Tariff-Tool-%2F-GL?page-id=8705%3A50327&node-id=8677-13921&') +
        ('viewport=833%2C310%2C0.47&t=MoxrxfJbs0nHWIt5-1&scaling=min-zoom&content-scaling=fixed')
    cy.contains('What you should do next');
    if (`${categoryResult}` == 'Category 1') {
        cy.contains('Category 1 goods cannot continue through SPIMM.');
        cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new tab)');
        cy.get('.tariff > #content > p:nth-child(9) > a').should('have.attr', 'href',) +
            ('https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland');

    } else {
        cy.contains('Become an authorised trader under the UK Internal Market Scheme (UKIMS) (opens in a new tab)');
        cy.get('ol.govuk-list > li:nth-child(1)> a').should('have.attr', 'href',) +
        ('https://www.gov.uk/guidance/apply-for-authorisation-for-the-uk-internal-market-scheme-if-you-bring-goods-into-northern-ireland')
        cy.contains('Trader Support Service (TSS) (opens in a new tab).');
        cy.get('ol.govuk-list > li:nth-child(3)> a').should('have.attr', 'href', 'https://www.gov.uk/guidance/trader-support-service')
    }
    cy.contains('About the categorisation of your goods');

    // Verify Categories exemptions have met and Certification needed
    cy.VerifyAboutGoodsAndCategorisationOfGoods(commodityCode, originCountry, cat1DocCodes,
        cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed);

    cy.contains('Check the category of other goods').click();
});
