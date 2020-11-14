import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input.component';

describe('co2-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<co2-input></co2-input>',
    });
    expect(root).toEqualHtml(`
      <co2-input>
        <mock:shadow-root>
          <input type="text"/>
        </mock:shadow-root>
      </co2-input>
    `);
  });

  it('renders checkbox with values and no label', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: `<co2-input
              id="nonLabelledCheckboxInput"
              type="checkbox"
              name="nonLabelledCheckboxInput"
            ></co2-input>`,
    });
    expect(root).toEqualHtml(`
      <co2-input id="nonLabelledCheckboxInput" name="nonLabelledCheckboxInput" type="checkbox">
        <mock:shadow-root>
          <div class="control control--checkbox">
            <input
              name="nonLabelledCheckboxInput"
              type="checkbox"
            />
          <div class="control__indicator"></div>
          </div>
        </mock:shadow-root>
      </co2-input>
    `);
  });
});
