import type { Meta, StoryObj } from "@storybook/react";
import Index from "../../index.tsx";
import type { TLevel } from "./Title";

type TTypographyTitleType = typeof Index.Title;

const meta: Meta<TTypographyTitleType> = {
  title: "Atoms/Typography/Title",
  component: Index.Title,
  args: {
    color: "black",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
    },
    level: {
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

type TStory = StoryObj<TTypographyTitleType>;

export const Default: TStory = {
  args: {
    children: "Title",
  },
};

export const Levels: TStory = {
  render: () => (
    <div>
      {Array.from({ length: 5 }, (_, index) => index + 1).map((level) => (
        <div key={level} style={{ display: "flex", gap: "8px" }}>
          <span>Level {level}:</span>
          <Index.Title level={level as TLevel}>Title</Index.Title>
        </div>
      ))}
    </div>
  ),
};

export const NoUppercase: TStory = {
  args: {
    ...Default.args,
    uppercase: false,
  },
};

export const Bold: TStory = {
  args: {
    ...Default.args,
    fontWeight: "bold",
  },
};
