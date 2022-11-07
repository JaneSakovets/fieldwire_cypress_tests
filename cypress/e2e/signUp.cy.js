import { SignUpPage } from "../pages/signUpPage";

const signUpPage = new SignUpPage();
const email = `${Cypress._.random(0, 1e6)}autotests@mail.com`;
const firstName = 'Test Username';

it('Sucessfull Sign up', function () { 
    signUpPage.navigate();
    signUpPage.click(signUpPage.createAnAccountLink);
    signUpPage.enterValueToField(signUpPage.firstName, firstName);
    signUpPage.enterValueToField(signUpPage.lastName, 'Test Lastname');
    signUpPage.enterValueToField(signUpPage.workEmail, email);
    signUpPage.enterValueToField(signUpPage.password, 'Password123!');
    signUpPage.click(signUpPage.acceptAgreementCheckbox);
    signUpPage.click(signUpPage.createAccountButton);
    signUpPage.enterValueToField(signUpPage.companyName, 'Test');
    signUpPage.selectValueFromDropdown(signUpPage.companyType, 'Other');
    signUpPage.selectValueFromDropdown(signUpPage.companySize, '1 - 10');
    signUpPage.enterValueToField(signUpPage.phone, '2015550123');
    signUpPage.click(signUpPage.createAccountButton);
    cy.url().should('contain', 'signup=true');
    cy.get(':nth-child(5) > .right-nav-button').should('contain', firstName);
});

it('Sign up page - email field is invalid', function () {
    signUpPage.navigate();
    signUpPage.click(signUpPage.createAnAccountLink);
    signUpPage.enterValueToField(signUpPage.firstName, firstName);
    signUpPage.enterValueToField(signUpPage.lastName, 'Test Lastname');
    signUpPage.enterValueToField(signUpPage.workEmail, 'email');
    signUpPage.enterValueToField(signUpPage.password, 'Password123!');
    cy.get(':nth-child(3) > .fa-long-field').should('exist');
    cy.get('#emailInput').should('have.class', 'ng-invalid-email');
});
