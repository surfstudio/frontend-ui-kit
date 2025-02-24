import type { Meta, StoryObj } from '@storybook/react';
import Input from './index.tsx';
import './Input.css';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter email',
        error: 'Invalid email address',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password',
    },
};

export const InputVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input placeholder="Default input" />
            <Input label="With Label" placeholder="Labeled input" />
            <Input label="With Error" placeholder="Error input" error="This is an error message" />
            <Input label="Password" type="password" placeholder="Password input" />
        </div>
    ),
};
