/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAF8',
        'bg-secondary': '#F5F3EE',
        'bg-dark': '#0F0F0F',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B76',
        'text-muted': '#9B9BA3',
        'accent-home': '#C5553A',
        'accent-dental': '#2E6EB5',
        'accent-legal': '#7A5C3E',
        'accent-realestate': '#B8612D',
        border: '#E8E3DC',
        'border-subtle': '#F0EDE7',
        success: '#2A7D4F',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
        'inter-tight': ['"Inter Tight"', 'Inter', 'Arial', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'jb-mono': ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        'fraunces': ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
