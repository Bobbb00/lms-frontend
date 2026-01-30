"use server";

import { z } from "zod";
import { createSession } from "./session";
import { redirect } from "next/navigation";
import { deleteSession } from "./session";

const testUser = {
    id : 1,
    email : "ali@gmail.com",
    password : "123456",
};

const loginSchema = z.object({
    email : z.string().email({message : "Invalid email Address"}).trim(),
    password : z.string().min(6, {message : "Password must be at least 6 characters long"}).trim(),
});

export async function login(prevState: any, formData : FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return {
            errors : result.error.flatten().fieldErrors,
        };
    }

    const { email, password } = result.data;

    if (email !== testUser.email || password !== testUser.password) {
        return {
            errors : {
                email : ["Invalid email or password"],
            },
        };
    }


    // menunggu sesi sudah ada apa belum
    await createSession(testUser.id.toString());
    
    redirect("/");
}


export async function logout() {
    await deleteSession();
    redirect("/login");
}
