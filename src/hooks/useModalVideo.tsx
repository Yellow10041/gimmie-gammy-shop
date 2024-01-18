import { useState, RefObject } from "react";

export const useModalVideo = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoRef, setVideoRef] = useState<RefObject<HTMLVideoElement> | null>(
    null
  );
  const [videoSrc, setVideoSrc] = useState<string>("/");
  const [price, setPrice] = useState<number>(0);

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
    videoRef,
    setVideoRef,
    videoSrc,
    setVideoSrc,
    price,
    setPrice
  };
};
