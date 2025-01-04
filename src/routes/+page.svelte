<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;

	const { form } = superForm(data.form);
</script>

<SuperDebug data={form} />
<div class="form-wrapper">
	<form method="POST">
		<label for="name">First Name</label>
		<input type="text" name="name" bind:value={$form.firstName} />

		<label for="name">Last Name</label>
		<input type="text" name="name" bind:value={$form.lastName} />

		<label for="email">E-mail</label>
		<input type="email" name="email" bind:value={$form.email} />

		<label for="email">Employee Number</label>
		<input type="number" name="employeeNumber" bind:value={$form.employeeNumber} />

		<div><button>Submit</button></div>
	</form>
</div>

<style>
	.form-wrapper {
		display: flex;
		justify-content: center;
	}
	button {
		background-color: #008001;
		border-radius: 5px;
		border: none;
		padding: 10px;
	}
	button:hover {
		background-color: #aad922;
	}
</style>
