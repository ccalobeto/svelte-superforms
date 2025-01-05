<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { userSchema, type UserSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: SuperValidated<Infer<typeof userSchema>> } = $props();

	const form = superForm(data, {
		validators: zodClient(userSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="firstName">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>First Name</Form.Label>
				<Input {...props} bind:value={$formData.firstName} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="lastName">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Last Name</Form.Label>
				<Input {...props} bind:value={$formData.lastName} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>E-mail</Form.Label>
				<Input {...props} bind:value={$formData.email} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="employeeNumber">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Employee Number</Form.Label>
				<Input type="number" {...props} bind:value={$formData.employeeNumber} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
