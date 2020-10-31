import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
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
  @Event() scaleChange?: EventEmitter<InputEvent>;

  /**
   * HTML onBlur event
   */
  @Event() scaleBlur?: EventEmitter<FocusEvent>;

  handleChange(event) {
    this.value = event.target ? event.target.value : this.value;
    this.scaleChange?.emit(event);
  }
  handleBlur(event) {
    this.scaleBlur?.emit(event);
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
