import React from "react";
import { State } from "./Task.stories";
import "./Task.css";
import { FaTrash } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

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
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onTogglePinTask,
  onEditTitle,
  onDeleteTask,
}) => {
  return  (
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
          aria-label={state === State.pinned ? "unpin" : "pin"}
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

export default Task;
