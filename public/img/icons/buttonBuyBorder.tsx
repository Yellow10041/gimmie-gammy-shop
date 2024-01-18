interface IIconButtonBuyBorderProps {}

const IconButtonBuyBorder: React.FunctionComponent<
  IIconButtonBuyBorderProps
> = (props) => {
  return (
    <svg
      width="203"
      height="46"
      viewBox="0 0 203 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_b_273_1465)">
        <rect
          x="0.5"
          y="0.5"
          width="202"
          height="45"
          rx="22.5"
          stroke="url(#paint0_linear_273_1465)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_273_1465"
          x="-32"
          y="-32"
          width="267"
          height="110"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_273_1465"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_273_1465"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_273_1465"
          x1="101.5"
          y1="0"
          x2="175"
          y2="50.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF4D4D" />
          <stop offset="1" stopColor="#FF4D4D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconButtonBuyBorder;
