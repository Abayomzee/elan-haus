import {
  FlexColumn,
  FlexRow,
  FlexRowJcBetween,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.footer`
  background: var(--color-white);
  padding-block: 8rem;
`;

export const Container = styled(Center)`
  .top {
    ${FlexRowJcBetween}
    gap: 2rem;
    padding-bottom: 7rem;
    border-bottom: 1px solid var(--color-9);

    .ctas {
      ${FlexRow}
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .socials {
      ${FlexRow}
      gap: 1.7rem;
      margin-top: 6.5rem;
    }

    &__right {
      ${FlexRow}
      gap: 8rem;

      & > * {
        ${FlexColumn}
        gap: 2.2rem;
      }
    }
  }

  .bottom {
    ${FlexRowJcBetweenAiCenter}
    gap: 2rem;
    padding-top: 3rem;
  }
`;
