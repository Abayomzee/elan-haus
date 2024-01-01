import { motion } from "framer-motion";
import styled from "styled-components";
import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexJcEndAiCenter,
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

export const MobileNavStyle = styled(motion.div)`
  background-color: var(--color-white);
  position: fixed;
  z-index: 20;
  width: 100vw;
  height: 95vh;
  height: 75svh;
  bottom: 0;
  border-radius: 2.4rem 2.4rem 0 0;
  border: 1px solid var(--color-17);
  overflow-y: auto;

  .top {
    ${FlexJcEndAiCenter}
  }
`;
