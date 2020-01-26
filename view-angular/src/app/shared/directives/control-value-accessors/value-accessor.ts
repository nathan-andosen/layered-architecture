import { ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessor implements ControlValueAccessor {

  private onChange: (value: any) => void = () => {/**/};
  private onTouched: () => void = () => {/**/};
  protected lastValue: any;

  constructor(protected el: ElementRef) {}

  writeValue(value: any) {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    // setIonicClasses(this.el);
  }

  handleChangeEvent(el: HTMLElement, value: any) {
    if (el === this.el.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      // setIonicClasses(this.el);
    }
  }

  @HostListener('ionBlur', ['$event.target'])
  _handleBlurEvent(el: any) {
    if (el === this.el.nativeElement) {
      this.onTouched();
      // setIonicClasses(this.el);
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
