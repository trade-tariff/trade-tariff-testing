describe('POST /api/v2/bulk_searches', () => {
  it('should post a job and poll until it completes', () => {
    const bulkSearches = JSON.stringify({
      'data': [
        {
          'type': 'bulk_search',
          'attributes': {
            'input_description': 'red herring',
          },
        },
        {
          'type': 'bulk_search',
          'attributes': {
            'input_description': 'ricotta',
          },
        },
        {
          'type': 'bulk_search',
          'attributes': {
            'input_description': 'flibble',
          },
        },
        {
          'type': 'bulk_search',
          'attributes': {
            'input_description': 'Cosmetics',
          },
        },
      ],
    });


    cy.request({
      method: 'POST',
      url: '/api/v2/bulk_searches',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: bulkSearches,
    }).then((postResponse) => {
      let location;

      if (postResponse.status === 202) {
        location = postResponse.headers.location;
        cy.log('Job enqueued');
      } else {
        cy.log('Job not enqueued');
        assert.fail('Job not enqueued');
      }

      const pollServer = () => {
        cy.request({
          method: 'GET',
          url: location,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }).then((getResponse) => {
          if (getResponse.status === 200) {
            const includedLengthIsPositive = (getResponse.body.included.length > 0);

            assert.equal(getResponse.body.data.attributes.status, 'completed');
            assert(includedLengthIsPositive);
          } else {
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(500).then(pollServer);
          }
        });
      };
      pollServer();
    });
  });
});
