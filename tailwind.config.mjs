/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'farvenavn': {
                    primary: '#565CFF',
                    whiteish: '#FFFBF7',
                    accent: '#B8FB82',
                    blackish: '#06072D',
                },},

                fontFamily: {
                    sans: ['Roboto', 'sans-serif'], // Til moderne/brugsfokus
                    serif: ['Cormorant Garamond', 'serif'], // Til elegant stil
                },
        
                    fontSize: {
                    h1: ["140px"],
                    h2: ["100px"],
                    h3: ["70px"],
                    h4: ["40px"],
                    p: ["28px"],
                    storp: ["34px"],
                },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
};
