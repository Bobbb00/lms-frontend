import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { apiRegister } from "../api/apiRegister"

export const useRegister = () => {
    const router = useRouter();
    return useMutation({
        mutationKey: ["register"],
        mutationFn: apiRegister,
        onSuccess: ({user, token}) => {
            console.log('user', user);
            console.log('token', token);
            console.log('success');
            router.push('/login');
        },
        onError: (error) => {
            console.log('error', error);
        },
    });
}