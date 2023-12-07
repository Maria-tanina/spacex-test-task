import styled from "styled-components";

export const Container = styled.div(
  ({ theme: { sizes } }) => `
    max-width: ${sizes.container.width};
    margin: 0 auto;
    padding: 0 15px;
    height: 100%;
`
);
