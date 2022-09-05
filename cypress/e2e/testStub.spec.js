/// <reference types="cypress"/>
import LibraryPage from '../pageobjects/libraryPage'
import LibraryInterceptPage from '../pageobjects/libraryInterceptPage'

describe('Validate API mock response', function() {

    beforeEach(function(){
        cy.visit('/'+'angularAppdemo/')
    })

    it('TC002: Validate API mock scenarion' , function(){
        const libraryInterceptPage = new LibraryInterceptPage();
        libraryInterceptPage.mockSinglePageReturnReponse(Cypress.config('baseUrl')+'/Library/GetBook.php?AuthorName=shetty');
        const libraryPage = new LibraryPage();
        libraryPage.clickOnLibraryButton();
        cy.wait('@singleBookReturn');
        libraryPage.validateSignleRecordMessage();
    })

})