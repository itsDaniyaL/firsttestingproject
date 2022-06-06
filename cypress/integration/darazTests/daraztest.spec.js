describe("Daraz.pk Application - Test Suite", function () {

    beforeEach(function () {
        cy.visit('https://www.daraz.pk/');
    })

    // Test Case :1
    // Verify if the daraz.pk application is loaded
    //1) Application is loaded - Arrange
    //2) Get the element of daraz logo in top left corner - Act
    //3) Check if daraz logo is visible

    it("Verify if the daraz.pk application is loaded", function () {
        //cy.visit('https://www.daraz.pk/');
        cy.get('.lzd-logo-content > a > img').should('be.visible');
    })

    //Test Case :2
    // Verify if the input in search item works
    //1) Application is loaded - Arrange
    //2) Get and click the element of search bar item - Act
    //3) Check if the new page is loaded - Assert
    it.only("Verify if the input in search works", function () {
        //cy.visit('https://www.daraz.pk/');
        cy.get('.lzd-logo-content > a > img').should('be.visible');
        cy.get('#q').type("Gift Card{enter}");
        //cy.get('div.search-box__search--2fC5 > button').click();
    })
})