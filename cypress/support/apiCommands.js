
// API Commands
Cypress.Commands.add('validJsonAPIresponse', (response)=>{
  expect(response.status).to.eq(200);
  expect(response).to.have.property('headers');
  expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
  expect(response.body).to.not.be.null;
  expect(response.body).to.have.property('data');
});
