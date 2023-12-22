import {
  FlexColumn,
  FlexRow,
  FlexRowJcBetween,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section {
    &__work-with {
      padding-block: 10rem;
    }
    &__services {
      padding-top: 3rem;
      padding-bottom: 9rem;
    }
    &__collaborate {
      max-height: 41.4rem;
      width: 100%;

      img {
        ${ImageDefault}
      }
    }
  }
`;

export const Container = styled(Center)`
  &.container {
    &__header {
      padding-block: 9rem;
    }
  }
`;

// Header
export const Header = styled.header`
  background-color: var(--color-black);
`;

export const HeaderContainer = styled(Center)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;
  padding-block: 10rem;

  .header-img {
    max-width: 40rem;
    max-height: 40rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const SectionWhatWeDo = styled.section`
  padding-top: 10rem;
  background-color: var(--color-3);

  .bottom {
    ${FlexRow}
    gap: 8rem;

    &__left {
      width: 748px;
      height: 811px;
      flex-shrink: 0;

      img {
        ${ImageDefault}
      }
    }

    &__right {
      flex-grow: 1;
      background-image: url("/assets/images/what-we-do-img-2.png");
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: 50.0133rem 54.7rem;
    }
  }
`;

export const Clients = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7rem;

  .texts {
    background-color: var(--color-3);
    ${FlexColumn}
    justify-content: flex-end;
    padding: 5rem;
  }

  .img {
    height: 33.7rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const ServicesContainer = styled(Center)`
  ${FlexRowJcBetween}
  gap: 3rem;

  .left__img {
    width: 189.731px;
    height: 209px;

    img {
      ${ImageDefault}
    }
  }

  .right {
    ${FlexRow}
    gap:7rem;

    & > * {
      ${FlexColumn}
      gap: 2rem;
    }
  }
`;
