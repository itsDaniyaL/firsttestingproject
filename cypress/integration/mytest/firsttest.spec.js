
// Test Case :1 Done
// Verify if the Heading has Correct Spelling
// 1)Application is loaded - Arrange
// 2)Get the element of the Heading - Act
// 3)Check if the Heading is equal to the correct heading - Assert
describe("Test Suite", function () {
    it("verify if application loads", function () {
        cy.visit('/');
        console.log('Hellooooooooooooooo' + cy.get('.navbar-brand').invoke('text').should('eq', 'Find Movie For Me'));
        //cy.get('.navbar-brand').contains("Find Movie For Mw!");
    })


    // Test Case :2 Done
    // Verify clicking menu item 'About' loads About Page
    // 1)Application is loaded - Arrange
    // 2)Get and click the element of the Menu Item 'About' - Act
    // 3)Check if the About page loads - Assert
    it("Verify clicking menu item 'About' loads About Page", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('#navbarNav li:nth-child(3) > a').click(); //Act
        cy.url().should('include', '/about'); //Assert
        //cy.get('div.container.body-content > h1:nth-child(4)').invoke('text').should('eq', 'About this app — Find Movie For Me'); //Assert
    })

    // Test Case :3 Done
    // Verify clicking menu item 'Try Bot Online' loads Try Bot Online Page
    // 1)Application is loaded - Arrange
    // 2)Get and click the element of the Menu Item 'Try Bot Online' - Act
    // 3)Check if the Try Bot Online page loads - Assert
    it("Verify clicking menu item 'Try Bot Online' loads Try Bot Online Page", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('#navbarNav li:nth-child(2) > a').click(); //Act
        cy.url().should('include', '/bot'); //Assert
        //cy.get('div.container.body-content > h1').invoke('text').should('eq', 'Demo Sample for Find Movie For Me'); //Assert
    })

    // Test Case :4 Done
    // Verify clicking menu item 'Movies Section' loads Movies Section Page
    // 1)Application is loaded - Arrange
    // 2)Get and click the element of the Menu Item 'Movies Section' - Act
    // 3)Check if the Movies Section page loads - Assert
    it("Verify clicking menu item 'Movies Section' loads Movies Section Page", function () {
        cy.visit('https://www.findmovieforme.com/'); //Arrange 
        cy.get('#navbarNav li:nth-child(1) > a').click(); //Act
        cy.url().should('include', '/movies'); //Assert
        //cy.get('div.container.body-content > h1').invoke('text').should('eq', 'Popular movies — on Find Movie For Me'); //Assert
    })

    // // Test Case :5
    // // Verify if an Image is visible in Application
    // // 1)Application is loaded - Arrange
    // // 2)Get the Element of Image - Act
    // // 3)Check if image is visible in the Application - Assert
    // it("Verify if an Image is visible in Application", function () {
    //     cy.visit('https://www.findmovieforme.com/');
    //     cy.get('#moviesCarousel > div > div.carousel-item.active > img').should('be.visible'); //Act & Assert
    // })

    // // Test Case :6
    // // Verify if Facebook Messenger loads in Try Bot Online
    // // 1)Application is loaded - Arrange
    // // 2)Click on the try bot online - Arrange
    // // 3)Click on the Facebook Messenger Link - Act
    // // 4)Check if App is redirected to Messenger - Assert
    // it("Verify if Facebook Messenger loads in Try Bot Online", function () {
    //     cy.visit('https://www.findmovieforme.com/'); //Arrange 
    //     cy.get('li:nth-child(' + 2 + ')  > a.nav-link').click(); //Act
    //     cy.get('div.container.body-content > p > a').click() //Assert
    // })

    // // Test Case :7 (Doesnt work, for some reason it goes to about page)
    // // Verify KnownIssues/Limitations loads up
    // // 1)Application is loaded - Arrange
    // // 2)Click the Known Issues/Limitations href - Act
    // // 3)Check if Known Issues/Limitations page opens - Assert
    // it("Verify KnownIssues/Limitations loads up", () => {
    //     cy.visit('https://www.findmovieforme.com/'); //Arrange
    //     cy.get(':nth-child(2) > p > a').click(); //Act
    //     cy.contains('Known limitations for the system', { setTimeout: 6000 }); //Assert
    // })
})
