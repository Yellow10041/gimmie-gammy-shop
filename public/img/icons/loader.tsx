import { FC } from "react";

interface IIconLoader {}

export const IconLoader: FC<IIconLoader> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="187px"
      height="187px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ marginRight: "-2px", display: "block" }}
    >
      <circle
        cx="50"
        cy="50"
        r="22"
        stroke-width="4"
        stroke="#fff"
        stroke-dasharray="34.55751918948772 34.55751918948772"
        fill="none"
        stroke-linecap="round"
        transform="matrix(1,0,0,1,0,0)"
        style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
      ></circle>
    </svg>
  );
};
