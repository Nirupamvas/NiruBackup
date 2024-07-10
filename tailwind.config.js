/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "// Or if using src directory:\n        ./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
];
export const theme = {
  fontFamily: {
    oswald: "Oswald, sans-serif",
    urbanist: "Urbanist, sans-serif",
  },
  extend: {
    animation: {
      'meteor-effect': 'meteor 5s linear infinite',
      scroll:
      "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      meteor: {
        '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
        '70%': { opacity: '1' },
        '100%': {
          transform: 'rotate(215deg) translateX(-500px)',
          opacity: '0',
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
};
export const plugins = [];
