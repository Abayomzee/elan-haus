import React from "react";
import {
  Clients,
  Container,
  ContainerBig,
  Header,
  HeaderContainer,
  Section,
  SectionWhatWeDo,
  ServicesContainer,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Footer } from "Components/Organisms/Footer";
import { Brands } from "Components/Molecules/Brands";
import { Link } from "react-router-dom";
import { RedArrowIcon, WorksIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const About: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <Header>
        <TopNav />
        <HeaderContainer className="container__header">
          <div>
            <Typography as="h3" className="h-1 max-width-380">
              First, an idea.
            </Typography>
            <Typography as="p" className="p-1 max-width-685  mt-20">
              Then We Put Our Creative Minds to Work
            </Typography>
          </div>

          <div className="header-img">
            <img src="/assets/images/about-hero-img.png" alt="" />
          </div>
        </HeaderContainer>
      </Header>
      <Brands />

      <SectionWhatWeDo className="section__what-we-do">
        <Container className="mb-60">
          <Typography as="h5" className="h-13 max-width-830 mb-20">
            You dream it, we work together to conceptualise it. We design,
            develop and deliver. We pride ourselves for making your ideas real
          </Typography>
          <Link
            to="https://share-eu1.hsforms.com/11XlSGNasRHKHqtV_mRpXRA2dnjzx"
            target="_blank"
            className="l l-3"
          >
            Start A Project <RedArrowIcon height={20} width={20} />
          </Link>
        </Container>

        <div className="bottom">
          <div className="bottom__left">
            <img src="/assets/images/what-we-do-img-1.png" alt="" />
          </div>
          <div className="bottom__right">
            <Typography as="h5" className="h-14">
              What We Do
            </Typography>
            <Typography as="h5" className="p-13 max-width-550 mt-10">
              With passion for building new things, our consultancy has an
              experienced team that provides full-service support to startups
              and businesses - from branding and design to marketing, app
              development, and web creation - quickly delivering exceptional
              user experiences that drive business success.
            </Typography>
          </div>
        </div>
      </SectionWhatWeDo>

      <Section className="section__work-with">
        <Container>
          <Typography as="h5" className="h-15 text-center">
            Who We Work With
          </Typography>
          <Typography
            as="p"
            className="p-14  mt-15 text-center mx-auto max-width-600"
          >
            We help organizations and entrepreneurs turn their ideas into
            successful digital products. Our team provides the strategy, design,
            and technology skills needed to build and grow innovative solutions
            that customers love.
          </Typography>

          <Clients>
            <div className="texts">
              <WorksIcon />
              <Typography as="h5" className="h-16 mt-15">
                Startups
              </Typography>
              <Typography as="p" className="p-15  mt-15 max-width-490">
                Idea, pre-seed or seed stage startups across technology,
                healthcare, fintech, consumer products, and other sectors.
              </Typography>
            </div>
            <div className="img">
              <img src="/assets/images/work-client-1.png" alt="" />
            </div>
            <div className="img">
              <img src="/assets/images/work-client-2.png" alt="" />
            </div>
            <div className="texts">
              <WorksIcon />
              <Typography as="h5" className="h-16 mt-15">
                Small Businesses
              </Typography>
              <Typography as="p" className="p-15  mt-15 max-width-490">
                Local/regional businesses looking to establish an online
                presence.
              </Typography>
            </div>

            <div className="texts">
              <WorksIcon />
              <Typography as="h5" className="h-16 mt-15">
                Medium/Large Enterprises
              </Typography>
              <Typography as="p" className="p-15  mt-15 max-width-490">
                National/multinational companies needing custom software
                development and digital transformation
              </Typography>
            </div>
            <div className="img">
              <img src="/assets/images/work-client-3.png" alt="" />
            </div>
            <div className="img">
              <img src="/assets/images/work-client-4.png" alt="" />
            </div>
            <div className="texts">
              <WorksIcon />
              <Typography as="h5" className="h-16 mt-15">
                Social Impact
              </Typography>
              <Typography as="p" className="p-15  mt-15 max-width-490">
                Nonprofits, social enterprises, research/academia focused on
                innovation and social good
              </Typography>
            </div>
          </Clients>
        </Container>
      </Section>

      <Section className="section__services">
        <ServicesContainer>
          <div className="left">
            <Typography as="h4" className="h-17 mb-60" text="Our Services" />
            <div className="left__img">
              <img src="/assets/images/what-we-do-img-2.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div>
              <Typography as="h4" className="h-18" text="Design" />
              <Typography as="p" className="p-16" text="Product Design" />
              <Typography as="p" className="p-16" text="UX/UI Design" />
              <Typography as="p" className="p-16" text="Logo & Brand Design" />
              <Typography
                as="p"
                className="p-16"
                text="Merchandise/Collateral Design"
              />
              <Typography as="p" className="p-16" text="Interaction Design" />
              <Typography as="p" className="p-16" text="Graphic Design" />
            </div>
            <div>
              <Typography as="h4" className="h-18" text="Strategy" />
              <Typography as="p" className="p-16" text="Product Management" />
              <Typography as="p" className="p-16" text="Ideation & Customer" />
              <Typography
                as="p"
                className="p-16"
                text="Go To Market Strategy"
              />
              <Typography as="p" className="p-16" text="E-commerce" />
              <Typography as="p" className="p-16" text="Graphic Design" />
            </div>
            <div>
              <Typography as="h4" className="h-18" text="Customer Experience" />

              <Typography as="p" className="p-16" text="Software Development" />
              <Typography
                as="p"
                className="p-16"
                text="Front End Development"
              />
              <Typography
                as="p"
                className="p-16"
                text="Mobile App Development"
              />
              <Typography as="p" className="p-16" text="Webflow" />
              <Typography as="p" className="p-16" text="Framer " />
            </div>
          </div>
        </ServicesContainer>
      </Section>

      <Section className="section__collaborate">
        <ContainerBig>
          <img src="/assets/images/collaborate-bg.png" alt="" />
        </ContainerBig>
      </Section>

      <Footer />
    </>
  );
};

export default About;
