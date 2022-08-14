<script lang="ts">
	import { gameData } from "../store";
</script>

<div class="container">
	<div class="title">Game</div>
	{#if $gameData}
		<table>
			<tbody>
				<tr>
					<td class="label">Custom seed</td>
					<td><input type="text" bind:value={$gameData.custom_seed} /></td>
				</tr>
				<tr>
					<td class="label">Seed</td>
					<td><input type="number" bind:value={$gameData.seed} /></td>
				</tr>
				<tr>
					<td class="label">Version</td>
					<td><input type="number" bind:value={$gameData.version} /></td>
				</tr>
				<tr>
					<td class="label">Depth</td>
					<td><input type="number" bind:value={$gameData.depth} /></td>
				</tr>
				<tr>
					<td class="label">Amulet obtained</td>
					<td><input type="checkbox" bind:value={$gameData.amuletObtained} /></td>
				</tr>
			</tbody>
		</table>
	{/if}
</div>
