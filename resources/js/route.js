import Index from "./Bank/App.vue"
import Home from "./Bank/Home.vue"
import Deposit from "./Bank/Deposit.vue"
export const routes = [
    {
        path: '/',
        component: Index,
        name:"Index",
        children: [
            {
                path: '', 
                component: Home,
                name: 'Home'
            },
            {
                path: 'home/deposit',
                component: Deposit,
                name: 'Deposit'
            }
        ]
    }
]