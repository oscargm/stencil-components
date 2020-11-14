import { newSpecPage } from '@stencil/core/testing';
import { Co2Button } from '../co2-button';

describe('co2-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Co2Button],
      html: `<co2-button></co2-button>`,
    });
    expect(page.root).toEqualHtml(`
      <co2-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </co2-button>
    `);
  });
});
