/* eslint-disable import/no-nodejs-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: ['../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)'],
    core: {
        builder: '@storybook/builder-vite',
    },
    addons: [
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@chromatic-com/storybook'),
        getAbsolutePath('@storybook/addon-interactions'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
};
export default config;
