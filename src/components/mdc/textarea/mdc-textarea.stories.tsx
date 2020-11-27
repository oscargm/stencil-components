import { storiesOf } from '@storybook/html';
import readme from './readme.md';
storiesOf('Components/Textarea', module)
  .addParameters({ notes: readme })
  .add(
    'Default',
    (): string => `
    <div style="width:100%">
      <co2-textarea custom-placeholder="Some important todo"></co2-textarea>
    </div>
  `,
  )
  .add(
    'With some value',
    (): string => `
    <div style="width:100%">
      <co2-textarea custom-placeholder="Some important todo" value="Some value introduced by the user"></co2-textarea>
    </div>
  `,
  );
