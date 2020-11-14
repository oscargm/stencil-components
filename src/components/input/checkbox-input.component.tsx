import { h } from '@stencil/core';
interface CheckboxInputProps {
  labelText?: string;
  name?: string;
  isChecked?: boolean;
  onChange?: (event) => void;
  disabled?: boolean;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
  const { labelText, name, isChecked, onChange, disabled: disabled } = props;
  return labelText ? (
    <label htmlFor={name} class="control control--checkbox">
      {labelText}:
      <input
        name={name}
        type={'checkbox'}
        checked={isChecked}
        disabled={disabled}
      />
      <div class="control__indicator" onClick={() => onChange(isChecked)}></div>
    </label>
  ) : (
    <div class="control control--checkbox">
    <input
      name={name}
      type={'checkbox'}
      checked={isChecked}
      disabled={disabled}
    />
    <div class="control__indicator" onClick={() => onChange(isChecked)}></div>
    </div>
  );
};
