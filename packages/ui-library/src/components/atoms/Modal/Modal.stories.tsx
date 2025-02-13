import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal, { ModalProps } from "./index";

type TModalType = typeof Modal;

const ModalStory = ({ children, ...args }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal {...args} isOpen={isOpen} onCancel={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

const meta: Meta<TModalType> = {
  title: "Atoms/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    title: "Modal title",
    children: "Modal content",
  },
  render: ModalStory,
};

export default meta;

type TStory = StoryObj<TModalType>;

export const Default: TStory = {};

export const Centered: TStory = {
  args: {
    centered: true,
  },
};

export const NotCloseIcon: TStory = {
  args: {
    isCloseIcon: false,
  },
};
