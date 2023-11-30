<template>
    <div class="flex w-screen justify-center flex-col items-center">
        <div class="w-10/12 bg-slate-50 px-2 md:w-2/5 h-14 flex items-center space-x-2">
            <div class="grow font-bold">
                <span>Ivory Job</span>
            </div>
            <div class="flex items-center space-x-2">
                <span class="">
                    {{ user?.user_metadata.first_name }}
                </span>
                <!-- <Icon name="solar:notification-unread-linear" size="20"/>   -->
                <Avatar :shape="'circle'" :size="'normal'" class="cursor-pointer"></Avatar>

            </div>


            <!-- <div>{{ user?.user_metadata.last_name }}  {{ user?.user_metadata.first_name }} </div> -->
        </div>
        <div class="h-2"></div>
        <!-- <div class="items-start w-10/12  md:w-2/5">
          Bienvenu(e) <span class="font-bold">
             {{ user?.user_metadata.last_name }}  {{ user?.user_metadata.first_name }} 
          </span> 
        </div> -->
        <div class="md:w-2/5  flex flex-col  items-center gap-4">
            <div class="h-56 w-3/5 rounded-lg bg-gray-50 flex items-center justify-center" v-if="messages.length === 0">
                <p>Il n'y a pas de message actuelement disponible</p>
            </div>
            <div v-else v-for="item in messages" :key="item.id"
                class="w-11/12 rounded-lg flex flex-col space-y-3 bg-slate-50 p-4">
                <span class="font-bold">{{ item.title }}</span>
                <p class="">
                    {{ item.content }}
                </p>
                <hr>
                <div class="flex space-x-3 items-center">
                    <div class="space-x-2">
                        <Icon name="ph:thumbs-up" size="18" />
                        <span>20</span>
                    </div>
                    <div>
                        <!-- <Icon name="solar:bookmark-line-duotone" />  -->
                    </div>

                </div>
            </div>

        </div>

        <div class="fixed bottom-0 py-2 items-center justify-center flex bg-slate-50/50 w-10/12 md:w-2/5">
            <div class="flex space-x-2 md:flex-col items-center">
                <span class=" underline" @click="logout">
                    déconnexion
                </span>
                <span>Ivory job © 2023 </span>
                <a target="_blank" class="text-purple-400 underline" href="https://taaswzx.com/">meet me here</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Database } from '~/utils/supabase';
definePageMeta({ middleware: 'auth' })
const user = useSupabaseUser()
const supabase = useSupabaseClient<Database>()
const messages = ref<Database['public']['Tables']['messages']['Row'][]>([])
const size = 10;
let page = 0;
async function getAvailableMessages() {
    const from = page * size;
    const to = from + size;
    const result = await supabase.from('messages').select().range(from, to)
    if (result.error) {
        return;
    }
    if (result.count !== null && result.count >= 10) {
        page++;
    }


    for (const item of result.data) {
        messages.value.push(item)
    }
} getAvailableMessages()

async function logout(){
    supabase.auth.signOut()
    useSupabaseUser().value=null
    navigateTo({name: 'index'})
}
</script>

<style scoped></style>    