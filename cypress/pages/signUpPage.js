import { FieldwirePages } from "./fieldwirePages";

export class SignUpPage extends FieldwirePages{

    firstName = '#firstNameInput';
    lastName = '#lastNameInput';
    workEmail = '#emailInput';
    password = '#passwordInput';
    acceptAgreementCheckbox = '#explicitAgreement';
    createAccountButton = '.fw-button';
    createAnAccountLink = '#signup-link > .ng-scope';
    companyName = '#company';
    companyType = '#companyType';
    companySize = '#companySize';
    phone = '#phone';
};
