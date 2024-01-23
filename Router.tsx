import { createContext, useContext } from "react";

type userType = {
    userName: string
    email: string
    password: string
    phone: string
}

export default function Router(){
    const defaultUser:userType = {
        email: '',
        password: '',
        phone: '',
        userName: ''
    }

    const userContext = createContext(defaultUser)

        
}