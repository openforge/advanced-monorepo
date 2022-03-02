import { Component, Input } from '@angular/core';
import { Definition } from '@company-name/data-access/models';

@Component({
    selector: 'mobile-academy-ui-definition',
    templateUrl: 'ui-definition.component.html',
    styleUrls: ['ui-definition.component.scss'],
})
export class UIDefinitionComponent {
    @Input() definition: Definition;
}
