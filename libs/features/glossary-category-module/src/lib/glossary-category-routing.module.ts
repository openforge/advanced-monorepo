import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTermPageComponent } from './pages/new-term/new-term.page';
import { PastTermPageComponent } from './pages/past-term/past-term.page';
import { CategoryPageComponent } from './pages/root/category.page';

const routes: Routes = [
    {
        path: '',
        component: CategoryPageComponent,
    },
    {
        path: 'new-term',
        component: NewTermPageComponent,
    },
    {
        path: 'past-term',
        component: PastTermPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GlossaryCategoryRoutingModule {}
