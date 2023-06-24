import type { Meta, StoryObj } from "@storybook/react";

import UserItem from "./UserItem";
import { rest } from "msw";

const meta = {
  title: "UserItem",
  component: UserItem,
  tags: ["autodocs"],
  parameters: {
    msw: [
      rest.get(
        "https://jsonplaceholder.typicode.com/users/2",
        async (req, res, ctx) => {
          const response = await ctx.fetch(req);
          const data = await response.json();
          return res(ctx.json(data));
        }
      ),
    ],
  },
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  render: (args, { loaded: { user } }) => (
    <UserItem id={args.id} name={user.name} />
  ),
  args: {
    id: "100",
    name: "John Doe",
  },
};

export const FetchData: Story = {
  render: (args, { loaded: { user } }) => (
    <UserItem {...args} id={user.id} name={user.name} />
  ),
};
