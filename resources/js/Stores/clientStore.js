import { defineStore } from "pinia";

export const clientStore = defineStore("clotre", {
    state: () => {
        return {
            clients: null,
            form: {
                username: "",
                email: "",
                password: "",
            },
        };
    },
    actions: {
        saveClient() {
            window.axios
                .post(`/client-register`, this.form)
                .then(({ data }) => {
                    if (data != null) {
                        this.$reset();
                    }
                });
        },
        // loginClient() {
        //     window.axios
        //         .post(`/client-login`, this.form)
        //         .then(({ data }) => {
        //             if (data) {
        //                 this.$router.push("/client/home");
        //             }
        //     });
        // },
    },
});
