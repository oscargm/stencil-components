import {
  Component,
  EventEmitter,
  Event,
  Element,
  h,
  Host,
  Prop,
  ComponentInterface,
} from '@stencil/core';
import { MDCSwitch } from '@material/switch';

@Component({
  tag: 'co2-switch',
  styleUrl: 'mdc-switch.scss',
  shadow: true,
})
export class Co2Switch implements ComponentInterface {
  @Element() private element: HTMLElement;

  /**
   * HTML label prop
   */
  @Prop() label: string = 'off/on';

  /**
   * HTML is-disabled prop
   */
  @Prop({ reflect: true }) isDisabled: boolean = false;

  /**
   * HTML is-checked prop
   */
  @Prop({ reflect: true }) isChecked: boolean = false;

  /**
   * HTML onChange event
   */
  @Event() scaleChange?: EventEmitter<any>;

  handleChange() {
    this.isChecked = !this.isChecked;
    this.scaleChange?.emit(this.isChecked);
  }

  /**
   * componentDidRender instantiates MDCSwitch from materialUI
   */
  componentDidRender() {
    new MDCSwitch(this.element.shadowRoot.querySelector('.mdc-switch'));
  }

  render() {
    return (
      <Host>
        <div
          class={`mdc-switch ${this.isDisabled ? 'mdc-switch--disabled' : ''}`}
        >
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb"></div>
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-checked={this.isChecked ? true : false}
              disabled={this.isDisabled ? true : false}
              checked={this.isChecked ? true : false}
              onChange={() => this.handleChange()}
            />
          </div>
        </div>
        <label htmlFor="basic-switch">{this.label}</label>
      </Host>
    );
  }
}
