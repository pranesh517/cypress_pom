# cypress_pom
Cypress with Page Object Model

This repository is example on Page Object model using Cypress with Javascript.

To run test cases, Clone this repository into your machine by
git clone <url>

Navigate to cypress > e2e to find sample test cases written 
Navigate to cypress > pageobjects to find code for any specific page
Navigate to cypress.config.js to find global configurations

To run tests:
Step 1: npm install
Step 2: ./node_modules/.bin/cypress open 
Step 3: Run any test case from Cypress runner / or you can choose to run headless by Cypress standard commands

cypress > e2e > testStub.spec.js:
1. This test case is focusing on Intercept feature 
2. Where you can intercept any network call and change the response as per test need.
