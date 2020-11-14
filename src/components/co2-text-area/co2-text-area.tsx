import { Component, Watch, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'co2-text-area',
  styleUrl: 'co2-text-area.css',
  shadow: true,
})
export class Co2TextArea {
  @Prop({ mutable: true }) value: string = '';
  @Prop({ reflect: true }) isDisabled: boolean = false;
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

  @Watch('isChecked')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('oldValue, newValue: ', oldValue, newValue);
  }
  render() {
    return (
      <textarea
        // type="text"
        value={this.value}
        class="message-input"
        placeholder="Type message..."
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
