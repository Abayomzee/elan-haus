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
const WorkTeleSchool: React.FC<Props> = () => {
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
            No child will be left behind
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
                  TeleSchool
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
                </div>
              </div>
            </div>
            <div>
              <Typography as="p" className="p-17 mb-30 max-width-510">
                Tele schools is a technology-driven education company that
                supports schools and other educational institutions in
                maintaining effective operations, even during times of crisis.
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
          <img src="/assets/images/work-teleschool-big.png" alt="" />
        </Container>
      </Section>

      <Section className="section__overview">
        <Container className="container__overview">
          <Typography as="h3" className="h-25 mt-15" text="Overview" />
          <Typography as="p" className="p-18 max-width-730">
            Tele school approached us with an important task - to design a high
            quality, user friendly platform that would allow schools to continue
            operating without disruption even during crises like natural
            disasters or political unrest. The COVID-19 pandemic highlighted the
            need for a platform that enables schools to extend beyond their
            physical buildings.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container className="container__photo-grid">
          <PhotoGridBox>
            <img src="/assets/images/teleschool-grid-1.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/teleschool-grid-2.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/teleschool-grid-3.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/teleschool-grid-4.png" alt="" />
          </PhotoGridBox>
        </Container>
      </Section>

      <Section className="section__article">
        <Container>
          <Typography as="p" className="p-19 text-center max-width-830 mx-auto">
            Leveraging our experience designing high-quality, user-friendly
            platforms, we provided crucial guidance to Teleschool's founders,
            who were new to this space, empowering them to bring their vision
            for an accessible, resilient virtual school platform to life.
            Through close collaboration, we helped shape a platform that enables
            continuity of education for schools during crises, successfully
            meeting the critical need highlighted by the COVID-19 pandemic.
          </Typography>
        </Container>
      </Section>

      <Section className="section__above-footer">
        <ContainerBig>
          <img src="/assets/images/teleschool-footer-top-image.png" alt="" />
        </ContainerBig>
      </Section>

      <Footer />
    </>
  );
};

export default WorkTeleSchool;
