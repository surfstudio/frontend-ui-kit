import type { Meta, StoryObj } from "@storybook/react";
import Index from "../../index.tsx";

type TTypographyTextType = typeof Index.Text;

const meta: Meta<TTypographyTextType> = {
  title: "Atoms/Typography/Text",
  component: Index.Text,
  args: {
    children: "Text",
    color: "black",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
    },
    size: {
      control: {
        type: "select",
      },
    },
    type: {
      control: {
        type: "select",
      },
    },
    fontWeight: {
      control: {
        type: "select",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type TStory = StoryObj<TTypographyTextType>;

export const Default: TStory = {};

export const Uppercase: TStory = {
  args: {
    uppercase: true,
  },
};

export const Small: TStory = {
  args: {
    size: "small",
  },
};

export const Bold: TStory = {
  args: {
    fontWeight: "bold",
  },
};

export const Caption: TStory = {
  args: {
    type: "caption",
  },
};

export const LineThrough: TStory = {
  args: {
    lineThrough: true,
  },
};
