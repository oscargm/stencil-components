import { storiesOf } from '@storybook/html';
import readme from './readme.md';

const createTypography = (
  type: string,
  quantity: number,
  lineBreaks: boolean = false,
) => {
  let returnString = '<div style="width:100%">';
  for (let i = 1; i < quantity + 1; i++) {
    returnString = returnString.concat(
      `<co2-typography type="${type}${i}">${type
        .charAt(0)
        .toUpperCase()}${type.slice(1)} typography ${i}</co2-typography>`,
    );
    if (lineBreaks) returnString = returnString.concat('<br/>');
  }
  return returnString.concat('</div>');
};

storiesOf('Components/Typography', module)
  .addParameters({ notes: readme })
  .add('Headlines', () => createTypography('headline', 6))
  .add('Subtitles', () => createTypography('subtitle', 2, true))
  .add('Bodies', () => createTypography('body', 2))
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
