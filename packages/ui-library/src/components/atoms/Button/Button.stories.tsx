import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import './button.css';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Default button',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        buttonClassName: 'buttonPrimary',
    },
};

export const ButtonVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <Button buttonClassName="buttonPrimary">Primary</Button>
            <Button buttonClassName="buttonSecondary">Secondary</Button>
            <Button buttonClassName="buttonDanger">Danger</Button>
            <Button buttonClassName="buttonOutline">Outline</Button>
        </div>
    ),
};

export const LoadingStates: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <Button
                buttonClassName="buttonPrimary"
                isLoading
            >
                Loading
            </Button>
            <Button
                buttonClassName="buttonSecondary"
                disabled
            >
                Disabled
            </Button>
        </div>
    ),
};
