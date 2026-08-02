import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          main: '#000000',
          soft: '#000000',
          card: 'rgba(255,255,255,0.06)',
          glass: 'rgba(255,255,255,0.06)',
        },
        accent: {
          sky: '#01D439',
          teal: '#0EA5A4',
          green: '#01D439',
          red: '#EF0000',
          grey: '#AAAAAA',
        },
      },
      fontFamily: {
        sans: ['Charlie Text', 'Atlassian Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Charlie Display', 'Atlassian Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.34)',
        glow: '0 18px 54px rgba(1, 212, 57, 0.22)',
      },
      backgroundImage: {
        'liquid-radial':
          'radial-gradient(circle at 20% 20%, rgba(1,212,57,0.18), transparent 34%), radial-gradient(circle at 78% 12%, rgba(14,165,164,0.14), transparent 30%), radial-gradient(circle at 52% 84%, rgba(170,170,170,0.16), transparent 36%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
