module.exports = {
    content: [
        // "index.html",
		// "./src/**/*.{js,jsx,ts,tsx,vue,html}",
		// "./node_modules/flowbite/**/*.{js,ts}",
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		// "./nuxt.config.{js,ts}",
    ],

    theme: {
        fontFamily: {
            sans: ['"Source Sans Pro"', "Lato", "Epilogue", "sans-serif"],
            mono: ["Ubuntu Mono", "monospace"],
        },
        extend: {
            colors: {
                'teal': {
                    '50': 'oklch(98.36% 0.01 180.72)',
                    '100': 'oklch(95.27% 0.05 180.80)',
                    '200': 'oklch(91.00% 0.09 180.43)',
                    '300': 'oklch(85.49% 0.13 181.07)',
                    '400': 'oklch(78.45% 0.13 181.91)',
                    '500': 'oklch(70.38% 0.12 182.50)',
                    '600': 'oklch(60.02% 0.10 184.70)',
                    '700': 'oklch(51.09% 0.09 186.39)',
                    '800': 'oklch(43.70% 0.07 188.22)',
                    '900': 'oklch(38.61% 0.06 188.42)',
                    '950': 'oklch(27.73% 0.04 192.52)',
                },

                'sky': {
                    50: "hsl(204, 100%, 97%)",
                    100: "hsl(204, 94%, 94%)",
                    200: "hsl(201, 94%, 86%)",
                    300: "hsl(199, 95%, 74%)",
                    400: "hsl(198, 93%, 60%)",
                    500: "hsl(199, 89%, 48%)",
                    600: "hsl(200, 98%, 39%)",
                    700: "hsl(201, 96%, 32%)",
                    800: "hsl(201, 90%, 27%)",
                    900: "hsl(202, 80%, 24%)",
                    950: "hsl(204, 80%, 16%)",
                },
            },
        },
    },

    plugins: [],
};