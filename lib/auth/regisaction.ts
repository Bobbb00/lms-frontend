"use server";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

type RegisterFormState = {
  errors?: {
    email?: string[];
    password?: string[];
    confirm_password?: string[];
  };
};


async function createUser (email: string, password: string) {
    const hashPassword = await bcrypt.hash(password, 10);
    const confirmHashPassword = await bcrypt.hash(password, 10);
    return {
        id : 1,
        email,
        password : hashPassword,
        confirm_password : confirmHashPassword,
    }
}

export async function registerAction (prevState: RegisterFormState | undefined, formData : FormData): Promise<RegisterFormState | undefined> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirm_password = formData.get("confirm_password") as string;

    if (!email || !password || !confirm_password) {
        return {
            errors: {
                email: !email ? ["Email wajib diisi"] : undefined,
                password: !password ? ["Password wajib diisi"] : undefined,
                confirm_password: !confirm_password ? ["Confirm Password wajib diisi"] : undefined,
            }
        };
    }

    if (password !== confirm_password) {
        return {
            errors: {
                confirm_password: ["Password dan confirm password tidak sesuai"],
            }
        };
    }

    await createUser(email, password);
    redirect("/login");
}