import { JsonDocsComponent } from '@stencil/core/internal';
import { ArgType, ArgTypes } from '@storybook/api';

export type ControlType =
  | 'array'
  | 'boolean'
  | 'number'
  | 'range'
  | 'object'
  | 'radio'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'select'
  | 'multi-select'
  | 'text'
  | 'color'
  | 'date';

export const isScalar = (type: string) =>
  ['string', 'number', 'boolean'].includes(type);

export const getDataType = (type: string) => {
  if (isScalar(type)) return type;
  const parts = type.split('|').map(p => p.trim());
  if (
    parts.length > 1 &&
    parts.every(p => p.startsWith('"') && p.endsWith('"'))
  )
    return 'enum';
  return 'object';
};

export const getControlType = (type: string) => {
  const dataType = getDataType(type);
  if (dataType === 'string') return 'text';
  else if (dataType === 'enum') return 'radio';
  return dataType;
};

export class ControllableArgTypes implements ArgTypes {
  [key: string]: ArgType;

  static fromMetadata(metadata: JsonDocsComponent): ControllableArgTypes {
    const argTypes = new ControllableArgTypes();
    metadata.props.forEach(p => {
      const control = { type: getControlType(p.type) };
      if (control.type === 'radio') {
        control['options'] = p.type
          .split('|')
          .map(p => p.trim())
          .map(p => p.slice(1, -1));
      }

      argTypes[p.attr || p.name] = {
        name: p.attr || p.name,
        type: {
          name: getDataType(p.type),
          required: !p.optional,
        },
        defaultValue: p.default ? p.default : '',
        description: p.docs || '',
        control,
      };
    });

    return argTypes;
  }

  setDefaultValue(key: string, value: any): this {
    console.log('this[key]', this[key], key);
    console.log('this', this);
    this[key].defaultValue = value;
    return this;
  }

  setControlType(
    key: string,
    type: ControlType,
    extra?: { [key: string]: any },
  ): this {
    this[key].control = { type, ...extra };
    return this;
  }

  getArgTypes(): ArgTypes {
    return JSON.parse(
      JSON.stringify(this, (key, value) => {
        if (typeof value === 'function') return undefined;
        return value;
      }),
    );
  }
}
