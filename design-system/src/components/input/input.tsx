import {
  Component,
  Host,
  h,
  Event,
  EventEmitter,
  Prop
} from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {

  @Prop() placeholder?: string | null;

  @Event() appFocus: EventEmitter<CustomEvent>;

  private onFocus = (e: any) => {
    console.log('onFocus', e);
    this.appFocus.emit(e);
  }

  render() {
    return (
      <Host>
        <input
          placeholder={this.placeholder || ''}
          onFocus={this.onFocus}
        />
      </Host>
    );
  }

}
