import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

Cypress.Commands.add('login', (username, password) => {
    loginPage.navigate();
    loginPage.enterValueToField(loginPage.username, username);
    loginPage.click(loginPage.nextButton);
    loginPage.enterValueToField(loginPage.password, password);
    loginPage.click(loginPage.nextButton);
    cy.url().should('contain', '/projects-labels');
});
