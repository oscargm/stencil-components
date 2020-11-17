import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
// import { MDCButton } from '@material/button';
// import { MDCRipple } from '@material/ripple';
@Component({
  tag: 'co2-button',
  styleUrl: 'mdc-button.scss',
  shadow: true,
})
export class Co2Button {
  /**
   * HTML onBlur event
   */
  @Event() scaleClick?: EventEmitter<any>;

  /**
   * HTML disabled attribute
   */
  @Prop({ reflect: true }) isDisabled?: boolean = false;

  handleClick(event) {
    this.scaleClick?.emit(event);
  }

  render() {
    return (
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
    );
  }
}
