/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
describe('|commHistory.spec.js| UK and XI | commodity/heading history to be displayed when they do not exist on current date', function() {
// User goes to a commodity code for a date where the commodity does not exist, when that commodity code was end-dated previously
// User goes to a commodity code for a date where the commodity does not exist, when that commodity code has not yet reached its start date (this may be combined with pt 1 above)
// User goes to a commodity code which does not exist for a given date, never has and never will
// All of the above for headings.
  const country = ['', 'xi'];
  const titles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i = 0; i < country.length; i++) {
    it(`${country[i]} - Commodity Scenario 1 (URL)- Commodity does not exist after 31 december 2021 `, function() {
      cy.CommCodeHistory('8527290010', {day: '', month: '', year: ''});
      cy.contains(`${titles[i]}`);
      cy.contains('The commodity code you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2021 to 31 December 2021');
      cy.contains('From 1 July 2013 to 30 June 2017');
      cy.contains('From 12 February 1992 to 31 December 1999');
      cy.contains('Alternatively, you can visit heading 8527 or chapter 85');
      // 1 January 2021
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(1) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=1&month=1&year=2021');
      cy.contains('1 January 2021');
      cy.go(-1);
      // 31 December 2021
      cy.get('li:nth-of-type(1) > a:nth-of-type(2)').click();
      cy.url().should('include', '8527290010?day=31&month=12&year=2021');
      cy.contains('31 December 2021');
      cy.go(-1);
      // 	1 July 2013
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(2) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=1&month=7&year=2013');
      cy.contains('1 July 2013');
      cy.go(-1);
      // 12 February 1992
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=12&month=2&year=1992');
      cy.contains('12 February 1992');
      cy.go(-1);
      cy.contains('Click on a date to see the measures present on that date.');
      // click on heading 8527
      cy.get('p:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.contains('Heading 8527 - Reception apparatus for radio-broadcasting, whether or not combined, in the same housing, with sound recording or reproducing apparatus or a clock');
      cy.go(-1);
      // click on chapter 85
      cy.get('p:nth-of-type(3) > a:nth-of-type(2)').click();
      cy.contains('Chapter 85 - Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles');
    });
    it(`${country[i]} -  Commodity Scenario  2 (URL) - Commodity starts on 1st Jan 2022 `, function() {
    // commodity is available on 1st Jan 2022
      cy.CommCodeHistory('2934999085', {day: '1', month: '1', year: '2022'});
      cy.contains(`${titles[i]}`);
      // commodity does not exist before 1st Jan 2022 ( 31st December 2021)
      cy.visit('/commodities/2934999085?day=1&month=12&year=2020', {failOnStatusCode: false});
      cy.contains('Commodity 2934999085');
      cy.contains('The commodity code you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2022');
      cy.contains('From 1 July 2011 to 31 December 2015');
      cy.contains('From 1 July 2006 to 31 December 2008');
      cy.contains('Alternatively, you can visit heading 2934 or chapter 29 for 1 December 2020.');
      // 1 January 2022
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(1) > a').click();
      cy.url().should('include', '2934999085?day=1&month=1&year=2022');
      cy.contains('1 January 2022');
      cy.go(-1).wait(300);
      // 1 July 2011
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(2) > a:nth-of-type(1)').click();
      cy.url().should('include', '2934999085?day=1&month=7&year=2011');
      cy.contains('1 July 2011');
      cy.go(-1).wait(300);
      // 	1 July 2006
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.url().should('include', '2934999085?day=1&month=7&year=2006');
      cy.contains('1 July 2006');
      cy.go(-1);
      // 31 December 2008
      cy.get('li:nth-of-type(3) > a:nth-of-type(2)').click();
      cy.url().should('include', '2934999085?day=31&month=12&year=2008');
      cy.contains('31 December 2008');
      cy.go(-1);
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('Alternatively, you can visit heading 2934 or chapter 29 for 1 December 2020.');
    });
    it(`${country[i]} -  Commodity Scenario  3 (URL) - Commodity has never existed (and never will)`, function() {
      cy.CommCodeHistory('1010191919', {day: '', month: '', year: ''});
      cy.contains(`${titles[i]}`);
      cy.contains('The commodity code you searched for can\'t be found. Try searching again.');
      cy.contains('Alternatively, you can visit heading 1010 or chapter 10.');
    });
    // ------------------------------  Headings history ------------------------------
    it(`${country[i]} -  Heading Scenario  1 (URL) - Heading does not exist after 31 december 2021 `, function() {
    // commodity is available on 1st Jan 2022
      cy.headingsHistory('8803', {day: '1', month: '2', year: '2022'});
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 1972 to 31 December 2021');
      cy.contains('Alternatively, you can visit chapter 88 for 1 February 2022.');
      // heading exists from 1 Jan 1972
      cy.get('.govuk-list.govuk-list--bullet > li > a:nth-of-type(1)').click();
      cy.contains('1 January 1972');
      cy.url().should('include', '8803?day=1&month=1&year=1972');
      cy.go(-1);
      cy.get('p:nth-of-type(3) > a').click();
      cy.contains('Chapter 88 - Aircraft, spacecraft, and parts thereof');
    });
    it(`${country[i]} -  Heading Scenario  2 (URL) - Heading starts on 1st Jan 2022 `, function() {
    // commodity is available on 1st Jan 2022
      cy.headingsHistory('8806', {day: '31', month: '12', year: '2021'});
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2022');
      cy.contains('Alternatively, you can visit chapter 88 for 31 December 2021.');
      // heading exists from 1 Jan 1972
      cy.get('.govuk-list.govuk-list--bullet  a').click();
      cy.contains('1 January 2022');
      cy.url().should('include', '8806?day=1&month=1&year=2022');
      cy.go(-1);
      cy.get('p:nth-of-type(3) > a').click();
      cy.contains('Chapter 88 - Aircraft, spacecraft, and parts thereof');
    });
    it(`${country[i]} -  Heading Scenario  3 (URL) - Heading has never existed (and never will)`, function() {
      cy.headingsHistory('3848', {day: '', month: '', year: ''});
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you searched for can\'t be found. Try searching again.');
      cy.contains('Alternatively, you can visit chapter 38.');
    });
    // ------------------------------  Using search box ------------------------------
    it(`${country[i]} - Commodity Scenario 1 (using search box)- Commodity does not exist after 31 december 2021 `, function() {
      // commodity is available on 1st Jan 2022
      cy.visit('/browse?day=21&month=2&year=2022', {failOnStatusCode: false});
      cy.searchForCommodity2('8527290010');
      cy.contains('Commodity 8527290010');
      cy.contains(`${titles[i]}`);
      cy.contains('The commodity code you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2021 to 31 December 2021');
      cy.contains('From 1 July 2013 to 30 June 2017');
      cy.contains('From 12 February 1992 to 31 December 1999');
      cy.contains('Alternatively, you can visit heading 8527 or chapter 85 for 21 February 2022.');
      // 1 January 2021
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(1) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=1&month=1&year=2021');
      cy.contains('1 January 2021');
      cy.go(-1);
      // 31 December 2021
      cy.get('li:nth-of-type(1) > a:nth-of-type(2)').click();
      cy.url().should('include', '8527290010?day=31&month=12&year=2021');
      cy.contains('31 December 2021');
      cy.go(-1);
      // 	1 July 2013
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(2) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=1&month=7&year=2013');
      cy.contains('1 July 2013');
      cy.go(-1);
      // 12 February 1992
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.url().should('include', '8527290010?day=12&month=2&year=1992');
      cy.contains('12 February 1992');
      cy.go(-1);
      cy.contains('Click on a date to see the measures present on that date.');
      // click on heading 8527
      cy.get('p:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.contains('Heading 8527 - Reception apparatus for radio-broadcasting, whether or not combined, in the same housing, with sound recording or reproducing apparatus or a clock');
      cy.go(-1);
      // click on chapter 85
      cy.get('p:nth-of-type(3) > a:nth-of-type(2)').click();
      cy.contains('Chapter 85 - Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles');
    });
    it(`${country[i]} -  Commodity Scenario  2 (using search box) - Commodity starts on 1st Jan 2022 `, function() {
    // commodity is available on 1st Jan 2022
      cy.visit('/browse?day=1&month=1&year=2022', {failOnStatusCode: false});
      cy.searchForCommodity2('2934999085');
      cy.contains('Commodity 2934999085');
      cy.contains(`${titles[i]}`);
      // commodity does not exist before 1st Jan 2022 ( 31st December 2021)
      cy.visit('/commodities/2934999085?day=1&month=12&year=2020', {failOnStatusCode: false});
      cy.contains('Commodity 2934999085');
      cy.contains('The commodity code you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2022');
      cy.contains('From 1 July 2011 to 31 December 2015');
      cy.contains('From 1 July 2006 to 31 December 2008');
      cy.contains('Alternatively, you can visit heading 2934 or chapter 29 for 1 December 2020.');
      // 1 January 2022
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(1) > a').click();
      cy.url().should('include', '2934999085?day=1&month=1&year=2022');
      cy.contains('1 January 2022');
      cy.go(-1).wait(300);
      // 1 July 2011
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(2) > a:nth-of-type(1)').click();
      cy.url().should('include', '2934999085?day=1&month=7&year=2011');
      cy.contains('1 July 2011');
      cy.go(-1).wait(300);
      // 	1 July 2006
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(3) > a:nth-of-type(1)').click();
      cy.url().should('include', '2934999085?day=1&month=7&year=2006');
      cy.contains('1 July 2006');
      cy.go(-1);
      // 31 December 2008
      cy.get('li:nth-of-type(3) > a:nth-of-type(2)').click();
      cy.url().should('include', '2934999085?day=31&month=12&year=2008');
      cy.contains('31 December 2008');
      cy.go(-1);
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('Alternatively, you can visit heading 2934 or chapter 29 for 1 December 2020.');
    });
    it(`${country[i]} -  Commodity Scenario  3 (using search box) - Commodity has never existed (and never will)`, function() {
      cy.visit('/browse?day=1&month=1&year=2022', {failOnStatusCode: false});
      cy.searchForCommodity2('1010191919');
      cy.contains('Commodity 1010191919');
      cy.contains(`${titles[i]}`);
      cy.contains('The commodity code you searched for can\'t be found. Try searching again.');
      cy.contains('Alternatively, you can visit heading 1010 or chapter 10 for 1 January 2022.');
    });
    // --------------- Headings history ------------------------------
    it(`${country[i]} -  Heading Scenario 1 (using search box) - Heading does not exist after 31 december 2021 `, function() {
    // commodity is available on 1st Jan 2022
      cy.visit('/browse?day=1&month=1&year=2022', {failOnStatusCode: false});
      cy.searchForCommodity2('8803');
      cy.contains('Heading 8803');
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 1972 to 31 December 2021');
      cy.contains('Alternatively, you can visit chapter 88 for 1 January 2022.');
      // heading exists from 1 Jan 1972
      cy.get('.govuk-list.govuk-list--bullet > li > a:nth-of-type(1)').click();
      cy.contains('1 January 1972');
      cy.url().should('include', '8803?day=1&month=1&year=1972');
      cy.go(-1);
      cy.get('p:nth-of-type(3) > a').click();
      cy.contains('Chapter 88 - Aircraft, spacecraft, and parts thereof');
    });
    it(`${country[i]} -  Heading Scenario  2 (using search box) - Heading starts on 1st Jan 2022 `, function() {
    // commodity is available on 1st Jan 2022
      cy.visit('/browse?day=31&month=12&year=2021', {failOnStatusCode: false});
      cy.searchForCommodity2('8807');
      cy.contains('Heading 8807');
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you entered could not be found for the date selected. The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 1 January 2022');
      cy.contains('Alternatively, you can visit chapter 88 for 31 December 2021.');
      // heading exists from 1 Jan 2022
      cy.get('.govuk-list.govuk-list--bullet  a').click();
      cy.contains('1 January 2022');
      cy.url().should('include', '8807?day=1&month=1&year=2022');
      cy.go(-1);
      cy.get('p:nth-of-type(3) > a').click();
      cy.contains('Chapter 88 - Aircraft, spacecraft, and parts thereof');
    });
    it(`${country[i]} -  Heading Scenario  3 (using search box) - Heading has never existed (and never will)`, function() {
      cy.visit('/browse?day=1&month=1&year=2022', {failOnStatusCode: false});
      cy.searchForCommodity2('3848');
      cy.contains('Heading 3848');
      cy.contains(`${titles[i]}`);
      cy.contains('The heading you searched for can\'t be found. Try searching again.');
      cy.contains('Alternatively, you can visit chapter 38 for 1 January 2022.');
    });
  }
});
