<template>
  <div class="w-screen h-screen justify-center items-center flex  space-y-4 flex-col">
    <div class="font-bold text-4xl">Ivory JOB</div>
    <div>Confirmez votre inscription</div>
    <div class="text-xs">Entrez le code à 6 chiffes envoyé à votre adresse <span class="font-bold">{{ email }}</span>
    </div>
    <div class="w-full  flex justify-center">

      <InputText v-if="!isValidated" v-model="tokenRef" placeholder="6 chiffres" class="w-1/5" />
    </div>
    <InlineMessage v-if="successMessage.length > 0" severity="success">{{ successMessage }}</InlineMessage>
    <div class=" space-x-4">
      <Button v-if="!isValidated" :loading="working" @click="confirmToken" label="Valider"></Button>
      <Button v-else @click="reachHome" label="Continuer"></Button>
    </div>

    <InlineMessage v-if="errorMessage.length > 0" severity="error">{{ errorMessage }}</InlineMessage>

  </div>
</template>


<script setup lang="ts">
const email = localStorage.getItem('register-email')
const supabase = useSupabaseClient()
const working = ref(false)
const tokenRef = ref("")
const errorMessage = ref('')
const successMessage = ref('')
const isValidated = ref(false)
async function confirmToken() {
  try {
    if (email == null) {
      errorMessage.value = "email invalide (01)"
      return;
    }
    working.value = true;
    const response = await supabase.auth.verifyOtp({ email: email, token: tokenRef.value, type: 'signup' });
    if (response.error) {
      errorMessage.value = response.error.message
      working.value = false;
    }
    successMessage.value = "Compte vérifié avec succès"
    isValidated.value = true
  } catch (error) {
    console.log(error)
    errorMessage.value = "Une erreur s'est produite lors de la validation du code"
    working.value = false;
  }
}

function reachHome() {
  return navigateTo({ name: "app" })
}
</script>
  