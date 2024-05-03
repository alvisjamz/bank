<script setup>
import Navbar from "../Components/Navbar.vue";
</script>
<template>
    <section class="h-screen">
        <Navbar />
        <div
            class="grid px-4 mx-auto"
        >
            <div class="mx-auto place-self-center lg:col-span-1">
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text"
                >
                    Smart
                </h1>
                <h1
                    class="tracking-wider text-7xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-white text-transparent bg-clip-text"
                >
                    Banking.
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
            <div
                class="cards lg:col-span-2"
            ></div>
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

.cards {
    background-image: url("/home/jmalvis/bank/resources/img/cards.png");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
