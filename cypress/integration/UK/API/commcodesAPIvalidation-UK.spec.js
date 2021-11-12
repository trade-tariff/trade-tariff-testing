/* eslint-disable camelcase */
context('🇬🇧 ⚙️ | commcodesAPIvalidation-UK |Validate API response for commodities on V1 and V2 |', () => {
  it('🇬🇧 ⚙️ V2 - Validate API response for V2', () => {
    const fixture_timestamp = Cypress.config('fixtures_timestamp');
    const commodity_ids = Cypress.config('commcodes');

    for (let i = 0; i < commodity_ids.length; i++) {
      cy.readFile(`cypress/Data/uk/v2/${commodity_ids[i]}-${fixture_timestamp}.json`).then((fixture) => {
        cy.request({
          method: 'GET',
          url: `/api/v2/commodities/${commodity_ids[i]}`,
        }).then((response) => {
          expect(response.status).to.eq(200);
          //    console.log(JSON.stringify(fixture))
          //   console.log(JSON.stringify(response.body))
          //   expect(response.body).to.deep.equal(fixture)
        });
      });
    }
  });
  //

  it('🇬🇧 ⚙️ V2 - Should return a Valid payload and Schema should match', function() {
    const fixture_timestamp = Cypress.config('fixtures_timestamp');
    const commodity_ids = Cypress.config('commcodes');
    for (let i = 0; i < commodity_ids.length; i++) {
      //    cy.log(`🇬🇧 ⚙️  for comm code ${commodity_ids[i]}`)
      cy.request(`./api/v2/commodities/${commodity_ids[i]}`).then(($response) => {
        expect($response.status).to.eq(200);

        cy.task('validateJsonSchema', {
          data: $response.body,
          verbose: true,
          schemaFile: `cypress/Data/uk/v2/${commodity_ids[i]}-${fixture_timestamp}.json`,

        })
            .should('equal', null);
      });
    }
  });


  it('🇬🇧 ⚙️ V1 - Validate API response for V1', () => {
    const fixture_timestamp = Cypress.config('fixtures_timestamp');
    const commodity_ids = Cypress.config('commcodes');

    for (let i = 0; i < commodity_ids.length; i++) {
      cy.readFile(`cypress/Data/uk/v1/${commodity_ids[i]}-${fixture_timestamp}.json`).then((fixture) => {
        cy.request({
          method: 'GET',
          url: `/api/v1/commodities/${commodity_ids[i]}`,
        }).then((response) => {
          expect(response.status).to.eq(200);
          //     console.log(JSON.stringify(fixture))
          //     console.log(JSON.stringify(response.body))
          //   expect(response.body).to.deep.equal(fixture)
        });
      });
    }
  });

  it('🇬🇧 ⚙️ V1 - Should return a Valid payload and Schema should match', function() {
    const fixture_timestamp = Cypress.config('fixtures_timestamp');
    const commodity_ids = Cypress.config('commcodes');
    for (let i = 0; i < commodity_ids.length; i++) {
      //   cy.log(`🇬🇧 ⚙️ for comm code ${commodity_ids[i]}`)
      cy.request(`./api/v1/commodities/${commodity_ids[i]}`).then(($response) => {
        expect($response.status).to.eq(200);

        cy.task('validateJsonSchema', {
          data: $response.body,
          verbose: true,
          schemaFile: `cypress/Data/uk/v1/${commodity_ids[i]}-${fixture_timestamp}.json`,

        })
            .should('equal', null);
      });
    }
  });
});
