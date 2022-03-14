import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StencilWrapperModule } from '@company-name/stencil-wrapper';
import { IonicModule } from '@ionic/angular';

import { CategoryRoutingModule } from './category-routing.module';
import { NewTermPageComponent } from './pages/new-term/new-term.page';
import { PastTermPageComponent } from './pages/past-term/past-term.page';
import { CategoryPageComponent } from './pages/root/category.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CategoryRoutingModule, StencilWrapperModule],
    declarations: [CategoryPageComponent, NewTermPageComponent, PastTermPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryModule {}
