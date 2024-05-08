<script setup>
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
                    >Login</RouterLink
                >
            </nav>
        </header>
        <div class="flex justify-center px-4 mx-auto">
            <div class="place-self-center">
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
            <div class="">
                <img src="http://127.0.0.1:5173/resources/img/cards.png" />
            </div>
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
