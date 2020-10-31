import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'co2-input',
  styleUrl: 'input.component.css',
  shadow: true,
})
export class Input {
  /**
   * The name
   */
  @Prop() name: string;

  /**
   * The label
   */
  @Prop() label: string;

  /**
   * The label
   */
  @Prop() disabled: boolean;

  /**
   * The value
   */
  @Prop({ mutable: true }) value?: string;
  /*
   * The type
   */
  @Prop() type?: 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'text' | 'checkbox' | 'radio' | 'url' = 'text';

  /**
   * The onChange
   */
  @Event() scaleChange: EventEmitter<InputEvent>;

  handleChange(event) {
    this.value = event.target ? event.target.value : this.value;
    this.scaleChange.emit(event);
  }

  render() {
    return this.label ? (
      <label htmlFor={this.name}>
        {this.label}: disabled={this.disabled}
        <input name={this.name} type={this.type} value={this.value} onInput={event => this.handleChange(event)} disabled={this.disabled} />
      </label>
    ) : (
      <input
        type="checkbox"
        name={this.name}
        // class={classNames('input__checkbox')}
        // id={this.inputId}
        onChange={event => this.handleChange(event)}
        value={this.value}
        // checked={this.checked}
        disabled={this.disabled}
      />
    );
  }
}
