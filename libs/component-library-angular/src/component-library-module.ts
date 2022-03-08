import { NgModule } from '@angular/core';
import { defineCustomElements } from 'component-library/loader';

import { MyComponent } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    MyComponent,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: [],
})
export class ComponentLibraryModule {}
