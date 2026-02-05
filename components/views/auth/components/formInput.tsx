import { FieldValues, UseFormReturn, Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "textarea" | "number";
}

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type,
}: FormInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={function ({ field }: { field: any }) {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
