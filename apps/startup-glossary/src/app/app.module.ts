import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CategoryService } from '@mobile-academy/data-access/services';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        CategoryService,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
