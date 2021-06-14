describe.skip('Post Tests', function () {

   
    it('Data Layer Loaded', function () {
        cy.visit('/duty-calculator/uk/0702000007/import-date')
        cy.window().then((win) => {

            assert.isDefined(win.dataLayer, 'Data Layer is defined');
            assert.equal(win.dataLayer[0].page_type, 'Post', 'Page Type is correct');
            assert.equal(Cypress.$('.post-header').text().trim(), win.dataLayer[0].page_name, 'Page Name is correct');

        });
    });

});