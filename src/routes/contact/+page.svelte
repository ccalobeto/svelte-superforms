<script lang="ts">
	import type { PageData } from './$types.js';
	import SettingsForm from '$lib/components/ContactForm.svelte';
	export let data: PageData;
	console.log('**this is contact page**');
</script>

<SettingsForm data={data.form} />
