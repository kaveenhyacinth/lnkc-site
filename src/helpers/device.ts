export enum DEVICE_TYPE {
  MOBILE = "mobile",
  WEB = "web",
}

export const getDeviceType = (width: number): DEVICE_TYPE => {
  if (width <= 640) {
    return DEVICE_TYPE.MOBILE;
  }
  return DEVICE_TYPE.WEB;
};
