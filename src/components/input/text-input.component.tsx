import { h } from '@stencil/core';
import { MinMaxValue } from './model';
interface TextInputProps {
  labelText?: string;
  name?: string;
  value?: string;
  onInput?: (value) => void;
  disabled?: boolean;
  onBlur?: (value) => void;
  type: string;
  minValue?: MinMaxValue;
  maxValue?: MinMaxValue;
  minLength?: number;
  maxLength?: number;
}
export const TextInput = (props: TextInputProps) => {
  const {
    labelText,
    name,
    value,
    onInput,
    disabled,
    onBlur,
    type,
    minValue,
    minLength,
    maxValue,
    maxLength,
  } = props;
  return labelText ? (
    <label htmlFor={name}>
      {labelText}:
      <input
        name={name}
        type={type}
        onInput={event => {
          const customEvent = event as any;
          onInput(customEvent.target.value);
        }}
        disabled={disabled}
        onBlur={event => onBlur(event)}
        min={minValue}
        max={maxValue}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
      />
    </label>
  ) : (
    <input
      name={name}
      type={type}
      onInput={event => {
        const customEvent = event as any;
        onInput(customEvent.target.value);
      }}
      disabled={disabled}
      onBlur={event => {
        const customEvent = event as any;
        onBlur(customEvent.target.value);
      }}
      min={minValue}
      max={maxValue}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
    />
  );
};
