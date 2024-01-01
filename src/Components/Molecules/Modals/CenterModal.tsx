import React from "react";
import ReactPlayer from "react-player";

import Overlay from "Components/Atoms/Overlay";
import { CenterModalWrapper } from "./style";
import { Button } from "Components/Atoms/Button";
import { CloseIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {
  handleCloseModal: () => void;
}

// Component
const CenterModal: React.FC<Props> = (props) => {
  // Props
  const { handleCloseModal } = props;

  // Data to display
  return (
    <Overlay position="center">
      <CenterModalWrapper
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
      >
        <div className="top">
          <Button onClick={handleCloseModal}>
            <CloseIcon width={24} height={25} />
          </Button>
        </div>
        <ReactPlayer
          url="https://youtu.be/vs-sib12f9I"
          width={"100%"}
          playing
        />
      </CenterModalWrapper>
    </Overlay>
  );
};

export default CenterModal;
