<template>
    <div class="w-screen flex overflow-auto justify-center">
        <div class="flex flex-col overflow-auto w-3/5  justify-center items-center gap-2">
            <div class="pb-44"></div>
            <h1 class="text-xl">
                Se connecter
            </h1>
            <!-- 
            <div class="flex flex-col w-2/5 gap-1">
                <label for="username">Pseudo</label>
                <InputText id="username" aria-describedby="username-help" />
            </div> -->

            <div class="flex flex-col w-2/5 gap-1">
                <label for="email">Email</label>
                <InputText id="email" v-model="credentials.email" />
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="password">Mot de passe</label>
                <InputText id="password" type="password" v-model="credentials.password" />
            </div>
            <div class="h-4"></div>
            <div>
                <InlineMessage severity="error" v-if="errorMsg.length > 0">{{ errorMsg }}</InlineMessage>
            </div>
            <div class="w-2/5">
                <Button :loading="working" label="Se connecter" @click="login" class="w-full" />
            </div>


            <div>ou</div>
            <div class="w-2/5">
                <Button label="Créer mon compte" text class="w-full" />
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">

const supabase = useSupabaseClient()
const credentials = ref({
    email: "", password: "",
})
const errorMsg = ref("")
const working = ref(false)
async function login() {
    if (working.value) { return; }
    errorMsg.value=''
    working.value = true;
    const response = await supabase.auth.signInWithPassword({ email: credentials.value.email, password: credentials.value.password })
    if (response.error) {
        errorMsg.value = response.error.message
        working.value = false;
        return;
    }
    working.value = false;
    navigateTo({ name: "app" })
}
</script>

<style scoped></style>