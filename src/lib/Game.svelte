<script lang="ts">
	import Label from "./components/Label.svelte";
	import { gameData } from "../store";
	import Container from "./components/Container.svelte";
	import Section from "./components/Section.svelte";
	import Input from "./components/Input.svelte";
	import InputNumber from "./components/InputNumber.svelte";
</script>

{#if $gameData}
	<Section title="Game">
		<div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
			<Label>Custom seed:</Label>
			<Input bind:value={$gameData.custom_seed} readonly />
			<Label>Seed:</Label>
			<InputNumber bind:value={$gameData.seed} readonly />
			<Label>Version:</Label>
			<InputNumber bind:value={$gameData.version} readonly />
			<Label>Depth:</Label>
			<InputNumber bind:value={$gameData.depth} readonly />
			<Label>Amulet obtained:</Label>
			<InputNumber bind:value={$gameData.amuletObtained} readonly />
		</div>
	</Section>
	<!-- <Container>
	<div class="title">Game</div>
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
</Container> -->
{/if}
