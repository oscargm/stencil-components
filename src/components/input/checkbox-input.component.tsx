import { h } from '@stencil/core';
interface CheckboxInputProps {
  labelText?: string;
  name?: string;
  checked?: boolean;
  onChange?: (event) => void;
  isDisabled?: boolean;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
  const { labelText, name, checked, onChange, isDisabled } = props;
  return labelText ? (
    <label htmlFor={name}>
      {labelText}:
      <input
        name={name}
        type={'checkbox'}
        checked={checked}
        // onInput={event => onInput(event)}
        onChange={event => onChange(event)}
        disabled={isDisabled}
      />
    </label>
  ) : (
    <input
      name={name}
      type={'checkbox'}
      checked={checked}
      // onInput={event => onInput(event)}
      onChange={event => onChange(event)}
      disabled={isDisabled}
    />
  );
};
