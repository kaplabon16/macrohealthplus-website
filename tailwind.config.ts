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
          sky: '#69B128',
          teal: '#0EA5A4',
          green: '#69B128',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.34)',
        glow: '0 18px 54px rgba(105, 177, 40, 0.22)',
      },
      backgroundImage: {
        'liquid-radial':
          'radial-gradient(circle at 20% 20%, rgba(105,177,40,0.18), transparent 34%), radial-gradient(circle at 78% 12%, rgba(14,165,164,0.14), transparent 30%), radial-gradient(circle at 52% 84%, rgba(148,163,184,0.16), transparent 36%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
