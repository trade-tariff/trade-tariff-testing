
class HomePage {
  verifyCookie1(dataCookie, dataPolicy) {
    // this.getvalue(cookieName).then((cookie) => {
    cy.getCookie(dataPolicy).then((cookie) => {
      let cookieValue = null;
      if (cookie) {
        cookieValue = cookie.value;
        cookieValue = decodeURIComponent(cookieValue);
        cookieValue = JSON.parse(cookieValue);
      }
      if (dataPolicy == dataCookie.policy1) {
        expect(cookieValue).to.deep.equal(
            dataCookie.expectedPolicy1[0],
        );
      }
      if (dataPolicy == dataCookie.policy2) {
        expect(cookieValue).to.deep.equal(
            dataCookie.expectedPolicy2[0],
        );
      }
    });
  }
}
module.exports = new HomePage();
