class RegistrationPage {

    elemnts = {

        registrationButtons: () => cy.get(".login-btn")
    }

    validateIfRegistrationButtonDisplayed() {
        this.elemnts.registrationButtons().should('be.visible')
    }

}

export default RegistrationPage;