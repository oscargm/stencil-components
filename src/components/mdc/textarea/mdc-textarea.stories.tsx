import { storiesOf } from '@storybook/html';
import { boolean } from '../../../../config/storybook/helpers';
import readme from './readme.md';
storiesOf('Components/Textarea', module)
  .addParameters({ notes: readme })
  .add(
    'Default',
    (): string => `
    <div style="width:260px">
      <co2-textarea custom-placeholder="Some important todo"></co2-textarea>
    </div>
  `,
  )
  .add(
    'With some value',
    (): string => `
    <div style="width:260px">
      <co2-textarea custom-placeholder="Some important todo" value="Some value introduced by the user"></co2-textarea>
    </div>
  `,
  );
