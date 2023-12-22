import React from 'react';
import { Container, Wrapper } from './style'
import Typography from 'Components/Atoms/Typography';
import { Button } from 'Components/Atoms/Button';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from 'Components/Atoms/SvgIcons';
import { Link } from 'react-router-dom';

// Type defination
interface Props {}

// Component
const Footer:React.FC<Props> = () => {

// Data to display
  return (
    <Wrapper>
      <Container>
        <div className="top">
          <div>
            <Typography as="h3" className="h-11 max-width-410">
              Connect Now to Grow Your Startup
            </Typography>
            <div className="ctas">
              <Button className="btn btn-2 b-2">Start Now</Button>
              <Button className="btn btn-3 b-3">Browse Services</Button>
            </div>
            <div className="socials">
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="top__right">
            <div>
              <Typography
                as="h5"
                className="h-12 max-width-430"
                text="Company"
              />

              <Link to="/" className="l l-2">
                Work
              </Link>
              <Link to="/" className="l l-2">
                About
              </Link>
              <Link to="/" className="l l-2">
                Services
              </Link>
            </div>
            <div>
              <Typography as="h5" className="h-12 max-width-430" text="More" />
              <Link to="/" className="l l-2">
                Get a quote
              </Link>
              <Link to="/" className="l l-2">
                Insight
              </Link>
              <Link to="/" className="l l-2">
                Contact
              </Link>
            </div>
            <div>
              <Typography
                as="h5"
                className="h-12 max-width-430"
                text="Policy"
              />
              <Link to="/" className="l l-2">
                Term of Service
              </Link>
              <Link to="/" className="l l-2">
                Privacy Policy
              </Link>
              <Link to="/" className="l l-2">
                Partnership
              </Link>
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
              text="@2023 All Right Reseved"
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
}

export default Footer;