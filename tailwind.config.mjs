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
                    h2: ["80px"],
                    h3: ["60px"],
                    h4: ["32px"],
                    h5: ["24px"],
                    p_genre: ["16px"],
                    p: ["22px"],
                    storp: ["28px"],
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
