import z from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "name must be at least 3 characters"),
    email: z.string().email({message: "email is not valid"}),
    password: z.string().min(6, "password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "confirm password must be at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
});

export const registerDefaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export type RegisterSchemaType = z.infer<typeof registerSchema>;