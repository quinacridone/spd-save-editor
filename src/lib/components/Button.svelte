<script lang="ts">
	export let className = "";
</script>

<button
	class={`cursor-pointer rounded-sm border border-black bg-firebrick px-1 transition-colors hover:border-morning-blue hover:text-xanthic ${className}`}
	on:click
>
	<slot />
</button>
