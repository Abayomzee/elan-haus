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
import { useNavigate } from "react-router-dom";
import { Footer } from "Components/Organisms/Footer";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const WorkAlumniHub: React.FC<Props> = () => {
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
            Supercharging alumni communities via tech
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
                  Alumni Hub
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
                    Branding
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    Product Design
                  </Typography>
                  <Typography as="h4" className="h-24 mb-10">
                    App Development
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <Typography as="p" className="p-17 mb-30 max-width-510">
                Bringing alumni community together in one engaging destination.
                AlumniHub offers a comprehensive platform to manage any alumni
                network, foster connections, and elevate engagement.
              </Typography>

              {/* <Link to="#" className="l-4">
                Visit Site
              </Link> */}
            </div>
          </div>
        </Container>
      </Header>

      <Section className="section__top-image">
        <Container className="container__top-image">
          <img src="/assets/images/work-alumni-big.png" alt="" />
        </Container>
      </Section>

      <Section className="section__overview">
        <Container className="container__overview">
          <Typography as="h3" className="h-25 mt-15" text="Overview" />
          <Typography as="p" className="p-18 max-width-730">
            When AlumniHub's founders first approached us, they had a vision for
            a platform with two key sides—one enabling alumni networking and
            connections, the other providing a dashboard for alumni associations
            to manage interactions. With this initial idea and many open
            questions, AlumniHub came to us seeking our expertise in bringing an
            engaging digital community platform to life. experiences.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container className="container__photo-grid">
          <PhotoGridBox>
            <img src="/assets/images/alumni-grid-1.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/alumni-grid-2.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/alumni-grid-3.png" alt="" />
          </PhotoGridBox>
          <PhotoGridBox>
            <img src="/assets/images/alumni-grid-4.png" alt="" />
          </PhotoGridBox>
        </Container>
      </Section>

      <Section className="section__article">
        <Container>
          <Typography as="p" className="p-19 text-center max-width-830 mx-auto">
            Our strategic support across branding, design and business
            development enabled AlumniHub to solidify a strong foundation before
            launching their alumni engagement platform. Working side-by-side
            with the founders in those critical early stages allowed us to
            meaningfully contribute to the platform's genesis from idea to
            reality.
          </Typography>
        </Container>
      </Section>

      <Section className="section__above-footer">
        <ContainerBig>
          <img src="/assets/images/alumni-footer-top-image.png" alt="" />
        </ContainerBig>
      </Section>

      <Footer />
    </>
  );
};

export default WorkAlumniHub;
