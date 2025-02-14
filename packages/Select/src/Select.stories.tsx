import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectProps } from './index.tsx';
import { useState } from 'react';

type TSelectType = typeof Select;

const SelectWithState = ({ ...args }: SelectProps) => {
    const [value, setValue] = useState<string>();

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    return <Select {...args} value={value} onChange={handleChange} />;
};

const meta: Meta<TSelectType> = {
    title: 'Atoms/Select',
    component: Select,
    args: {
        options: [
            { value: '1', label: 'Jack' },
            { value: '2', label: 'Tom' },
            { value: '3', label: 'Steven' },
        ],
        placeholder: 'Select option',
    },
    render: ({ ...args }) => <SelectWithState {...args} />,
    tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<TSelectType>;

export const Default: TStory = {};

export const Disabled: TStory = {
    args: {
        disabled: true,
    },
};

export const WithIcon: TStory = {
    args: {
        icon: 'icon',
    },
};
