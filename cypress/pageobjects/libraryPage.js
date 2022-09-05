class LibraryPage {

    elements = {
        libraryButton: () => cy.get("button[routerlink='/library']"),
        singleRecordMessage: () => cy.get("p"),
    }

    clickOnLibraryButton() {
        this.elements.libraryButton().click();
    }

    validateSignleRecordMessage() {
        this.elements.singleRecordMessage().should('have.text', 'Oops only 1 Book available')
    }

}

export default LibraryPage;