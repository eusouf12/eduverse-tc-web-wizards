import { start } from "repl";
import { z } from "zod";

const createCourseSchema = z.object({
  title: z
    .string({
      required_error: "title is required.",
    })
    .trim()
    .min(1, { message: "title is required." }),
  description: z
    .string({ required_error: "description is required." })
    .trim()
    .min(1, { message: "description is required." }),
  total_available_seats: z
    .number({
      required_error: "Total Availble seat is required.",
    })
    .min(1, { message: "Atleast 1 seat must be added!" }),
  credits: z
    .number({
      required_error: "Credits is required.",
    })
    .min(1, { message: "Atleast 1 credit must be added!" }),
  start_date: z.any(),
  end_date: z.any(),

  // assigned_faculty: z.array(z.string().optional()),
});

export type CreateCourseFormValues = z.infer<typeof createCourseSchema>;

export default createCourseSchema;
