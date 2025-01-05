import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server"
import { zod } from "sveltekit-superforms/adapters";
import { userSchema } from "./schema";


export const load: PageServerLoad = (async () => {
  // Server API:
  const form = await superValidate(zod(userSchema));

  // Always return { form } in load and form actions.
  return { form };
});