<script lang="ts">
	export let title = "";
	let expanded = true;

	const onClick = () => {
		expanded = !expanded;
	};
</script>

<section class="border border-black">
	<button
		class={`w-full cursor-pointer bg-firebrick px-1 text-left outline-none before:float-left before:mr-2 hover:text-xanthic ${
			expanded ? "border-b before:content-['-'] hover:border-black" : "before:content-['+'] "
		}`}
		on:click={onClick}>{title}</button
	>
	<div class={`overflow-hidden transition ${expanded ? "max-h-max p-4" : "max-h-0 p-0"}`}>
		<slot />
	</div>
</section>
