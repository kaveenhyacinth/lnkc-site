import { useCallback, useMemo, useState } from "react";
import { copyTextToClipboard } from "../../helpers/clipboard";
import { DeviceWrapper } from "../DeviceWrapper";
import { ResultBoxWeb } from "./ResultBox.web";
import { ResultBoxMobile } from "./ResultBox.mobile";

export interface ResultBoxProps {
  url: string;
  shortUrl: string;
  isCopied: boolean;
  onCopy: () => void;
}

interface _ResultBoxProps {
  url: string;
  shortCode: string;
}

const ExtendedDeviceWrapper = DeviceWrapper<ResultBoxProps>;

export const ResultBox = ({ url, shortCode }: _ResultBoxProps) => {
  const [isCopied, setCopied] = useState<boolean>(false);

  const shortUrl = useMemo(
    () => `${process.env.REACT_APP_API_BASE_URL}/${shortCode}`,
    [shortCode]
  );

  const handleOnCopy = useCallback(async () => {
    try {
      await copyTextToClipboard(shortUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  }, [shortUrl]);

  return (
    <ExtendedDeviceWrapper
      web={ResultBoxWeb}
      mobile={ResultBoxMobile}
      url={url}
      shortUrl={shortUrl}
      isCopied={isCopied}
      onCopy={handleOnCopy}
    />
  );
};
