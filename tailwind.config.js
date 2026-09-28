/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          'dark': '#121318',
          'dim': '#121318',
          'bright': '#38393e',
          'container': {
            'lowest': '#0d0e13',
            'low': '#1a1b20',
            'DEFAULT': '#1e1f25',
            'high': '#292a2f',
            'highest': '#34343a',
          }
        },
        primary: '#ffb59b',
        'on-primary': '#5b1a00',
        'primary-container': '#e07147',
        'on-primary-container': '#501600',
        secondary: '#c9c6c0',
        'on-secondary': '#31312c',
        'secondary-container': '#474742',
        'on-secondary-container': '#b7b5af',
        tertiary: '#90d794',
        'on-tertiary': '#003912',
        'tertiary-container': '#5ca062',
        'on-tertiary-container': '#00320e',
        background: '#121318',
        'on-background': '#e3e1e9',
        'surface-variant': '#34343a',
        surface: {
          'tint': '#ffb59b',
        }
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      spacing: {
        'gutter': '1rem',
        'gutter-desktop': '1.5rem',
        'margin': '1rem',
        'margin-tablet': '2rem',
        'margin-desktop': '3rem',
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'modal': '0 8px 24px rgba(0, 0, 0, 0.24)',
      }
    },
  },
  plugins: [],
}