import React from "react";

import { Container, Links, Wrapper } from "./style";

import { TopNavProps } from "./types";
import { Logo } from "Components/Atoms/Logo";
import { Link } from "react-router-dom";

// Component
const TopNav: React.FC<TopNavProps> = (props) => {
  // Props
  const { bgType } = props;
  // Data to display
  return (
    <Wrapper
      style={{
        backgroundColor: `${bgType === "black" ? "#000000" : "transparent"}`,
      }}
    >
      <Container>
        <Logo />
        <Links>
          <Link to="/work" className="l l-1">
            Work
          </Link>
          <Link to="/" className="l l-1">
            About
          </Link>
          <Link to="/" className="l l-1">
            Service
          </Link>
          <Link to="/" className="l l-1">
            Insight
          </Link>
          <Link to="/" className="l l-1">
            Get a quote
          </Link>
          <Link to="/" className="l l-1">
            Contact
          </Link>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default TopNav;
