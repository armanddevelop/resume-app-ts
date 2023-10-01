import { useState, useEffect } from "react";

export const useProviderSideBar = () => {
  const [toggled, setToggle] = useState<boolean>(false);
  const [breakpoint, setBreakPoint] = useState<boolean>(
    window.matchMedia("(max-width: 800px)").matches
  );
  const handleResize = () =>
    setBreakPoint(window.matchMedia("(max-width: 800px)").matches);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return {
    toggled,
    setToggle,
    breakpoint,
    setBreakPoint,
  };
};
