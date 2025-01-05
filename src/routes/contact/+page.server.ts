import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms/server"
import { zod } from "sveltekit-superforms/adapters";
import { userSchema } from "./schema";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = (async () => {
  // Server API:
  const form = await superValidate(zod(userSchema));
  // Always return { form } in load and form actions.
  return { form };
});

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(userSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    return {
      form,
    };
  },
};