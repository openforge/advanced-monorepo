import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@company-name/data-access/models';
import { CategoryService } from '@company-name/data-access/services';

@Component({
    selector: 'company-name-past-term',
    templateUrl: 'past-term.page.html',
    styleUrls: ['past-term.page.scss'],
})
export class PastTermPageComponent {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        const navigation = this.route.getCurrentNavigation();
        const selectedTitle = navigation.extras.state.category;
        this.categorySelected = this.categoryService.getSingleCategory(selectedTitle);
    }

    scrollTop() {
        return;
    }
}
