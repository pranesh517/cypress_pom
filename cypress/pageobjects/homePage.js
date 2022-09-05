class HomePage {
    
    elements = {
       firstNameField: () => cy.get('#name'),
       countryAutoComplete: () => cy.get('#autocomplete'),
       couyntryAutoDrop: () => cy.get('#ui-id-1 li'),
       courseTbodyRow: () => cy.get("#product[name='courses'] tbody tr:nth-of-type(2)"),
       topBanerButtons: () => cy.get(".btn-primary")
    }

    enterValueInFirstNameField(valueToEnter) {
        this.elements.firstNameField().type(valueToEnter);
    }

    enterValueInCountryAutoComplete(valueToEnter) {
        this.elements.countryAutoComplete().type(valueToEnter);
    }

    selectCountryAutoDropValue(valueToSelect) {
        this.elements.couyntryAutoDrop().each((element, index, $list) => {
            if(element.text() == valueToSelect){
                this.elements.couyntryAutoDrop().eq(index).click()
                return false;
            }
        })
    }

    isCourseAvailableInCourseTable(courseToValidate) {
        let courseList = new Array();
        this.elements.courseTbodyRow().each(($row, index, $rowList)=>{
            cy.wrap($row).within(function(){
                cy.get('td').each(($col, colIndex, $colList)=>{
                    courseList.push($col.text())
                })
            })
        }).then(function(){
            expect(courseList).to.include(courseToValidate)
        })
    }

    clickOnTopBanerButton(buttonToClick) {
        this.elements.topBanerButtons().each(($element, index, $list)=>{
            if($element.text() == buttonToClick) {
                cy.wrap($element).click()
                return false;
            }
        })
    }

}

export default HomePage;