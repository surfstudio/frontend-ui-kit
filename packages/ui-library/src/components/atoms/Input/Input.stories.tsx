import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

type TInputType = typeof Input;

const meta: Meta<TInputType> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type TStory = StoryObj<TInputType>;

export const Default: TStory = {};

export const Error: TStory = {
  args: {
    error: "Error!",
  },
};

export const WithLabel: TStory = {
  args: {
    label: "email",
  },
};
