import React from "react";
import { LinksMobile, MobileNavStyle } from "./style";
import { Button } from "Components/Atoms/Button";
import { CloseIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {
  closeNav: () => void;
}

// Component
const MobileNav: React.FC<Props> = ({ closeNav }) => {
  // Data to display
  return (
    <MobileNavStyle
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
    >
      <div className="top">
        <Button onClick={closeNav}>
          <CloseIcon width={29} height={30} />
        </Button>
      </div>

      <LinksMobile>
        <Link to="/work" className="l l-6">
          Work
        </Link>
        <Link to="/about" className="l l-6">
          About
        </Link>
        <Link to="/services" className="l l-6">
          Service
        </Link>
        <Link
          to="https://elanhausblog.framer.website/"
          target="_blank"
          className="l l-6"
        >
          Insight
        </Link>
        <Link to="#" className="l l-6">
          Get a quote
        </Link>
        <Link to="#" className="l l-6">
          Contact
        </Link>
      </LinksMobile>
    </MobileNavStyle>
  );
};

export default MobileNav;
