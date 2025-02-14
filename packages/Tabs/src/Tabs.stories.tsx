import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index.tsx';

type TTabsType = typeof Tabs;

const meta: Meta<TTabsType> = {
    title: 'Atoms/Tabs',
    component: Tabs,
    args: {
        tabs: [
            { id: 1, label: 'Tab 1', content: <p>Content for Tab 1</p> },
            { id: 2, label: 'Tab 2', content: <p>Content for Tab 2</p> },
            { id: 3, label: 'Tab 3', content: <p>Content for Tab 3</p> },
        ],
    },
    tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<TTabsType>;

export const Default: TStory = {};
