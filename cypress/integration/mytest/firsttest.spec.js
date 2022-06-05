
// Test Case :1 Done
// Verify if the Heading has Correct Spelling
// 1)Application is loaded - Arrange
// 2)Get the element of the Heading - Act
// 3)Check if the Heading is equal to the correct heading - Assert
describe("Test Suite", function () {
    it("verify if application loads", function () {
        cy.visit('https://www.findmovieforme.com/');
        console.log('Hellooooooooooooooo' + cy.get('.navbar-brand').invoke('text').should('eq', 'Find Movie For Me'));
        //cy.get('.navbar-brand').contains("Find Movie For Mw!");
    })


    // Test Case :2 Done
    // Verify movie section loads new page
    // 1)Application is loaded - Arrange
    // 2)Click the options menu - Arrange
    // 3)Click the About Section - Act
    // 4)Check if the About page loads - Assert
    it("verify movie section loads new page", function () {
        for (let i = 1; i < 2; i++) {
            cy.visit('https://www.findmovieforme.com/'); //Arrange 
            cy.get('li:nth-child(' + i + ')  > a.nav-link').click(); //Act
            // cy.visit('https://www.findmovieforme.com/about'); //Assert
        }
    })

    // Test Case :2 Done
    // Verify try bot online loads new page
    // 1)Application is loaded - Arrange
    // 2)Click the options menu - Arrange
    // 3)Click the About Section - Act
    // 4)Check if the About page loads - Assert
    it("verify try bot online loads new page", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('li:nth-child(2) > a.nav-link').click(); //Act
        cy.visit('https://www.findmovieforme.com/about'); //Assert
    })

    // Test Case :2 Done
    // Verify if the about opens the next page
    // 1)Application is loaded - Arrange
    // 2)Click the options menu - Arrange
    // 3)Click the About Section - Act
    // 4)Check if the About page loads - Assert
    it("verify about loads new page", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('li:nth-child(3) > a.nav-link').click(); //Act
        cy.visit('https://www.findmovieforme.com/about'); //Assert
    })

    // Test Case :3 Current Not Done
    // Verify if all the images load up
    // 1)Application is loaded - Arrange
    // 2)Check if the images of current movies load - Assert
    it("verify if all the image load up on the app", function () {
        cy.visit('https://www.findmovieforme.com/');
        cy.get('div > div:nth-child(1) > img').find('img');
    })

    // Test Case :4
    // Verify if Facebook Messenger loads in Try Bot Online
    // 1)Application is loaded - Arrange
    // 2)Click on the try bot online - Arrange
    // 3)Click on the Facebook Messenger Link - Act
    // 4)Check if App is redirected to Messenger - Assert
    it("Verify if Facebook Messenger loads in Try Bot Online", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('li:nth-child(' + 2 + ')  > a.nav-link').click(); //Act
        cy.get('div.container.body-content > p > a').click() //Assert
    })

    // Test Case :5 (Doesnt work, for some reason it goes to about page)
    // Verify KnownIssues/Limitations loads up
    // 1)Application is loaded - Arrange
    // 2)Click the Known Issues/Limitations href - Act
    // 3)Check if Known Issues/Limitations page opens - Assert
    it("Verify KnownIssues/Limitations loads up", () => {
        cy.visit('https://www.findmovieforme.com/'); //Arrange
        cy.get(':nth-child(2) > p > a').click(); //Act
        cy.contains('Known limitations for the system', { setTimeout: 6000 }); //Assert
    })

    it("Verify Image", () => {
        cy.get('.active > .d-block');
    })
})