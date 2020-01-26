import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'app-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true
    }
  ]
})
export class TextValueAccessorDirective extends ValueAccessor {

  constructor(el: ElementRef) {
    super(el);
    console.log('TextValueAccessorDirective...');
  }

  @HostListener('valueChange', ['$event.target'])
  _handleInputEvent(el: any) {
    this.handleChangeEvent(el, el.value);
  }
}
