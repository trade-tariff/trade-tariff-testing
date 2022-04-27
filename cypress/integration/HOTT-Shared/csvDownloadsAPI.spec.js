describe('| csvDownloadsAPI.spec | UK XI services download csv files', function() {
  // use plugin to download file
  // check file has been downloaded with correct name i.e., date etc
  // validate file size
  // parse csv to array and validate content of the file?
  it.only('UK sections.csv', function() {
    cy.request('api/v2/sections.csv').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // // validate properties
          // expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          // expect(response.body.data[1].attributes.guidance_chief).to.have.string('No additional information is available.');
        });
  });
  it('UK chapters.csv', function() {

  });
  it('UK headings.csv', function() {

  });
  it('XI goods_nomenclature.csv', function() {

  });
  it('XI chapters.csv', function() {

  });
  it('XI headings.csv', function() {

  });
});
