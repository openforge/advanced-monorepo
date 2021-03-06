import { NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil/loader';

import { CategoryListItem, GlossaryTerm } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    CategoryListItem,
    GlossaryTerm,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [],
    providers: [],
})
export class StencilWrapperModule {}
