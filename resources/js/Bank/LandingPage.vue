<script setup>
import Navbar from "../Components/Navbar.vue";
</script>
<template>
    <section class="h-screen">
        <Navbar />
        <div
            class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-12"
        >
            <div class="mx-auto place-self-center lg:col-span-7">
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text"
                >
                    Smart
                </h1>
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text"
                >
                    Banking. wsda
                </h1>
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text"
                >
                    Brighter
                </h1>
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text mb-4"
                >
                    Future.
                </h1>
                <RouterLink
                    to="/auth/login"
                    class="border border-white p-2 rounded-xl text-2xl text-center text-white"
                    >Get started ></RouterLink
                >
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex text-white"></div>
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
