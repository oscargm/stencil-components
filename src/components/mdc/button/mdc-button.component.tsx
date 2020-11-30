import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'co2-button',
  styleUrl: 'mdc-button.scss',
  shadow: true,
})
export class Co2Button implements ComponentInterface {
  /**
   * HTML click event
   */
  @Event() scaleClick?: EventEmitter<any>;

  /**
   * HTML disabled attribute
   */
  @Prop({ reflect: true }) isDisabled?: boolean;

  handleClick(event) {
    this.scaleClick?.emit(event);
  }

  render() {
    return (
      <Host>
        <div class="mdc-touch-target-wrapper">
          <button
            class="mdc-button mdc-button--touch mdc-button--raised co2-button"
            onClick={event => this.handleClick(event)}
            disabled={this.isDisabled}
          >
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">
              <slot />
            </span>
            <div class="mdc-button__touch"></div>
            <co2-ripple-effect />
          </button>
        </div>
      </Host>
    );
  }
}
