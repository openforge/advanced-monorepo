import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDefinitionComponent } from './ui-definition/ui-definition.component';
import { UICategoryComponent } from './ui-category/ui-category.component';

@NgModule({
    imports: [CommonModule, UIDefinitionComponent, UICategoryComponent],
})
export class UiComponentsModule {}
