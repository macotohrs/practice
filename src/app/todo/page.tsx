"use client";
import { ChangeEvent, useState } from "react";
import { List } from "./List";
import { TodoList } from "./TodoList";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";

const DATA = [
  {
    id: 1,
    name: "title",
  },
  {
    id: 2,
    name: "detail",
  },
  {
    id: 3,
    name: "genre",
  },
  {
    id: 4,
    name: "actor",
  },
  {
    id: 5,
    name: "company",
  },
  {
    id: 6,
    name: "director",
  },
  {
    id: 7,
    name: "music",
  },
  {
    id: 8,
    name: "country",
  },
  {
    id: 9,
    name: "review",
  },
  {
    id: 10,
    name: "score",
  },
];

export interface IData {
  id: number;
  name: string;
  isClicked?: boolean;
}

export interface IForm {
  [key: string]: string | Date;
}

const Page = () => {
  const [list, setList] = useState<IData[]>(DATA);
  const [todo, setTodo] = useState<IData[]>([]);
  const [isClickMakeForm, setClickMakeForm] = useState(false);
  const [submitContent, setSubmitContent] = useState<IForm | null>(null);
  const [text, setText] = useState<IForm[]>([]);

  const onClickList = (li: IData) => {
    const targetIndex = list.findIndex((l) => l.id === li.id);
    if (targetIndex !== -1) {
      const updatedList = list.map((item) =>
        item.id === li.id ? { ...item, isClicked: true } : item
      );
      setList(updatedList);
    }
  };

  const onClickMove = () => {
    const clickedList = list.filter((li) => li.isClicked === true);
    setTodo(todo.concat(clickedList));
    setList(list.filter((li) => li.isClicked !== true));
  };

  const onClickReset = () => {
    setTodo([]);
    setList(
      (prev) => (prev = DATA.map((item) => ({ ...item, isClicked: false })))
    );
    setSubmitContent(null);
    setClickMakeForm(false);
  };

  const onClickMakeForm = () => {
    if (todo.length > 0) {
      setClickMakeForm(true);
    }
  };

  const onClickSubmit = (event: any) => {
    event.preventDefault();
    setClickMakeForm(false);
    if (submitContent) {
      submitContent.timestamp = new Date();
      text.push(submitContent);
      const updateText = [...text];
      console.log(updateText);
      setText(updateText);
    }
    onClickReset();
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>, t: IData) => {
    setSubmitContent((prev) => ({
      ...prev,
      [t.name]: event.target.value,
    }));
  };

  return (
    <div>
      <div className="flex space-x-9">
        <div className="flex flex-col items-center space-y-4 mt-6">
          <List list={list} onClickList={onClickList} />
          <Button
            children={"Move"}
            bgColor={"default"}
            size={"base"}
            handleClick={onClickMove}
          />
          <Button
            children={"Reset"}
            bgColor={"cancel"}
            size={"base"}
            handleClick={onClickReset}
          />
        </div>
        <div className="mt-6 space-y-4 ">
          <List list={todo} />
          <Button
            children={"Create Forms"}
            bgColor={"default"}
            size={"lg"}
            handleClick={onClickMakeForm}
            isDisabled={todo.length === 0}
          />
        </div>
        {isClickMakeForm && (
          <div>
            <div className="flex flex-col h-80 overflow-y-auto mb-4">
              <Textarea list={todo} onChange={onChange} />
            </div>
            <div className="flex justify-end mt-3">
              <Button
                children={"Submit"}
                bgColor={"add"}
                size={"lg"}
                handleClick={(e) => {
                  onClickSubmit(e);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <TodoList text={text} />
      </div>
    </div>
  );
};

export default Page;
