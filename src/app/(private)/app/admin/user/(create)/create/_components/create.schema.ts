import { z } from "zod";

const createUserSchema = z.object({
  first_name: z
    .string({
      required_error: "First name is required.",
    })
    .trim()
    .min(1, { message: "First name is required." }),
  last_name: z
    .string({ required_error: "Last name is required." })
    .trim()
    .min(1, { message: "Last name is required." }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({ message: "Invalid email address." }),
  user_role: z
    .string()
    .min(1, { message: "role must be at least 1." })
    .max(255, { message: "role must be at most 255." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;

export default createUserSchema;
