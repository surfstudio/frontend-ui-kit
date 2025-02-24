import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '.';
import './Checkbox.css';

const meta: Meta<typeof Checkbox> = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.3333 4L6 11.3333L2.66667 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const UncheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const CheckboxWithState = ({ ...args }) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
    render: () => (
        <CheckboxWithState checkedIcon={<CheckIcon />} uncheckedIcon={<UncheckIcon />}>
            Default Checkbox
        </CheckboxWithState>
    ),
};

export const Bordered: Story = {
    render: () => (
        <CheckboxWithState bordered color="#1677ff" checkedIcon={<CheckIcon />} uncheckedIcon={<UncheckIcon />}>
            Bordered Checkbox
        </CheckboxWithState>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Checkbox disabled checkedIcon={<CheckIcon />} uncheckedIcon={<UncheckIcon />}>
            Disabled Checkbox
        </Checkbox>
    ),
};

export const Checked: Story = {
    render: () => (
        <Checkbox checked checkedIcon={<CheckIcon />} uncheckedIcon={<UncheckIcon />}>
            Checked Checkbox
        </Checkbox>
    ),
};
