import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "clicked" } },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Submit: Story = {
  args: {
    children: "Submit",
  },
};

export const SubmitLarge: Story = {
  args: {
    children: "Submit",
    size: "lg",
  },
};

export const SubmitSmall: Story = {
  args: {
    children: "Submit",
    size: "sm",
  },
};

export const Reset: Story = {
  args: {
    children: "Reset",
    bgColor: "cancel", // cssに定義したクラス名
    // bgColor: "bg-gray-500 hover:bg-gray-400",
  },
};

export const Double: Story = {
  args: {
    children: "Double",
    bgColor: "add",
    // bgColor: "bg-blue-500 hover:bg-blue-400",
  },
};

export const Plus: Story = {
  args: {
    children: "+1",
    bgColor: "add",
    size: "roundWidth",
    round: "round",
  },
};

export const Minus: Story = {
  args: {
    ...Plus.args, // スプレッドを使用して他のストーリーからargs(スタイルなど)を引き継ぐことができる
    children: "-1",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete",
    bgColor: "danger",
  },
};

export const Another: Story = {
  render: (args) => <Button bgColor="danger">{args.children}</Button>,
  args: {
    children: "Another",
  },
};
