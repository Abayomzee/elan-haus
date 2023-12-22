import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }

  &.btn {
    transition: 0.4s;

    /* Type */
    &-1 {
      background-color: var(--color-white);
      padding: 1rem 2.4rem;
    }

    &-2 {
      background-color: var(--color-1);
      padding: 1rem 2.4rem;
      border-radius: 0.8rem;
    }
    &-3 {
      padding: 1rem 2.4rem;
      border-radius: 0.8rem;
      border: 1px solid var(--color-1);
    }
    &-4 {
      background-color: var(--color-1);
      padding: .6rem 1.7rem;
      ${FlexRowAiCenter}
      gap: .8rem;
    }

    /* Colors */

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }

    &-md {
      padding: 0.9rem 2.5rem;
      font-size: 1.3rem;
    }

    &-small,
    &-sm {
      padding: 0.6rem 2.3rem;
      font-size: 1.3rem;
    }
  }
`;
