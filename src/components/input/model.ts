export type MinMaxValue = number | string;

export const enum InputTypes {
  //  MOST COMMON TYPES
  EMAIL = 'email',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEL = 'tel',
  TEXT = 'text',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  //  ACTION TYPES
  BUTTON = 'button',
  RESET = 'reset',
  SEARCH = 'search',
  SUMBIT = 'submit',
  //  DATE/TIME TYPES
  DATE = 'date',
  DATETIME_LOCAL = 'datetime-local',
  MONTH = 'month',
  TIME = 'time',
  WEEK = 'week',
  //  RARE TYPES
  URL = 'url',
  HIDDEN = 'hidden',
  COLOR = 'color',
  FILE = 'file',
  IMAGE = 'image',
  RANGE = 'range',
}
