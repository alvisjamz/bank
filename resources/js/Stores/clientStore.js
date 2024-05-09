// import { defineStore } from "pinia";

// export const clientStore = defineStore("clotre", {
//     state: () => {
//         return {
//             clients: null,
//             form: {
//                 name: "",
//                 email: "",
//                 password: "",
//             },
//         };
//     },
//     actions: {
//         saveClient() {
//             window.axios
//                 .post(`/register`, this.form)
//                 .then(({ data }) => {
//                     if (data != null) {
//                         this.$reset();
//                     } 
//                 });
//         },
//     },
// });
