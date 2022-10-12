import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";
import Homepage from "../../pages/homepage"

export const routes = [
    {
        path: '/',
        name: "Homepage",
        component: <Homepage />,
        icon: 'home',
        show: false
    },
    {
        path: '/auth',
        name: "Login",
        component: <Login />,
        icon: 'home',
        show: false
    },
    {
        path: '/auth/login',
        name: "Login",
        component: <Login />,
        icon: 'home',
        show: true
    },
    {
        path: '/auth/signup',
        name: "Signup",
        component: <Signup />,
        icon: 'home',
        show: true
    }
]