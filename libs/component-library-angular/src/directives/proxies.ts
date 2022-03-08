/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'component-library';

import { MyComponent as IMyComponent } from 'component-library/dist/types/components/my-component/my-component';
export declare interface MyComponent extends Components.MyComponent {}
@ProxyCmp({
  inputs: ['items']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['items'],
  outputs: ['viewItemEvent']
})
export class MyComponent {
  /** Testing an event without value */
  viewItemEvent!: IMyComponent['viewItemEvent'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['viewItemEvent']);
  }
}
