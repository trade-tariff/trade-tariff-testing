describe('CSV Exports', () => {
  it('/api/v2/sections.csv', function() {
    cy.fetchCsv('/api/v2/sections.csv')
      .checkCsvCells(2, { numeral: 'I', title: 'Live animals; animal products' })
      .checkCsvCells(10, { numeral: 'IX', chapter_from: '44', chapter_to: '46'})
      .checkCsvCells(22, { title: 'Works of art, collectors\' pieces and antiques' })
  })
})
