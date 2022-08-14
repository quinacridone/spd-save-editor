<script lang="ts">
	import { gameData } from "../../store";
</script>

{#if $gameData}
	<div class="container">
		<div class="row">
			<span>Magic Holster</span>
		</div>
		<div class="row">
			<span class="label">Gold:</span>
			<span class="value"><input type="number" /></span>
		</div>
	</div>
{/if}
