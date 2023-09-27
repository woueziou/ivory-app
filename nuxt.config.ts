// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"nuxt-icon",
		"@vueuse/nuxt",
		"nuxt-typed-router",
		"nuxt-appwrite"
	],
	imports: {
		dirs: [
			"composables",
			// ... or scan modules nested one level deep with a specific name and file extension
			"composables/*/index.{ts,js,mjs,mts}",
			"composables/**",
		],
	},
	tailwindcss: {
		injectPosition: "first",
		viewer: true,
	},

	css: [
		"assets/css/tailwindcss.css",
		"assets/css/theme.css"
	],
	appwrite: {
		/* module options */
		project: '6512c8e86e0d47ad818d',
		endpoint: 'https://cloud.appwrite.io/v1'
	}

	, build: {
		transpile: [

			'primevue'
		],
	},
})
