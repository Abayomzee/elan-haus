import { responsive } from "Styles/Abstract/Breakpoints";
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
      ${responsive("xmd", "padding-block: 1rem;")}
    }
    &__testi {
      background-color: var(--color-white);
      margin-top: 18rem;
      padding-block: 10rem;

      ${responsive("xmd", "margin-top: 1rem;")}
    }
    &__process {
      background-image: url("/assets/images/process-section-bg.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: top right;

      background-color: var(--color-3);
      padding-block: 10rem;

      ${responsive("md", "background-image: none;")}
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
          max-width: 61.6rem;
          max-height: 42.5rem;
        }
        &--2 {
          max-width: 59.9rem;
          max-height: 58.7rem;
        }
        &--3 {
          max-width: 100%;
          max-height: 436px;
        }
        img {
          ${ImageDefault}
        }
      }
    }
    &__services {
      /* position: relative; */
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
  max-width: 1162px;
  max-height: 511.113px;

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

  ${responsive("sm", "grid-template-columns: repeat(2, 1fr);")}
  ${responsive("xsm", "grid-template-columns: repeat(1, 1fr);")}
`;

export const Details = styled.div`
  ${FlexRowAiCenter}
  gap: 7rem;
  margin-top: 8rem;

  ${responsive("md", "flex-wrap: wrap; justify-content: center")}
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
  position: relative;
  cursor: pointer;

  img {
    ${ImageDefault}
  }

  .icon {
    position: absolute;
    left: 45%;
    top: 40%;
    height: 7rem;
    width: 7rem;
  }
`;

// Projects section
export const ProjectsTop = styled.div`
  ${FlexRowJcBetween};
  gap: 7rem;

  ${responsive("xsm", "flex-wrap: wrap")}
`;

// Services section
export const ServicesContainer = styled(Center)`
  position: absolute;
  ${FlexRow}
  background-color: var(--color-1);
  border-top: 9px solid #f08e5a90;

  ${responsive("xmd", "position: relative")}

  & > * {
    flex-basis: 50%;
  }

  .img-container {
    max-width: 65.4rem;
    max-height: 55.6rem;

    ${responsive("xmd", "height: auto;")}

    img {
      ${ImageDefault}
    }
  }

  .right {
    padding: 8rem 6rem;
    ${FlexColumn}
    justify-content: center;

    ${responsive("sm", " padding: 3rem 1rem;")}
  }

  ${responsive("xmd", "flex-direction: column")}
`;

// Testimonial section
export const TestiCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  ${responsive("xmd", "grid-template-columns: repeat(2, 1fr);")}
  ${responsive("xsm", "grid-template-columns: repeat(1, 1fr);")}
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
    max-width: 6.4rem;
    max-height: 6.4rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      ${ImageDefault}
    }
  }
`;

// Process section
export const ProcessContainer = styled(CenterProcess)`
  & > * {
    ${responsive("md", "text-align: center; margin-inline: auto;")}
  }
`;
