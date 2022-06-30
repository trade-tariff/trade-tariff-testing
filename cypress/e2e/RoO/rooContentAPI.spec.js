describe('| rooContentAPI | UK,XI service Rules of Origin content exposed on v2 API', function() {
  // ---- rules of origin date expoesed on API for GSP OCT on UK and XI services -----
  it('UK 10 digit code - Rules of Origin EU data rendered ', function() {
    cy.request('api/v2/rules_of_origin_schemes/2203000100/fr').then((response) => {
      expect(response).to.have.property('status', 200);
      // console.log(response);
      expect(response.body.data[0]).to.have.property('type').contains('rules_of_origin_scheme');
    });
  });

  it('UK 8 digit code - Rules of Origin EU data rendered ', function() {
    cy.request('api/v2/rules_of_origin_schemes/22030001/fr').then((response) => {
      expect(response).to.have.property('status', 200);
      // console.log(response);
      expect(response.body.data[0]).to.have.property('type').contains('rules_of_origin_scheme');
    });
  });
  it('UK 10 digit code - invalid country - schema available Rules of Origin EU data rendered ', function() {
    cy.request('api/v2/rules_of_origin_schemes/2203000100/fz').then((response) => {
      expect(response).to.have.property('status', 200);
      // //console.log(response);
    //   expect(response.body.data[0]).to.have.property('type').contains('rules_of_origin_scheme');
    });
  });
  it('XI 10 digit code - Rules of Origin EU data rendered ', function() {
    cy.request('xi/api/v2/rules_of_origin_schemes/2203000100/fr').then((response) => {
      expect(response).to.have.property('status', 200);
      // console.log(response);
      expect(response.body.data[0]).to.have.property('type').contains('rules_of_origin_scheme');
    });
  });

  it('XI 8 digit code - Rules of Origin EU data rendered ', function() {
    cy.request('xi/api/v2/rules_of_origin_schemes/22030001/fr').then((response) => {
      expect(response).to.have.property('status', 200);
      // console.log(response);
      expect(response.body.data[0]).to.have.property('type').contains('rules_of_origin_scheme');
    });
  });
});
