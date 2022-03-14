import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StencilWrapperModule } from '@company-name/stencil-wrapper';
import { CategoryService } from '@company-name/data-access/services';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/root/home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomeRoutingModule, StencilWrapperModule],
    declarations: [HomePageComponent],
    providers: [CategoryService],
})
export class HomeModule {}
