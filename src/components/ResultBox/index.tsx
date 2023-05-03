import { useCallback, useMemo, useState } from "react";
import {
  CopyButton,
  LongUrlText,
  ResultBoxContainer,
  ShortUrlText,
} from "./styles";
import { copyTextToClipboard } from "../../helpers/clipboard";

export interface ResultBoxProps {
  url: string;
  shortCode: string;
}

export const ResultBox = ({ url, shortCode }: ResultBoxProps) => {
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
    <ResultBoxContainer>
      <LongUrlText>{url}</LongUrlText>
      <ShortUrlText>{shortUrl}</ShortUrlText>
      <CopyButton onClick={handleOnCopy}>
        {isCopied ? "Copied" : "Copy"}
      </CopyButton>
    </ResultBoxContainer>
  );
};
