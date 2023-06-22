"use client";
import Image from "next/image";
import useCountdown from "./useCountdown";

const Page = () => {
  const { count, isClicked, handleClick } = useCountdown();

  return (
    <div
      className="flex flex-col items-center"
      style={{ backfaceVisibility: "hidden" }}
    >
      <div>
        <Image src="/eto_usagi_head.png" alt="Usagi" width={180} height={180} />
      </div>
      <div className="mt-10">{isClicked && count}</div>
      <div className="mt-8">
        <button
          onClick={handleClick}
          className="border-solid border-2 border-white p-6 rounded-full bg-gray-200 text-2xl  font-medium hover:bg-gray-100"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Page;
