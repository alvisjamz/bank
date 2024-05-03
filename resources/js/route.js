import Index from "./Bank/App.vue"
import LPage from "./Bank/LandingPage.vue"
// import Deposit from "./Bank/Deposit.vue"
import Services from "./Bank/Services.vue"
import About from "./Bank/About.vue"
import Login from "./Auth/CheckUser.vue"
import Register from "./Auth/Register.vue"

export const routes = [
    {
        path: '/',
        component: Index,
        name:"Index",
        children: [
            {
                path: '', 
                component: LPage,
                name: 'LPage'
            },
            {
                path: 'services',
                component: Services,
                name: 'Services page'
            },
            {
                path: 'about',
                component: About,
                name: 'About page'
            },
            {
                path: 'auth/login',
                component: Login,
                name: 'Login page'
            },
            {
                path: 'auth/register',
                component: Register,
                name: 'Register page'
            }
        ]
    }
]