<script lang="ts">
	export let value;
</script>

<select class="m-0 w-full text-ellipsis rounded-sm border bg-morning-blue p-0 px-1" bind:value>
	<slot />
</select>
