import { useMutation } from "@tanstack/react-query"
import { apiLogin } from "../api/apiLogin"  
import { useRouter } from "next/navigation";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: apiLogin,
        onSuccess: ({user, token, redirect, url}) => {
            console.log('user', user);
            console.log('token', token);
            console.log('redirect', redirect);
            console.log('url', url);
            console.log('success');
            router.push('/dashboard');
        },
        onError: (error) => {
            console.log('error', error);
        },
    });
};