import type { Meta, StoryObj } from '@storybook/react';
import Select from './index.tsx';
import './Select.css';

const meta: Meta<typeof Select> = {
    title: 'Atoms/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Select an option',
        onChange: (value) => console.log('Selected:', value),
    },
};

export const WithCustomIcon: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Custom icon',
        onChange: (value) => console.log('Selected:', value),
    },
};

export const Disabled: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Disabled select',
        disabled: true,
        onChange: (value) => console.log('Selected:', value),
    },
};

export const WithValue: Story = {
    args: {
        options: defaultOptions,
        value: '2',
        onChange: (value) => console.log('Selected:', value),
    },
};
