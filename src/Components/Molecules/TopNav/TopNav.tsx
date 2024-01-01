import React, { useState } from "react";

import { Container, Links, Wrapper } from "./style";

import { TopNavProps } from "./types";
import { Logo } from "Components/Atoms/Logo";
import { Link } from "react-router-dom";
import { Button } from "Components/Atoms/Button";
import { BurgerIcon } from "Components/Atoms/SvgIcons";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";

// Component
const TopNav: React.FC<TopNavProps> = (props) => {
  // States
  const [showMobileNav, setShowMobileNav] = useState(false);
  // Props
  const { bgType } = props;
  // Data to display
  return (
    <>
      <Wrapper
        style={{
          backgroundColor: `${bgType === "black" ? "#000000" : "transparent"}`,
        }}
      >
        <Container>
          <Link to="/">
            <Logo />
          </Link>
          <Links>
            <Link to="/work" className="l l-1">
              Work
            </Link>
            <Link to="/about" className="l l-1">
              About
            </Link>
            <Link to="/services" className="l l-1">
              Service
            </Link>
            <Link
              to="https://elanhausblog.framer.website/"
              target="_blank"
              className="l l-1"
            >
              Insight
            </Link>
            <Link to="#" className="l l-1">
              Get a quote
            </Link>
            <Link to="#" className="l l-1">
              Contact
            </Link>
          </Links>

          <Button className="burger" onClick={() => setShowMobileNav(true)}>
            <BurgerIcon width={22} height={17} />
          </Button>
        </Container>
      </Wrapper>

      <AnimatePresence>
        {showMobileNav && (
          <MobileNav closeNav={() => setShowMobileNav(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
