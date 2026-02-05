import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginSchemaType,
  loginSchema,
  LogindefaultValues,
} from "../schemas/loginSchemaform";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import FormInput from "./formInput";
import { Button } from "@/components/ui/button";

export default function FormLogin() {
  const { mutate, isPending } = useLogin();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: LogindefaultValues,
  });

  const onSubmit = (payload: LoginSchemaType) =>
    mutate(payload, {
      onError: (error) => {
        setError(error.message);
      },
    });

  return (
    <Card className="w-full shadow-lg border-muted/60">
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

            <Button
              type="submit"
              className="w-full font-semibold"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
