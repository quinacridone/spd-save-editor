<script lang="ts">
	import Section from "./components/Collapse.svelte";
	import { gameData } from "../store";
	import Label from "./components/Label.svelte";
	import InputNumber from "./components/InputNumber.svelte";
</script>

{#if $gameData}
	<Section title="Statistics">
		<div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
			<Label>Ankhs used:</Label>
			<InputNumber bind:value={$gameData.ankhsUsed} />

			<Label>Food eaten:</Label>
			<InputNumber bind:value={$gameData.foodEaten} />

			<Label>Piranhas:</Label>
			<InputNumber bind:value={$gameData.priranhas} />

			<Label>Upgrades used:</Label>
			<InputNumber bind:value={$gameData.upgradesUsed} />

			<Label>Potions cooked:</Label>
			<InputNumber bind:value={$gameData.potionsCooked} />

			<Label>Enemies slain:</Label>
			<InputNumber bind:value={$gameData.enemiesSlain} />

			<Label>Maximum depth:</Label>
			<InputNumber bind:value={$gameData.maxDepth} />

			<Label>Sneak attacks:</Label>
			<InputNumber bind:value={$gameData.sneakAttacks} />

			<Label>Thrown assists:</Label>
			<InputNumber bind:value={$gameData.thrownAssists} />

			<Label>Qualified for no-killing:</Label>
			<div>
				<input type="checkbox" bind:value={$gameData.qualifiedForNoKilling} />
			</div>

			<Label>Score:</Label>
			<InputNumber bind:value={$gameData.score} />
		</div>
	</Section>
{/if}
