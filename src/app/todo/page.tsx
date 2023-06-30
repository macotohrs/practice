"use client";
import { ChangeEvent, useState } from "react";
import { List } from "./List";
import { TodoList } from "./TodoList";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";
import { useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { clicked } from "../../jotai/atoms";
import {
  IData,
  MOVIE_LIST,
  data,
  submitList,
  text,
  todo as initTodo,
} from "../../jotai/todo";

// Jotaiで管理する ！ テスト作る
const Page = () => {
  const [list, setList] = useAtom(data);
  const [todo, setTodo] = useAtom(initTodo);
  const [isClickMakeForm, setClickMakeForm] = useAtom(clicked);
  const [submitContent, setSubmitContent] = useAtom(submitList);
  const [displayText, setDisplayText] = useAtom(text);
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
      (prev) =>
        (prev = MOVIE_LIST.map((item) => ({ ...item, isClicked: false })))
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
      displayText.push(submitContent);
      const updateText = [...displayText];
      console.log(updateText);
      setDisplayText(updateText);
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
        <TodoList text={displayText} />
      </div>
    </div>
  );
};

export default Page;
