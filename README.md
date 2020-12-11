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
```
