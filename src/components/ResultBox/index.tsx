import {
  CopyButton,
  LongUrlText,
  ResultBoxContainer,
  ShortUrlText,
} from "./styles";

export const ResultBox = () => {
  return (
    <ResultBoxContainer>
      <LongUrlText>https://www.example.com/url?long=true&t=WjiXtfJkmdR-0&uid=mmXrtsddrfg&redirTo</LongUrlText>
      <ShortUrlText>https://lnkc.xyz/lgzfxth4</ShortUrlText>
      <CopyButton>Copy</CopyButton>
    </ResultBoxContainer>
  );
};
