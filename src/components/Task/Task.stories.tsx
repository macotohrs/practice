import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  argTypes: {
    onArchiveTask: { action: "onArchiveTask" },
    onTogglePinTask: { action: "onTogglePinTask" },
    onEditTitle: { action: "onEditTitle" },
  },
  parameters: {
    backgrounds: {
      // canvas上の背景色の設定はstory単位でできる
      values: [
        { name: "Navy", value: "#06256d" },
        { name: "Gray", value: "#393939" },
      ],
    },
  },
};

export enum State {
  inbox = "TASK_INBOX",
  pinned = "TASK_PINNED",
  archived = "TASK_ARCHIVED",
}

export const Default = {
  args: {
    tasks: [
      { id: "1", state: State.inbox, title: "Build a date picker" },
      { id: "2", state: State.inbox, title: "QA dropdown" },
      {
        id: "3",
        state: State.inbox,
        title: "Write a schema for account avatar component",
      },
      { id: "4", state: State.inbox, title: "Export logo" },
      { id: "5", state: State.inbox, title: "Fix bug in input error state" },
      {
        id: "6",
        state: State.inbox,
        title: "Draft monthly blog to customers",
      },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      {
        id: "6",
        title: "Draft monthly blog to customers",
        state: "TASK_PINNED",
      },
      ...Default.args.tasks.slice(0, 5),
    ],
  },
};

export const Pinned = {
  args: {
    tasks: [
      {
        id: "8",
        title: "QA dropdown",
        state: State.pinned,
      },
    ],
  },
};
console.log("Pinned",Pinned)
// Pinned 
export const Archived = {
  args: {
    tasks: [
      {
        id: "9",
        title: "Write schema for account menu",
        state: State.archived,
      },
    ],
  },
};

const longTitleString = `This task"s name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = {
  args: {
    tasks: [
      {
        id: "10",
        title: longTitleString,
        state: State.inbox,
      },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
    empty: false,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
    empty: true,
  },
};

