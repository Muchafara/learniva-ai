/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        brand: {
          green: '#96F254',
          blue: '#0193F4',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #96F254 0%, #0193F4 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #0193F4 0%, #96F254 100%)',
        'gradient-brand-radial': 'radial-gradient(ellipse at center, #96F254 0%, #0193F4 100%)',
        'gradient-brand-radial-soft': 'radial-gradient(ellipse 800px 600px at center, rgba(150, 242, 84, 0.15) 0%, rgba(1, 147, 244, 0.15) 50%, transparent 100%)',
        'gradient-brand-radial-glow': 'radial-gradient(ellipse 400px 300px at center, rgba(150, 242, 84, 0.3) 0%, rgba(1, 147, 244, 0.3) 50%, transparent 100%)',
        'gradient-brand-angular': 'linear-gradient(45deg, #96F254 0%, #0193F4 50%, #96F254 100%)',
        'gradient-brand-glow': 'linear-gradient(135deg, rgba(150, 242, 84, 0.8) 0%, rgba(1, 147, 244, 0.8) 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgba(150, 242, 84, 0.1) 0%, rgba(1, 147, 244, 0.1) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        counter: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '450px',
        'sm': '575px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}
