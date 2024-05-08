<script setup>
import Navbar from "../Components/Navbar.vue";
import { clientStore } from '@/Stores/clientStore'
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
const route = useRoute();
const cstore = clientStore();
const { form } = storeToRefs(cstore);
</script>
<template>
    <section class="h-screen">
        <Navbar />
        <div class="container mx-auto mt-20">
            <div class="flex flex-wrap items-center justify-center px-10">
                <div class="">
                    <div class="block rounded-xl bg-white shadow-lg">
                        <div class="g-0 lg:flex lg:flex-wrap">
                            <div class="px-4 md:px-0 lg:w-6/12">
                                <div class="md:mx-6 md:p-12 bg-white">
                                    <div class="text-start">
                                        <h1
                                            class="mt-1 pb-1 text-2xl font-extrabold"
                                        >
                                            Login
                                        </h1>
                                    </div>

                                    <form>
                                        <p class="mb-4">
                                            Welcome! Please enter the details
                                            required
                                        </p>

                                        <div
                                            class="relative mb-4"
                                            data-twe-input-wrapper-init
                                        >
                                            <label>Username </label>
                                            <input
                                         
                                                type="text"
                                                class="w-full rounded bg-gray-300 border-0"
                                            />
                                        </div>

                                        <div
                                            class="relative mb-4"
                                            data-twe-input-wrapper-init
                                        >
                                            <label>Password</label>
                                            <input
                                         
                                                type="password"
                                                class="w-full rounded bg-gray-300 border-0"
                                            />
                                        </div>

                                        <div
                                            class="mb-12 pb-1 pt-1 text-center"
                                        >
                                            <button
                                                class="inline-block w-full rounded p-2 text-xs font-medium uppercase leading-normal text-black shadow-dark-3 bg-purple-300"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>

                                        <div class="flex items-center">
                                            <p class="mb-0 me-2">New user?</p>
                                            <RouterLink
                                                to="/auth/register"
                                                class="text-purple-600"
                                                >Register</RouterLink
                                            >
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Right column container with background and description-->
                            <div
                                class="right flex items-center justify-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none relative bg-gray-300"
                            >
                                <RouterLink
                                    to="/"
                                    class="absolute top-0 right-0 text-3xl p-3 text-white"
                                    >Back</RouterLink
                                >
                                <div
                                    class="px-4 py-6 text-black md:mx-6 md:p-12"
                                >
                                    <h1
                                        class="mb-6 text-6xl font-semibold text center text-white"
                                    >
                                        Hi There!
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

.right {
    background-image: url("/home/jmalvis/bank/resources/img/LoginGraphic.jpg");
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
