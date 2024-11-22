import { SVGProps } from "react";
const IconReports = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a-IconReports)">
      <mask
        id="b-IconReports"
        width={30}
        height={40}
        x={11}
        y={6}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M40.16 6H11.837v40H40.16V6Z" />
      </mask>
      <g fill="#348437" mask="url(#b-IconReports)">
        <path d="M30.719 20.099h-9.442a1.18 1.18 0 1 0 0 2.36h9.442a1.18 1.18 0 1 0 0-2.36ZM30.719 24.82h-9.442a1.18 1.18 0 1 0 0 2.36h9.442a1.18 1.18 0 1 0 0-2.36ZM25.998 29.541h-4.721a1.18 1.18 0 1 0 0 2.36h4.72a1.18 1.18 0 1 0 0-2.36Z" />
        <path d="M34.26 15.969v20.063H17.736V15.969H34.26Zm1.176-2.361H16.557a1.18 1.18 0 0 0-1.18 1.18v22.424a1.18 1.18 0 0 0 1.18 1.18h18.879a1.18 1.18 0 0 0 1.18-1.18V14.788a1.18 1.18 0 0 0-1.18-1.18Z" />
      </g>
    </g>
    <defs>
      <clipPath id="a-IconReports">
        <path fill="#fff" d="M0 0h52v52H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconReports;
