<script lang="ts">
	import { gameData } from "../store";
	import { JSONEditor } from 'svelte-jsoneditor'

  let content = {
    text: undefined,
    json: undefined
	};
	
	$: if ($gameData !== undefined) {
		content.json = $gameData;
	}

</script>

{#if $gameData}
	<div class="container">
		<JSONEditor bind:content />
	</div>
{/if}
