import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'co2-label',
  styleUrl: 'label.component.css',
  shadow: true,
})
export class Label {
  /**
   * The text
   */
  @Prop() text: string;

  render() {
    return <label>{this.text}</label>;
  }
}
