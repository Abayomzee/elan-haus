import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .h {
    &-1 {
      color: var(--color-white);
      font-size: 10rem;
      font-size: clamp(3.3rem, 6vw, 10rem);
      font-weight: 400;
      line-height: 120%;
    }
    &-2 {
      color: var(--color-1);
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 195%;
    }
    &-3 {
      color: var(--black);
      font-size: 1.55rem;
      font-weight: 500;
      line-height: 177.778%;
    }
    &-4 {
      color: var(--color-1);
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 130%;
    }
    &-5 {
      color: var(--color-1);
      font-size: 4.6rem;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: -1.84px;
    }
    &-6 {
      color: var(--color-2);
      font-size: 2rem;
      font-weight: 400;
      line-height: 150%;
    }
    &-7 {
      color: var(--color-white);
      font-size: 3.2rem;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 400;
      line-height: 130%;
    }
    &-8 {
      color: var(--color-8);
      font-size: 2rem;
      font-weight: 500;
      line-height: 120%;
    }
    &-9 {
      color: var(--color-8);
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 120%;
    }
    &-10 {
      color: var(--color-black);
      font-size: 3.2rem;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 400;
      line-height: 137.5%;
      letter-spacing: 0.16px;
    }
    &-11 {
      color: var(--color-1);
      font-size: 3.8rem;
      font-size: clamp(2.1rem, 4vw, 3.8rem);
      font-weight: 400;
      line-height: 120%;
    }
    &-12 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 120%;
    }
    &-13 {
      color: var(--color-1);
      font-size: 2.3rem;
      font-weight: 300;
      line-height: 132.5%;
    }
    &-14 {
      color: var(--color-1);
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.24px;
    }
    &-15 {
      color: var(--color-1);
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 195%;
    }
    &-16 {
      color: var(--color-1);
      font-size: 2rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.32px;
    }
    &-17 {
      color: var(--color-1);
      font-size: 3rem;
      font-weight: 400;
      line-height: 122.222%;
      letter-spacing: 0.16px;
    }
    &-18 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.16px;
    }
    &-19 {
      color: var(--color-1);
      font-size: 10rem;
      font-size: clamp(3.5rem, 5vw, 10rem);
      font-weight: 400;
      line-height: 100%;

      &--red {
        color: var(--color-11);
      }
    }
    &-20 {
      color: var(--color-12);
      font-size: 3.5rem;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 500;
      letter-spacing: 0.16px;
    }
    &-21 {
      color: var(--color-1);
      font-size: 3rem;
      font-size: clamp(1.8rem, 5vw, 3rem);
      font-weight: 500;
      line-height: 120%;
    }
    &-22 {
      color: var(--color-1);
      font-size: 3rem;
      font-weight: 400;
      line-height: 121.875%;
    }
    &-23 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
    }
    &-24 {
      color: var(--color-7);
      font-size: 1.6rem;
      font-weight: 500;
      // line-height: 250%;
    }
    &-25 {
      color: var(--color-black);
      font-size: 4.8rem;
      font-weight: 700;
    }
    &-26 {
      color: var(--color-11);
      font-size: 3rem;
      font-size: clamp(2.2rem, 4vw, 3rem);

      font-weight: 500;
      line-height: 100%;
      letter-spacing: 0.16px;
    }
    &-27 {
      color: var(--color-1);
      font-size: 5rem;
      font-size: clamp(2.6rem, 4vw, 5rem);
      font-weight: 400;
      line-height: 120%;
    }
    &-28 {
      color: var(--color-1);
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 177.778%;
    }
    &-29 {
      color: var(--color-1);
      font-size: 2rem;
      font-weight: 300;
      line-height: 108.333%;
      letter-spacing: 0.16px;
    }
  }

  /* Body || Paragraphs */
  .p {
    &-1 {
      color: var(--color-white);
      font-size: 2rem;
      font-style: normal;
      font-weight: 300;
      line-height: 150%;
    }
    &-2 {
      color: var(--color-2);
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 140%;
      letter-spacing: -0.16px;
    }
    &-3 {
      color: var(--color-black);
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 166.667%;
      letter-spacing: 0.16px;
    }
    &-4 {
      color: var(--color-4);
      font-size: 2.6rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -1.04px;
    }
    &-5 {
      color: var(--color-7);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 177.778%;
    }
    &-6 {
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 400;
    }
    &-7 {
      color: var(--color-white);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.16px;
    }
    &-8 {
      color: var(--color-8);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 150%;
    }
    &-9 {
      color: var(--color-8);
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 150%;
    }
    &-10 {
      color: var(--color-8);
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 150%;
      letter-spacing: -0.16px;
    }
    &-11 {
      color: var(--color-10);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 150%;
    }
    &-12 {
      color: var(--color-10);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 155%;
    }
    &-13 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.16px;
    }
    &-14 {
      color: var(--color-1);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 150%;
    }
    &-15 {
      color: var(--color-1);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 140%;
    }
    &-16 {
      color: var(--color-1);
      font-size: 18px;
      font-weight: 300;
    }
    &-17 {
      color: var(--color-1);
      font-size: 2rem;
      font-weight: 300;
      line-height: 154%;
    }
    &-18 {
      color: var(--color-1);
      font-size: 2.1rem;
      font-weight: 400;
      line-height: 166.667%;
    }
    &-19 {
      color: var(--color-black);
      font-size: 2rem;
      font-style: italic;
      font-weight: 400;
      line-height: 200%;
    }
    &-20 {
      color: var(--color-12);
      font-size: 2rem;
      font-weight: 400;
      line-height: 140%;
    }
    &-21 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 130%;
      letter-spacing: 0.16px;
    }
    &-22 {
      color: var(--color-12);
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 140%;
      letter-spacing: -0.16px;
    }
    &-23 {
      color: var(--color-12);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 144.444%;
      letter-spacing: 0.16px;
    }
  }
  /* Link */
  .l {
    text-decoration: none;
    cursor: pointer;

    &-1 {
      color: var(--color-white);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
    }
    &-2 {
      color: var(--color-1);
      font-size: 1.5rem;
      font-weight: 300;
    }
    &-3 {
      color: var(--color-11);
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 160%;
      ${FlexRowAiCenter}
      gap: 1.5rem;
    }
    &-4 {
      color: var(--color-14);
      font-size: 1.7rem;
      font-style: normal;
      font-weight: 400;
      line-height: 133.333%;
      text-decoration: none;
    }
    &-5 {
      color: var(--color-15);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
      padding: 1.5rem 3rem;
      transition: 0.4s;

      &:hover {
        background-color: var(--color-1);
        color: var(--color-white);
      }
    }
    &-6 {
      color: var(--color-black);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
  /* Button */
  .b {
    &-1 {
      color: var(--color-1);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 200%;
    }
    &-2 {
      color: var(--color-white);
      font-size: 1.5rem;
      font-weight: 400;
    }
    &-3 {
      color: var(--color-1);
      font-size: 1.5rem;
      font-weight: 400;
    }
    &-4 {
      color: var(--color-white);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 200%;
    }
  }
`;
