import React from "react";
import { MobileNavStyle } from "./style";

// Type defination
interface Props {}

// Component
const MobileNav: React.FC<Props> = () => {
  // Data to display
  return (
    <MobileNavStyle
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.3, delay: 0.3 }}
    >
        <div className="top"></div>
    </MobileNavStyle>
  );
};

export default MobileNav;
