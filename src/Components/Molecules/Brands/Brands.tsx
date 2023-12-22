import React from "react";
import { Container, Wrapper } from "./style";

// Type defination
interface Props {}

// Component
const Brands: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper className="section__logos">
      <Container>
        <img src="assets/images/logos-stevia.svg" alt="" />
        <img src="assets/images/logos-pbarter.svg" alt="" />
        <img src="assets/images/logos-lahdaa.svg" alt="" />
        <img src="assets/images/logos-fudtraka.svg" alt="" />
        <img src="assets/images/logos-female-rise.svg" alt="" />
        <img src="assets/images/logos-femi.svg" alt="" />
      </Container>
    </Wrapper>
  );
};

export default Brands;
