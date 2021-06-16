import '../src/index.css';
import '../src/App.css';

import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  // import: './App.css',
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },

  },
}