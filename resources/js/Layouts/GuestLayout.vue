<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <section
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
    >
        <div>
            <Link href="/">
                <h1 class="text-white text-3xl">Tango Bank</h1>
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url("/home/jmalvis/bank/resources/img/bg.png");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>


