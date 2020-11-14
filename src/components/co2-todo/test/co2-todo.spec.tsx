import { newSpecPage } from '@stencil/core/testing';
import { Co2Todo } from '../co2-todo';

describe('co2-todo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Co2Todo],
      html: `<co2-todo></co2-todo>`,
    });
    expect(page.root).toEqualHtml(`
      <co2-todo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </co2-todo>
    `);
  });
});
