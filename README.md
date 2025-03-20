# trade-tariff-testing

[![Github Actions CI](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/ci.yml/badge.svg?branch=main&event=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/ci.yml)
[![Github Actions Regression](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml/badge.svg?branch=main&event=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml)

This repository is responsible for validating integrations between different applications in the Online Trade Tariff service

### Prerequisites

- node
- yarn
- an up-to-date .env file

Install dependencies with yarn

```shell
yarn install
```

### Running tests

Run a single test:

```shell
yarn run cypress run --spec cypress/e2e/HOTT-Shared/devSmokeTestCI.cy.js
```

Run all tests

```shell
yarn run cypress run
```

Run devOnly tagged tests

```shell
yarn run cypress run --env grepTags=devOnly
```

Run smokeTests but not the devOnly ones

```shell
yarn run cypress run --env grepTags=-devOnly+smokeTest
```

Run interactive cypress UI

```shell
yarn run open:dev
yarn run open:staging
yarn run open:prod
```

### Handy tips when running tests

[Cypress API Docs](https://docs.cypress.io/api/table-of-contents)

Running only one test

_Place this in the individual test descripiton_
`it.only(`

Using headed browser for debugging the page

`npx cypress run --headed --spec {fileName}`

Setting the timeout in headed mode to give yourself time to analyse the page

_Place this at the top of your test_
`cy.config('defaultCommandTimeout', 100000);`
