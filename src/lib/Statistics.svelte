<script lang="ts">
	import { gameData } from "../store";
</script>

{#if $gameData}
	<div class="container">
		<div class="title">
			<span>Statistics</span>
		</div>
		<div class="grid">
			<span class="label">Ankhs used:</span>
			<span class="value"><input type="number" bind:value={$gameData.ankhsUsed} /></span>

			<span class="label">Food eaten:</span>
			<span class="value"><input type="number" bind:value={$gameData.foodEaten} /></span>

			<span class="label">Piranhas:</span>
			<span class="value"><input type="number" bind:value={$gameData.priranhas} /></span>

			<span class="label">Upgrades used:</span>
			<span class="value"><input type="number" bind:value={$gameData.upgradesUsed} /></span>

			<span class="label">Potions cooked:</span>
			<span class="value"><input type="number" bind:value={$gameData.potionsCooked} /></span>

			<span class="label">Enemies slain:</span>
			<span class="value"><input type="number" bind:value={$gameData.enemiesSlain} /></span>

			<span class="label">Maximum depth:</span>
			<span class="value"><input type="number" bind:value={$gameData.maxDepth} /></span>

			<span class="label">Sneak attacks:</span>
			<span class="value"><input type="number" bind:value={$gameData.sneakAttacks} /></span>

			<span class="label">Thrown assists:</span>
			<span class="value"><input type="number" bind:value={$gameData.thrownAssists} /></span>

			<span class="label">Qualified for no-killing:</span>
			<span class="value"><input type="checkbox" bind:value={$gameData.qualifiedForNoKilling} /></span>

			<span class="label">Score:</span>
			<span class="value"><input type="number" bind:value={$gameData.score} /></span>
		</div>
	</div>
{/if}
