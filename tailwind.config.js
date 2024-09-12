/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('./assets/images/backgroundLogin.png')",
        "home-banner": "url('./assets/images/home-tree-recorte.png')",
      },
      colors: {
        grayBackground: "#F5F5F5",
        greenPrimaryButton: "#549D33",
        greenSecondaryButton: "#348437",
        greenActiveSideItem: "#95C11F",
        greenBgSideItem: "#D6E8CD",
        greenCard: "#25864A",
        greenIconsButton: "#91D46C",
        greenRowTable: "#F3F8EB",
        greenActiveRowTable: "#8AC408",
        grayDisabled: "#B2B2B5",
      },
    },
  },
  plugins: [nextui()],
};
