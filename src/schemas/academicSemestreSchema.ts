import { string, z } from "zod";

export const academicSemestreSchema = z.object({
  name: string({ required_error: "Name is required" }),
  year: string({ required_error: "Year is required" }),
  startMonth: string({ required_error: "Start Month is required" }),
  endMonth: string({ required_error: "End Month is required" }),
});
