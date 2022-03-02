import { Injectable } from '@angular/core';
import { Category } from '@company-name/data-access/models';
import { Categories } from '../../../glossary/src/index';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private _selectedCategory: Category;

    public get selectedCategory(): Category {
        console.log('get selectedCategory', this._selectedCategory);
        return this._selectedCategory;
    }

    public set selectedCategory(category: Category) {
        this._selectedCategory = category;
        console.log('set selectedCategory', this._selectedCategory);
    }

    public get categories(): Category[] {
        return Categories;
    }

    public getSingleCategory(title: string): Category {
        return Categories.find(category => category.title === title);
    }
}
