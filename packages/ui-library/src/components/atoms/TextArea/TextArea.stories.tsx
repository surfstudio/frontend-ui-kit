import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./index";

type TTextAreaType = typeof TextArea;

const meta: Meta<TTextAreaType> = {
  title: "Atoms/TextArea",
  component: TextArea,
  args: {
    placeholder: "Enter text...",
  },
  tags: ["autodocs"],
};

export default meta;

type TStory = StoryObj<TTextAreaType>;

export const Default: TStory = {};

export const Error: TStory = {
  args: {
    error: true,
  },
};

export const Disabled: TStory = {
  args: {
    disabled: true,
  },
};
