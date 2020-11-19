import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { Typography, TypographyTypes } from './model';
import { TypographyRenderer } from './renderer';

@Component({
  tag: 'co2-typography',
  styleUrl: 'mdc-typography.scss',
  shadow: true,
})
export class Co2Typography implements ComponentInterface {
  /**
   * HTML type prop
   */
  @Prop() type: Typography = TypographyTypes.BODY_1;

  render() {
    return (
      <TypographyRenderer type={this.type}>
        <slot />
      </TypographyRenderer>
    );
  }
}
