import { DEVICE_TYPE } from "../../helpers/device";
import { useDevice } from "../../hooks/useDevice";
import { UrlShortenerForMobile } from "./UrlShortener.mobile";
import { UrlShortnerForWeb } from "./UrlShortener.web";

export const UrlShortener = () => {
  const { deviceType } = useDevice();
  if (deviceType === DEVICE_TYPE.MOBILE) return <UrlShortenerForMobile />;
  return <UrlShortnerForWeb />;
};
