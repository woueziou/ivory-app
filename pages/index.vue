<template>
  <div class="w-screen h-screen justify-center items-center flex flex-col">
    <div>Bienvuenu sur News</div>
    <div class="h-8"></div>
    <div class=" space-x-4">
      <Button @click="reachSignUp"> Créer un compte</Button>
      <Button> Créer un compte</Button>
    </div>

  </div>
</template>


<script setup lang="ts">
const router = useRouter()
function reachSignUp() {
  router.push("/auth/sign-up")
}
// definePageMeta({
//   middleware: "auth"
// })
// const { account } = useAppwrite()

// const data = await account.get()
// console.log(data)
</script>
  