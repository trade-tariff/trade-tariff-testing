Cypress automation framework 🔧
----------------------------------------

[![ ✏️ | Regression Pack | Production |](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml/badge.svg?branch=main&event=schedule)](https://github.com/trade-tariff/trade-tariff-testing/actions/workflows/regression.yml)

* front end UI testing 
* API testing 
* end-to-end testing 
	
** Prerequisites📚 **
```
•node 
•npm
```

Download or clone this repo.
Install dependencies by running the following command in terminal (from app directory i.e.,where package.json is located) 
```
npm install 
```
Running tests 🧳:
Default run is against Live Prod environment.This can be configured in cypress.json if required.

Running tests can be done with the following commands:
```
Running using Cypress Application :npx cypress open (opens cypress application) 
Running specific file   :npx cypress run --spec "/file path/filename.js"
Running all files       :npx cypress run ( runs all files in Integration folder)
Running smoke tests     :npm run smoketests
Running specific folder :npx cypress run --spec "/*/**/XI/**/*spec.js"
                        :npx cypress run --spec "/*/**/UK/**/*spec.js"
                

