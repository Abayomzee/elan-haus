import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumn,
  FlexRow,
  FlexRowJcBetween,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterExtended } from "Styles/layouts/Center";
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

export const ContainerBig = styled(CenterExtended)`
  max-height: 41.4rem;

  img {
    ${ImageDefault}
  }
`;

// Header
export const Header = styled.header`
  background-color: var(--color-black);
`;

export const HeaderContainer = styled(Center)`
  ${FlexRowJcCenterAiCenter}
  gap: 30rem;
  padding-block: 10rem;

  ${responsive("md", "gap: 10rem;")}
  ${responsive("sm", "flex-direction: column")}

  &>* {
    h3,
    p {
      text-align: center;
    }
  }

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

    ${responsive(
      "md",
      "flex-direction: column; padding-bottom: 5rem;  gap: 3rem;"
    )}

    &__left {
      max-width: 748px;
      max-height: 811px;
      /* flex-shrink: 0; */

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

      ${responsive("lg", "background-size: 20.0133rem 24.7rem; padding: 3rem;")}
      ${responsive("md", "background-image: none;")}
    }
  }
`;

export const Clients = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 7rem;

  ${responsive("xsm", "grid-template-columns: repeat(1, 1fr);")}

  .texts {
    background-color: var(--color-3);
    ${FlexColumn}
    justify-content: flex-end;
    padding: 5rem;

    ${responsive("xsm", "padding: 3rem;")}
  }

  .img {
    max-height: 33.7rem;

    ${responsive("xsm", "display: none;")}

    img {
      ${ImageDefault}
    }
  }
`;

export const ServicesContainer = styled(Center)`
  ${FlexRowJcBetween}
  gap: 3rem;

  ${responsive("lg", "flex-direction: column; gap: 1rem")}

  .left__img {
    max-width: 189.731px;
    max-height: 209px;

    ${responsive("lg", "display: none")}

    img {
      ${ImageDefault}
    }
  }

  .right {
    ${FlexRow}
    gap:7rem;

    ${responsive("sm", "flex-direction: column; gap:5rem;")}

    & > * {
      ${FlexColumn}
      gap: 2rem;
    }
  }
`;
