import { z } from "zod"

export const waitlistSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  careRole: z.string().min(1, "Please select your care role"),
  urgencyLevel: z.string().min(1, "Please select urgency level"),
})

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  reason: z.string().min(1, "Please select a reason for contact"),
  message: z.string().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>
export type ContactFormData = z.infer<typeof contactSchema> 