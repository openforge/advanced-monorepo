/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil';

import { CategoryListItemComponent as ICategoryListItemComponent } from 'stencil/dist/types/components/category-list-item/category-list-item';
export declare interface CategoryListItem extends Components.CategoryListItem {}
@ProxyCmp({
  inputs: ['category']
})
@Component({
  selector: 'category-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['category'],
  outputs: ['viewItemEvent']
})
export class CategoryListItem {
  /** Testing an event without value */
  viewItemEvent!: ICategoryListItemComponent['viewItemEvent'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['viewItemEvent']);
  }
}


export declare interface GlossaryTerm extends Components.GlossaryTerm {}
@ProxyCmp({
  inputs: ['term']
})
@Component({
  selector: 'glossary-term',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['term']
})
export class GlossaryTerm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
