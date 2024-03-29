import { FlexRowJcCenterAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-block: 6rem;
`;

export const Container = styled.section`
  ${FlexRowJcCenterAiCenter}
  flex-wrap: wrap;
  gap: 8rem;
`;
