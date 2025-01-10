// export const prerender = true;
// export const ssr = false;

import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server"
import { zod } from "sveltekit-superforms/adapters";
import { emailSchema } from "../../lib/utils/schema";

export const load: PageServerLoad = (async () => {
  // Server API:
  const form = await superValidate(zod(emailSchema));
  // Always return { form } in load and form actions.
  return { form };
});

