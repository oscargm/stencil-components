// export type Typography =
//   | 'headline1'
//   | 'headline2'
//   | 'headline3'
//   | 'headline4'
//   | 'headline5'
//   | 'headline6'
//   | 'subtitle1'
//   | 'subtitle2'
//   | 'body1'
//   | 'body2'
//   | 'caption'
//   | 'button'
//   | 'overline';

export const enum TypographyTypes {
  HEADLINE_1 = 'headline1',
  HEADLINE_2 = 'headline2',
  HEADLINE_3 = 'headline3',
  HEADLINE_4 = 'headline4',
  HEADLINE_5 = 'headline5',
  HEADLINE_6 = 'headline6',
  SUBTITLE_1 = 'subtitle1',
  SUBTITLE_2 = 'subtitle2',
  BODY_1 = 'body1',
  BODY_2 = 'body2',
  CAPTION = 'caption',
  BUTTON = 'button',
  OVERLINE = 'overline',
}

export const typographyTags = new Map([
  [TypographyTypes.HEADLINE_1, 'h1'],
  [TypographyTypes.HEADLINE_2, 'h2'],
  [TypographyTypes.HEADLINE_3, 'h3'],
  [TypographyTypes.HEADLINE_4, 'h4'],
  [TypographyTypes.HEADLINE_5, 'h5'],
  [TypographyTypes.HEADLINE_6, 'h6'],
  [TypographyTypes.SUBTITLE_1, 'span'],
  [TypographyTypes.SUBTITLE_2, 'span'],
  [TypographyTypes.BODY_1, 'p'],
  [TypographyTypes.BODY_2, 'p'],
  [TypographyTypes.CAPTION, 'span'],
  [TypographyTypes.BUTTON, 'span'],
  [TypographyTypes.OVERLINE, 'span'],
]);

export type Typography = TypographyTypes;
