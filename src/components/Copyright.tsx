import styled from "styled-components";

const CopyrightSchema = {
  text: `© ${new Date().getFullYear()} Kaveen Hyacinth. All Rights Reserved.`,
  link: "https://kaveenhyacinth.com",
};

const Text = styled.a`
  position: absolute;
  bottom: 36px;
`;

export const Copyright = () => {
  return (
    <Text href={CopyrightSchema.link} target="_blank">
      {CopyrightSchema.text}
    </Text>
  );
};
