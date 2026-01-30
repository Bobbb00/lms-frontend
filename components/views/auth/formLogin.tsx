"use client";
import { login } from "@/lib/auth/loginAction";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function FormLogin() {
  const [state, LoginAction] = useActionState(login, undefined);
  const { pending } = useFormStatus();

  return (
    <form
      action={LoginAction}
      className="flex flex-col gap-2 justify-center items-center"
    >
      {state?.errors?.email && (
        <p className="text-red-500">{state.errors.email[0]}</p>
      )}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="Email"
        className="bg-red-200 text-black"
      />

      {state?.errors?.password && (
        <p className="text-red-500">{state.errors.password[0]}</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        className="bg-red-200 text-black"
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-white text-black cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}
