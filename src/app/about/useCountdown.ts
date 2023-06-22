import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
  clicked,
  addingCountAtom
} from "../../jotai/atoms";

const useCountdown = () => {
  const [isClicked, setClicked] = useAtom(clicked);
  const [count, add] = useAtom(addingCountAtom);
  const router = useRouter();

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;
    if (isClicked && count > 0) {
      countdownInterval = setInterval(() => {
        add(-1); // countを1ずつ減らす
      }, 1000);
    } else if (isClicked && count === 0) {
      countdownInterval = setTimeout(() => {
        router.push("/about/info");
      }, 4000);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [isClicked, count, router, add]);

  const handleClick = () => {
    setClicked(true);
    add(5);
  };

  return { count , isClicked, handleClick };
};

export default useCountdown;
