<script lang="ts">
	import '../app.css';
	let { children } = $props();
	console.log('**this is layout**');
</script>

{@render children()}
