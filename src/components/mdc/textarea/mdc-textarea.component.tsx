import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'co2-textarea',
  styleUrl: 'mdc-textarea.scss',
  shadow: true,
})
export class Co2TextArea implements ComponentInterface {
  /**
   * HTML customPlaceholder prop
   */
  @Prop() customPlaceholder: string = 'Write some text...';

  /**
   * HTML is-disabled prop
   */
  @Prop({ reflect: true }) isDisabled: boolean = false;

  /**
   * HTML value prop
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * HTML onChange event
   */
  @Event() scaleChange?: EventEmitter<any>;

  /**
   * HTML onBlur event
   */
  @Event() scaleBlur?: EventEmitter<any>;

  handleChange(value) {
    this.value = value;
    this.scaleChange?.emit(value);
  }
  handleBlur(event) {
    this.scaleBlur?.emit(event);
  }
  render() {
    return (
      <label class="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label co2-textarea">
        <span class="mdc-text-field__ripple"></span>
        {/* <span class="mdc-text-field__resizer"> */}
        <textarea
          class="mdc-text-field__input"
          // rows={8}
          // cols={40}
          value={this.value}
          placeholder={this.customPlaceholder}
          // name={this.name}
          onInput={event => {
            const customEvent = event as any;
            this.handleChange(customEvent.target.value);
          }}
          disabled={this.isDisabled}
          onBlur={event => this.handleBlur(event)}
          // maxLength={this.maxLength}
          aria-label="Label"
        ></textarea>
        {/* </span> */}
        <span class="mdc-line-ripple"></span>
      </label>
    );
  }
}
