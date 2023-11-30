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
		"@nuxtjs/supabase",
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

	supabase: {
		redirect:false,

		// url: "https://bxegwwlldktgawnqznpq.supabase.co",
		// key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZWd3d2xsZGt0Z2F3bnF6bnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5OTg1MTMsImV4cCI6MjAxMTU3NDUxM30.sKj_rnGbsivQOxSqbINQJ6nEW4Yg8uSu9Q5WH9x6Syc"
	},
	css: [
		"assets/css/tailwindcss.css",
		"assets/css/theme.css"
	]

	, build: {
		transpile: [

			'primevue'
		],
	},
})