import { Component, ComponentInterface, h, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { TypographyTypes } from '../typography/model';

@Component({
  tag: 'co2-card',
  styleUrl: 'mdc-card.scss',
  shadow: true,
})
export class Co2Card implements ComponentInterface {
  @Element() private element: HTMLElement;

  /**
   * componentDidRender add ripple effect to the action buttons
   */
  componentDidRender() {
    const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
    [].map.call(this.element.shadowRoot.querySelectorAll(selector), function (
      el,
    ) {
      return new MDCRipple(el);
    });
  }
  render() {
    return (
      <div class="mdc-card">
        <co2-typography type={TypographyTypes.HEADLINE_6}>Title</co2-typography>
        {/* <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--square">
            <div class="mdc-card__media-content">

            </div>
          </div>
        </div> */}
        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <button class="mdc-button mdc-card__action mdc-card__action--button">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">Action 1</span>
            </button>
            <button class="mdc-button mdc-card__action mdc-card__action--button">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">Action 2</span>
            </button>
          </div>
          <div class="mdc-card__action-icons">
            <button
              class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
              title="Share"
            >
              <i class="material-icons mdc-icon-button__icon">music_note</i>
            </button>
            <button
              class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
              title="More options"
            >
              more_vert
            </button>
          </div>
        </div>
      </div>
    );
  }
}
