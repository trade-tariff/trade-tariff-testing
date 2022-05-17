// API Commands
Cypress.Commands.add('validJsonAPIresponse', (response)=>{
  expect(response.status).to.eq(200);
  expect(response).to.have.property('headers');
  expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
  expect(response.body).to.not.be.null;
  expect(response.body).to.have.property('data');
});

Cypress.Commands.add('hasMeasureType', (response, expectedId, expectedDescription) => {
  const matchingMeasureType = response.body.included.filter(function(resource) {
    return (resource.type === 'measure_type' && resource.id === expectedId);
  })[0];

  expect(matchingMeasureType.attributes.description).to.eq(expectedDescription);
});

Cypress.Commands.add('doesNotHaveMeasureType', (response, expectedId) => {
  const matchingMeasureTypes = response.body.included.filter(function(resource) {
    return (resource.type === 'measure_type' && resource.id === expectedId);
  });

  expect(matchingMeasureTypes).to.be.empty;
});
Cypress.Commands.add('hasLegalActs', (response, expectedId, expectedDescription) => {
  expect(response.status).to.eq(200);
  expect(response.body).not.to.be.null;
  const matchingMeasureType = response.body.included.filter(function(resource) {
    return (resource.type === 'legal_act' && resource.id === expectedId);
  })[0];

  expect(matchingMeasureType.attributes.regulation_url).to.eq(expectedDescription);
});
