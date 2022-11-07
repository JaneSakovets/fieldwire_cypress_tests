import {ProjectCreationPage} from "../pages/projectCreationPage";

const projectCreationPage = new ProjectCreationPage();
const projectName = 'Test Project';
const categoryName = 'Test Category';

describe('All Project creation tests', () => {

  beforeEach(() => {
    cy.login('testuser3@gmail.com', 'Password123!');
  });

  it('Project creation with sample plans and default category', function () {
    projectCreationPage.click(projectCreationPage.newProjectButton);
    projectCreationPage.enterValueToField(projectCreationPage.projectName, projectName);
    projectCreationPage.click(projectCreationPage.createButton);
    projectCreationPage.click(projectCreationPage.iDontHavePlanLink);
    projectCreationPage.clickConfirmPopup();
    projectCreationPage.click(projectCreationPage.uploadYourFileNextButton);
    projectCreationPage.click(projectCreationPage.addDefaultCategoryLink);
    projectCreationPage.click(projectCreationPage.createYourCategoryNextButton);
    projectCreationPage.click(projectCreationPage.inviteYourTeamNextButton);
    projectCreationPage.click(projectCreationPage.doneButton);
    cy.url().should('contain', '/plans');
    cy.get('span.pointer > .ng-binding').should('contain', 'All plans');
  });

  afterEach(() => {
    projectCreationPage.navigate();
    projectCreationPage.click(projectCreationPage.verticalDotsButton);
    projectCreationPage.click(projectCreationPage.projectDeleteButton);
    projectCreationPage.enterValueToField(projectCreationPage.leaveOrDeleteProjectField, projectName);
    projectCreationPage.click(projectCreationPage.leaveOrDeleteProjectDeleteButton);
  });
  
  it.only('Project creation with .jpg plan', function () {
    projectCreationPage.click(projectCreationPage.newProjectButton);
    projectCreationPage.enterValueToField(projectCreationPage.projectName, projectName);
    projectCreationPage.click(projectCreationPage.createButton);
    projectCreationPage.click(projectCreationPage.selectFilesButton);
    projectCreationPage.click(projectCreationPage.linkUrl);
    projectCreationPage.enterValueToField(projectCreationPage.enterUrlLink, 'https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-pink-watercolor-brushes-171474-png-image_1733978.jpg');
    projectCreationPage.click(projectCreationPage.linkUrlButton);
    cy.wait(5000);
    projectCreationPage.click(projectCreationPage.uploadButton);
    projectCreationPage.click(projectCreationPage.uploadYourFileNextButton);
    projectCreationPage.enterValueToField(projectCreationPage.categoryNameField, categoryName);
    projectCreationPage.click(projectCreationPage.addButton); 
    cy.get('.category-name').should('contain', categoryName);
    projectCreationPage.click(projectCreationPage.createYourCategoryNextButton);
    projectCreationPage.click(projectCreationPage.inviteYourTeamNextButton);
    projectCreationPage.click(projectCreationPage.doneButton);
    cy.url().should('contain', '/plans');
    cy.get('span.pointer > .ng-binding').should('contain', 'All plans');
  });
});
