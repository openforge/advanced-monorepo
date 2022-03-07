import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// import { MyComponent } from './stencil-generated/component-library.components';
import { NameComponent } from './test.component';

@NgModule({
    declarations: [NameComponent],
    imports: [IonicModule],
    exports: [NameComponent],
})
export class ComponentLibraryModule {}
