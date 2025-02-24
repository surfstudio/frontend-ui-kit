import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './index.tsx';
import './Modal.css';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper компонент для управления состоянием модального окна
const ModalWrapper = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal {...props} isOpen={isOpen} onCancel={() => setIsOpen(false)} />
        </>
    );
};

export const Default: Story = {
    render: () => (
        <ModalWrapper title="Default Modal">
            <p>This is a default modal content</p>
        </ModalWrapper>
    ),
};

export const Centered: Story = {
    render: () => (
        <ModalWrapper title="Centered Modal" centered>
            <p>This modal is centered vertically</p>
        </ModalWrapper>
    ),
};

export const CustomWidth: Story = {
    render: () => (
        <ModalWrapper title="Wide Modal" width={800}>
            <p>This modal has custom width of 800px</p>
        </ModalWrapper>
    ),
};
