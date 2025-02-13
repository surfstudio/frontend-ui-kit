import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxDemo = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            checked={checked}
            onChange={setChecked}
        >
            Default Checkbox
        </Checkbox>
    );
};

const CheckboxGroupDemo = () => {
    const [states, setStates] = useState({
        first: false,
        second: true,
        third: false,
    });

    const handleChange = (key: string) => (checked: boolean) => {
        setStates((prev) => ({ ...prev, [key]: checked }));
    };

    return (
        <div className="checkboxGroup">
            <Checkbox
                checked={states.first}
                onChange={handleChange('first')}
                bordered
                color="#1677ff"
            >
                Bordered with color
            </Checkbox>

            <Checkbox
                checked={states.second}
                onChange={handleChange('second')}
                disabled
            >
                Disabled checkbox
            </Checkbox>

            <Checkbox
                indeterminate
                onChange={handleChange('third')}
            >
                Indeterminate state
            </Checkbox>
        </div>
    );
};

const CustomIconsDemo = () => {
    const [checked, setChecked] = useState(false);

    return (
        <Checkbox
            checked={checked}
            onChange={setChecked}
            checkedIcon="✓"
            uncheckedIcon="○"
            indeterminateIcon="−"
        >
            Custom icons checkbox
        </Checkbox>
    );
};

export const Default: Story = {
    render: () => <CheckboxDemo />,
};

export const States: Story = {
    render: () => <CheckboxGroupDemo />,
};

export const CustomIcons: Story = {
    render: () => <CustomIconsDemo />,
};
