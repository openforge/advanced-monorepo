import { NgModule } from '@angular/core';
import { defineCustomElements } from 'component-library/loader';

import { MyButton, MyCheckbox, MyComponent, MyInput, MyPopover, MyRadio, MyRadioGroup, MyRange } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    MyComponent,
    MyButton,
    MyCheckbox,
    MyInput,
    MyPopover,
    MyRadio,
    MyRadioGroup,
    MyRange,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: [],
})
export class ComponentLibraryModule {}
