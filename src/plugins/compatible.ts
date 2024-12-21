export default defineNuxtPlugin(() => {
	const router = useRouter()

	router.addRoute({
		path: '/toolbox/4k/accuracy_calculator',
		redirect: () => ({
			path: '/accuracy-calculator'
		})
	})

	router.addRoute({
		path: '/tools/accuracy-calculator',
		redirect: () => ({
			path: '/accuracy-calculator'
		})
	})
})