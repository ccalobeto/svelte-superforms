<script lang="ts">
	// import SuperDebug from 'sveltekit-superforms';
	import type { PageData } from './$types.js';
	import SettingsForm from './contact-form.svelte';
	export let data: PageData;
</script>

<SettingsForm data={data.form} />
<!-- <SuperDebug data={data.form} /> -->
