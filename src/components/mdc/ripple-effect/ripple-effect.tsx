import '@material/mwc-ripple';
import { Component, ComponentInterface, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'co2-ripple-effect',
  styleUrl: 'ripple-effect.scss',
  shadow: true,
})
export class Co2RippleEffect implements ComponentInterface {
  @Element() private element: HTMLElement;

  /**
   * 	Whether or not the surface the ripple is acting upon is active
   */
  @Prop() active: boolean | undefined;

  /**
   * Whether or not the ripple is unbounded
   */
  @Prop() unbounded: boolean = false;

  /**
   * Disables the ripple effect
   */
  @Prop() disabled: boolean = false;

  /**
   * The node which should trigger the Ripple Effect
   */
  @Prop() interactionNode: HTMLElement;

  /**
   * componentWillLoad sets parentElement to interactionNode
   */
  componentWillLoad() {
    this.interactionNode = this.element.parentElement;
  }

  render() {
    const { active, unbounded, disabled, interactionNode } = this;
    return (
      <mwc-ripple
        primary="true"
        active={active}
        unbounded={unbounded}
        disabled={disabled}
        interactionNode={interactionNode}
      ></mwc-ripple>
    );
  }
}
