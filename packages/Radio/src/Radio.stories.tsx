import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from '.';
import './Radio.css';

const meta: Meta<typeof Radio> = {
    title: 'Atoms/Radio',
    component: Radio,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        name: 'radio-group',
        value: 'option1',
        title: 'Radio Option',
        text: 'Description text',
    },
};

const RadioDemo = () => {
    const [selectedValue, setSelectedValue] = useState('1');

    return (
        <div className="radioGroup">
            <Radio
                value="1"
                name="demo"
                checked={selectedValue === '1'}
                onChange={setSelectedValue}
                title="First Option"
                text="This is a description for the first option"
            />
            <Radio
                value="2"
                name="demo"
                checked={selectedValue === '2'}
                onChange={setSelectedValue}
                title="Second Option"
                text="This is a description for the second option"
            />
        </div>
    );
};

export const Demo: Story = {
    render: () => <RadioDemo />,
};

const RadioDemoWithExtra = () => {
    const [selectedValue, setSelectedValue] = useState('1');

    return (
        <div className="radioGroup">
            <Radio
                value="1"
                name="demo"
                checked={selectedValue === '1'}
                onChange={setSelectedValue}
                title="First Option"
                text="This is a description for the first option"
            />
            <Radio
                value="2"
                name="demo"
                checked={selectedValue === '2'}
                onChange={setSelectedValue}
                title="Second Option"
                text="This is a description for the second option"
            />
        </div>
    );
};

// Новая история с bordered и extra контентом
const RadioWithExtraDemo = () => {
    const [selectedValue, setSelectedValue] = useState('1');

    return (
        <div className="radioGroup">
            <Radio
                value="1"
                name="extra-demo"
                checked={selectedValue === '1'}
                onChange={setSelectedValue}
                title="Premium Plan"
                text="Get access to all premium features"
                bordered
                extra={
                    <div className="extraContent">
                        <span className="price">$19.99/month</span>
                        <ul>
                            <li>Unlimited access</li>
                            <li>Priority support</li>
                            <li>Custom themes</li>
                        </ul>
                    </div>
                }
            />
            <Radio
                value="2"
                name="extra-demo"
                checked={selectedValue === '2'}
                onChange={setSelectedValue}
                title="Basic Plan"
                text="Standard features for starters"
                bordered
                extra={
                    <div className="extraContent">
                        <span className="price">$9.99/month</span>
                        <ul>
                            <li>Basic access</li>
                            <li>Email support</li>
                            <li>Standard themes</li>
                        </ul>
                    </div>
                }
            />
        </div>
    );
};

export const WithExtraContent: Story = {
    render: () => <RadioWithExtraDemo />,
};
