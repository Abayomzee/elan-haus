import React from "react";
import { Container, Header, Section, WorkBox } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Footer } from "Components/Organisms/Footer";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const Work: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav bgType="black" />
      <Header>
        <Container className="container__header">
          <Typography as="h2" className="h-19 text-center">
            <>
              Some of Our Work
              <span className="h-19--red">.</span>
            </>
          </Typography>
        </Container>
      </Header>

      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="Lahdaa." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="A platform disrupting business school education."
            />

            <Link to="/work/lahdaa">
              <Button className="btn btn-4 b-4">
                View Project <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-lahdaa.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>
      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="TeleSchool." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="Connecting learning beyond classroom walls"
            />
            <Link to="/work/teleschool">
              <Button className="btn btn-4 b-4">
                View Project <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-teleschool.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>
      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="AlumniHub." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="Redefining nutrition for ethnic minorities "
            />
            <Link to="/work/alumnihub">
              <Button className="btn btn-4 b-4">
                View Project <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-alimni.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>
      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="Femi." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="Redefining nutrition for ethnic minorities"
            />
            <Link to="/work/femi">
              <Button className="btn btn-4 b-4">
                View Project <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-alimni.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>
      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="Fudtraka." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="Helping foodies find the best local eats"
            />
            <Link to="/work/fudtraka">
              <Button className="btn btn-4 b-4">
                View Project <ArrowRightIcon />
              </Button>
            </Link>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-fudtraka.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>
      <Section>
        <WorkBox>
          <div className="left">
            <Typography as="h4" className="h-20" text="Elan Haus." />
            <Typography
              as="h5"
              className="h-21 mt-20 mb-40 max-width-500"
              text="A website we own and built from the ground up"
            />
            <Button className="btn btn-4 b-4">
              View Project <ArrowRightIcon />
            </Button>
          </div>
          <div>
            <div className="right image-container">
              <img src="/assets/images/work-elan.png" alt="" />
            </div>
          </div>
        </WorkBox>
      </Section>

      <Footer />
    </>
  );
};

export default Work;
