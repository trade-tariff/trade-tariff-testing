Cypress automation framework 🔧
----------------------------------------

[![ ✏️ | Regression Pack | Production |](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml/badge.svg?branch=main&event=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml)
[![ 🚀 smokeTest](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/smoketestsAll.yml/badge.svg?branch=main&event=workflow_dispatch)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/smoketestsAll.yml)

* front end UI testing 
* API testing 
* integration / end-to-end testing 
	
** Prerequisites📚 **
```
•node 
•npm
•yarn
```

Download or clone this repo.
Install dependencies by running the following command in terminal (from app directory i.e.,where package.json is located) 

```
yarn install 
```

Running tests 🧳:
Default run is against Live Prod environment.This can be configured in cypress.json if required.

Running tests can be done with the following commands:

```
Running using Cypress Application :npx cypress open (opens cypress application) 
Running specific file   :yarn run cypress run --spec "/file path/filename.js"
Running all files       :yarn run cypress run ( runs all files in Integration folder)
Running smoke tests     :yarn run smoketests
Running specific folder :yarn run cypress run --spec "/*/**/XI/**/*spec.js"
                        :yarn run cypress run --spec "/*/**/UK/**/*spec.js"
```

## Running UI against environments

There are different commands to open the Cypress UI to run against different environments

```
yarn run open:localhost
yarn run open:dev
yarn run open:staging
yarn run open:prod
```

## Environment variables

`CYPRESS_BASE_URL` - sets the target website, eg https://staging.trade-tariff.service.gov.uk

