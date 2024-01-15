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
const WorkFemi: React.FC<Props> = () => {
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
            Redefining nutrition and self-care for Africans globally
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
                  Femi Love Yourself
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
                Femi, empowers Africans, Caribbeans, and minority communities
                globally to take control of their health through personalised
                nutrition solutions tailored to their cultural heritage and
                individual needs.
              </Typography>

              <Link
                to="https://www.tryfemi.com/"
                target="_blank"
                className="l-4"
              >
                Visit Site
              </Link>
            </div>
          </div>
        </Container>
      </Header>

      <Section className="section__top-image">
        <Container className="container__top-image">
          <img src="/assets/images/work-femi-big.png" alt="" />
        </Container>
      </Section>

      <Section className="section__overview">
        <Container className="container__overview">
          <Typography as="h3" className="h-25 mt-15" text="Overview" />
          <Typography as="p" className="p-18 max-width-730">
            As the design agency for FEMI, our mission is to create digital
            experiences that make personalised nutrition seamless and
            empowering. We aim to simplify complex data into clean, intuitive
            interfaces so custom eating plans are easily accessible and
            engaging. Our user-centred design process focuses on turning FEMI's
            philosophy of nutrition for the individual into a tangible reality
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container className="container__photo-grid">
          <PhotoGridBox>
            <img src="/assets/images/femi-grid-1.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/femi-grid-2.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/femi-grid-3.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/femi-grid-4.png" alt="" />
          </PhotoGridBox>
        </Container>
      </Section>

      <Section className="section__article">
        <Container>
          <Typography as="p" className="p-19 text-center max-width-830 mx-auto">
            While the work is still in progress, we are dedicated to building
            something groundbreaking in its simplicity, accessibility, and
            impact. When complete, this product will empower Africans worldwide
            to take control of their health and wellbeing.
          </Typography>
        </Container>
      </Section>

      <Section className="section__above-footer">
        <ContainerBig className="femi">
          <img src="/assets/images/femi-footer-top-image.png" alt="" />
        </ContainerBig>
      </Section>

      <Footer />
    </>
  );
};

export default WorkFemi;
