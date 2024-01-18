import { useState } from "react";

export const useModalOrder = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

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
    data,
    setData,
  };
};
