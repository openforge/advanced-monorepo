import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GlossaryCategoryRoutingModule } from './glossary-category-routing.module';
import { NewTermPageComponent } from './pages/new-term/new-term.page';
import { PastTermPageComponent } from './pages/past-term/past-term.page';
import { CategoryPageComponent } from './pages/root/category.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GlossaryCategoryRoutingModule],
    declarations: [CategoryPageComponent, NewTermPageComponent, PastTermPageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GlossaryCategoryModule {}
