import React from "react";
import { State } from "./Task.stories";
import "./Task.css";
import { FaTrash } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: (action: string, id: string) => void;
  onTogglePinTask: (state: string, id: string) => void;
  onEditTitle: (value: string, id: string) => void;
  onDeleteTask: (id: string) => void;
  loading?: boolean;
  empty?: boolean;
  error?: boolean;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onTogglePinTask,
  onEditTitle,
  onDeleteTask,
}) => {
  return (
    <div
      className={`list-item border border-gray-300 p-4 bg-white ${state} flex items-center justify-between`}
      role="listitem"
      aria-label={`task-${id}`}
    >
      <div className="flex items-center">
        <label
          htmlFor="checked"
          aria-label={`archiveTask-${id}`}
          className="checkbox mr-2"
        >
          <input
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === State.archived}
          />
          <span
            className="checkbox-custom"
            onClick={() => onArchiveTask(State.archived, id)}
            role="button"
            aria-label={`archiveButton-${id}`}
          />
        </label>
        <label htmlFor="title" aria-label={title} className="title">
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Input title"
            style={{ textOverflow: "ellipsis" }}
            onChange={(e) => onEditTitle(e.target.value, id)}
          />
        </label>
        <button
          aria-label="delete"
          className="delete-button ml-auto"
          onClick={() => onDeleteTask(id)}
        >
          <FaTrash className="text-gray-400" />
        </button>
        {state !== State.archived && (
          <button
            className="pin-button"
            onClick={() => onTogglePinTask(state, id)}
            id={`pinTask-${id}`}
            aria-label={state === State.pinned ? "pin" : "unpin"}
            key={`pinTask-${id}`}
          >
            <span
              className={
                state === State.pinned ? `text-orange-300` : `text-slate-400`
              }
            >
              <AiFillStar />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

interface TasksProps {
  tasks: {
    id: string;
    title: string;
    state: string;
  }[];
  onArchiveTask: (action: string, id: string) => void;
  onTogglePinTask: (state: string, id: string) => void;
  onEditTitle: (value: string, id: string) => void;
  onDeleteTask: (id: string) => void;
  loading?: boolean;
  empty?: boolean;
  error?: boolean;
}

const Tasks: React.FC<TasksProps> = ({
  tasks,
  onArchiveTask,
  onTogglePinTask,
  onEditTitle,
  onDeleteTask,
  loading = false,
  empty = false,
  error = false,
}) => {
  if (empty) {
    return (
      <div className="flex justify-center items-center h-screen font-bold">
        <AiOutlineCheck className="text-5xl text-green-400 mr-1" />
        You have no tasks!
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-bold">
        <div className="animate-jump text-4xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen font-bold text-red-500">
        Oh no! An error occurred while loading tasks.
      </div>
    );
  }

  return tasks.map((task, index) => (
    <Task
      key={index}
      task={task}
      onArchiveTask={onArchiveTask}
      onTogglePinTask={onTogglePinTask}
      onEditTitle={onEditTitle}
      onDeleteTask={onDeleteTask}
    />
  ));
};


export default Tasks;
