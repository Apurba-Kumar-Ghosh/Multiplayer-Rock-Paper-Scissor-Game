import { useCallback, useLayoutEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updatedDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", updatedDimensions);

    return () => window.removeEventListener("resize", updatedDimensions);
  }, [updatedDimensions]);

  return dimensions;
};
