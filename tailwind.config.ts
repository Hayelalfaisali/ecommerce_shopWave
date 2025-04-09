import { type Config } from "tailwindcss";

export default {
  darkMode: ["class", "html"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.border"),
      }),
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        shop: {
          blue: "#0EA5E9",
          indigo: "#8B5CF6",
          pink: "#D946EF",
          orange: "#F97316",
          gray: "#1A1F2C",
          "light-gray": "#F1F0FB",
          "dark-gray": "#1A1F2C",
          'shop-blue': '#0EA5E9',
          'shop-indigo': '#8B5CF6',
          'shop-pink': '#D946EF',
          'shop-orange': '#F97316',
          'shop-gray': '#1A1F2C',
          'shop-light-gray': '#F1F0FB',
          'shop-dark-gray': '#1A1F2C',
        },
      },
      textColor: ({ theme }) => ({
        ...theme('colors'),
        'shop-blue': theme('colors.shop.blue'),
        'shop-gray': theme('colors.shop.gray'),
        'shop-light-gray': theme('colors.shop.light-gray')
      }),
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'shop-blue': theme('colors.shop.blue'),
        'shop-gray': theme('colors.shop.gray'),
        'shop-light-gray': theme('colors.shop.light-gray')
      }),
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
