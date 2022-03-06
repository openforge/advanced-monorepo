/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { Components } from 'your-stencil-library-name';

import { ProxyCmp } from './angular-component-lib/utils';

export type MyComponent = Components.MyComponent;

@ProxyCmp({
    defineCustomElementFn: undefined,
    inputs: ['first', 'last', 'middle'],
})
@Component({
    selector: 'company-name-stencil-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
