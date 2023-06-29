"use client";
import { useState } from "react";

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

interface IData {
  id: number;
  name: string;
  isClicked?: boolean;
}

interface IForm {
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
    // 参照先が元のオブジェクト（DATA 配列内の各要素）のままのため、DATAにはisClickedがtrueの値が入ってしまったままである
    // → ディープコピーを行い、isClickedをfalseに戻してからsetしなければならない
    // ステートの正確性を確保するために、以下のような関数形式の更新がbetter
    setList(
      (prev) => (prev = DATA.map((item) => ({ ...item, isClicked: false })))
    );
    setSubmitContent(null);
  };

  const onClickMakeForm = () => {
    setClickMakeForm(true);
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

  return (
    <div className="flex space-x-9">
      <div>
        <ul className="list bg-pink-100 p-3 h-52 overflow-y-auto w-40">
          {list.map((li) => (
            <li
              key={li.id}
              className={`flex space-x-2 text-gray-400 hover:bg-pink-200 ${
                li.isClicked && "text-red-500 "
              }`}
              onClick={() => onClickList(li)}
            >
              <span>{li.id}</span>
              <span>{li.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center space-y-20">
        <button
          onClick={onClickMove}
          className="p-2 w-full bg-purple-500 text-white uppercase hover:shadow-md"
        >
          Move
        </button>
        <button
          onClick={onClickReset}
          className="p-2 w-full bg-red-500 text-white uppercase hover:shadow-md"
        >
          Reset
        </button>
      </div>
      <div>
        <ul className="list bg-pink-100 p-3 h-52 overflow-y-auto w-40">
          {todo.map((td) => (
            <li
              key={td.id}
              className="flex space-x-2 text-gray-400 hover:bg-pink-200"
              onClick={() => {
                // onClickList(td);
              }}
            >
              <span>{td.id}</span>
              <span>{td.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={onClickMakeForm}
          className="p-2 w-full bg-purple-500 text-white uppercase hover:shadow-md"
        >
          Make Forms
        </button>
      </div>
      <form className="flex flex-col space-y-4">
        {isClickMakeForm &&
          todo.map((t, index) => (
            <div key={t.id} className="flex flex-col mb-4">
              <label htmlFor={t.name} className="text-pink-700">
                {t.name}
              </label>
              <textarea
                id={t.name}
                rows={3}
                className="text-gray-500 bg-pink-50 border-pink-200 focus:ring-pink-200 p-2"
                onChange={(event) => {
                  setSubmitContent((prev) => ({
                    ...prev,
                    [t.name]: event.target.value,
                  }));
                }}
              />
            </div>
          ))}
        <div>
          <button
            onClick={(e) => {
              onClickSubmit(e);
            }}
            className="p-2 w-full bg-purple-500 text-white uppercase hover:shadow-md"
          >
            Submit
          </button>
          <div>
            <div>
              {text.map((tx, index) => (
                <div key={index}>
                  {Object.keys(tx).map((key) => (
                    <div key={key}>
                      {tx[key] instanceof Date ? (
                        <span className="text-gray-300">
                          {new Date(tx[key]).toLocaleTimeString()}
                        </span>
                      ) : (
                        <>
                          <div className="font-bold">{key}: </div>
                          <div>{tx[key].toString()}</div>
                        </>
                      )}
                    </div>
                  ))}
                  {index !== text.length - 1 && <hr className="m-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
