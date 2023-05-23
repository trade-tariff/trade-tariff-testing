describe('Api validations', function() {
  describe('Api response for /api/v2/commodities/0101291000', function() {
    const path = '/api/v2/commodities/0101291000';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/sections', function() {
    const path = '/api/v2/sections';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/sections/1', function() {
    const path = '/api/v2/sections/1';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chapters/01', function() {
    const path = '/api/v2/chapters/01';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/headings/0101', function() {
    const path = '/api/v2/headings/0101';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/subheadings/0101290000-80', function() {
    const path = '/api/v2/subheadings/0101290000-80';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/geographical_areas', function() {
    const path = '/api/v2/geographical_areas';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/geographical_areas/1013', function() {
    const path = '/api/v2/geographical_areas/1013';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/geographical_areas/countries', function() {
    const path = '/api/v2/geographical_areas/countries';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chemicals', function() {
    const path = '/api/v2/chemicals';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/additional_code_types', function() {
    const path = '/api/v2/additional_code_types';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/certificate_types', function() {
    const path = '/api/v2/certificate_types';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/footnote_types', function() {
    const path = '/api/v2/footnote_types';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/changes', function() {
    const path = '/api/v2/changes';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/rules_of_origin_schemes/010129/AL', function() {
    const path = '/api/v2/rules_of_origin_schemes/010129/AL';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/measure_types', function() {
    const path = '/api/v2/measure_types';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/measure_condition_codes', function() {
    const path = '/api/v2/measure_condition_codes';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/measure_actions', function() {
    const path = '/api/v2/measure_actions';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/quota_order_numbers', function() {
    const path = '/api/v2/quota_order_numbers';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/preference_codes', function() {
    const path = '/api/v2/preference_codes';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/geographical_areas', function() {
    const path = '/api/v2/geographical_areas';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/certificates?as_of=1971-01-01', function() {
    const path = '/api/v2/certificates?as_of=1971-01-01';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chemical_substances?filter%5Bcas_rn%5D=84650-00-0', function() {
    const path = '/api/v2/chemical_substances?filter%5Bcas_rn%5D=84650-00-0';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chemical_substances?filter%5Bcus%5D=0153778-6', function() {
    const path = '/api/v2/chemical_substances?filter%5Bcus%5D=0153778-6';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chemical_substances?filter%5Bgoods_nomenclature_item_id%5D=0712909090', function() {
    const path = '/api/v2/chemical_substances?filter%5Bgoods_nomenclature_item_id%5D=0712909090';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/chemical_substances?filter%5Bgoods_nomenclature_sid%5D=101368', function() {
    const path = '/api/v2/chemical_substances?filter%5Bgoods_nomenclature_sid%5D=101368';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/search?q=84650-00-0', function() {
    const path = '/api/v2/search?q=84650-00-0';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/search?q=0153778-6', function() {
    const path = '/api/v2/search?q=0153778-6';
    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
  describe('Api response for /api/v2/simplified_procedural_code_measures', function() {
    const path = '/api/v2/simplified_procedural_code_measures';

    it('returns a valid jsonapi response', function() {
      cy.request(path).then((response) => {
        cy.validJsonAPIresponse(response);
      });
    });
  });
});
