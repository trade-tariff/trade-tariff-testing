describe('Alcohol Duties - Measure Condition Popups For Small Producer Relief (SPR) and Draught Relief (DR)', function() {
  context('Multiple components (LPA/SPQ) - Measure Condition Popups', function() {
    it('Measure condition popup for spirits less than 3.5% additional code X315', function() {
      cy.visit('/commodities/2106902090?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2106902090', '315', '3.49', '9.27 GBP / l alc. 100%');
    });
    it('Measure condition popup for spirits atleast 3.5% but less than 8.5% additional code X325', function() {
      cy.visit('/commodities/2106902090?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2106902090', '325', '8.49', '24.77 GBP / l alc. 100%');
    });
    it('Measure condition popup for spirits at least 8.5% but not exceeding 22% additional code X335', function() {
      cy.visit('/commodities/2106902090?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2106902090', '335', '22.00', '28.50 GBP / l alc. 100%');
    });
    it('Measure condition popup for spritis exceeding 22% additional code X345', function() {
      cy.visit('/commodities/2106902090?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2106902090', '345', '100.00', '31.64 GBP / l alc. 100%');
    });
    it('Measure types eligible for Draught Relief X355', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifyDRExciseAdditionalCodes('2208304100', '355', '3.49', '8.42 GBP / l alc. 100%');
    });
    it('Measure types eligible for Draught Relief X360', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifyDRExciseAdditionalCodes('2208304100', '360', '8.49', '19.08 GBP / l alc. 100%');
    });
    it('Measure types eligible for Small Producer Relief X365', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208304100', '365', '3.49', '9.27 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure types eligible for Small Producer Relief X370', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208304100', '370', '8.49', '24.77 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure types eligible for Small Producer Relief & Draught Relief X375', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208304100', '375', '3.49', '8.42 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2208304100', '375', '3.49', '8.42 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure types eligible for Small Producer Relief & Draught Relief X380', function() {
      cy.visit('/commodities/2208304100?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208304100', '380', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2208304100', '380', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
  });
  context('Multiple components (ASVX/SPQ) - Measure Condition Popups', function() {
    it('Measure condition popup for low alcohol additional code X301', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2204299320', '301', '1.20', '9.27 GBP / % vol/hl');
    });
    it('Measure condition popups for wine additional code X313', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2204299320', '313', '3.49', '9.27 GBP / % vol/hl');
    });
    it('Measure condition popup for Other fermented products additional code X324', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2204299320', '324', '8.49', '24.77 GBP / % vol/hl');
    });
    it('Measure types eligible for Draught Relief X353', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifyDRExciseAdditionalCodes('2204299320', '353', '3.49', '8.42 GBP / % vol/hl');
    });
    it('Measure condition popup for Other fermented products 3.5 < 8.5% & Sparkling cider > 5.5 but < 8.5% & eligible for SPR', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2204299320', '369', '8.49', '24.77 GBP / % vol/hl - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure condition popup for wine at least 3.5 but less than 8.5% & eligible for SPR and DR X378', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2204299320', '378', '8.49', '19.08 GBP / % vol/hl - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2204299320', '378', '8.49', '19.08 GBP / % vol/hl - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure condition popup for Other products 3.5 < 8.5% & Sparkling cider > 5.5 but < 8.5% & eligible for SPR and DR', function() {
      cy.visit('/commodities/2204299320?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2204299320', '379', '8.49', '19.08 GBP / % vol/hl - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2204299320', '379', '8.49', '19.08 GBP / % vol/hl - 1.00 GBP / SPQ (SPR * Rate)');
    });
  });
  context('Single component (ASVX) - Measure Condition Popups', function() {
    it('Measure condition popup for Wine at least 8.5 but not exceeding 22% additional code X333', function() {
      cy.visit('/commodities/2204299491?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2204299491', '333', '11.49', '28.50 GBP / % vol/hl');
      cy.reload();
      cy.verifyExciseAdditionalCodes('2204299491', '333', '14.50', '35.62 GBP / % vol/hl');
      cy.reload();
      cy.verifyExciseAdditionalCodes('2204299491', '333', '22.00', '28.50 GBP / % vol/hl');
    });
  });
  context('Single component (LPA) - Measure Condition Popups', function() {
    it('Measure condition popup for low alcohol additional code X301', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2208701000', '301', '1.20', '9.27 GBP / l alc. 100%');
    });
    it('Measure condition popups for wine additional code X313', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2208701000', '313', '3.49', '9.27 GBP / l alc. 100%');
    });
    it('Measure condition popup for Other fermented products additional code X324', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifyExciseAdditionalCodes('2208701000', '324', '8.49', '24.77 GBP / l alc. 100%');
    });
    it('Measure types eligible for Draught Relief X353', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifyDRExciseAdditionalCodes('2208701000', '353', '3.49', '8.42 GBP / l alc. 100%');
    });
    it('Measure condition popup for Other fermented products 3.5 < 8.5% & Sparkling cider > 5.5 but < 8.5% & eligible for SPR', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208701000', '369', '8.49', '24.77 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure condition popup for wine at least 3.5 but less than 8.5% & eligible for SPR and DR X378', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208701000', '378', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2208701000', '378', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
    it('Measure condition popup for Other products 3.5 < 8.5% & Sparkling cider > 5.5 but < 8.5% & eligible for SPR and DR', function() {
      cy.visit('/commodities/2208701000?day=28&month=08&year=2023#vat_excise');
      cy.verifySPRExciseAdditionalCodes('2208701000', '379', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
      cy.reload();
      cy.verifyDRExciseAdditionalCodes('2208701000', '379', '8.49', '19.08 GBP / l alc. 100% - 1.00 GBP / SPQ (SPR * Rate)');
    });
  });
});
