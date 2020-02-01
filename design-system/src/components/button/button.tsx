import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() color?: 'primary' | 'success' | 'danger' = 'primary';


  render() {
    return (
      <Host>
        <button
        class={'btn-' + this.color}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }

}
