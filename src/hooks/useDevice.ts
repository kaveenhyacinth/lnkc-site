import { useEffect, useState } from "react";
import { DEVICE_TYPE, getDeviceType } from "../helpers/device";
import throttle from "lodash/throttle";

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState<DEVICE_TYPE>(() =>
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const calculateInnerWidth = throttle(() => {
      setDeviceType(getDeviceType(window.innerWidth));
    }, 200);

    window.addEventListener("resize", calculateInnerWidth);
    return () => {
      window.removeEventListener("resize", calculateInnerWidth);
    };
  }, []);

  return { deviceType };
};
