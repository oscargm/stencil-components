import { newSpecPage } from '@stencil/core/testing';
import { Co2TextArea } from '../co2-text-area';

describe('co2-text-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Co2TextArea],
      html: `<co2-text-area></co2-text-area>`,
    });
    expect(page.root).toEqualHtml(`
      <co2-text-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </co2-text-area>
    `);
  });
});
