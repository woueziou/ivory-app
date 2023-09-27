<template>
    <div class="w-screen flex overflow-auto justify-center">
        <div class="flex flex-col overflow-auto w-3/5  justify-center items-center gap-2">
            <div class="pb-44"></div>
            <h1 class="text-xl">
                Créer un compte
            </h1>
            <!-- 
            <div class="flex flex-col w-2/5 gap-1">
                <label for="username">Pseudo</label>
                <InputText id="username" aria-describedby="username-help" />
            </div> -->
          
            <div class="flex flex-col w-2/5 gap-1">
                <label for="email">Email</label>
                <InputText id="email" />
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="password">Mot de passe</label>
                <InputText id="password" type="password" />
            </div> 
            <div class="h-4"></div>
             <hr class="bg-black w-1/5 text-black">
            <div class="flex flex-col w-2/5 gap-1">
                <label for="last_name">Nom</label>
                <InputText id="last_name" />
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="first_name">Prénoms</label>
                <InputText id="first_name" />
                <!-- <small id="username-help">Enter your username to reset your password.</small> -->
            </div>

            <div class="flex flex-col w-2/5 gap-1">
                <label for="speciality">Facultés</label>
                <Dropdown id="speciality" />
                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="speciality">Spécialité</label>
                <Dropdown id="speciality" />
                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="speciality">Niveau d'étude</label>
                <Dropdown id="speciality" />
                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-2/5 gap-1">
                <label for="phone_number">Numéro de téléphone</label>
                <InputText id="phone_number" />
                <small id="phone_number-help"> Pour d'éventuels recommandations</small>
            </div>


            <div class="w-2/5">
                <Button label="Créer mon compte" class="w-full"/>
            </div>
            <div>ou</div>  
            <div class="w-2/5">
                <Button label="Se connecter" text class="w-full" @click="reachSignIn" />
            </div>
            <div></div>
        </div>
    </div>  
</template>

<script setup lang="ts">
const router = useRouter()
function reachSignIn() {
  router.push("/auth/sign-in")
}
</script>

<style scoped></style>