<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { emailSchema, type EmailSchema } from '$lib/utils/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: SuperValidated<Infer<typeof emailSchema>> } = $props();

	const form = superForm(data, {
		validators: zodClient(emailSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="./api/actions?/sendEmail" use:enhance>
	<Form.Field {form} name="from">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>from:</Form.Label>
				<Input {...props} bind:value={$formData.from} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="subject">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>subject</Form.Label>
				<Input {...props} bind:value={$formData.subject} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="message">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>message</Form.Label>
				<Input {...props} bind:value={$formData.message} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Submit</Form.Button>
</form>
