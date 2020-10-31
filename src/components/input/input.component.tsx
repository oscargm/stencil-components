import { Component, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';
import { TextInput } from './text-input.component';
import { CheckboxInput } from './checkbox-input.component';
import { InputTypes, MinMaxValue } from './model';

@Component({
  tag: 'co2-input',
  styleUrl: 'input.component.css',
  shadow: true,
})
export class Input {
  /**
   * HTML name attribute
   */
  @Prop() name?: string;

  /**
   * Label text
   */
  @Prop() label?: string;

  /**
   * HTML checked attribute
   */
  @Prop() isChecked?: boolean;

  /**
   * HTML disabled attribute
   */
  @Prop() isDisabled?: boolean;

  /**
   * HTML value attribute
   */
  @Prop({ mutable: true }) value?: string;

  /*
   * HTML input type attribute
   */
  @Prop() type?: InputTypes = InputTypes.TEXT;

  /*
   * HTML minLength attribute
   */
  @Prop() minLength?: number;

  /*
   * HTML maxLength attribute
   */
  @Prop() maxLength?: number;

  /*
   * HTML min attribute
   */
  @Prop() minValue?: MinMaxValue;

  /*
   * HTML max attribute
   */
  @Prop() maxValue?: MinMaxValue;

  /**
   * HTML onChange|onInput events (depending on type)
   */
  @Event() scaleChange?: EventEmitter<any>;

  /**
   * HTML onBlur event
   */
  @Event() scaleBlur?: EventEmitter<any>;

  handleChange(value) {
    switch (this.type) {
      case InputTypes.CHECKBOX:
        this.isChecked = !value;
        break;
      case InputTypes.TEXT:
      default:
        this.value = value;
        break;
    }
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
    switch (this.type) {
      case InputTypes.CHECKBOX:
        return (
          <CheckboxInput
            labelText={this.label}
            name={this.name}
            checked={this.isChecked}
            onChange={event => this.handleChange(event)}
            isDisabled={this.isDisabled}
          />
        );
      case InputTypes.URL:
      case InputTypes.NUMBER:
      case InputTypes.PASSWORD:
      case InputTypes.TEL:
      case InputTypes.TEXT:
      default:
        return (
          <TextInput
            labelText={this.label}
            name={this.name}
            value={this.value}
            type={this.type}
            minValue={this.minValue}
            maxValue={this.maxValue}
            minLength={this.minLength}
            maxLength={this.maxLength}
            onBlur={event => this.handleBlur(event)}
            onInput={event => this.handleChange(event)}
            isDisabled={this.isDisabled}
          />
        );
    }
  }
}
