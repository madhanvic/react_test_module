import { useEffect, useState } from "react";

const useFindBreakPoint = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const screenListner = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    window.addEventListener("resize", screenListner);

    return () => {
      window.removeEventListener("resize", screenListner);
    };
  }, []);
  return width;
};

export { useFindBreakPoint };
