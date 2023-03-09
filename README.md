# trade-tariff-testing

[![Github Actions Regression Production](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml/badge.svg\?branch\=main\&event\=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml)
[![Github Actions Regression Staging](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regressionStaging.yml/badge.svg\?branch\=main\&event\=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regressionStaging.yml)
[![Github Actions Regression Development](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regressionDevelopment.yml/badge.svg\?branch\=main\&event\=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regressionDevelopment.yml)
[![CircleCI Smoke Tests](https://circleci.com/gh/trade-tariff/trade-tariff-testing.svg?style=svg)](https://circleci.com/gh/trade-tariff/trade-tariff-testing.svg?style=svg)

This repository is responsible for validating integrations between different applications in the Online Trade Tariff service

There are currently three enviornments we might run end-to-end tests against:

- development
- staging
- production

Regression suites for each of these environments are configured using github actions

## Prerequisites

- node
- yarn
- an up-to-date .env file

Install dependencies with yarn

```shell
yarn install
```

## Running tests

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
