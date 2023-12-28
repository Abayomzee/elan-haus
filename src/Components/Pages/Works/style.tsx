import {
  FlexRow,
  FlexRowJcBetween,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section {
    &__top-image {
      padding-bottom: 10rem;
    }
    &__overview {
      padding-bottom: 10rem;
    }
    &__article {
      padding-block: 10rem;
    }
    &__above-footer {
      max-height: 63.7rem;

      img {
        ${ImageDefault}
      }
    }
  }
`;

export const Header = styled.header`
  padding-block: 8rem;

  .bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    margin-top: 6rem;
  }

  .bottom__left__item-layout {
    ${FlexRow}
    gap: 1rem;
    margin-bottom: 2rem;

    .left {
      flex-basis: 10rem;
    }
    .right {
      flex-grow: 1;
    }
  }
`;

export const Container = styled(Center)`
  &.container {
    &__top-image {
     height: 60rem;
     max-height: 60rem;
      img {
        ${ImageDefault}
      }
    }

    &__overview {
      ${FlexRowJcBetween}
      gap: 5rem;
    }

    &__photo-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.3rem;
    }
  }
`;

export const PhotoGridBox = styled.div`
  max-height: 50rem;

  img {
    ${ImageDefault}
  }
`;