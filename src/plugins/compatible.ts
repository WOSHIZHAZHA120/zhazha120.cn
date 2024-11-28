export default defineNuxtPlugin((app) => {
	const router = useRouter()

	router.addRoute({
		path: '/toolbox/4k/accuracy_calculator',
		redirect: () => ({
			path: '/tools/accuracy-calculator'
		})
	})
})