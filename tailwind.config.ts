import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'pulse-scale': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                },
                "scroll-left-right": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(-50%)" },
                },
                "marquee": {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
            animation: {
                'pulse-scale': 'pulse-scale 1.5s ease-in-out infinite',
                "scroll-left-right": "scroll-left-right 12s ease-in-out infinite",
                "marquee": "marquee 20s linear infinite",
            },
        },
    },
    plugins: [],
}
export default config
