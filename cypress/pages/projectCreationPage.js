import { FieldwirePages } from "./fieldwirePages";

export class ProjectCreationPage extends FieldwirePages{

    newProjectButton = '[data-e2e="projects-new-project-btn"] > .fw-button';
    createButton = '.create-project-button > .fw-button';
    projectName = '[ng-class="{\'has-error\': projectForm.name.$invalid && projectForm.name.$dirty}"] > .form-control';
    selectFilesButton = '.upload-button > .fw-button';
    linkUrl = '[title="Link (URL)"] > .fsp-source-list__icon';
    enterUrlLink = '.fsp-url-source__input';
    linkUrlButton = '.fsp-url-source__form > .fsp-button';
    uploadButton = '.fsp-footer__nav--right > .fsp-button';
    iDontHavePlanLink = '.sample-plans';
    confirmPopup = '.sample-floorplans-modal > .modal-dialog > .modal-content > .modal-wrapper > .modal-footer';
    uploadYourFileNextButton = '.modal-footer > fw-button > .fw-button';
    addDefaultCategoryLink = '.add-default-category > .pointer';
    categoryNameField = '.add-category-form > .form-group > .form-control';
    addButton = '.form-group > fw-button > .fw-button';
    createYourCategoryNextButton = '[data-e2e="project-wizard-next-btn"] > .fw-button';
    inviteEmail = '.invite-textarea';
    doneButton = '[data-e2e="project-wizard-next-btn"] > .fw-button';
    inviteYourTeamNextButton = '[data-e2e="project-wizard-next-btn"] > .fw-button';
    verticalDotsButton = ':nth-child(2) > .project-card > .top > .top-icons-container > .icons-container > .mat-menu-trigger';
    projectDeleteButton = '.red-link';
    leaveOrDeleteProjectField = 'form.ng-pristine > .form-control';
    leaveOrDeleteProjectDeleteButton = '[kind="danger"] > .fw-button';
    
    clickConfirmPopup(){
        cy.get(this.confirmPopup).contains('Yes').click();
    };
};
