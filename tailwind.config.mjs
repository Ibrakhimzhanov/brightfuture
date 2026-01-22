/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Figma
        'bf-black': '#000000',
        'bf-dark': '#141414',
        'bf-gray': '#8C8C8C',
        'bf-gray-light': '#F6F6F6',
        'bf-beige': '#F2F1EC',
        'bf-white': '#FFFFFF',
        'bf-primary': '#13499F',
        'bf-primary-hover': '#0F3A80',
        'bf-primary-active': '#0A2960',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom sizes from Figma
        'display-xl': ['15.625rem', { lineHeight: '1', fontWeight: '600' }],
        'display': ['6.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h1': ['3.25rem', { lineHeight: '1.2', fontWeight: '500' }],
        'h2': ['3.75rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.2', fontWeight: '500' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1.125rem', { lineHeight: '1.4', fontWeight: '400' }],
        'small': ['1rem', { lineHeight: '1.4', fontWeight: '400' }],
        'nav': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '21': '5.25rem',
        'container': '4.375rem', // 70px
      },
      maxWidth: {
        'container': '90rem', // 1440px
        'content': '81.25rem', // 1300px
      },
      borderRadius: {
        'card': '2rem', // 32px
        'button': '3.125rem', // 50px
      },
      height: {
        'header': '3.625rem', // 58px
        'hero': '45rem', // 720px
      },
      gap: {
        'section': '5rem', // 80px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
