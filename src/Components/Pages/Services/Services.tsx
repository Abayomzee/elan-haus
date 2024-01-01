import React from "react";
import {
  Container,
  Header,
  Section,
  ServiceContent,
  Strategies,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { Footer } from "Components/Organisms/Footer";

// Type defination
interface Props {}

// Component
const Services: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav bgType="black" />
      <Header>
        <Container className="container__header">
          <Typography as="h2" className="h-19 text-center">
            <>
              Our Services
              <span className="h-19--red">.</span>
            </>
          </Typography>
        </Container>
      </Header>

      <Section className="section__sub-nav">
        <Container className="container__sub-nav">
          <Link to="/" className="l l-5">
            Design
          </Link>
          <Link to="/" className="l l-5">
            Development
          </Link>
          <Link to="/" className="l l-5">
            Our Approach
          </Link>
          <Link to="/" className="l l-5">
            Strategy{" "}
          </Link>
          <Link to="/" className="l l-5">
            Book a Call
          </Link>
        </Container>
      </Section>

      <Section className="section__services">
        <Container>
          <Typography as="h4" className="h-26" text="Design" />
          <ServiceContent>
            <div className="description">
              <Typography as="h4" className="h-27 description__left">
                Design That Connects
              </Typography>
              <Typography
                as="p"
                className="p-20 description__right max-width-600"
              >
                With expertise in visual storytelling and an eye for aesthetics,
                our team creates designs that resonate with audiences and bring
                brand stories to life.
              </Typography>
            </div>
            <div className="img-1-holder">
              <img src="/assets/images/service-img-1.png" alt="" />
            </div>
            <div className="service-list">
              <Typography as="p" className="p-21 description__left">
                Logo & Brand Design
              </Typography>
              <Typography as="p" className="p-21 description__left">
                Merchandise/Collateral Design
              </Typography>
              <Typography as="p" className="p-21 description__left">
                Graphic Design
              </Typography>
            </div>

            <div className="img-2-holders">
              <div className="img-holder">
                <img src="/assets/images/servic-1.png" alt="" />
              </div>
              <div className="img-holder">
                <img src="/assets/images/servic-2.png" alt="" />
              </div>
              <div className="img-holder">
                <img src="/assets/images/servic-3.png" alt="" />
              </div>
            </div>
            <div className="service-list">
              <Typography as="p" className="p-21 description__left">
                Product Design
              </Typography>
              <Typography as="p" className="p-21 description__left">
                UX/UI Design
              </Typography>
              <Typography as="p" className="p-21 description__left">
                Interaction Design
              </Typography>
            </div>
          </ServiceContent>
        </Container>
      </Section>
      <Section className="section__services">
        <Container>
          <Typography as="h4" className="h-26" text="Development" />
          <ServiceContent>
            <div className="description">
              <Typography
                as="h4"
                className="h-27 description__left max-width-600"
              >
                Builders for Web and Mobile
              </Typography>
              <Typography
                as="p"
                className="p-20 description__right max-width-600"
              >
                Our talented in-house developers craft custom digital products
                to meet each client's specific needs and specifications, whether
                websites, mobile apps, or integrated web platforms. Staying
                current on the latest proven technologies and best practices, we
                build robust, scalable solutions tailored for each business.
              </Typography>
            </div>

            <div className="tools">
              <div className="tools-img">
                <img src="/assets/images/tools.png" alt="" />
              </div>
              <div className="tools-man-img">
                <img src="/assets/images/tools-man.png" alt="" />
              </div>
            </div>
          </ServiceContent>
        </Container>
      </Section>

      <Section className="section__approach">
        <img src="/assets/images/approach.png" alt="" />
      </Section>

      <Section className="section__services section__services--no">
        <Container>
          <Typography as="h4" className="h-26" text="Strategy " />
          <ServiceContent>
            <div className="description">
              <Typography
                as="h4"
                className="h-27 description__left max-width-600"
              >
                Customer Experience Optimization
              </Typography>
              <Typography
                as="p"
                className="p-20 description__right max-width-600"
              >
                We provide consulting to help companies enhance their customer
                experience through effective use of technology.
              </Typography>
            </div>

            <div className="strategy-img-holder">
              <img src="/assets/images/strategy.png" alt="" />
            </div>

            <Strategies>
              <div className="box">
                <div>
                  <Typography as="h4" className="h-28 text-center mb-10">
                    Customer Journey Mapping
                  </Typography>
                  <Typography as="h4" className="p-22 text-center">
                    We map out end-to-end customer journeys to identify pain
                    points and opportunities to improve. This helps align
                    business processes with customer needs.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" className="h-28 text-center mb-10">
                    Email Workflows
                  </Typography>
                  <Typography as="h4" className="p-22 text-center">
                    We establish best practice email workflows for customer
                    onboarding, engagement and retention. This improves
                    communication relevance and effectiveness.
                  </Typography>
                </div>
                <div>
                  <Typography as="h4" className="h-28 text-center mb-10">
                    Automation
                  </Typography>
                  <Typography as="h4" className="p-22 text-center">
                    We identify areas where automating manual processes via
                    platforms like Zapier can smooth customer experiences and
                    streamline internal workflows.
                  </Typography>
                </div>
              </div>
            </Strategies>
          </ServiceContent>
        </Container>
      </Section>

      <Section className="section__service-types">
        <Container className="container__service-types">
          <div className="left">
            <Typography as="p" className="h-29 max-width-600">
              Product Management
            </Typography>
            <Typography as="p" className="h-29 max-width-600">
              Ideation & Customer Discovery
            </Typography>
            <Typography as="p" className="h-29 max-width-600">
              Go To Market Strategy
            </Typography>
            <Typography as="p" className="h-29 max-width-600">
              E-commerce
            </Typography>
            <Typography as="p" className="h-29 max-width-600">
              Customer Experience
            </Typography>
          </div>
          <Typography as="p" className="p-23 max-width-830">
            Our end-to-end product management starts with helping you refine
            your ideas and identify product-market fit through customer
            research. For ideas validated by discovery, we develop go-to-market
            strategies, detail requirements, and craft product roadmaps tailored
            to your business goals. Taking an agile approach, we rapidly build
            minimal viable products, integrating user feedback to iterate
            quickly. For e-commerce clients, we enhance customer experience
            throughout the buyer's journey - creating seamless discovery,
            purchase, and support experiences that drive conversion and loyalty.
            Our product management spans strategy, design, development, and
            optimization to turn ideas into successful digital products loved by
            customers.
          </Typography>
        </Container>
      </Section>

      <Section className="section__collaborate">
        <img src="/assets/images/collaborate-bg.png" alt="" />
      </Section>
      <Footer />
    </>
  );
};

export default Services;