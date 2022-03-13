import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@company-name/startup-glossary-angular/feature-shell/home-module').then(m => m.HomeModule),
    },
    {
        path: 'category',
        loadChildren: () => import('@company-name/startup-glossary-angular/feature-shell/category-module').then(m => m.CategoryModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
