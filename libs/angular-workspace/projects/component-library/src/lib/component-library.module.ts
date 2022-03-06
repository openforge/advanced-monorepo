import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ComponentLibraryComponent } from './component-library.component';

@NgModule({
    declarations: [ComponentLibraryComponent],
    imports: [IonicModule],
    exports: [ComponentLibraryComponent],
})
export class ComponentLibraryModule {}
