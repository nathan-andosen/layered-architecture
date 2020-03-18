import {
  Component,
  Host,
  h,
  Event,
  EventEmitter,
  Prop,
  Element,
  Watch
} from '@stencil/core';


// type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';


@Component({
  tag: 'app-input',
  styleUrls: ['font-icons.scss', 'input.scss'],
  shadow: true
})
export class Input {
  @Element() el: HTMLElement;


  // @Prop() name = 'testing';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  @Prop() icon?: string | null;

  @Prop() placeholder?: string | null;

  @Prop() invalid = false;

  @Prop() type = 'text';

  @Event() appFocus: EventEmitter<CustomEvent>;
  @Event() valueChange: EventEmitter;

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    const inputEl = this.el.shadowRoot.querySelector('input');
   // only update if model and view differ
    if (inputEl.value !== this.value) {
      inputEl.value = this.value.toString();
    }
    // this.emitStyle();
    // this.ionChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }


  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }

  private onFocus = (e: any) => {
    this.appFocus.emit(e);
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.valueChange.emit(this.value);
  }




  render() {
    const value = this.getValue();

    return (
      <Host class={{
        'has-icon': (this.icon && this.icon.length > 0),
        'is-invalid': this.invalid
      }}>
        <input
          placeholder={this.placeholder || ''}
          onFocus={this.onFocus}
          onInput={this.onInput}
          value={value}
          type={this.type}
          class={this.icon ? 'has-icon' : ''}
        />
        {this.icon
          ? <span class={'icon-' + this.icon + ' inp-icon'}></span>
          : ''
        }
      </Host>
    );
  }

}
