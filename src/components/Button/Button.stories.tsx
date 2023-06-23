import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "clicked" } },
  parameters: {
    backgrounds: { /// canvas上の背景色を設定できる
      values: [
        { name: 'black', value: '#000' },
        { name: 'pink', value: '#f5b2b2' },
      ],
    },
    layout: 'centered', // ストーリーズを描画する位置を調整できる (padded, fullscreen)
  },
  // decorators: [ // ストーリーズを描画する位置を調整できる (layoutの方が簡単)
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Submit: Story = {
  args: {
    children: "Submit",
  },
  parameters: {
    backgrounds: { // canvas上の背景色の設定はstory単位でできる
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
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
  play: async ({ canvasElement }) => {
    // console.log('canvasElement', canvasElement); // テスト対象のエレメント
    const canvas = within(canvasElement);
    // console.log('canvas', canvas); // テストの関数を参照できる
    const button = await canvas.getByRole('button', {name: 'XXXXXXXXX'});
    // console.log('button', button); // <button></button> 該当のエレメント
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  },
  args: {
    children: 'XXXXXXXXX',
    bgColor: 'danger',
    handleClick: () => alert('click'),
  },
};
