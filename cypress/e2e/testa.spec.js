/// <reference types="cypress"/>
import HomePage from '../pageobjects/homePage'
import RegistrationPage from '../pageobjects/registrationPage'

describe('Home Page tests', function(){

    before(function() {
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    beforeEach(function(){
        cy.visit('/');
    })

    it('TC001: Validated the Login Page', function() {
       const homePage = new HomePage();
       homePage.enterValueInFirstNameField(this.data.name);
       homePage.enterValueInCountryAutoComplete(this.data.country);
       homePage.selectCountryAutoDropValue(this.data.country);
       homePage.isCourseAvailableInCourseTable(this.data.courseName);
       homePage.clickOnTopBanerButton('Home');
       const registrationPage = new RegistrationPage();
       registrationPage.validateIfRegistrationButtonDisplayed();
    })
}) 