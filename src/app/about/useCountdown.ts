import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useAtom, atom } from "jotai";

const useCountdown = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (isClicked && count > 0) {
      countdownInterval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (isClicked && count === 0) {
      countdownInterval = setTimeout(() => {
        router.push("/about/info");
      }, 5000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isClicked, count, router]);

  const handleClick = () => {
    setClicked(true);
    setCount(5);
  };

  return { count, isClicked, handleClick };
};

export default useCountdown;
