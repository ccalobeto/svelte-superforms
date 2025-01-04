import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"
import { zod } from "sveltekit-superforms/adapters";


const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  employeeNumber: z.number().min(1)
})


export const load = (async () => {
  // Server API:
  const form = await superValidate(zod(userSchema));

  // Always return { form } in load and form actions.
  return { form };
});