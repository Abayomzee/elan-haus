import {
  FlexColumn,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section {
    &__sub-nav {
      padding-block: 1rem;
      border-bottom: 1px solid var(--color-black);
      background: var(--color-white);
    }
    &__services {
      padding-block: 10rem;
      border-bottom: 1px solid var(--color-16);

      &--no {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
    &__collaborate {
      max-height: 41.4rem;
      width: 100%;

      img {
        ${ImageDefault}
      }
    }
    &__approach {
      max-height: 77.3rem;

      img {
        ${ImageDefault}
      }
    }
    &__service-types {
      padding-top: 1rem;
      padding-bottom: 10rem;
    }
  }
`;

export const Header = styled.header`
  background-color: var(--color-3);
`;

export const Container = styled(Center)`
  &.container {
    &__header {
      padding-block: 8rem;
    }
    &__sub-nav {
      ${FlexRowJcCenterAiCenter}
      gap: 2rem;
    }
    &__service-types {
      ${FlexRowJcBetweenAiCenter}
      gap: 7rem;

      .left {
        ${FlexColumn}
        gap: 1.5rem;
      }
    }
  }
`;

export const ServiceContent = styled.div`
  .description {
    ${FlexRowJcBetweenAiCenter}
    margin-top: 3rem;
    &__left {
    }
    &__right {
    }
  }

  .img-1-holder {
    max-height: 51rem;
    margin-top: 2rem;

    img {
      ${ImageDefault}
    }
  }

  .service-list {
    ${FlexRowAiCenter}
    gap: 4rem;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
  }

  .img-2-holders {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .img-holder {
      max-height: 60rem;

      img {
        ${ImageDefault}
      }
    }
  }

  .tools {
    ${FlexRowJcBetweenAiCenter}
    gap: 8rem;
    margin-top: 5rem;
  }

  .tools-img {
    max-width: 531px;

    img {
      ${ImageDefault}
    }
  }

  .tools-man-img {
    max-width: 60.9rem;

    img {
      ${ImageDefault}
    }
  }

  .strategy-img-holder {
    max-height: 41.5rem;
    margin-top: 2rem;
    position: relative;

    img {
      ${ImageDefault}
    }

    .strategies {
      /* max-width: 80rem; */
      /* margin-inline: auto; */
      background-color: var(--color-3);
      padding: 4rem;
      display: flex;
      justify-content: space-around;
      gap: 5rem;

      /* position: absolute;
      bottom: 0; */
      /* left: 20rem; */
    }
  }
`;

export const Strategies = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-8rem);

  .box {
    flex-basis: 90%;
    background-color: var(--color-3);
    padding: 4rem;
    display: flex;
    justify-content: space-around;
    /* gap: 5rem; */

    & > * {
      padding-inline: 3rem;
      &:not(:first-child) {
        border-left: 1px solid #6a63b66f;
      }
    }
  }
`;
