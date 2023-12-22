import { FlexRowJcCenterAiCenter, ImageDefault } from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  padding-block: 8rem;
  border-bottom: 1px solid var(--color-13);
`;

export const Header = styled.header`
  background-color: var(--color-3);
`;

export const Container = styled(Center)`
  &.container {
    &__header {
      padding-block: 8rem;
    }
  }
`;

export const WorkBox = styled(Center)`
  ${FlexRowJcCenterAiCenter}
  gap: 6rem;

  .image-container {
    max-width: 647px;
    max-height: 561px;

    img {
      ${ImageDefault}
    }
  }
`;
