import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './index';

const meta: Meta<typeof Breadcrumbs> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
    args: {
        items: [
            {
                label: 'CATEGORY1',
                href: '/category1',
            },
            {
                label: 'CATEGORY2',
                href: '/category2',
            },
            {
                label: 'CATEGORY3',
                href: '/category3',
            },
        ],
        backIcon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8H2M2 8L6.88753 3.11247M2 8L6.88753 12.8875" stroke="currentColor" />
            </svg>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
