import { ChangeEvent, useCallback, useState } from "react";
import { CreateLinkPayloadContract } from "../../services/link.service";
import { TextInput, ComboContainer, InlineButon } from "./styles";
import { Loader } from "../Loader";

export interface ComboTextFieldProps {
  isLoading: boolean;
  onSubmit: (payload: CreateLinkPayloadContract) => void;
}

export const ComboTextField = ({
  isLoading,
  onSubmit,
}: ComboTextFieldProps) => {
  const [url, setUrl] = useState("");

  const handleOnChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUrl(target?.value ?? "");
  };

  const handleOnSubmit = useCallback(() => {
    if (isLoading) return;
    onSubmit({ url });
  }, [isLoading, onSubmit, url]);

  return (
    <ComboContainer>
      <TextInput
        name="url"
        placeholder="Drop your complicated URL here..."
        value={url}
        onChange={handleOnChangeInput}
      />
      <InlineButon disabled={isLoading} onClick={handleOnSubmit}>
        {isLoading ? <Loader /> : "Shorten"}
      </InlineButon>
    </ComboContainer>
  );
};
