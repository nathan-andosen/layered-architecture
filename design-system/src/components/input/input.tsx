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

@Component({
  tag: 'app-input',
  styleUrls: ['font-icons.scss', 'input.scss'],
  shadow: true
})
export class Input {
  @Element() el: HTMLElement;


  @Prop() name = 'testing';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  @Prop() icon?: string | null;

  @Prop() placeholder?: string | null;

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
    console.log('onFocus', e);
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
      <Host class={this.icon ? 'has-icon' : ''}>
        <input
          placeholder={this.placeholder || ''}
          onFocus={this.onFocus}
          onInput={this.onInput}
          value={value}
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
