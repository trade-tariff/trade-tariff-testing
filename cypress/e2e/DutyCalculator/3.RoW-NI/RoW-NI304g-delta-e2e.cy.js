// Quotas in delta route
// 1701141000 Qty 1 = UK , Qty 100 = EU Canada , Quotas associated
// Brazil , UK
describe('| Row-NI304g-delta.spec.js | 🔼 Delta Route | Quotas UK | ', function() {
  it('RoW 🇨🇦 (Canada) - XI | UK Tariffs apply with Quotas |', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Canada'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({kgm: '100', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('UK import duties apply, as the difference between the UK third country duty ');
    cy.contains('and the EU third country duty is lower than 3% of the customs value of your trade.');
    cy.contains('Tariff preference (UK)');

    cy.contains('Tariff preference - Canada');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty ');
    cy.contains('and the EU preferential duty is lower than 3% of the customs value of your trade.');
  });

  it('RoW 🇦🇺 (Australia) - XI | EU Tariffs apply without Quotas |', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Australia'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({kgm: '100', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'l001'});
    cy.contains('Continue').click();

    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('UK import duties apply, as the difference between the UK third country duty ');
    cy.contains('and the EU third country duty is lower than 3% of the customs value of your trade.');

    // EU Tariffs - Change Quantity to override Quotas
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(11) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({kgm: '100000', tne: '100', dap: '100'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'l001'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty ');
    cy.contains('and the EU third country duty exceeds 3% of the customs value of your trade.');
  });
});
