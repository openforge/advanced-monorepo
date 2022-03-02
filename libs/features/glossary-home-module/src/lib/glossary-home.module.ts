import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryService } from '@company-name/data-access/services';

import { GlossaryHomeRoutingModule } from './glossary-home-routing.module';
import { HomePageComponent } from './pages/root/home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GlossaryHomeRoutingModule],
    declarations: [HomePageComponent],
    providers: [CategoryService],
})
export class GlossaryHomeModule {}
