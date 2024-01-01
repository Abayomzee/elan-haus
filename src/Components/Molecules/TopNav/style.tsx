import styled from "styled-components";
import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";

export const Wrapper = styled.nav`
  padding-block: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;

  .burger {
    display: none;
    ${responsive("sm", "display: block")}
  }
`;

export const Links = styled.div`
  ${FlexRowAiCenter}
  gap: 4rem;

  ${responsive("sm", "display: none")}
`;
