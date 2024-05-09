<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
}
</script>

<template>
    <Head title="Welcome" />
    <section>
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header
                    class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"
                >
                    <div class="flex lg:justify-center lg:col-start-2">
                        <h1 class="text-white text-3xl">Tango Bank</h1>
                    </div>
                    <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="rounded-md px-3 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>

                <main>
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
                            <img
                                src="http://127.0.0.1:5173/resources/img/cards.png"
                            />
                        </div>
                    </div>
                </main>
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
</style>
