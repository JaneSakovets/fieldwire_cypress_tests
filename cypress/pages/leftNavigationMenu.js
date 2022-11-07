import { FieldwirePages } from "./fieldwirePages";

export class LeftNavigationMenu extends FieldwirePages {

    leftNavigationMenu = '.hidden-lg';
    tasks = '[ng-class="{ selected: isSelected(\'tasks\') }"] > a';
};
