export class FieldwirePages{

    navigate() {
        cy.visit('/');
    };

    enterValueToField(fieldName, value) {
        cy.get(fieldName).type(value);
    };

    selectValueFromDropdown(fieldName, value) {
        cy.get(fieldName).select(value);
    };

    click(fieldName) {
        cy.get(fieldName).click();
    };
};
