import { useState, useEffect } from "react";

export const useProviderSideBar = () => {
  const [width, setWidth] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(false);
  const handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width === 0) return;
    if (width <= 540) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return { collapse, width, setWidth };
};
