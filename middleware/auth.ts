export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser()

	if(!user.value){
		return navigateTo({name:"auth-sign-in"})
	}
	// const { account } = useAppwrite()
	// const data = await account.get()
	// console.log(data)
	// console.log(auth.value)
	// if (!auth.value) {
	// 	return navigateTo({ name: "auth-login" });
	// }
});