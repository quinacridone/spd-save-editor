<script lang="ts">
	export let value;
</script>

<select class="rounded-sm border bg-morning-blue px-1" bind:value>
	<slot />
</select>
