import { storiesOf } from '@storybook/html';
import readme from './readme.md';
storiesOf('Components/Switch', module)
  .addParameters({ notes: readme })
  .add(
    'Checked',
    (): string => `
    <div style="width:100%">
    <co2-switch
      label="Some label"
      is-checked="true">
    </co2-switch>
    </div>
  `,
  )
  .add(
    'Unchecked',
    (): string => `
    <div style="width:100%">
      <co2-switch
        label="Some label"
        is-checked="false">
      </co2-switch>
    </div>
  `,
  );
