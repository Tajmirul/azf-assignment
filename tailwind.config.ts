import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
            },
            fontFamily: {
                inter: 'var(--font-inter)',
                anton: 'var(--font-anton)',
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    xl: '1252px',
                    '2xl': '1252px',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
