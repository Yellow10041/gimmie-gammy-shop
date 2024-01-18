import { useState } from "react";

export const useModalShareVideo = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoID, setVideoID] = useState<number>(0);

  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return {
    isActive,
    openModal,
    closeModal,
    videoID,
    setVideoID,
  };
};
