const parseCsv = require('../lib/csvParser');

Cypress.Commands.add('checkCsvSuccessResponse', (csvResponse) => {
  expect(csvResponse.status).to.eq(200);

  return csvResponse;
});

Cypress.Commands.add('parseCsv', (csvResponse) => {
  return parseCsv(csvResponse.body, {columns: true});
});

Cypress.Commands.add('fetchCsv', (path) => {
  return cy.request(path)
      .then(cy.checkCsvSuccessResponse)
      .then(cy.parseCsv);
});

Cypress.Commands.add('checkCsvCells',
    {prevSubject: true},
    (csvData, rowNumber, expectedCellValues) => {
      const rowData = csvData[rowNumber - 2];

      for (const col in expectedCellValues) {
        expect(rowData[col]).to.equal(expectedCellValues[col]);
      }

      return csvData; // allow chaining
    });
