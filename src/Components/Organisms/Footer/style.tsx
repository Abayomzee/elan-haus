import { responsive } from "Styles/Abstract/Breakpoints";
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

    ${responsive("sm", "flex-direction: column; gap: 4rem;")}

    .ctas {
      ${FlexRow}
      gap: 1.5rem;
      margin-top: 4rem;

      ${responsive("xsm", "flex-direction: column;")}
    }
    .socials {
      ${FlexRow}
      gap: 1.7rem;
      margin-top: 6.5rem;
    }

    &__right {
      ${FlexRow}
      gap: 8rem;

      ${responsive("xsm", "flex-direction: column; gap: 4rem;")}

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

    ${responsive("sm", "flex-direction: column; align-items: flex-start")}
  }
`;
