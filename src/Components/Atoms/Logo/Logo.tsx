import React from "react";

// Type defination
interface Props {}

// Component
const Logo: React.FC<Props> = () => {
  // Data to display
  return (
    <img
      src="/assets/images/logo-large.png"
      alt=""
      style={{ width: "8.9rem", height: "5.4rem" }}
    />
  );
};

export default Logo;
