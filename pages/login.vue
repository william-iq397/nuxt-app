<template>
    <div>
        hello world from the auth {{ isUserLoginIn ? 'Logged In' : 'Not Logged In' }}

        <form @submit.prevent="login">
            <input v-model="useremail" type="email" placeholder="email" />
            <input v-model="password" type="password" placeholder="password" />
            <button type="submit">submit</button>
        </form>
        {{ useremail }} {{ password }}

        <button @click.prevent="logout">logout</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import pb from '~/pocketbase';
import { useRouter } from '~/.nuxt/vue-router';

const route = useRouter()
const useremail = ref('');
const password = ref('');
const passwordConfirm = ref('')



// Reactive computed property for auth state
const isUserLoginIn = computed(() => pb.authStore.isValid);

function logout() {
    pb.authStore.clear();
    route.push('/')
}


async function signup() {
    try {
        const record = await pb.collection('users').create({
            email: useremail.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
            role: "admin"
        })

        // Step 2: Authenticate the user immediately after creation
        const authData = await pb.collection('users').authWithPassword(
            useremail.value,
            password.value
        );
        route.push('/')
    } catch (e) {
        console.error(e);
    }
    useremail.value = ""
    password.value = ""
    passwordConfirm.value = ""
}


async function login() {
    try {
        const authData = await pb.collection('users').authWithPassword(
            useremail.value,
            password.value
        );
        route.push('/')

        console.log('Login successful:', authData);
    } catch (e) {
        console.error('Login failed:', e);
    }
}
</script>
