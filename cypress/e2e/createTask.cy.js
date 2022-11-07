import {ProjectDetailPage} from "../pages/projectDetailPage";
import {LeftNavigationMenu} from "../pages/leftNavigationMenu";

const projectDetailPage = new ProjectDetailPage();
const leftNavigationMenu = new LeftNavigationMenu();

describe('Task creation via detail view', () => {

  beforeEach(() => {
    cy.login('testuser3@gmail.com', 'Password123!');
    cy.contains('demo project').click();
    leftNavigationMenu.click(leftNavigationMenu.leftNavigationMenu);
    leftNavigationMenu.click(leftNavigationMenu.tasks);
  });

  it('Task creation via task creation form', function () {
    const taskTitle  = `Test task ${Cypress._.random(0, 500)}`;
    projectDetailPage.click(projectDetailPage.createTaskButton);
    projectDetailPage.enterValueToField(projectDetailPage.enterTitleDetailView, taskTitle);
    projectDetailPage.click(projectDetailPage.confirmButtonDetailView);
    projectDetailPage.click(projectDetailPage.nextButton);
    cy.get('.task-columns-list > :nth-child(3)').should('contain', taskTitle);
  });

  it('Task creation via task view by title entering', function () {
    const taskTitle  = `Test task ${Cypress._.random(0, 500)}`;
    projectDetailPage.click(projectDetailPage.createTaskLink);
    projectDetailPage.enterValueToField(projectDetailPage.enterTitle, taskTitle);
    projectDetailPage.click(projectDetailPage.confirmButton);
    cy.get('.task-columns-list > :nth-child(4)').should('contain', taskTitle);
  });
});
