import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Content = () => {
  const count = useSelector((state: RootState) => state.counter.value); // アクセスするためのhooks (redux)
  const dispatch = useDispatch(); // アクセスするためのhooks (redux)
  const [incrementAmount, setIncrementAmount] = useState("5");
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="m-4">
        <h1>TaskBox</h1>
        <input
          type="text"
          className=" text-black w-8 text-center mr-1"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="bg-green-500 text-white p-2 mr-5"
          onClick={() => dispatch(increment())}
        >
          タスク追加
        </button>

        <div>count: {count}</div>
        <button
          className="bg-green-500 text-white p-2 mr-5"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-purple-500 text-white p-2 mr-5"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <input
          type="text"
          className=" text-black w-8 text-center mr-1"
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 text-white p-2 "
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          追加
        </button>
      </div>
      <div className="m-4">
        <h1>DONE</h1>
        <div></div>
      </div>
    </>
  );
};

export default Content;
