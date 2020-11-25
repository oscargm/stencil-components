import { storiesOf } from '@storybook/html';
import { boolean } from '../../../../config/storybook/helpers';
import readme from './readme.md';
storiesOf('Components/Button', module)
  .addParameters({ notes: readme })
  .add(
    'Enabled',
    (): string => `
    <div style="width:260px">
      <co2-button is-disabled="false">
        Button
      </co2-button>
    </div>
  `,
  )
  .add(
    'Disabled',
    (): string => `
    <div style="width:260px">
      <co2-button is-disabled="true">
        Button
      </co2-button>
    </div>
  `,
  );
