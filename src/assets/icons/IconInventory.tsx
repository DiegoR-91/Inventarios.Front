import { SVGProps } from "react";
const IconInventory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28.325} height={40} {...props}>
    <defs>
      <clipPath id="inventory-a">
        <path
          fill="#348437"
          stroke="#666"
          strokeWidth={2}
          d="M6.563 101h28.325v40H6.563z"
          data-name="Rectangle 123"
        />
      </clipPath>
    </defs>
    <g
      clipPath="url(#inventory-a)"
      data-name="Enmascarar grupo 2"
      transform="translate(-6.563 -101)"
    >
      <g data-name="Layer 2">
        <g fill="none" data-name="invisible box">
          <path
            d="M6.563 106.838h28.325v28.325H6.563z"
            data-name="Rect\xE1ngulo 9"
          />
          <path
            d="M6.563 106.838h28.325v28.325H6.563z"
            data-name="Rect\xE1ngulo 10"
          />
          <path
            d="M6.563 106.838h28.325v28.325H6.563z"
            data-name="Rect\xE1ngulo 11"
          />
        </g>
        <g fill="#348437" data-name="icons Q2">
          <path
            d="m33.294 115.158-12.569-4.779-12.569 4.779a.531.531 0 0 0 0 1.062L20.725 121l12.569-4.78a.531.531 0 1 0 0-1.062Zm-12.569 3.3-7.376-2.769 7.376-2.773 7.376 2.773Z"
            data-name="Trazado 484"
          />
          <path
            d="m32.114 119.879-11.389 4.485-11.389-4.485a1.195 1.195 0 1 0-.826 2.242l12.215 4.78 12.215-4.78a1.195 1.195 0 1 0-.826-2.242Z"
            data-name="Trazado 485"
          />
          <path
            d="m32.114 125.78-11.389 4.485-11.389-4.485a1.195 1.195 0 1 0-.826 2.242l12.215 4.78 12.215-4.78a1.195 1.195 0 1 0-.826-2.242Z"
            data-name="Trazado 486"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default IconInventory;
