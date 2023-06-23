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

// args → Button.tsxで定義したButton関数の引数の型と合わせる。別のストーリーでも利用可能
// export const Default: Story = {
//   args: {
//     children: "Default", // 表示する文字列
//     // bgColor: "bg-violet-500 hover:bg-violet-400", // Button.tsxで定義したButton関数の引数にdefault値が設定してあるため不要
//   },
// };

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
    ...Plus.args, // スプレッドを使用して引き継ぐことができる
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
