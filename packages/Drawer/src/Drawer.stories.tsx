import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from '.';
import './Drawer.css';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const WithoutHeaderDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Drawer</button>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                content={<div>Drawer without header</div>}
                footer={<button onClick={() => setIsOpen(false)}>Close</button>}
            />
        </div>
    );
};

const OnlyContentDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Drawer</button>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                content={<div>Only content, no header or footer</div>}
            />
        </div>
    );
};

export const Default: Story = {
    render: () => <DrawerDemo />,
};

export const WithoutHeader: Story = {
    render: () => <WithoutHeaderDemo />,
};

export const OnlyContent: Story = {
    render: () => <OnlyContentDemo />,
};

const DrawerDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Drawer</button>

            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                header={<h2>Drawer Header</h2>}
                content={
                    <div>
                        <p>This is the main content of the drawer</p>
                        <p>You can put anything here</p>
                    </div>
                }
                footer={<button onClick={() => setIsOpen(false)}>Close Drawer</button>}
            />
        </div>
    );
};
