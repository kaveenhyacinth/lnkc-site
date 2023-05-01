import { TextInput, ComboContainer, InlineButon } from "./styles";

export const ComboTextField = () => {
  return (
    <ComboContainer>
      <TextInput name="url" placeholder="Drop your complicated URL here..." />
      <InlineButon>Shorten</InlineButon>
    </ComboContainer>
  );
};
