import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    children: "Checkbox Label",
  },
};
