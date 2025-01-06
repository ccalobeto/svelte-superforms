import { z } from "zod"

export const emailSchema = z.object({
  from: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export type EmailSchema = typeof emailSchema