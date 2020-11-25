import { storiesOf } from '@storybook/html';
import { boolean } from '../../../../config/storybook/helpers';
import readme from './readme.md';
storiesOf('Components/Typography', module)
  .addParameters({ notes: readme })
  .add(
    'Headlines',
    (): string => `
    <div style="width:100%">
      <co2-typography type="headline1">Headline typography 1</co2-typography>
      <co2-typography type="headline2">Headline typography 2</co2-typography>
      <co2-typography type="headline3">Headline typography 3</co2-typography>
      <co2-typography type="headline4">Headline typography 4</co2-typography>
      <co2-typography type="headline5">Headline typography 5</co2-typography>
      <co2-typography type="headline6">Headline typography 6</co2-typography>
    </div>
  `,
  )
  .add(
    'Subtitles',
    (): string => `
    <div style="width:100%">
      <co2-typography type="subtitle1">Subtitle typography 1</co2-typography><br/>
      <co2-typography type="subtitle2">Subtitle typography 2</co2-typography>
    </div>
  `,
  )
  .add(
    'Bodies',
    (): string => `
    <div style="width:100%">
      <co2-typography type="body1">Body typography 1</co2-typography>
      <co2-typography type="body2">Body typography 2</co2-typography>
    </div>
  `,
  )
  .add(
    'Others',
    (): string => `
    <div style="width:100%">
      <co2-typography type="caption">Caption typography</co2-typography><br/>
      <co2-typography type="button">Button typography</co2-typography><br/>
      <co2-typography type="overline">Overline typography</co2-typography>
    </div>
  `,
  );
