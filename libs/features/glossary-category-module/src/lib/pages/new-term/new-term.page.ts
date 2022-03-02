import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@company-name/data-access/models';
import { CategoryService } from '@company-name/data-access/services';
@Component({
    selector: 'company-name-new-term',
    templateUrl: 'new-term.page.html',
    styleUrls: ['new-term.page.scss'],
})
export class NewTermPageComponent {
    categorySelected: Category;
    constructor(private categoryService: CategoryService, private route: Router) {
        const navigation = this.route.getCurrentNavigation();
        const selectedTitle = navigation.extras.state.category;
        this.categorySelected = this.categoryService.getSingleCategory(selectedTitle);
    }

    newTerm() {
        return;
    }
}
