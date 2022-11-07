import { FieldwirePages } from "./fieldwirePages";

export class ProjectDetailPage extends FieldwirePages{

    createTaskButton = '[kind="primary"] > .fw-button';
    enterTitleDetailView = '.hover-gray';
    confirmButtonDetailView = '.btn-toolbar > [kind="primary"] > .fw-button';
    nextButton = '.next';
    createTaskLink = ':nth-child(4) > .task-content > .add-task';
    enterTitle = '.textcomplete-wrapper > .form-control';
    confirmButton = '.pull-right > [kind="primary"] > .fw-button';
};
