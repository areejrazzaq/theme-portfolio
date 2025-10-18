export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // New Theme Colors
        'card': 'var(--card)',
        'ring': 'var(--ring)',
        'input': 'var(--input)',
        'muted': 'var(--muted)',
        'accent': 'var(--accent)',
        'border': 'var(--border)',
        'popover': 'var(--popover)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'destructive': 'var(--destructive)',
        'card-foreground': 'var(--card-foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        'accent-foreground': 'var(--accent-foreground)',
        'popover-foreground': 'var(--popover-foreground)',
        'primary-foreground': 'var(--primary-foreground)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'destructive-foreground': 'var(--destructive-foreground)',
        
        // Legacy colors for gradual transition
        'neutral-light': '#F9F9F9',
        'neutral-base': '#F5F5F5',
        'charcoal': '#333333',
        'charcoal-light': '#4A4A4A',
        'purple-primary': '#7B4789',
        'purple-light': '#9B6BA3',
        'purple-dark': '#5A2F66',
        'gold-primary': '#F2C94C',
        'gold-light': '#F5D76E',
        'gold-dark': '#D4A842',
        'teal-primary': '#4CAEA8',
        'teal-light': '#6BC5BF',
        'teal-dark': '#3A8B85',
        'friends-lavender': '#9370DB',
        'friends-maroon': '#800000',
        'friends-nude': '#E6BE8A',
        'friends-beige': '#F5F5DC',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
        'friends': ['Gabriel Weiss\' Friends Font', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      borderRadius: {
        'theme': 'var(--radius)',
      }
    },
  },
}