import { useState } from "react";

export const useModalEmail = () => {
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
