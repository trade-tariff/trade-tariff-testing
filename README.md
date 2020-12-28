# Cypress automation framework
----------------------------------------
###

* front end UI testing 
* API testing 
* end to end testing 
	
**Prerequisites**
###
```
•node 
•npm
```

Download or clone this repo.
Install dependencies by running the following command in terminal(from app directory ie.,where packagge.json is located) 
```
npm install 
```
Running tests:
Default run is against Live Prod environment.This can be adjusted in cypress.json if required.

Running tests can be done with the following commands:
```
Running using Cypress Application :npx cypress open (opens cypress application) 
Running specific file   :npx cypress run --spec "/file path/filename.js"
Running all files       :npx cypress run ( runs all files in Integration folder)
Running smoke tests     :npm run smoketests
Running specific folder :npx cypress run --spec "/*/**/XI/**/*spec.js"
```

**TO DO**

After Jan 1st 2021:

- Change all switchlink tests in features once switch is activated
  switchingLink-forum-XI.spec.js - all 3 services  
  smokeTest-XI.spec.js - all 3 services  
  
