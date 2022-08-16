// check import and export
// check EU before and after 1jan 2021
// check Swaziland
// Haiti cariforum
// check xi service
describe('geoAreasPage.spec.js | split the geographical areas from commodity page to separate page with a back button |', function() {
  it('Validate geographical areas UI - All countries (1011), EU (1013) | after 1 Jan 2021 |', function() {
    cy.visit('/commodities/1704109000?day=29&month=10&year=2021#import');
    cy.contains('All countries (1011)').click();
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Geographical area 1011 - All countries');
    cy.contains('Geographical area 1011, All countries, includes the following 254 countries / regions.');
    console.log(cy.title());
    cy.contains('Eswatini');
    cy.get('.govuk-back-link').click();

    cy.get('a#tab_import').click();
    // EU
    cy.contains('European Union (1013)').click();
    cy.contains('Geographical area 1013 - European Union');
    cy.contains('Geographical area 1013, European Union, includes the following 28 countries / regions.');
    console.log(cy.title());
    // Northern Ireland
    cy.visit('xi/commodities/1704109000?day=29&month=10&year=2021#import');
    cy.contains('All countries (1011)').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Geographical area 1011 - All countries');
    cy.contains('Geographical area 1011, All countries, includes the following 218 countries / regions.');
    console.log(cy.title());
    cy.contains('Swaziland');
    cy.get('.govuk-back-link').click();
  });
  it('Validate geographical areas UI - All countries(1011),EU(2012) | before 1 Jan 2021 |', function() {
    cy.visit('/commodities/1704109000?day=29&month=10&year=2020#import');
    cy.contains('All countries (1011)').click();
    cy.contains('Geographical area 1011 - All countries');
    cy.contains('Geographical area 1011, All countries, includes the following 225 countries / regions.');
    cy.contains('Swaziland');
    console.log(cy.title());
    cy.get('.govuk-back-link').click();
    // import tab
    cy.get('a#tab_import').click();
    // EU
    cy.contains('European Economic Area (2012)').click();
    cy.contains('Geographical area 2012 - European Economic Area');
    cy.contains('Geographical area 2012, European Economic Area, includes the following 4 countries / regions.');
    // check if UK /GB is present in the list before 1st Jan 2021
  });

  it('| Validate geographical areas API , before 1st Jan 2021 | GB to be present in EU |', function() {
    cy.request('api/v2/geographical_areas/1013?as_of=2020-01-01')
        .then((response) => {
          let found = false;
          console.log(response.body.data.relationships.children_geographical_areas.data[12].id);
          const countries = response.body.data.relationships.children_geographical_areas.data;
          for (let i = 0; i < countries.length; i++) {
            if (countries[i].id == 'GB') {
              found = true;
              break;
            }
          }
          expect(found).to.be.true;
        });
  });
  it('| Validate geographical areas API , after 1st Jan 2021 | GB NOT to be present in EU |', function() {
    cy.request('api/v2/geographical_areas/1013?as_of=2021-01-01')
        .then((response) => {
          let found = false;
          console.log(response.body.data.relationships.children_geographical_areas.data[12].id);
          const countries = response.body.data.relationships.children_geographical_areas.data;
          for (let i = 0; i < countries.length; i++) {
            if (countries[i].id == 'GB') {
              found = true;
              break;
            }
          }
          expect(found).to.be.false;
        });
  });
  it('| Validate geographical areas API , before 1st Jan 2021 | Swaziland present in all countries list (1011) |', function() {
    cy.request('api/v2/geographical_areas/1011?as_of=2020-01-01')
        .then((response) => {
          let found = false;
          console.log(response.body.included[177].attributes.description);
          const countries = response.body.included;
          for (let i = 0; i < countries.length; i++) {
            if (countries[i].attributes.description == 'Swaziland') {
              found = true;
              break;
            }
          }
          expect(found).to.be.true;
        });
  });
  it('| Validate geographical areas API , after 1st Jan 2021 | Eswatini present in all countries list (1011) |', function() {
    cy.request('api/v2/geographical_areas/1011?as_of=2021-01-01')
        .then((response) => {
          let found = false;
          console.log(response.body.included[205].attributes.description);
          const countries = response.body.included;
          for (let i = 0; i < countries.length; i++) {
            if (countries[i].attributes.description == 'Eswatini') {
              found = true;
              break;
            }
          }
          expect(found).to.be.true;
        });
  });
});
