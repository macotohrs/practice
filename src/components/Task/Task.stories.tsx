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
    backgrounds: { // canvas上の背景色の設定はstory単位でできる
      values: [
        { name: 'Navy', value: '#06256d' },
        { name: 'Gray', value: '#393939' },
      ],
    },
  },
};

export enum State {
  inbox = 'TASK_INBOX',
  pinned = 'TASK_PINNED',
  archived = 'TASK_ARCHIVED',
}

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Buy milk",
      state: State.inbox,
    },
  },
};

export const Pinned = {
  args: {
    task: {
      id: "2",
      title: "QA dropdown",
      state: State.pinned
    },
  },
};

export const Archived = {
  args: {
    task: {
      id: "3",
      title: "Write schema for account menu",
      state: State.archived
    },
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = {
  args: {
    task: {
      id: '4',
      title: longTitleString,
      state: State.inbox
    },
  },
};