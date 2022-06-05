

describe("Test Suite", function () {
    it("verify if application loads", function () {
        cy.visit('https://www.findmovieforme.com/');
        console.log('Hellooooooooooooooo' + cy.get('.navbar-brand').invoke('text').should('eq', 'Find Movie For Me'));
        //cy.get('.navbar-brand').contains("Find Movie For Mw!");
    })

    // it("verify movie section loads new page", function () {
    //     for (let i = 1; i < 2; i++) {
    //         cy.visit('https://www.findmovieforme.com/'); //Arrange 
    //         cy.get('li:nth-child(' + i + ')  > a.nav-link').click(); //Act
    //         // cy.visit('https://www.findmovieforme.com/about'); //Assert
    //     }
    // })

    // it("verify try bot online loads new page", function () {
    //     cy.visit('https://www.findmovieforme.com/'); //Arrange 
    //     cy.get('li:nth-child(2) > a.nav-link').click(); //Act
    //     cy.visit('https://www.findmovieforme.com/about'); //Assert
    // })

    // it("verify about loads new page", function () {
    //     cy.visit('https://www.findmovieforme.com/'); //Arrange 
    //     cy.get('li:nth-child(3) > a.nav-link').click(); //Act
    //     cy.visit('https://www.findmovieforme.com/about'); //Assert
    // })

    // it("verify if all the image load up on the app", function () {
    //     cy.visit('https://www.findmovieforme.com/');
    //     cy.get('div > div:nth-child(1) > img').find('img');
    // })

    // it("Verify if Facebook Messenger loads in Try Bot Online", function () {
    //     cy.visit('https://www.findmovieforme.com/'); //Arrange 
    //     cy.get('li:nth-child(' + 2 + ')  > a.nav-link').click(); //Act
    //     cy.get('div.container.body-content > p > a').click() //Assert
    // })

    it("Verify KnownIssues/Limitations loads up", () => {
        cy.visit('https://www.findmovieforme.com/');
        cy.contains('Known Issues/Limitations').click();
    })
})