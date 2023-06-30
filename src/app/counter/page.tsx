"use client";
import { useAtom, atom } from "jotai";
import {
  counterAtom,
  increment,
  countedNumber,
  clicked,
} from "../../jotai/atoms";
import Image from "next/image";

function Counter() {
  const [count, setCount] = useAtom(counterAtom);
  const [incrementAmount, setIncrementAmount] = useAtom(increment);
  const [countedPlates, setCountedPlates] = useAtom(countedNumber);
  const [isDouble, setIsDouble] = useAtom(clicked);

  const isDisabled = count <= 0 && incrementAmount <= 0;
  const doublePlates = atom((get) => get(counterAtom) * 2);
  // get は、atom が参照する他の atom の値を取得するための関数
  // get は引数として任意の atom を受け取り、その atom の現在の値を返す関数
  // したがって、get(counterAtom) は counterAtom の現在の値を取得します

  const onIncrement = () => {
    setCount((prev) => prev + incrementAmount);
    setIsDouble(true);
  };

  const onClickDouble = () => {
    if (count > 0) {
      setCount((prev) => prev * 2);
      setIsDouble(true);
    }
  };

  const submitPlates = () => {
    if (isDisabled) {
      alert("Please enter a value before submitting!");
    }
    const num = count + incrementAmount;
    countedPlates.push(num);
    setCountedPlates(countedPlates);
    setCount(0);
    setIncrementAmount(0);
    setIsDouble(false);
  };

  const DoublePlates = () => {
    const [doubledCount] = useAtom(doublePlates);

    return (
      <div>
        <span>{`count x 2 = ${doubledCount}`}</span>
        <Image src="/osara_yamadumi.png" alt="Plate" width={300} height={100} />
      </div>
    );
  };

  return (
    <>
      <div className="">
        {isDouble && <DoublePlates />}
        <h1 className="text-3xl">Count: {count}</h1>
        <Image
          src="/monogatari_okikusan.png"
          alt="Cat"
          width={300}
          height={100}
        />
        <div className="flex space-x-4 mt-5 mb-8 w-1/2 place-content-evenly">
          <button
            className="bg-blue-600 hover:bg-blue-500 px-2 py-2 rounded-full w-12 h-12"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +1
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 px-2 py-2 rounded-full w-12 h-12"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -1
          </button>
          <button
            className="p-3 rounded-full bg-blue-600 hover:bg-violet-400 mr-5 w-28"
            onClick={() => onClickDouble()}
          >
            Double
          </button>
        </div>
        <div className="mb-7">
          <label className="block mb-7">
            ▼ Please input any number you want to add
          </label>
          <input
            placeholder="Number"
            type="number"
            className="text-cyan-700 mr-2 p-3 rounded-md"
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            value={incrementAmount}
          />
          <button
            className="p-3 rounded-md bg-violet-300 hover:bg-violet-400 mr-5"
            onClick={() => onIncrement()}
          >
            Add
          </button>
          <button
            className="p-3 rounded-full bg-violet-500 hover:bg-violet-400 mr-2 w-28"
            onClick={() => submitPlates()}
          >
            Submit
          </button>
          <button
            className="p-3 rounded-full bg-gray-500 hover:bg-gray-400 w-28"
            onClick={() => {
              setIncrementAmount(0);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
        <div>
          {countedPlates.map(
            (plate, index) =>
              plate > 0 && (
                <div key={index} className="flex items-center">
                  <Image
                    className="mr-3"
                    src="/plate.png"
                    alt="plate"
                    width={50}
                    height={50}
                  />
                  <span className="text-xl">{`I counted ${plate} plates.`}</span>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
export default Counter;
