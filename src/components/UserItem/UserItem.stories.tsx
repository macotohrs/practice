import type { Meta, StoryObj } from "@storybook/react";
import UserItem from "./UserItem";
import { rest } from "msw";

const meta: Meta = {
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
};
export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = (args: { id: string; name: string }) => {
  return <UserItem id={args.id} name={args.name} />;
};

Default.args = {
  id: "100",
  name: "John Doe",
};

export const FetchData: Story = {
  render: (args: { id: string; name: string }) => (
    <>
      {console.log("😄" ,args)}
      <UserItem {...args} id={args.id} name={args.name} />
    </>
  ),
};