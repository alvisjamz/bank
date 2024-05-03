<template>
    <header class="container mx-auto p-6">
        <nav class="flex justify-around">
            <RouterLink to="/" class="text-xl text-center text-white font:Anton">Logo</RouterLink>
            <RouterLink to="/" class="text-xl text-center text-white">Home</RouterLink>
            <RouterLink to="/about" class="text-xl text-center text-white"
                >About</RouterLink
            >
            <RouterLink to="/services" class="text-xl text-center text-white"
                >Services</RouterLink
            >
            <RouterLink
                to="/auth/checkuser"
                class="text-xl border border-white p-1 rounded-xl w-40 text-center text-white"
                >Login</RouterLink
            >
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>

</style>
