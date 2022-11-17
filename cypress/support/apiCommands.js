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
  const matchingMeasureType = response.body.included.filter(function(resource) {
    return (resource.type === 'legal_act' && resource.id === expectedId);
  })[0];
  expect(response.status).to.eq(200);
  expect(response.body).not.to.be.null;
  expect(matchingMeasureType.attributes.regulation_url).to.eq(expectedDescription);
});

Cypress.Commands.add('measures', (response, id, type, role, justId, justType) => {
  expect(response.status).to.eq(200);
  expect(response.body).not.to.be.null;
  expect(response.body.data.relationships.legal_acts.data[0].id).to.eq(id);
  expect(response.body.data.relationships.legal_acts.data[0].type).to.eq(type);
  expect(response.body.data.relationships.measure_generating_legal_act.data.id).to.eq(id);
  expect(response.body.data.relationships.measure_generating_legal_act.data.type).to.eq(type);
  if (`${justId}` === 'null' || `${justType}` === 'null') {
    expect(response.body.data.relationships.justification_legal_act.data).to.be.null;
  } else {
    expect(response.body.data.relationships.relationships.justification_legal_act.data.id).to.eq(justId);
    expect(response.body.data.relationships.relationships.justification_legal_act.data.type).to.eq(justType);
  }
  expect(response.body.included[2].id).to.eq(id);
  expect(response.body.included[2].type).to.eq(type);
  expect(response.body.included[2].attributes.role).to.eq(role);
});
