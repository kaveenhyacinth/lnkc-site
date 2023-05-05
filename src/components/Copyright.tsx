import styled from "styled-components";

const CopyrightSchema = {
  text: `© ${new Date().getFullYear()} Kaveen Hyacinth. All Rights Reserved.`,
  link: "https://kaveenhyacinth.com",
};

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 36px;
`;

const Text = styled.a`
  text-align: center;
`;

export const Copyright = () => {
  return (
    <Wrapper>
      <Text href={CopyrightSchema.link} target="_blank">
        {CopyrightSchema.text}
      </Text>
    </Wrapper>
  );
};
