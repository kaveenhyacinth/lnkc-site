import { DEVICE_TYPE } from "../helpers/device";
import { useDevice } from "../hooks/useDevice";

export interface DeviceWrapperProps<T> {
  web?: (props: T) => JSX.Element;
  mobile?: (props: T) => JSX.Element;
}

export const DeviceWrapper = <T,>({
  web: Web,
  mobile: Mobile,
  ...rest
}: DeviceWrapperProps<T> & T) => {
  const { deviceType } = useDevice();

  if (deviceType === DEVICE_TYPE.MOBILE && Mobile)
    return <Mobile {...(rest as any)} />;
  if (Web) return <Web {...(rest as any)} />;
  return <></>;
};
