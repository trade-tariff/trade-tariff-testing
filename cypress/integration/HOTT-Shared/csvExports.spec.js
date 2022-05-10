/* eslint-disable max-len */
// use plugin to download file
// check file has been downloaded with correct name i.e., date etc
// validate file size
// parse csv to array and validate content of the file?
describe('| csvExports.spec.js | UK XI services download CSV files', () => {
  const countries = ['', 'xi'];
  for (let j=0; j<countries.length; j++) {
    it(`${countries[j]} - sections.csv`, function() {
      cy.fetchCsv(`${countries[j]}/api/v2/sections.csv`)
          .checkCsvCells(2, {numeral: 'I', title: 'Live animals; animal products'})
          .checkCsvCells(10, {numeral: 'IX', chapter_from: '44', chapter_to: '46'})
          .checkCsvCells(22, {title: 'Works of art, collectors\' pieces and antiques'});
    });
    it(`${countries[j]} - chapters.csv`, function() {
      cy.fetchCsv(`${countries[j]}/api/v2/sections/1/chapters.csv`)
          .checkCsvCells(2, {goods_nomenclature_sid: '27623', goods_nomenclature_item_id: '0100000000', headings_from: '0101', formatted_description: 'Live animals'})
          .checkCsvCells(6, {goods_nomenclature_sid: '30015', goods_nomenclature_item_id: '0500000000', headings_to: '0511', description: 'PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED'});
    });
    it(`${countries[j]} - headings.csv`, function() {
      cy.fetchCsv(`${countries[j]}/api/v2/chapters/01/headings.csv`)
          .checkCsvCells(2, {goods_nomenclature_sid: '27624', goods_nomenclature_item_id: '0101000000', declarable: 'false', description: 'Live horses, asses, mules and hinnies', producline_suffix: '80', leaf: 'false', description_plain: 'Live horses, asses, mules and hinnies', formatted_description: 'Live horses, asses, mules and hinnies'});
    });
    it(`${countries[j]} - commodities.csv`, function() {
      cy.fetchCsv(`${countries[j]}/api/v2/headings/0101/commodities.csv`)
          .checkCsvCells(2, {description: 'Horses', number_indents: '1', goods_nomenclature_item_id: '0101210000', declarable: 'false', leaf: 'false', goods_nomenclature_sid: '93797', formatted_description: 'Horses', description_plain: 'Horses', producline_suffix: '10', parent_sid: ''});
    });
    it.skip(`${countries[j]} - goods_nomenclature.csv`, function() {
      cy.fetchCsv(`${countries[j]}/api/v2/goods_nomenclatures/section/1.csv`)
          .checkCsvCells(2, {indents: '0', description: 'LIVE ANIMALS', producline_suffix: '80', href: '/api/v2/chapters/01'});
      cy.fetchCsv(`${countries[j]}/api/v2/goods_nomenclatures/chapter/01.csv`)
          .checkCsvCells(2, {goods_nomenclature_item_id: '0100000000', goods_nomenclature_sid: '27623', producline_suffix: '80', href: '/api/v2/chapters/01', description: 'LIVE ANIMALS'});
      cy.fetchCsv(`${countries[j]}/api/v2/goods_nomenclatures/heading/0101.csv`)
          .checkCsvCells(2, {indents: '0', description: 'LIVE ANIMALS', producline_suffix: '80', href: '/api/v2/chapters/01'});
    });
    //
  }
});
