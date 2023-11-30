<template>
    <div class="w-full flex justify-center">
        <div class="flex flex-col  w-full md:w-3/5  justify-center items-center gap-2">
            <div class="pb-44"></div>
            <h1 class="text-xl">
                Créer un compte
            </h1>
            <!-- 
            <div class="flex flex-col w-2/5 gap-1">
                <label for="username">Pseudo</label>
                <InputText id="username" aria-describedby="username-help" />
            </div> -->

            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="email">Email</label>
                <InputText id="email" v-model="credentials.email" />
            </div>
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="password">Mot de passe</label>
                <InputText id="password" type="password" v-model="credentials.password" />
            </div>
            <div class="h-4"></div>
            <hr class="bg-black w-1/5 text-black">
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="last_name">Nom</label>
                <InputText id="last_name" v-model="formData.last_name" />
            </div>
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="first_name">Prénoms</label>
                <InputText id="first_name" v-model="formData.first_name" />
                <!-- <small id="username-help">Enter your username to reset your password.</small> -->
            </div>

            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="faculty">Facultés</label>
                <Dropdown id="faculty" v-model="formData.faculty_id" :options="faculties" option-label="name"
                    option-value="id" />

                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="speciality">Spécialité</label>
                <Dropdown id="speciality" v-model="formData.speciality_id" :options="specialities" option-label="name"
                    option-value="id"  />
                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="level">Niveau d'étude</label>
                <Dropdown id="level" v-model="formData.level_id" :options="levels" option-label="name"
                    option-value="id"  />
                <!-- <small id="phone_number-help"> Pour d'éventuels recommandations</small> -->
            </div>
            <div class="flex flex-col w-4/5 md:w-2/5 gap-1">
                <label for="phone_number">Numéro de téléphone</label>
                <InputText id="phone_number" v-model="formData.phone" />
                <small id="phone_number-help"> Pour d'éventuels recommandations</small>
            </div>


            <div class="w-4/5 md:w-2/5">
                <Button @click="createAccount" label="Créer mon compte" class="w-full" :loading="siginup"></Button>
            </div>
            <div>ou</div>
            <div class="w-4/5 md:w-2/5">
                <Button label="Se connecter" text class="w-full" @click="reachSignIn" />
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Database } from '~/utils/supabase';
import { useStorage } from '@vueuse/core'

const supabase = useSupabaseClient<Database>()

const faculties = ref<Database['public']['Tables']['faculties']['Row'][]>([])
const specialities = ref<Database['public']['Tables']['specialities']['Row'][]>([])
const levels = ref<Database['public']['Tables']['levels']['Row'][]>([])

async function loadData() {
    const facultyResult = await supabase.from("faculties").select()
    if (facultyResult.data !== null)
        for (const iterator of facultyResult.data) {
            faculties.value.push(iterator)
        }
    const specialityResult = await supabase.from("specialities").select()
    if (specialityResult.data !== null)
        for (const iterator of specialityResult.data) {
            specialities.value.push(iterator)
        }


    const levelsResult = await supabase.from("levels").select()
    if (levelsResult.data !== null)
        for (const iterator of levelsResult.data) {
            levels.value.push(iterator)
        }
}

loadData()
const credentials = ref({
    email: "", password: "",
})
const formData = ref({
    last_name: "",

    first_name: "",
    phone: "",
    faculty_id: 0,
    level_id: 0,
    speciality_id: 0
})
async function reachSignIn() {
    await navigateTo({ name: "auth-sign-in" })

}



const siginup = ref(false)
async function createAccount() {
    if (siginup.value) { return; }
    siginup.value = true;
    const response = await supabase.auth.signUp({ email: credentials.value.email, password: credentials.value.password, options: { data: formData.value } })
    siginup.value = false;
    console.log(formData.value)
    if (response.error) {
        console.log(response.error)
        return;
    }
    useStorage('register-email',credentials.value.email)
    await navigateTo({ name: "auth-code-confirm" })
}


</script>

<style scoped></style>