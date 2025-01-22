import dayjs from 'dayjs';

const dateToTrade = dayjs().format('YYYY/MM/DD');
const todaysDate = dateToTrade.split('/');

const dateWithFullMonth = dayjs().format('D MMMM YYYY').split(' ');

// build url query param based on the number of exception documents user selected dynamically
const urlContains = (commodityCode, originCountry) => {
    originCountry = originCountry.replace(/\s+/g, '+').replace(/’/g, '%E2%80%99').replace(/\(/g, '%28').replace(/\)/g, '%29');
    const urlStr = `commodity_code=${commodityCode}&country_of_origin=${originCountry}&`;
    return `${urlStr}moving_date=${todaysDate[0]}-${todaysDate[1]}-${todaysDate[2]}`;
};

// SPIMM - Simplified process for internal market movements from Great Britain to Northern Ireland.

// SPIMM process start page
Cypress.Commands.add('verifySpimmPage', () => {
  cy.contains('Check if you are eligible for the simplified processes for Internal Market Movements from Great Britain to Northern Ireland');
    cy.contains('Categorisation of goods');
    cy.contains('Before you start');
    cy.contains('the commodity code for your goods');
    cy.get('.govuk-list > li:nth-child(1) > a').should('have.attr', 'href', 'https://www.trade-tariff.service.gov.uk/find_commodity');
    cy.contains('the non-preferential origin of your goods');
    cy.get('.govuk-list > li:nth-child(2) > a').should('have.attr', 'href', 'https://www.trade-tariff.service.gov.uk/howto/origin');
});

Cypress.Commands.add('clkBackLink', () => {
    cy.get('.govuk-back-link').contains('Back').click();
});

Cypress.Commands.add('clkBtnToContinue', () => {
    cy.get('[type="submit"]').click();
});

// Answer eligibility questions page
Cypress.Commands.add('verifyEligibilityNewPage', (answer) => {
    cy.url().should('include', '/check_simplified_processes_eligibility/your_movement');
    cy.contains('Tell us about the movement of goods');
    cy.contains('Are you moving goods from Great Britain to Northern Ireland?');
    cy.get(`#green-lanes-eligibility-form-moving-goods-gb-to-ni-${answer}-field`).click();
    cy.contains('Are your goods in free circulation in the UK (England, Wales, Scotland and Northern Ireland)?');
    cy.get(`#green-lanes-eligibility-form-free-circulation-in-uk-${answer}-field`).click();
    cy.contains('Are your goods intended to be sold to, or used by, end consumers in the UK (England, Wales, Scotland and Northern Ireland)?');
    cy.get(`#green-lanes-eligibility-form-end-consumers-in-uk-${answer}-field`).click();
    cy.contains('Are you authorised to trade under the UK Internal Market Scheme (UKIMS)?');
    cy.get(`#green-lanes-eligibility-form-ukims-${answer}-field`).click();
});

// Check the category of your goods page
Cypress.Commands.add('checkCategoryOfYourGoods', () => {
    cy.url().should('include', '/check_simplified_processes_eligibility/eligibility?end_consumers_in_uk=yes&free_circulation_in_uk=yes&moving_goods_gb_to_ni=yes&t=');
    cy.url().should('include', 'ukims=yes');
    cy.contains('Check the category of your goods');
    cy.contains('\'not at risk’ of moving to the EU (opens in new tab)');
    cy.get('.govuk-list li a').should('have.attr', 'href',) +
        ('https://www.gov.uk/guidance/check-if-you-can-declare-goods-you-bring-into-northern-ireland-not-at-risk-of-moving-to-the-eu');
    cy.contains('UK Internal Market Scheme (UKIMS) authorised trader (opens in new tab)');
    cy.get('.govuk-list li a').should('have.attr', 'href',) +
        ('http://www.gov.uk/guidance/internal-market-movements-from-great-britain-to-northern-ireland');
});

