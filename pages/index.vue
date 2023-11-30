<template>
  <div class="w-screen h-screen justify-center items-center flex flex-col">
    <div>Bienvuenu sur ivory Job</div>
    <div class="h-8"></div>
    <div class=" space-x-4">
      <Button @click="reachSignUp"> Créer un compte</Button>
      <Button @click="login"> Se connecter</Button>
    </div>

  </div>
</template>


<script setup lang="ts">
const user = useSupabaseUser()
function redirectMe() {
  if (user.value) {
    return navigateTo({ name: "app" })
  }
}
redirectMe()

const router = useRouter()
function reachSignUp() {
  router.push("/auth/sign-up")
}

async function login() {
  navigateTo({ name: "auth-sign-in" })
}
// definePageMeta({
//   middleware: "auth"
// })
// const { account } = useAppwrite()

// const data = await account.get()
// console.log(data)
</script>
  