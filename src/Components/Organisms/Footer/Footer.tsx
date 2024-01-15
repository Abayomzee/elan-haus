import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const Footer: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Container>
        <div className="top">
          <div>
            <Typography as="h3" className="h-11 max-width-410">
              Connect Now to Grow Your Business
            </Typography>
            <div className="ctas">
              <Link
                to="https://share-eu1.hsforms.com/11XlSGNasRHKHqtV_mRpXRA2dnjzx"
                target="_blank"
                className="l l-2"
              >
                <Button className="btn btn-2 b-2">Start Now</Button>
              </Link>
              <Link to="/services" className="l l-2">
                <Button className="btn btn-3 b-3">Browse Services</Button>
              </Link>
            </div>
            <div className="socials">
              <Link
                to="https://www.facebook.com/profile.php?id=61555223154071"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.linkedin.com/company/elan-haus"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link to="https://www.instagram.com/elanhaus/" target="_blank">
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div className="top__right">
            <div>
              <Typography
                as="h5"
                className="h-12 max-width-430"
                text="Company"
              />

              <Link to="/work" className="l l-2">
                Work
              </Link>
              <Link to="/about" className="l l-2">
                About
              </Link>
              <Link to="/services" className="l l-2">
                Services
              </Link>
            </div>
            <div>
              <Typography as="h5" className="h-12 max-width-430" text="More" />
              <Link
                to="https://share-eu1.hsforms.com/11XlSGNasRHKHqtV_mRpXRA2dnjzx"
                target="_blank"
                className="l l-2"
              >
                Get a quote
              </Link>
              <Link
                to="https://elanhausblog.framer.website/"
                target="_blank"
                className="l l-2"
              >
                Insight
              </Link>
              {/* <Link to="/" className="l l-2">
                Contact
              </Link> */}
              <a href="mailto:contact@elanhaus.com" className="l l-2">
                Contact
              </a>
            </div>
            <div>
              <Typography
                as="h5"
                className="h-12 max-width-430"
                text="Policy"
              />
              {/* <Link to="/" className="l l-2">
                Term of Service
              </Link>
              <Link to="/" className="l l-2">
                Privacy Policy
              </Link> */}
              {/* <Link to="#" className="l l-2">
                Partnership
              </Link> */}
              <a href="mailto:contact@elanhaus.com" className="l l-2">
                Partnership
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <Typography
              as="p"
              className="p-11"
              text="London, New York, Lagos"
            />
            <Typography
              as="p"
              className="p-12"
              text="@2024 All Right Reseved"
            />
          </div>
          <Typography as="p" className="p-11 max-width-580">
            We are a digital consulting agency focused on helping growing and
            early stage startups bring their visions to life.
          </Typography>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
