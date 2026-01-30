"use client";

import { useActionState } from "react";
import { registerAction } from "@/lib/auth/regisaction";
import { useFormStatus } from "react-dom";

export default function FormRegister() {
  const [state, formAction] = useActionState(registerAction, undefined);
  const pending = useFormStatus();
  return (
    <div className="">
      <form action={formAction} className="flex flex-col gap-2 bg-red-200">
        <label htmlFor="email">Email</label>
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email[0]}</p>
        )}
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password[0]}</p>
        )}
        <input type="password" name="password" />

        <label htmlFor="confirm_password">Confirm Password</label>
        {state?.errors?.confirm_password && (
          <p className="text-red-500">{state.errors.confirm_password[0]}</p>
        )}
        <input type="password" name="confirm_password" />

        <button type="submit" disabled={pending.pending}>
          {pending.pending ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
