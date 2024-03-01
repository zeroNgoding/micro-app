/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      top: {
        "29rem": "29rem",
      },
      height: {
        100: "26.313rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
