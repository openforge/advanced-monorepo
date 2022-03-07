/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'component-library/components';

import { defineCustomElement as defineMyButton } from 'component-library/components/my-button.js';
import { defineCustomElement as defineMyCheckbox } from 'component-library/components/my-checkbox.js';
import { defineCustomElement as defineMyComponent } from 'component-library/components/my-component.js';
import { defineCustomElement as defineMyInput } from 'component-library/components/my-input.js';
import { defineCustomElement as defineMyPopover } from 'component-library/components/my-popover.js';
import { defineCustomElement as defineMyRadio } from 'component-library/components/my-radio.js';
import { defineCustomElement as defineMyRadioGroup } from 'component-library/components/my-radio-group.js';
import { defineCustomElement as defineMyRange } from 'component-library/components/my-range.js';


export declare interface MyButton extends Components.MyButton {
  /**
   * Emitted when the button has focus. 
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  myBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyButton,
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
})
export class MyButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myFocus', 'myBlur']);
  }
}

import type { CheckboxChangeEventDetail as ICheckboxCheckboxChangeEventDetail } from 'component-library/components';
export declare interface MyCheckbox extends Components.MyCheckbox {
  /**
   * Emitted when the checked property has changed. 
   */
  myChange: EventEmitter<CustomEvent<ICheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the toggle has focus. 
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the toggle loses focus. 
   */
  myBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyCheckbox,
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']
})
@Component({
  selector: 'my-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']
})
export class MyCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
  }
}


export declare interface MyComponent extends Components.MyComponent {
  /**
   * Testing an event without value 
   */
  myCustomEvent: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['age', 'first', 'kidsNames', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['age', 'first', 'kidsNames', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myCustomEvent']);
  }
}

import type { InputChangeEventDetail as IInputInputChangeEventDetail } from 'component-library/components';
export declare interface MyInput extends Components.MyInput {
  /**
   * Emitted when a keyboard input occurred. 
   */
  myInput: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  myChange: EventEmitter<CustomEvent<IInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus. 
   */
  myBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input has focus. 
   */
  myFocus: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyInput,
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']
})
export class MyInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myInput', 'myChange', 'myBlur', 'myFocus']);
  }
}

import type { OverlayEventDetail as IPopoverOverlayEventDetail } from 'component-library/components';
export declare interface MyPopover extends Components.MyPopover {
  /**
   * Emitted after the popover has presented. 
   */
  myPopoverDidPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has presented. 
   */
  myPopoverWillPresent: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted before the popover has dismissed. 
   */
  myPopoverWillDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;
  /**
   * Emitted after the popover has dismissed. 
   */
  myPopoverDidDismiss: EventEmitter<CustomEvent<IPopoverOverlayEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyPopover,
  inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'cssClass', 'event', 'keyboardClose', 'mode', 'showBackdrop', 'translucent'],
  methods: ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']
})
@Component({
  selector: 'my-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'backdropDismiss', 'component', 'componentProps', 'cssClass', 'event', 'keyboardClose', 'mode', 'showBackdrop', 'translucent']
})
export class MyPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myPopoverDidPresent', 'myPopoverWillPresent', 'myPopoverWillDismiss', 'myPopoverDidDismiss']);
  }
}


export declare interface MyRadio extends Components.MyRadio {
  /**
   * Emitted when the radio button has focus. 
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus. 
   */
  myBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus. 
   */
  mySelect: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyRadio,
  inputs: ['color', 'disabled', 'mode', 'name', 'value']
})
@Component({
  selector: 'my-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'mode', 'name', 'value']
})
export class MyRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myFocus', 'myBlur', 'mySelect']);
  }
}

import type { RadioGroupChangeEventDetail as IRadioGroupRadioGroupChangeEventDetail } from 'component-library/components';
export declare interface MyRadioGroup extends Components.MyRadioGroup {
  /**
   * Emitted when the value has changed. 
   */
  myChange: EventEmitter<CustomEvent<IRadioGroupRadioGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyRadioGroup,
  inputs: ['allowEmptySelection', 'name', 'value']
})
@Component({
  selector: 'my-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmptySelection', 'name', 'value']
})
export class MyRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}

import type { RangeChangeEventDetail as IRangeRangeChangeEventDetail } from 'component-library/components';
export declare interface MyRange extends Components.MyRange {
  /**
   * Emitted when the value property has changed. 
   */
  myChange: EventEmitter<CustomEvent<IRangeRangeChangeEventDetail>>;
  /**
   * Emitted when the range has focus. 
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the range loses focus. 
   */
  myBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: defineMyRange,
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']
})
@Component({
  selector: 'my-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']
})
export class MyRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
  }
}
