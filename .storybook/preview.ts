import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        options: {
            storySort: (a, b) => {
                return a.title === b.title ? 0 : a.id.localeCompare(b.id, { numeric: true });
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
