tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "var(--color-primary-default)",
                "background-light": "var(--color-bg-light)",
                "background-dark": "var(--color-bg-dark)",
                "surface-dark": "var(--color-surface-dark)",
                "border-dark": "var(--color-border-dark)",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
                "sans": ["Noto Sans", "sans-serif"],
                // This was specific to aboutme.html, but we can make it available globally
                "newsreader": ["Newsreader", "serif"], 
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "sm": "0.125rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
}
