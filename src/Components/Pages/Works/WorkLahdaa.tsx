import React from "react";
import { Container, Header, PhotoGridBox, Section } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { Footer } from "Components/Organisms/Footer";

// Type defination
interface Props {}

// Component
const WorkLahdaa: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav bgType="black" />

      <Header>
        <Container className="container__header">
          <Typography as="h4" className="h-22 max-width-410">
            A platform disrupting business school education.
          </Typography>
          <div className="bottom">
            <div>
              <div className="bottom__left__item-layout">
                <Typography as="h4" className="h-23 left">
                  Year
                </Typography>
                <Typography as="h4" className="h-24 right">
                  2023
                </Typography>
              </div>
              <div className="bottom__left__item-layout">
                <Typography as="h4" className="h-23 left">
                  Client
                </Typography>
                <Typography as="h4" className="h-24 right">
                  Lahdaa
                </Typography>
              </div>
              <div className="bottom__left__item-layout">
                <Typography as="h4" className="h-23 left">
                  Role
                </Typography>
                <div className="right">
                  <Typography as="h4" className="h-24 mb-10">
                    Product Management
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Product Design
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Customer Experience Consulting
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Go to Marketing Strategy
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Web Development
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <Typography as="p" className="p-17 mb-30 max-width-510">
                An online cohort-based learning platform for entrepreneurs and
                founders. Providing entrepreneurs with practical and actionable
                learning that they can apply directly to their businesses.
              </Typography>

              <Link to="#" className="l-4">
                Visit Site
              </Link>
            </div>
          </div>
        </Container>
      </Header>

      <Section className="section__top-image">
        <Container className="container__top-image">
          <img src="/assets/images/work-lahdaa-big.png" alt="" />
        </Container>
      </Section>

      <Section className="section__overview">
        <Container className="container__overview">
          <Typography as="h3" className="h-25 mt-15" text="Overview" />
          <Typography as="p" className="p-18 max-width-730">
            Lahdaa aims to provide practical, action-based business education
            through a substantial planned product; we encouraged them to first
            develop a minimum viable product to validate product-market fit with
            users. Collaborating closely with Lahdaa's team, we leveraged our
            expertise to guide the creation of an accessible online cohort
            platform focused on delivering impactful business learning
            experiences.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container className="container__photo-grid">
          <PhotoGridBox>
            <img src="/assets/images/lahdaa-grid-1.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/lahdaa-grid-2.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/lahdaa-grid-3.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/lahdaa-grid-4.png" alt="" />
          </PhotoGridBox>
        </Container>
      </Section>

      <Section className="section__article">
        <Container>
          <Typography as="p" className="p-19 text-center max-width-830 mx-auto">
            Leveraging our expertise in designing engaging digital experiences,
            we helped shape the waitlist site to effectively communicate
            Lahdaa's unique value proposition and build anticipation for the
            cohort platform. Through strategic UX decisions and copywriting, we
            optimised the site to convert interested visitors into early
            sign-ups. we look forward to continuing to collaborate with the
            Lahdaa team and apply our experience to craft an impactful learning
            experience at product launch and beyond.
          </Typography>
        </Container>
      </Section>

      <Section className="section__above-footer">
        <img src="/assets/images/lahdaa-footer-top-image.png" alt="" />
      </Section>

      <Footer />
    </>
  );
};

export default WorkLahdaa;