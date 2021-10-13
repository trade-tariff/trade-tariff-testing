/* eslint-disable max-len */
describe('| proofOfOrigin - Certificates for Proof Of Origin ', function() {
  it('| Approved exporter for consignments with a value over £5500 / 6000 euros |', function() {
    cy.visit('/commodities/1006201713?country=SG#rules-of-origin');
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('Approved exporter for consignments with a value over £5500 / 6000 euros').click();
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document could be:');
  });
  it('| EUR1 or EUR.MED movement certificate |', function() {
    cy.visit('/commodities/0702000007?country=AL#rules-of-origin');

    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('EUR1 or EUR.MED movement certificate').click();
    cy.contains('EUR1 and EUR-MED movement certificates');
    cy.go(-1);
    cy.contains('Origin declaration').click();
    cy.contains('Origin declaration');
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document could be:');
  });
  it('| Origin declaration certificate |', function() {
    cy.visit('/commodities/4301100000?country=TR#rules-of-origin');
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has the following proof of origin:');
    cy.contains('Origin declaration').click();
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document could be:');
  });
  it('| Invoice declaration certificate |', function() {
    cy.visit('/commodities/5504100000?country=KH#rules-of-origin');
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('Invoice declaration').click();
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document could be:');
  });
  it('| Statement on origin certificate |', function() {
    cy.visit('/commodities/0203121100?country=AD#rules-of-origin');
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('Statement on origin').click();
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document could be:');
  });
  it('| Importer\'s knowledge certificate |', function() {
    cy.visit('/commodities/0203121100?country=AD#rules-of-origin');
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('Importer\'s knowledge').click();
    cy.contains('In some agreements, an importer can claim preference using knowledge they have about the origin of the goods they are importing. This is known as ‘importer’s knowledge’. This can be used instead of an origin declaration.');
  });
});
