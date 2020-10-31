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
   * The name
   */
  @Prop() name?: string;

  /**
   * The label
   */
  @Prop() label?: string;

  /**
   * The label
   */
  @Prop() isChecked?: boolean;

  /**
   * The label
   */
  @Prop() isDisabled?: boolean;

  /**
   * The value
   */
  @Prop({ mutable: true }) value?: string;
  /*
   * The type
   */
  @Prop() type?: InputTypes;

  @Prop() minLength?: number;
  @Prop() maxLength?: number;

  @Prop() minValue?: MinMaxValue;
  @Prop() maxValue?: MinMaxValue;

  /**
   * The onChange
   */
  @Event() scaleChange?: EventEmitter<InputEvent>;

  @Event() scaleBlur?;

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
