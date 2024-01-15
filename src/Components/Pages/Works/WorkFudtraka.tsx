import React from "react";
import {
  Container,
  ContainerBig,
  Header,
  PhotoGridBox,
  Section,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "Components/Organisms/Footer";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const WorkFudtraka: React.FC<Props> = () => {
  // Hooks
  const navigate = useNavigate();

  // Data to display
  return (
    <>
      <TopNav bgType="black" />

      <Header>
        <Container className="container__header">
          <Button onClick={() => navigate(-1)} className="go-back-btn mb-20">
            <ArrowRightIcon width={20} height={20} />
            Go Back
          </Button>
          <Typography as="h4" className="h-22 max-width-410">
            Helping foodies find the best local eats
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
                  Fudtraka
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
                    App Development
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Branding
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Product Design
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Software Development
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <Typography as="p" className="p-17 mb-30 max-width-510">
                Fudtraka spotlights food vendors and helps foodies discover the
                most mouthwatering local and homemade eats from new favourite
                chefs and restaurants anywhere they are.
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
          <img src="/assets/images/work-fudtraka-big.png" alt="" />
        </Container>
      </Section>

      <Section className="section__overview">
        <Container className="container__overview">
          <Typography as="h3" className="h-25 mt-15" text="Overview" />
          <Typography as="p" className="p-18 max-width-730">
            When we first started working with Fudtraka, they had an early idea
            for a platform to connect food vendors and foodies. However, their
            existing website needed a complete revamp to turn this idea into an
            impactful product. Starting with strategic branding, we helped
            Fudtraka hone their mission and messaging to effectively communicate
            their value to both customers and vendors. We conducted user
            research and developed an information architecture tailored
            specifically to food discovery and vendor profiles.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container className="container__photo-grid">
          <PhotoGridBox>
            <img src="/assets/images/fudtraka-grid-1.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/fudtraka-grid-2.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/fudtraka-grid-4.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/fidtraka-grid-3.png" alt="" />
          </PhotoGridBox>
        </Container>
      </Section>

      <Section className="section__article">
        <Container>
          <Typography as="p" className="p-19 text-center max-width-830 mx-auto">
            Leveraging our UI/UX expertise, we designed an engaging,
            mobile-friendly website focused on vivid visuals, mouthwatering
            photography, and an intuitive interface. Throughout the process, we
            worked closely with the Fudtraka team to iterate and refine the site
            design. In the end, our collaborative efforts took Fudtraka’s MVP
            from flat mockups to a polished, user-friendly website ready to
            facilitate meaningful connections in the food community. While more
            work lies ahead as the platform expands, the website revamp marks an
            important leap forward in realizing Fudtraka’s full vision.
          </Typography>
        </Container>
      </Section>

      <Section className="section__above-footer">
        <ContainerBig>
          <img src="/assets/images/fudtraka-footer-top-image.png" alt="" />
        </ContainerBig>
      </Section>

      <Footer />
    </>
  );
};

export default WorkFudtraka;
