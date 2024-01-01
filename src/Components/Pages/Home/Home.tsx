import React from "react";
import {
  Container,
  Details,
  DreamImageContainer,
  Figures,
  Header,
  ImageContainer,
  ProcessContainer,
  ProjectsTop,
  Section,
  ServicesContainer,
  ServicesGrid,
  TestiCard,
  TestiCardWrapper,
  TestiCards,
  TestiUser,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { StarsIcon } from "Components/Atoms/SvgIcons";
import { Footer } from "Components/Organisms/Footer";
import { Brands } from "Components/Molecules/Brands";

// Type defination
interface Props {}

const testimonials = [
  {
    review:
      "The team worked closely with us to bring our concept to life in a beautifully designed, user-friendly app” ",
    name: "Oluwafemi Niyi",
    position: "Founder - Femi Love Yourself",
    img: "/assets/images/user-2.png",
  },
  {
    review:
      "The Elan Haus team not only helped us build an amazing digital platform to connect alumni communities, but also provided invaluable advice on product growth.",
    name: "Akintoye Olorode",
    position: "CTO, AlumniHub",
    img: "/assets/images/user-1.png",
  },
  {
    review:
      "As founders we had limited technical experience. The team provided critical guidance on everything from product design to go-to-market strategy, allowing us to launch and scale our online learning startup.",
    name: "Lanre Oke",
    position: "CEO, TeleSchool",
    img: "/assets/images/user-3.png",
  },
  {
    review:
      "Despite having a small budget, they worked diligently to create a beautiful landing page for our business. They kept our needs front and center and delivered beyond our expectations",
    name: "Emmanuel",
    position: "Principal Partner, Pro Ecce",
    img: "/assets/images/user-4.png",
  },
];

// Component
const Home: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <Header>
        <TopNav />
        <Container className="container__header">
          <Typography as="h3" className="h-1 max-width-692 text-center">
            We Bring Your Ideas to Life
          </Typography>
          <Typography as="p" className="p-1 max-width-685 text-center mt-40">
            We help companies at all stages, from startups to established
            companies, successfully leverage technology to grow their business.
          </Typography>

          <Button className="btn btn-1 b-1 mt-40">Work With Us</Button>
        </Container>
      </Header>

      <Brands />

      <Section className="section__dream">
        <Container className="container__dream">
          <Typography as="h4" className="h-2">
            You Dream it, We Build it
          </Typography>

          <DreamImageContainer className="dream-image-container">
            <img src="/assets/images/dream-section-img.png" alt="" />
          </DreamImageContainer>

          <ServicesGrid>
            <div>
              <img src="/assets/images/p-mgt.png" alt="" />
              <Typography as="h5" className="h-3 mt-15">
                Product Management
              </Typography>
              <Typography as="p" className="p-2 mt-5">
                For clients with an idea validated by customer discovery, we
                provide end-to-end product management.
              </Typography>
            </div>
            <div>
              <img src="/assets/images/c-ex-opt.png" alt="" />
              <Typography as="h5" className="h-3 mt-15">
                Design Services
              </Typography>
              <Typography as="p" className="p-2 mt-5">
                Our team of skilled designers can create intuitive and visually
                appealing designs for web and mobile apps.
              </Typography>
            </div>
            <div>
              <img src="/assets/images/d-serv.png" alt="" />
              <Typography as="h5" className="h-3 mt-15">
                Software Development
              </Typography>
              <Typography as="p" className="p-2 mt-5">
                We have in-house web and app developers to build custom digital
                products.
              </Typography>
            </div>
            <div>
              <img src="/assets/images/s-dev.png" alt="" />
              <Typography as="h5" className="h-3 mt-15">
                Customer Experience Optimization
              </Typography>
              <Typography as="p" className="p-2 mt-5">
                We provide consulting to help companies enhance their customer
                experience.
              </Typography>
            </div>
          </ServicesGrid>
        </Container>
      </Section>

      <Section className="section__creative">
        <Container>
          <Typography as="h3" className="h-4 max-width-600 mx-auto text-center">
            Creative and Experienced Consulting Digital Agency
          </Typography>

          <Details>
            <div>
              <Typography as="p" className="p-3 max-width-510">
                You dream it, we work together to conceptualise it. We design,
                develop and deliver. We pride ourselves for making your ideas
                real
              </Typography>

              <Figures>
                <div className="left">
                  <Typography as="h5" className="h-5">
                    10+
                  </Typography>
                  <Typography as="p" className="p-3 max-width-510">
                    Years of experience
                  </Typography>
                  <Typography as="h5" className="h-5 mt-40">
                    30+
                  </Typography>
                  <Typography as="p" className="p-3 max-width-510">
                    Project done
                  </Typography>
                </div>
                <div className="right">
                  <Typography as="h5" className="h-5">
                    20+
                  </Typography>
                  <Typography as="p" className="p-3 max-width-510">
                    Client satisfied
                  </Typography>
                  <Typography as="h5" className="h-5 mt-40">
                    20+
                  </Typography>
                  <Typography as="p" className="p-3 max-width-510">
                    Company trusted us
                  </Typography>
                </div>
              </Figures>
            </div>
            <div>
              <ImageContainer
                onClick={() =>
                  window.open("https://youtu.be/vs-sib12f9I", "_blank")
                }
              >
                <img src="assets/images/creative-img.png" alt="" />
                <img
                  src="assets/images/play-icon.png"
                  alt=""
                  className="icon"
                />
              </ImageContainer>
            </div>
          </Details>
        </Container>
      </Section>

      <Section className="section__projects">
        <Container className="container__projects">
          <ProjectsTop>
            <div>
              <div className="img-container img-container--1">
                <img src="assets/images/project-1.png" alt="" />
              </div>

              <Typography as="h6" className="h-6 mt-10">
                FEMI - Love Yourself
              </Typography>
              <Typography as="p" className="p-5">
                Ideation & Customer Discovery, Consulting, Logo Design, Web
                Design,
              </Typography>
            </div>
            <div>
              <div className="img-container img-container--2">
                <img src="assets/images/project-2.png" alt="" />
              </div>

              <Typography as="h6" className="h-6 mt-10">
                Lahdaa
              </Typography>
              <Typography as="p" className="p-5 max-width-510">
                Logo Design, Website & Dashboard Design, Web development Content
                Marketing
              </Typography>
            </div>
          </ProjectsTop>

          <div className="mt-60">
            <div className="img-container img-container--3">
              <img src="assets/images/project-3.png" alt="" />
            </div>

            <Typography as="h6" className="h-6 mt-10">
              Alumni Hub
            </Typography>
            <Typography as="p" className="p-5 max-width-510">
              Branding, Illustration, UX/UI Design, Sales Advisory
            </Typography>
          </div>
        </Container>
      </Section>

      <Section className="section__services">
        <Container className="container__services">
          <ServicesContainer>
            <div className="img-container">
              <img src="/assets/images/services-woman.png" alt="" />
            </div>
            <div className="right">
              <Typography as="p" className="p-6" text="Our services" />
              <Typography as="h5" className="h-7 mt-20">
                End-to-end support to take your product from initial ideation
                through to growth,
              </Typography>
              <Typography as="p" className="p-7 mt-30">
                We guide companies and entrepreneurs through the entire process
                of bringing digital products to life - from ideating and
                validating concepts to developing, launching, and growing
                successful products.
              </Typography>
              <div>
                <Button className="btn btn-1 mt-40">See Services</Button>
              </div>
            </div>
          </ServicesContainer>
        </Container>
      </Section>

      <Section className="section__testi">
        <Container className="container__testi">
          <TestiCards>
            {testimonials.map((testi, index) => (
              <TestiCardWrapper key={index}>
                <TestiCard>
                  <StarsIcon />
                  <Typography as="p" className="p-8 mt-15">
                    {testi.review}
                  </Typography>
                </TestiCard>
                <TestiUser>
                  <div className="user">
                    <img src={testi.img} alt="" />
                  </div>
                  <Typography as="h6" className="h-9 mt-10">
                    {testi.name}
                  </Typography>
                  <Typography as="p" className="p-9 mt-5">
                    {testi.position}
                  </Typography>
                </TestiUser>
              </TestiCardWrapper>
            ))}
          </TestiCards>
        </Container>
      </Section>

      <Section className="section__process">
        <ProcessContainer>
          <Typography as="h5" className="h-10 max-width-430">
            Our process is simple: we focus on what's important and let that
            guide us.
          </Typography>
          <Typography as="p" className="p-10 max-width-470 mt-20">
            We are transparent, iterative, and collaborative throughout the
            process. This ensures that we are always on the same page and that
            you are getting the best possible solution. If you are looking for a
            partner who will help you achieve your goals, we are the perfect
            choice.
          </Typography>
        </ProcessContainer>
      </Section>

      <Footer />
    </>
  );
};

export default Home;