// Tell us about your goods
Cypress.Commands.add('tellUsAboutYourGoodsPage', (commodityCode, originCountry, dateBooleanVal) => {
    const movingDate = (index) => `#green_lanes_moving_requirements_form_moving_date_${index}`;

    if (dateBooleanVal == true) {
        cy.url().should('include', `/check_simplified_processes_eligibility/your_goods/new?${urlContains(commodityCode, originCountry, dateBooleanVal)}`);
    } else {
        cy.url().should('include', '/check_simplified_processes_eligibility/your_goods?commit=Continue');
    }
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
    let temp = [];
    cy.get('#content .govuk-checkboxes input[type="checkbox"]').each(($checkbox) => {
        const checkboxIdSplit = $checkbox.attr('id').split('-');
        if (!temp.includes(checkboxIdSplit[3])) {
            temp.push(checkboxIdSplit[3]);
        }

        for (var i = 0; i < documentCodes.length; i++) {
            if (temp.length == documentCodes.length) {
                const unquieCheckBoxId = `exemptions-category-assessment-${temp[i]}-${documentCodes[i]}-field`;
                cy.log('unquieChecBoxID', unquieCheckBoxId);
                cy.get('#' + `${unquieCheckBoxId}`).check().should('be.checked');
            }
        }
    });
});

