import { useRegister } from "../hooks/useRegister";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  registerDefaultValues,
  RegisterSchemaType,
} from "../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import { Card, CardFooter } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import FormInput from "./formInput";
import { GraduationCap } from "lucide-react";
export default function FormRegister() {
  const { mutate, isPending } = useRegister();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerDefaultValues,
  });
  const onSubmit = (payload: RegisterSchemaType) =>
    mutate(payload, {
      onError: (error) => {
        setError(error.message);
      },
    });
  return (
    <Card className="w-full max-w-md shadow-lg border-muted/60">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
        </div>

        <CardTitle className="text-2xl font-bold tracking-tight">
          Welcome back
        </CardTitle>

        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        {error && <p className="text-red-500">{error}</p>}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              form={form}
              name="name"
              label="Name"
              type="text"
              placeholder="John Doe"
            />

            <FormInput
              form={form}
              name="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
            />

            <FormInput
              form={form}
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <FormInput
              form={form}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
            />

            <Button
              type="submit"
              className="w-full font-semibold"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
