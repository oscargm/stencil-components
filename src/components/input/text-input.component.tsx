import { h } from '@stencil/core';
import { InputTypes, MinMaxValue } from './model';
interface TextInputProps {
  labelText?: string;
  name?: string;
  value?: string;
  onInput?: (event) => void;
  isDisabled?: boolean;
  onBlur?: (event) => void;
  type: InputTypes;
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
    isDisabled,
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
        onInput={event => onInput(event)}
        disabled={isDisabled}
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
      onInput={event => onInput(event)}
      disabled={isDisabled}
      onBlur={event => onBlur(event)}
      min={minValue}
      max={maxValue}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
    />
  );
};
