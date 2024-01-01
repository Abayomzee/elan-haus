import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexJcEndAiCenter } from "Styles/Abstract/Mixins";

// Center modal
export const CenterModalWrapper = styled(motion.div)`
  /* width: 45rem; */
  padding: 3rem;
  max-width: 80rem;
  padding-top: 2rem;
  background-color: var(--color-white);
  border-radius: 1.2rem;

  flex-basis: 80rem;

  .top {
    ${FlexJcEndAiCenter}
    margin-bottom: 3rem;
  }
`;
