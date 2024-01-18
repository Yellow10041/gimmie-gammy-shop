interface IIconButtonBuyBorderMobProps {}

const IconButtonBuyBorderMob: React.FunctionComponent<
  IIconButtonBuyBorderMobProps
> = (props) => {
  return (
    <svg
      width="86"
      height="50"
      viewBox="0 0 86 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_b_316_1093)">
        <rect
          x="0.5"
          y="0.5"
          width="85"
          height="49"
          rx="24.5"
          stroke="url(#paint0_linear_316_1093)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_316_1093"
          x="-32"
          y="-32"
          width="150"
          height="114"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_316_1093"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_316_1093"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_316_1093"
          x1="43"
          y1="5.53952e-06"
          x2="85.144"
          y2="9.74949"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4D4D" />
          <stop offset="1" stopColor="#FF4D4D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconButtonBuyBorderMob;
