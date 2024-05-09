<script setup>
import {ref, onMounted} from 'vue';
const user = ref()

onMounted(async () => {
    const data = await axios.get(`/api/user`);
    console.log(data);
})
</script>
<template>
    <section class="h-screen">
        <header class="container mx-auto p-6">
            <nav class="flex justify-around">
                <RouterLink
                    to="/"
                    class="text-xl text-center text-white font:Anton"
                    >Logo</RouterLink
                >
                <RouterLink to="/" class="text-xl text-center text-white"
                    >Home</RouterLink
                >
                <RouterLink to="/about" class="text-xl text-center text-white"
                    >About</RouterLink
                >
                <RouterLink
                    to="/services"
                    class="text-xl text-center text-white"
                    >Services</RouterLink
                >
                <RouterLink
                    to="/auth/login"
                    class="text-xl border border-white p-1 rounded-xl w-40 text-center text-white"
                    >Logout</RouterLink
                >
            </nav>
        </header>
        <div class="flex justify-center px-4 mx-auto">
            <h1>Test</h1>
        </div>
    </section>
</template>

<style scoped>
h1 {
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-style: normal;
}

section {
    background-image: url("/home/jmalvis/bank/resources/img/bg.png");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
