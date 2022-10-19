describe('| subheadings.spec | validate subheadings on UK and XI services - Frontend and API |', function() {
  it('UK subheading front end', function() {
    cy.visit('subheadings/2933998000-80');
    cy.contains('Subheading 29339980 - Other ');
    cy.contains('There are 64 commodities in this category.');
    cy.contains('Footnotes');
    cy.contains('Chapter notes');
    cy.contains('Subheading notes');
    cy.contains('Section notes');
  });
  it('UK subheading API', function() {
    cy.request('/api/v2/subheadings/2933998000-80').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(2000);
          // validate properties
          expect(response.body.data).to.have.property('id');
          expect(response.body.data).to.have.property('type').equals('subheading');
          expect(response.body.data.relationships.section).to.exist;
          expect(response.body.data.relationships.chapter).to.exist;
          expect(response.body.data.relationships.heading).to.exist;
          expect(response.body.data.relationships.commodities).to.exist;
          expect(response.body.data.relationships.footnotes).to.exist;
          expect(response.body.data.relationships.footnotes.data[0].id).to.exist;
        });
  });
  it('XI subheading front end', function() {
    cy.visit('xi/subheadings/2933998000-80');
    cy.contains('Subheading 29339980 - Other ');
    cy.contains('There are 64 commodities in this category.');
    // cy.contains('Footnotes');
    cy.contains('Chapter notes');
    cy.contains('Subheading notes');
    cy.contains('Section notes');
  });
  it('XI subheading API', function() {
    cy.request('xi/api/v2/subheadings/2933998000-80').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(2000);
          // body lengths
          expect(response.body.included).to.have.length(229);
          // validate properties
          expect(response.body.data).to.have.property('id');
          expect(response.body.data).to.have.property('type').equals('subheading');
          expect(response.body.data.relationships.section).to.exist;
          expect(response.body.data.relationships.chapter).to.exist;
          expect(response.body.data.relationships.heading).to.exist;
          expect(response.body.data.relationships.commodities).to.exist;
          expect(response.body.data.relationships.footnotes).to.exist;
        });
  });
});
