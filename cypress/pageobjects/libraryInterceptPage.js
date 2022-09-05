class LibraryInterceptPage {

    mockSinglePageReturnReponse(urlToIntercept) {
        cy.intercept({
            method : 'GET',
            url : urlToIntercept
        },
        {
            statusCode: 200,
            body : [
                {"book_name":"null","isbn":"SPY40","aisle":"2529857"}
            ]

        }).as('singleBookReturn')
    }

}

export default LibraryInterceptPage;