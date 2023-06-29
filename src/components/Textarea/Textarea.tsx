import React, { ChangeEvent } from "react";

type IData = {
  id: number;
  name: string;
  isClicked?: boolean;
};

type TextareaProps = {
  list: IData[];
  onChange: (event: ChangeEvent<HTMLTextAreaElement>, t: IData) => void;
};

const Textarea: React.FC<TextareaProps> = ({ list, onChange }) => {
  return (
    <form className="flex flex-col space-y-4">
      {list.map((t, index) => (
        <div key={index} className="flex flex-col mb-4">
          <label htmlFor={t.name} className="text-pink-700">
            {t.name}
          </label>
          <textarea
            id={t.name}
            rows={3}
            className="text-gray-500 bg-pink-50 border-pink-200 focus:ring-pink-200 p-2"
            onChange={(event) => {
              onChange(event, t);
            }}
          />
        </div>
      ))}
    </form>
  );
};

export default Textarea;
