import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@mobile-academy/features/glossary-home-module').then(m => m.GlossaryHomeModule),
    },
    {
        path: 'category',
        loadChildren: () => import('@mobile-academy/features/glossary-category-module').then(m => m.GlossaryCategoryModule),
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
