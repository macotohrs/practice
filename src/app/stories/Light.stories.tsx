import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
  },
};

export const Default: StoryObj<typeof Light> = {};

export const Green: StoryObj<typeof Light> = {
  args: {
    variant: "bg-green-600",
  },
};

export const Yellow: StoryObj<typeof Light> = {
  args: {
    variant: "bg-yellow-400",
  },
};

export const Red: StoryObj<typeof Light> = {
  args: {
    variant: "bg-red-600",
  },
};

export const Another: StoryObj<typeof Light> = {
  render: (args) => <Light variant="bg-red-600" />,
};

// export const TrafficLight: StoryObj<typeof Light> = {
//   render: (args) => (
//     <div className="bg-gray-300 rounded-md p-2 flex-col inline-block w-max-content">
//       <Light variant="bg-green-600" />
//       <Light variant="bg-yellow-400" />
//       <Light variant="bg-red-600" />
//     </div>
//   ),
// };
export const TrafficLight = () => {
  return (
    <div className="bg-gray-300 rounded-md p-2 flex-col inline-block w-max-content">
      <Light variant="bg-green-600" />
      <Light variant="bg-yellow-400" />
      <Light variant="bg-red-600" />
    </div>
  );
};
// これだと期待通りに描画される

export default meta;
