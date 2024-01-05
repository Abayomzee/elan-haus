import { GridCenter, ImageDefault } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100svh;
  position: fixed;
  inset: 0;

  ${GridCenter}

  .image-container {
    width: 247px;
    height: 161px;
    img {
      ${ImageDefault}
    }
  }
`;
