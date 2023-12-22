import {
  FlexColumn,
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetween,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterProcess } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.div``;
export const Section = styled.section`
  &.section {
    &__dream {
      padding-block: 6rem;
    }
    &__creative {
      padding-block: 8rem;
      background-color: var(--color-3);
    }
    &__projects {
      padding-block: 9rem;
    }
    &__services {
      background-image: url("/assets/images/services-bg.png");
      background-repeat: no-repeat;
      background-size: cover;

      padding-top: 11rem;
      padding-bottom: 40rem;
    }
    &__testi {
      background-color: var(--color-white);
      margin-top: 18rem;
      padding-block: 10rem;
    }
    &__process {
      background-image: url("/assets/images/process-section-bg.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top right;

      background-color: var(--color-3);
      padding-block: 10rem;
    }
  }
`;
export const Container = styled(Center)`
  &.container {
    &__header {
      ${FlexColumnJcCenterAiCenter}
      padding-block: 9rem;
    }

    &__dream {
      ${FlexColumnJcCenterAiCenter}
    }
    &__projects {
      .img-container {
        &--1 {
          max-width: 616px;
          max-height: 425px;
        }
        &--2 {
          width: 599px;
          height: 587px;
        }
        &--3 {
          width: 100%;
          height: 436px;
        }
        img {
          ${ImageDefault}
        }
      }
    }
    &__services {
      position: relative;
    }
    &__footer {
    }
  }
`;

// Header
export const Header = styled.header`
  /* height: 60rem; */
  background-image: url("/assets/images/hero-bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

// Dream it section
export const DreamImageContainer = styled.div`
  margin-top: 5rem;
  width: 1162px;
  height: 511.113px;

  img {
    ${ImageDefault}
  }
`;

// Creative section
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  grid-gap: 5rem;
  margin-top: 8rem;
`;

export const Details = styled.div`
  ${FlexRowAiCenter}
  gap: 7rem;
  margin-top: 8rem;
`;

export const Figures = styled.div`
  background: var(--color-6);
  ${FlexRow}
  margin-top: 8rem;
  padding: 4rem;

  .left {
    padding-right: 4rem;
  }
  .right {
    padding-left: 4rem;
    border-left: 1px solid var(--color-5);
  }
`;

export const ImageContainer = styled.div`
  max-width: 70.4rem;
  max-height: 50.3rem;

  img {
    ${ImageDefault}
  }
`;

// Projects section
export const ProjectsTop = styled.div`
  ${FlexRowJcBetween};
  gap: 7rem;
`;

// Services section
export const ServicesContainer = styled(Center)`
  position: absolute;
  ${FlexRow}
  background-color: var(--color-1);
  border-top: 9px solid #f08e5a90;

  & > * {
    flex-basis: 50%;
  }

  .img-container {
    /* width: 654px; */
    height: 556px;

    img {
      ${ImageDefault}
    }
  }

  .right {
    padding: 8rem 6rem;
    ${FlexColumn}
    justify-content: center;
  }
`;

// Testimonial section
export const TestiCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const TestiCardWrapper = styled.div``;

export const TestiCard = styled.div`
  background-color: var(--color-3);
  padding: 4.5rem 3rem;
  padding-bottom: 6.4rem;
`;
export const TestiUser = styled.div`
  padding-inline: 2.5rem;
  transform: translateY(-3.2rem);

  .user {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      ${ImageDefault}
    }
  }
`;

// Process section
export const ProcessContainer = styled(CenterProcess)``;
