import React from 'react';
import { Wrapper } from './style'

// Type defination
interface Props {}

// Component
const Loader:React.FC<Props> = () => {

// Data to display
  return (
    <Wrapper>
      <div className="image-container">
        <img src="/assets/images/work-elan.png" alt="" />
      </div>
    </Wrapper>
  );
}

export default Loader;