// Get Exemptions list required to build url params based on exemption document codes that user selected
Cypress.Commands.add('getCategoryExemptions', (documentCodes, category) => {
    let captureUrlParams = new Array();
    let caseDocCode = '';
    let temp = [];
    cy.get('form > div > fieldset > div input').each(($checkBox) => {
        const checkboxIdSplit = $checkBox.attr('id').split('-');
        if (!temp.includes(checkboxIdSplit[3])) {
            temp.push(checkboxIdSplit[3]);
        }
        for (var i = 0; i < documentCodes.length; i++) {
            if ($checkBox.attr('id').includes(documentCodes[i]) && $checkBox.attr('id').includes(temp[i])) {
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
            cy.log('onlyCat1Exemptions.length', onlyCat1Exemptions.length);
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
Cypress.Commands.add('category1ExemptionsPage', (commodityCode, originCountry, documentCodes, dateBooleanVal) => {
    if (typeof (documentCodes) == 'string') {
        documentCodes = JSON.parse("[\"" + documentCodes + "\"]");
    }
    if (dateBooleanVal == true) {
        cy.url().should('include',
            `/category_exemptions/new?category=1&${urlContains(commodityCode, originCountry, dateBooleanVal)}`);
    } else {
        cy.url().should('include',
            `/check_simplified_processes_eligibility/category_exemptions?category=1&${urlContains(commodityCode, originCountry)}`);
    }

    cy.contains('We need more information about your goods');
    cy.contains('Your goods will be Category 1, unless you meet sufficient conditions.');

    // Select one exception from each category that apply
    cy.contains('Do your goods meet any of these conditions?');
    cy.contains('View Regulation document');
    cy.contains('Select all that apply');

    if (documentCodes != null) {
        cy.getListOfExceptionCodesAndSelectThatApply(documentCodes);
        // Get Exemptions list required to build url params based on exemption document codes
        cy.sortCat1ExemptionList(documentCodes, '1');
    }
});

// Tell us if your goos meet any excemptions - Category 2 Exemptions
Cypress.Commands.add('category2ExemptionsPage', (commodityCode, originCountry, documentCodes, withExemptions) => {
    if (typeof (documentCodes) == 'string') {
        documentCodes = JSON.parse("[\"" + documentCodes + "\"]");
    }
    if (withExemptions == true) {
        cy.get('@cat1').then((cat1ExemptionsUrlParams) => {
            cy.url().should('include',
                `/check_simplified_processes_eligibility/category_exemptions?${cat1ExemptionsUrlParams}c1ex=true&category=2&${urlContains(commodityCode, originCountry)}`);
        });
    } else {
        cy.url().should('include',
            `/check_simplified_processes_eligibility/category_exemptions?category=2&${urlContains(commodityCode, originCountry)}`);
    }

    cy.contains('We need more information about your goods');
    cy.contains('Your goods will be Category 2, unless you meet sufficient conditions.');

    // Select one exception from each category that apply
    cy.contains('Do your goods meet any of these conditions?');
    cy.contains('View Regulation docu');
    cy.contains('Select all that apply');

    cy.getListOfExceptionCodesAndSelectThatApply(documentCodes);
    // Get Exemptions list required to build url params for check your answers page based on exemption document codes
    cy.sortCat2ExemptionList(documentCodes, '2');
});

Cypress.Commands.add('verifyErrorMessageOnExemptionPage', (commodityCode, originCountry, category) => {
    if (category == 'Category 1') {
        cy.url().should('include',
            `/check_simplified_processes_eligibility/category_exemptions?&category=1&${urlContains(commodityCode, originCountry)}`);
    } else {
        cy.url().should('include',
            `/check_simplified_processes_eligibility/category_exemptions?&category=2&${urlContains(commodityCode, originCountry)}`);
    }

    cy.contains('We need more information about your goods');
    cy.contains(`Your goods will be ${category}, unless you meet sufficient conditions.`);
    cy.get('.govuk-error-summary').contains('Select if any exemptions apply');
    cy.get('.govuk-list > li a').should('have.attr', 'href');
    cy.get('.govuk-error-message').contains('Select if any exemptions apply');
});

// Check your answers page
Cypress.Commands.add('checkYourAnswersPage',
    (commodityCode, originCountry, categoryResult, onlyCat1Exemptions, onlyCat2Exemptions, withExemptions,
        cat1DocCodes, cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed) => {
        let c1exValue; let c2exValue;
        if (onlyCat2Exemptions == true) {
            if (cat2DocCodes != 'none' || cat2DocCodes == 'none') {
                if (!Object.values(cat2DocCodes).includes('none')) {
                    c2exValue = true;
                }
                else {
                    c2exValue = false;
                }
                cy.log('c2exValue', c2exValue);
                cy.get('@cat2').then((cat2ExemptionsUrlParams) => {
                    cy.url().should('include',
                        `/check_simplified_processes_eligibility/check_your_answers?${cat2ExemptionsUrlParams}c2ex=${c2exValue}&category=2&${urlContains(commodityCode, originCountry)}`);
                });
            } else {
                cy.url().should('include',
                    `/check_simplified_processes_eligibility/check_your_answers?&c2ex=true&category=2&${urlContains(commodityCode, originCountry)}`);
            }
        } else if (onlyCat1Exemptions == true) {
            if (!Object.values(cat1DocCodes).includes('none')) {
                c1exValue = true;
            } else {
                c1exValue = false;
            }
            cy.get('@cat1').then((cat1ExemptionsUrlParams) => {
                cy.url().should('include',
                    `/check_simplified_processes_eligibility/check_your_answers?${cat1ExemptionsUrlParams}c1ex=${c1exValue}&category=1&${urlContains(commodityCode, originCountry)}`);
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
                    `/check_simplified_processes_eligibility/check_your_answers?${categoriesData}c1ex=${c1exValue}&c2ex=${c2exValue}&category=2&${urlContains(commodityCode, originCountry)}`);
            });
        } else {
            cy.url().should('include',
                `/check_simplified_processes_eligibility/check_your_answers?${urlContains(commodityCode, originCountry)}`);

        }

        // Verify the check your answers table
        cy.get('.govuk-heading-l').contains('Check your answers');
        cy.get('.govuk-summary-card__title-wrapper h2').contains('About your goods');

        // Verify Categories exemptions met
        if (cat1ExemptOrHaveMet != null && cat2ExemptOrHaveMet != null) {
            cy.VerifyAboutGoodsAndCategorisationOfGoods(commodityCode, originCountry, categoryResult, cat1DocCodes,
                cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed);
        }
    });

// Result Page
Cypress.Commands.add('verifyResultPage', (commodityCode, originCountry, categoryResult, cat1DocCodes, cat2DocCodes,
    cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed, clkCheckCategoryOfGoodsBtn) => {
    if (`${categoryResult}` == 'Standard goods') {
        cy.url().should('include', '/check_simplified_processes_eligibility/result?category=standard');
        cy.contains('Standard goods');
    } else if (`${categoryResult}` == 'Category 2') {
        cy.url().should('include', '/check_simplified_processes_eligibility/result?category=2');
        cy.contains('Category 2');
    } else if (`${categoryResult}` == 'Category 1') {
        cy.url().should('include', '/check_simplified_processes_eligibility/result?category=1');
        cy.contains('Category 1');
        cy.contains('Goods are not eligible to move using the simplified processes for Internal Market Movements');
    }
    if (`${categoryResult}` == 'Category 2' || `${categoryResult}` == 'standard') {
        cy.contains('Goods are eligible to move using the simplified processes for Internal Market Movements');
    }
    if (`${categoryResult}` == 'Category 1') {
        cy.contains('Category 1 goods cannot move using simplified processes.');
        const lnkText = 'Find out more about trading and moving goods in and out of Northern Ireland (opens in a new tab)';
        cy.contains(`${lnkText}`).should('have.attr', 'href',) +
            ('https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland');

    } else {
        cy.contains('Find out more about Internal Market Movements (opens in a new tab)').should('have.attr', 'href',) +
            ('http://www.gov.uk/guidance/internal-market-movements-from-great-britain-to-northern-ireland');
    }
    cy.contains('About the categorisation of your goods');

    // Verify Categories exemptions have met and Certification needed
    cy.VerifyAboutGoodsAndCategorisationOfGoods(commodityCode, originCountry, categoryResult, cat1DocCodes, cat2DocCodes,
        cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed);

    if (clkCheckCategoryOfGoodsBtn != true && clkCheckCategoryOfGoodsBtn == null) {
        cy.contains('Check the category of other goods').click();
    }
});

Cypress.Commands.add('verifyExemptionsMet', (documentCodes, exemptMetOrCertNeed) => {
    cy.get('.govuk-summary-card .govuk-summary-list .govuk-summary-list__row').each(($row) => {
        if (!Object.values(documentCodes).includes(documentCodes)) {
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

Cypress.Commands.add('VerifyAboutGoodsAndCategorisationOfGoods', (commodityCode, originCountry, categoryResult, cat1DocCodes,
    cat2DocCodes, cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed) => {
    // Verify about goods table
    cy.get('.govuk-summary-card__content').contains(`${commodityCode}`);
    cy.get('.govuk-summary-card__content').contains(`${originCountry}`);
    cy.get('.govuk-summary-card__content').contains(`${dateWithFullMonth[0]} ${dateWithFullMonth[1]} ${dateWithFullMonth[2]}`);
    if (categoryResult != false && categoryResult != 'Standard goods') {
        cy.get('.govuk-summary-card__content').contains(`${categoryResult}`);
    }
    // Verify exemptions have met category section on the result page
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
        cy.get('.govuk-summary-card__content').should('not.contain', cat1ExemptOrHaveMet);
        cy.get('.govuk-summary-card__title-wrapper h2').should('not.contain', cat2ExemptOrHaveMet);
        cy.should('not.contain', exemptMetOrCertNeed);
    }
    if (documentCodes != null && exemptMetOrCertNeed != null) {
        cy.verifyExemptionsMet(documentCodes, exemptMetOrCertNeed);
    }
});

Cypress.Commands.add('navigateToTellsUsAbtYourGoodsPage', (data) => {
    // SPIMM process start page
    cy.verifySpimmPage();
    // Start now button
    cy.clkBtnToContinue();
    // Answer eligibility questions page
    cy.verifyEligibilityNewPage(data[3]);
    // Continue button
    cy.clkBtnToContinue();
    // Check the category of your goods page
    cy.checkCategoryOfYourGoods();
    // Continue button
    cy.clkBtnToContinue();
    // Tell us about your goods
    cy.tellUsAboutYourGoodsPage(data[0], data[1]);
    // Continue button
    cy.clkBtnToContinue();
});

Cypress.Commands.add('navigateToCatResultPage', (data, cat1DocCodes, cat2DocCodes, assertData, assertData2) => {
    // Navigates to directly to Tells Us About Your Goods Page
    cy.navigateToTellsUsAbtYourGoodsPage(data);
    if (cat1DocCodes != null && cat2DocCodes == null) {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
        // Continue button
        cy.clkBtnToContinue();
        // Check your answers page
        cy.checkYourAnswersPage(data[0], data[1], false, true, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
        // Continue button
        cy.clkBtnToContinue();
        // Results Page
        cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, null, assertData2[0], null, assertData2[2], true);
    }
    else if (cat2DocCodes != null && cat1DocCodes == null) {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes);
        // Continue button
        cy.clkBtnToContinue();
        // Check your answers page
        cy.checkYourAnswersPage(data[0], data[1], false, false, true, false, null, cat2DocCodes, null, assertData[1], assertData[2]);
        // Continue button
        cy.clkBtnToContinue();
       // Cypress.Commands.add('verifyResultPage', (commodityCode, originCountry, categoryResult, cat1DocCodes, cat2DocCodes,
           // cat1ExemptOrHaveMet, cat2ExemptOrHaveMet, exemptMetOrCertNeed, clkCheckCategoryOfGoodsBtn)
        // Results Page
        cy.verifyResultPage(data[0], data[1], data[2], null, cat2DocCodes, null, assertData2[0],assertData2[1], true);
    }
    else if (cat1DocCodes != null && cat2DocCodes != null) {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
        // Continue button
        cy.clkBtnToContinue();
       // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
       cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, true);
       // Continue button
       cy.clkBtnToContinue();
        // Check your answers page
        cy.checkYourAnswersPage(data[0], data[1], false, false, false, true, cat1DocCodes, cat2DocCodes, assertData[0], assertData[1], assertData[2]);
        // Continue button
        cy.clkBtnToContinue();
        // Results Page
        cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, cat2DocCodes, assertData[3], assertData2[0], assertData2[1], true);
    }
     else {
        // Check your answers page
        cy.checkYourAnswersPage(data[0], data[1], false, false, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
        // Continue button
        cy.clkBtnToContinue();
        // Results Page
        cy.verifyResultPage(data[0], data[1], data[2], 'none', null, assertData2[0], null, assertData2[2], true);
    }
});

Cypress.Commands.add('verifyPageURLsAndHeadingsByClickingBackLink', (data, docCodes, assertData, pageToVerify) => {
    if (pageToVerify == 'CYA') {
        // Check your answers page
        cy.checkYourAnswersPage(data[0], data[1], false, true, false, false, docCodes, null, assertData[0], null, assertData[2], false);
    } else if (pageToVerify == 'Cat1Exempt') {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.category1ExemptionsPage(data[0], data[1], docCodes, true);
    } else if (pageToVerify == 'YourGoods') {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.tellUsAboutYourGoodsPage(data[0], data[1], true);
    } else if (pageToVerify == 'SPIMMStart') {
        // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list
        cy.verifySpimmPage();
    }
});

Cypress.Commands.add('verifyPages', (data, cat1DocCodes, globalAssertData, pageNamesToVerify) => {
    const pageNames = Object.values(pageNamesToVerify);
    for (var i = 0; i < pageNames.length; i ++) {
        // verify CYA page url and headings
        cy.verifyPageURLsAndHeadingsByClickingBackLink(data, cat1DocCodes, globalAssertData, pageNames[i]);
        // click Back link on the CYA page
        cy.clkBackLink();
    }
});

Cypress.Commands.add('verifyResultsPageCategoryExemptions', (resultsToVerify) => {
    const results = Object.values(resultsToVerify);
    for (var i = 0; i < results.length; i ++) {
        cy.contains(results[i]);
    }
});
