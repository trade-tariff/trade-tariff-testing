describe('UK 🇬🇧 XI 🇪🇺 | suspensions.cy.js | validate suspensions on Front end | ', function () {
    const country = ['', 'xi'];
    const titles = ['Northern Ireland Online Tariff', 'UK Integrated Online Tariff'];
    for (let i = 0; i < country.length; i++) {
        it(`${country[i]} Suspensions - Verify document code - C990`, function () {
            const commCode = ['2710198130', '2710198140'];
            const measureId = ['measure-20121823', 'measure-3491882']
            cy.visit(`${country[i]}/commodities/${commCode[i]}#suspensions`);
            cy.contains(`${titles[i]}`);
            cy.contains('Suspensions').click();
            cy.get('#suspensions').contains('Suspensions');
            cy.get(`#${measureId[i]}`).contains('Conditions').click();
            cy.get('#popup').contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms for All countries');
            cy.get('#popup').contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
            cy.get('#popup').contains('C990');
            cy.get('#popup').contains('Guidance for completing Box 44 or Data Element 2/3').click();
            cy.get('#popup > div > div > article > div > details').contains('C990');
        });
        it(`${country[i]} - Verify suspensions for measure type - 112`, function () {
            const commCode = ['2903590020', '0403204939'];
            cy.verifySuspensions(`${country[i]}`, `${commCode[i]}`, `${titles[i]}`, '112', '110');
        });
        it(`${country[i]} - Verify suspensions for measure type - 115`, function () {
            const commCode = ['3901300010', '0709530010'];
            cy.verifySuspensions(`${country[i]}`, `${commCode[i]}`, `${titles[i]}`, '115', '115');
        });
        it(`${country[i]} - Verify suspensions for measure type - 117`, function () {
            const commCode = ['1511901990', '1511909190'];
            cy.verifySuspensions(`${country[i]}`, `${commCode[i]}`, `${titles[i]}`, '117', '140');
        });
        it(`${country[i]} - Verify suspensions for measure type - 119`, function () {
            const commCode = ['2710198700', '2710198300'];
            cy.verifySuspensions(`${country[i]}`, `${commCode[i]}`, `${titles[i]}`, '119', '119');
        });
    }
    it('XI - Verify suspensions for measure type - 141', function(){
        cy.verifySuspensions('xi', '0301190000', 'Northern Ireland Online Tariff', '141', '310');
    });
});
