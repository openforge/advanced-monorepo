import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '@company-name/data-access/services';
import { IonicModule } from '@ionic/angular';

// import { ComponentLibraryModule } from 'angular-component-library';
import { GlossaryHomeRoutingModule } from './glossary-home-routing.module';
import { HomePageComponent } from './pages/root/home.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GlossaryHomeRoutingModule],
    declarations: [HomePageComponent],
    providers: [CategoryService],
})
export class GlossaryHomeModule {}
