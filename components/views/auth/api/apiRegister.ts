import { RegisterSchemaType } from "../schemas/registerSchema";
import { authClient } from "@/config/authClient";

export const apiRegister = async (payload: RegisterSchemaType) => {

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //  const {data, error} = await authClient.signUp.email({
    //     email: payload.email,
    //     password: payload.password,
    //     name: payload.name,
    // })

    // if (error) {
    //     throw error;
    // }
    // return data; 


    // Return dummy success response
    return {
        user: {
            id: "dummy-id",
            email: payload.email,
            name: payload.name || "Dummy User",
        },
        token: "dummy-token",
        redirect: true,
        url: "/login"
    };

    
    // Real backend call (commented out for dummy mode)
   

}