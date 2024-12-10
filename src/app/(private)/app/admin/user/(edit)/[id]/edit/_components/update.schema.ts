import { z } from "zod";

const updateUserSchema = z.object({
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
  mobile: z
    .string()
    .min(11, "Mobile number must be at least 11 characters.")
    .max(14, "Mobile number cannot exceed 14 characters.")
    .regex(
      /^(?:\+8801[3-9][0-9]{8}|01[3-9][0-9]{8})$/,
      "Invalid Bangladeshi mobile number."
    ),
  user_role: z
    .string()
    .min(1, { message: "role must be at least 1." })
    .max(255, { message: "role must be at most 255." }),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

export default updateUserSchema;
