import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@company-name/data-access/models';
import { CategoryService } from '@company-name/data-access/services';
@Component({
    selector: 'company-name-category',
    templateUrl: 'category.page.html',
    styleUrls: ['category.page.scss'],
})
export class CategoryPageComponent {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        const navigation = this.route.getCurrentNavigation();
        const selectedTitle = navigation.extras.state.category;
        this.categorySelected = this.categoryService.getSingleCategory(selectedTitle);
    }

    learnNewTerm() {
        // Navigate to the new term page
        void this.route.navigateByUrl('/category/new-term', { state: { category: this.categorySelected.title } });
    }

    alreadyLearned() {
        // Navigate to the already learned terms page
        void this.route.navigateByUrl('/category/past-term', { state: { category: this.categorySelected.title } });
    }
}
