import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please provide a valid email address."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export type FormValues = z.infer<typeof schema>;

export default schema;
