import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'co2-text-area',
  styleUrl: 'co2-text-area.css',
  shadow: true,
})
export class Co2TextArea {
  @Prop({ mutable: true }) value: string = '';
  @Prop({ reflect: true }) isDisabled: boolean = false;

  @Prop() customPlaceholder: string = 'Type message...';

  @Prop() maxLength: number;
  /**
   * HTML onChange|onInput events (depending on type)
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
      <textarea
        value={this.value}
        class="message-input"
        placeholder={this.customPlaceholder}
        name={name}
        onInput={event => {
          const customEvent = event as any;
          this.handleChange(customEvent.target.value);
        }}
        disabled={this.isDisabled}
        onBlur={event => this.handleBlur(event)}
        maxLength={this.maxLength}
      ></textarea>
    );
  }
}
