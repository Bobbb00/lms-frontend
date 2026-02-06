import { url } from "inspector";
import { LoginSchemaType } from "../schemas/loginSchemaform"
import { authClient } from "@/config/authClient"

export const apiLogin = async (payload: LoginSchemaType) => {

    // Dummy login check
    if (payload.email === "ali@gmail.com" && payload.password === "123456") {
        return {
            user: {
                id: "dummy-id",
                email: "ali@gmail.com",
                name: "Admin Dummy",
            },
            token: "dummy-token",
            redirect: true,
            url: "/dashboard"
        };
    }

    const {data, error} = await authClient.signIn.email({
        email: payload.email,
        password: payload.password,
    })
    
    if (error) {
        throw error;
    }
    return data;
};