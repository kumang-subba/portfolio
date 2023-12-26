import { z } from "zod";

export const EmailValidator = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Email is invalid" }),
  companyName: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }).max(5000, { message: "Message is too long" }),
});

export type EmailRequest = z.infer<typeof EmailValidator>;
