import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@company-name/data-access/models';
import { CategoryService } from '@company-name/data-access/services';

@Component({
    selector: 'company-name-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
    items: Category[] = [];

    constructor(private route: Router, private categoryService: CategoryService) {
        // * Reset the selected category
        this.categoryService.selectedCategory = null;
        // * Get the categories
        this.items = this.categoryService.categories;
    }

    viewItem(ev) {
        void this.route.navigateByUrl('/category', { state: { category: ev.detail.title } });
    }
}
