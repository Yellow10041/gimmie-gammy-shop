interface IIconEyeProps {}

const IconEye: React.FunctionComponent<IIconEyeProps> = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_314_895)">
        <path
          d="M26.5615 11.4375C23.674 6.89997 19.449 4.28748 14.999 4.28748C12.774 4.28748 10.6115 4.93748 8.63652 6.14998C6.66152 7.37498 4.88652 9.16248 3.43652 11.4375C2.18652 13.4 2.18652 16.5875 3.43652 18.55C6.32402 23.1 10.549 25.7 14.999 25.7C17.224 25.7 19.3865 25.05 21.3615 23.8375C23.3365 22.6125 25.1115 20.825 26.5615 18.55C27.8115 16.6 27.8115 13.4 26.5615 11.4375ZM14.999 20.05C12.199 20.05 9.94902 17.7875 9.94902 15C9.94902 12.2125 12.199 9.94998 14.999 9.94998C17.799 9.94998 20.049 12.2125 20.049 15C20.049 17.7875 17.799 20.05 14.999 20.05Z"
          fill="white"
        />
        <path
          d="M14.999 11.425C13.0365 11.425 11.4365 13.025 11.4365 15C11.4365 16.9625 13.0365 18.5625 14.999 18.5625C16.9615 18.5625 18.574 16.9625 18.574 15C18.574 13.0375 16.9615 11.425 14.999 11.425Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_314_895"
          x="-51.501"
          y="-49.7125"
          width="133"
          height="129.412"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="27" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_314_895"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_314_895"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconEye;
