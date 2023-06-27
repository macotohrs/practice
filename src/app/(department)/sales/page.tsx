"use client";
import { useAtom } from "jotai";
import Button from "../../../components/Button/Button";
import { counterAtom } from "../../../jotai/atoms";

const Sales = () => {
  const [count, setCount] = useAtom(counterAtom);
  const click = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl text-yellow-400">Sales</h1>
        <h2>Route Group</h2>
        <h2>(marketing)の直下には複数のディレクトリを配置することができる</h2>
        <p className="font-thin mt-2">
          ()で囲んだディレクトリはルーティングのパスに影響を与えないので <br />
          (marketing)を省いて/salesアクセスできる
        </p>
        <p>
          ()を使用したディレクトリ内に、pageディレクトリを作成することを Route
          Groupという
        </p>
      </div>
      <div className="mt-10 text-center">
        <h2>Use Story book button</h2>
        <p className="m-3 text-yellow-400 text-xl">{count}</p>
        <Button
          children={"Storybookで作ったボタン"}
          bgColor={"add"}
          size={"lg"}
          handleClick={click}
        />
      </div>
    </div>
  );
};

export default Sales;
