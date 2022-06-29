describe(' ⚙️ | dcMetaHeadingsAPI |', () => {
// api checks for uk and xi services
  it('V2 to have DC related Meta data', function() {
    const countries = ['', 'xi'];
    for ( let j =0; j< countries.length; j++) {
      const headings = ['3101', '0409', '5406', '6216', '6906', '7402', '7802', '8604', '9304'];
      // 9905
      for (let i =0; i< headings.length; i++) {
        cy.request(`/${countries[j]}/api/v2/headings/${headings[i]}`).as('comments');
        cy.get('@comments')
            .then((response) => {
              // status code
              expect(response.status).to.eq(200);
              //  console.log(JSON.stringify(response.body));
              expect(response.body.data.meta.duty_calculator).to.have.property('zero_mfn_duty');
              expect(response.body.data.meta.duty_calculator).to.have.property('trade_defence');
              expect(response.body.data.meta.duty_calculator).to.have.property('meursing_code');
              expect(response.body.data.meta.duty_calculator).to.have.property('entry_price_system');
              expect(response.body.data.meta.duty_calculator).to.have.property('applicable_additional_codes');
              expect(response.body.data.meta.duty_calculator).to.have.property('applicable_measure_units');
              expect(response.body.data.meta.duty_calculator).to.have.property('applicable_vat_options');
            });
      }
    }
  });
});
