import type { Config } from "tailwindcss"

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Custom extracted colors
        'main': {
          DEFAULT: 'hsl(78, 68%, 59%)', // #c7f052
          50: 'hsl(78, 68%, 95.9%)',
          100: 'hsl(78, 68%, 91.8%)',
          200: 'hsl(78, 68%, 87.7%)',
          300: 'hsl(78, 68%, 83.6%)',
          400: 'hsl(78, 68%, 79.5%)',
          500: 'hsl(78, 68%, 75.4%)',
          600: 'hsl(78, 68%, 59%)',
          700: 'hsl(78, 68%, 53.1%)',
          800: 'hsl(78, 68%, 47.2%)',
          900: 'hsl(78, 68%, 41.3%)',
        },
        'main-two': {
          DEFAULT: 'hsl(13, 83%, 53%)', // #e65126
          600: 'hsl(13, 83%, 53%)',
        },
        'main-three': {
          DEFAULT: 'hsl(43, 81%, 79%)', // #f7d89e
          600: 'hsl(43, 81%, 79%)',
        },
        'main-four': {
          DEFAULT: 'hsl(253, 100%, 50%)', // #4000ff
          600: 'hsl(253, 100%, 50%)',
        },
        'main-five': {
          DEFAULT: 'hsl(7, 100%, 54%)', // #ff3d2e
          600: 'hsl(7, 100%, 54%)',
        },
        'main-six': {
          DEFAULT: 'hsl(39, 100%, 50%)', // #ffa600
          600: 'hsl(39, 100%, 50%)',
        },
        'main-seven': {
          DEFAULT: 'hsl(214, 95%, 61%)', // #3d8aff
          600: 'hsl(214, 95%, 61%)',
        },
        'neutral': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'black': {
          DEFAULT: 'hsl(240, 46%, 5%)',
        },
        'body': {
          DEFAULT: 'hsl(0, 0%, 43%)',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '3rem',
      },
      fontFamily: {
        heading: ["Mango Grotesque", "serif"],
        body: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "bounce-y": {
          "0%": { transform: "translateY(-40px)" },
          "100%": { transform: "translateY(30px)" },
        },
        "rotate-infinite": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "moving": {
          "0%, 100%": { transform: "translateY(0px)" },
          "20%": { transform: "translateX(-30px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-shape1": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(60px)" },
        },
        "bounce-thum-2": {
          "0%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        "wobble": {
          "0%": { transform: "translateZ(0)" },
          "15%": { transform: "translate3d(-25%, 0, 0) rotate(-5deg)" },
          "30%": { transform: "translate3d(20%, 0, 0) rotate(3deg)" },
          "45%": { transform: "translate3d(-15%, 0, 0) rotate(-3deg)" },
          "60%": { transform: "translate3d(10%, 0, 0) rotate(2deg)" },
          "75%": { transform: "translate3d(-5%, 0, 0) rotate(-1deg)" },
          "100%": { transform: "translateZ(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee var(--duration) linear infinite",
        "bounce-y": "bounce-y 3.5s forwards infinite alternate",
        "rotate-infinite": "rotate-infinite 6s infinite linear",
        "moving": "moving 7s linear infinite",
        "bounce-shape1": "bounce-shape1 3.5s infinite",
        "bounce-thum-2": "bounce-thum-2 1s ease-in-out 0.1s forwards infinite alternate",
        "wobble": "wobble 1.5s ease-in-out",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

export default config