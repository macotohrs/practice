import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Textarea from "./Textarea";

// meta ＝ storyの設定
const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Textarea",
  parameters: {
    backgrounds: {
      /// canvas上の背景色を設定できる
      values: [
        { name: "black", value: "#000" },
        { name: "pink", value: "#f5b2b2" },
      ],
    },
    layout: "centered", // ストーリーズを描画する位置を調整できる (padded, fullscreen)
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Form: Story = {
  args: {
    list: [
      { id: 1, name: "label 1" },
      { id: 2, name: "label 2" },
      { id: 3, name: "label 3" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = await canvas.findByLabelText("label 1");
    await userEvent.type(element, "email@provider.com");
    await expect(
      canvas.getByDisplayValue("email@provider.com")
    ).toBeInTheDocument();
  },
};
