describe('Measure condition pop ups', function() {
  it('Condition Code 999L - Separated with new text at the bottom', function() {
    cy.visit('/commodities/0702000007');
    cy.get('#measure-20164273').contains('Conditions').click();
    cy.get('.info-content').contains('Phytosanitary Certificate (import) for All countries');
    cy.get('.info-content').contains('The use of 999L allows a CDS waiver code');
  });

  it('Organic control on frog legs', function() {
    cy.visit('/commodities/0208907000');
    cy.get('#measure-20188551').contains('Conditions').click();
    cy.get('.info-content').contains('Import control of organic products for All countries');
    cy.get('.info-content').contains('Meet one of the following conditions');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
    cy.get('.info-content').contains('Complete the statement ‘Excluded from regulation 834/2007’.');
    cy.get('.info-content').contains('Enter the reference number of the Certificate.');
  });
  it('Fluorinated gases - multiple condition code groups', function() {
    cy.visit('/commodities/8479899738');
    cy.get('#measure-20161393').contains('Conditions').click();
    cy.get('.info-content').contains('Import control of fluorinated greenhouse gases for All countries');
    cy.get('.info-content').contains('Meet the following condition and supply');
    cy.get('.info-content').contains('Meet one of the following conditions');
    cy.get('.info-content').contains('Goods not concerned by import prohibition on fluorinated greenhouse gases');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
    cy.get('.info-content').contains('Complete the statement ‘Excluded from prohibition’.');
  });
  it('Waste controls - pair of doc codes paired together', function() {
    cy.visit('/commodities/2804501000');
    cy.get('#measure-20191650 > td.conditions-col.govuk-table__cell > a').contains('Conditions').click();
    cy.get('.info-content').contains('Import control - waste for All countries');
    cy.get('.info-content').contains('Meet one of the following conditions');
    cy.get('.info-content').contains('C669 + C670');
    cy.contains('Provide both documents');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
    cy.get('.info-content').contains('Enter the reference number of the Information document.');
    cy.contains('Complete the statement ‘Excluded product’.');
    cy.contains('Enter the reference number of the Notification document.');
    cy.contains('Enter the country code for the country of issue');
  });
  it('Pet food from USA - multiple pairs of doc codes paired together', function() {
    cy.visit('/commodities/2309902000');
    cy.get('#measure-20101211').contains('Conditions').click();
    cy.get('.info-content').contains('Restriction on entry into free circulation for United States');
    cy.get('.info-content').contains('Meet one of the following conditions');
    cy.get('.info-content').contains('C666 + C668');
    cy.contains('C667');
    cy.contains('C666 + C693');
    cy.contains('Provide both documents');
    cy.contains('Laboratory analysis');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
  });

  it('Headings which are declarable / also commodities- fall back option enabled', function() {
    cy.visit('/commodities/5609000000');
    cy.get('#measure-20187981').contains('Conditions').click();
    cy.get('.info-content').contains('Import control on cat and dog fur for All countries');
    cy.get('.info-content').contains('Other than cats and dogs fur as mentioned by Regulation (EC) No 1523/2007 (OJ L 343)');
    cy.get('.info-content').contains('Meet the following condition and supply the relevant document code(s) on your declaration.');
    cy.get('.info-content').contains('Other than cats and dogs fur as mentioned by Regulation (EC) No 1523/2007 (OJ L 343)');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
    cy.contains('Complete either statement ‘Education and taxidermy only’ or ‘No cat or dog fur’.');
    cy.get('.close [href]').click();
  });

  context('when a commodity has a price threshold measure for Belarus and Russia', function() {
    it('shows the correct threshold requirements on the export tab', function() {
      cy.visit('/commodities/0101210000#export');

      // Belarus conditions
      cy.get('#measure-20185288').contains('Conditions').openPopup();
      cy.get('.info-content').contains('The price of your goods does not exceed 250.00 GBP');
      cy.closePopup();

      // Russia conditions
      cy.get('#measure-20179932').contains('Conditions').openPopup();
      cy.get('.info-content').contains('The price of your goods does not exceed 250.00 GBP / p/st');
    });
  });

  context('when a commodity has a threshold measure which uses the entry price system', function() {
    it('shows the correct threshold requirements', function() {
      cy.visit('/xi/commodities/0805501010');
      cy.get('#measure-3939984').contains('Conditions').click();
      cy.get('.info-content').contains('Threshold condition');
      cy.contains('The price of your goods is greater than or equal to 55.80 EUR / 100 kg');
    });
  });

  context('when a commodity has credibility checks', function() {
    it('shows credibility checks correctly', function() {
      cy.visit('/xi/commodities/2204219313');
      cy.get('.484').contains('Declaration of subheading submitted to physical restrictions (net weight/supplementary unit)');

      cy.get('#measure-3832343').contains('Conditions').openPopup();
      cy.get('.info-content').contains('The weight of your goods is equal to or exceeds 1.50 kg');
      cy.get('#measure-3832343').contains('Conditions').closePopup();
    });
  });

  context('when there are LPA-based components on alcohol duties', function() {
    it('shows the correct popup information', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodePopup(
          '315',
          '9.27 GBP / l alc. 100%',
      );
      cy.verifyExciseAdditionalCodePopup(
          '365',
          '9.27 GBP / l alc. 100% - £1.00 / for each litre of pure alcohol, multiplied by the SPR discount',
      );
    });
  });

  context('when there are ASVX components on alcohol duties', function() {
    it('shows the correct popup information', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodePopup(
          '301',
          '9.27 GBP / % vol/hl',
      );
      cy.verifyExciseAdditionalCodePopup(
          '369',
          '24.77 GBP / % vol/hl - £1.00 / for each litre of pure alcohol, multiplied by the SPR discount',
      );
    });
  });
});
