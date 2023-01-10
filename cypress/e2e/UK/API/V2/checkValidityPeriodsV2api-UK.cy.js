/* eslint-disable camelcase */
describe('🇬🇧 checkValidityPeriodsV2api-UK| Validaity start and end dates', {tags: ['notDevelopment', 'notProduction']}, function() {
  it('UK - Sections API - Verify validity start and end dates for chapters', function() {
    cy.request('/api/v2/sections/01')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // sections
          expect(response.body.data.id).to.be.eq('1');
          expect(response.body.data.type).to.be.eq('section');
          expect(response.body.data.attributes).not.haveOwnProperty('validity_start_date');
          expect(response.body.data.attributes).not.haveOwnProperty('validity_end_date');
          // chapters
          expect(response.body.included[0].id).to.be.eq('27623');
          expect(response.body.included[0].type).to.be.eq('chapter');
          expect(response.body.included[0].attributes.validity_start_date).to.be.eq('1971-12-31T00:00:00.000Z');
          expect(response.body.included[0].attributes.validity_end_date).to.be.null;
        });
  });

  it('UK - Chapters API - Verify validity start and end dates for chapters', function() {
    cy.request('/api/v2/chapters/01')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // chapters
          expect(response.body.data.id).to.be.eq('27623');
          expect(response.body.data.type).to.be.eq('chapter');
          expect(response.body.data.attributes.validity_start_date).to.be.eq('1971-12-31T00:00:00.000Z');
          expect(response.body.data.attributes.validity_end_date).to.be.null;
          // sections
          expect(response.body.included[0].id).to.be.eq('1');
          expect(response.body.included[0].type).to.be.eq('section');
          expect(response.body.included[1].id).to.be.eq('27624');
          // headings
          expect(response.body.included[2].type).to.be.eq('heading');
          expect(response.body.included[2].attributes.validity_start_date).to.be.eq('1972-01-01T00:00:00.000Z');
          expect(response.body.included[2].attributes.validity_end_date).to.be.null;
        });
  });

  it('UK - Headings API - Verify validity start and end dates for headings and chapters', function() {
    cy.request('/api/v2/headings/0102')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // headings
          expect(response.body.data.id).to.be.eq('27633');
          expect(response.body.data.type).to.be.eq('heading');
          expect(response.body.data.attributes.validity_start_date).to.be.eq('1972-01-01T00:00:00.000Z');
          expect(response.body.data.attributes.validity_end_date).to.be.null;
          // sections
          expect(response.body.included[0].id).to.be.eq('1');
          expect(response.body.included[0].type).to.be.eq('section');
          expect(response.body.included[0]).not.haveOwnProperty('validity_start_date');
          expect(response.body.included[0]).not.haveOwnProperty('validity_end_date');
          // chapters
          expect(response.body.included[1].id).to.be.eq('27623');
          expect(response.body.included[1].type).to.be.eq('chapter');
          expect(response.body.included[1].attributes.validity_start_date).to.be.eq('1971-12-31T00:00:00.000Z');
          expect(response.body.included[1].attributes.validity_end_date).to.be.null;
        });
  });

  it('UK - Subheadings API - Verify validity start and end dates for subheadings, heading, chapters and verify verbose_duty', function() {
    cy.request('/api/v2/subheadings/0102291000-80')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          expect(response.body.data.id).to.be.eq('94057');
          expect(response.body.data.type).to.be.eq('subheading');
          expect(response.body.data.attributes.validity_start_date).to.be.eq('2012-01-01T00:00:00.000Z');
          expect(response.body.data.attributes.validity_end_date).to.be.null;
          // sections
          expect(response.body.included[0].id).to.be.eq('1');
          expect(response.body.included[0].type).to.be.eq('section');
          expect(response.body.included[0]).not.haveOwnProperty('validity_start_date');
          expect(response.body.included[0]).not.haveOwnProperty('validity_end_date');
          // headings
          expect(response.body.included[1].id).to.be.eq('27633');
          expect(response.body.included[1].type).to.be.eq('heading');
          expect(response.body.included[1].attributes.validity_start_date).to.be.eq('2012-01-01T00:00:00.000Z');
          expect(response.body.included[1].attributes.validity_end_date).to.be.null;
          // chapters
          expect(response.body.included[2].id).to.be.eq('27623');
          expect(response.body.included[2].type).to.be.eq('chapter');
          expect(response.body.included[2].attributes.validity_start_date).to.be.eq('1971-12-31T00:00:00.000Z');
          expect(response.body.included[2].attributes.validity_end_date).to.be.null;
          // verify verbose_duty
          expect(response.body.included[3].id).to.be.eq('2982600-duty_expression');
          expect(response.body.included[3].type).to.be.eq('duty_expression');
          expect(response.body.included[3].attributes.verbose_duty).to.be.eq('Items (p/st)');
          // commodity
          expect(response.body.included[11].id).to.be.eq('94053');
          expect(response.body.included[11].type).to.be.eq('commodity');
          expect(response.body.included[11].attributes.validity_start_date).to.be.eq('2012-01-01T00:00:00.000Z');
          expect(response.body.included[11].attributes.validity_end_date).to.be.null;
        });
  });

  // Verbose duty attribute check for commodities
  it('UK - Verify verbose duty expression for commodity', function() {
    const verbose_duty = '£0.30 / 100 kg per % of sucrose by weight, including other sugars expressed as sucrose (%sacchar.)';
    cy.request('/api/v2/commodities/1702201010')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          expect(response.body.included[4].id).to.be.eq('20001843-duty_expression');
          expect(response.body.included[4].type).to.be.eq('duty_expression');
          expect(response.body.included[4].attributes.verbose_duty).to.be.eq(`${verbose_duty}`);
        });
  });
});
