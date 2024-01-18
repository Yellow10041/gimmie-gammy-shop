import { useState } from "react";

export const useModal = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
  };
};
