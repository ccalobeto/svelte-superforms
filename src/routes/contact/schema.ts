import { z } from "zod"

export const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  employeeNumber: z.number().min(1)
})

export type UserSchema = typeof userSchema