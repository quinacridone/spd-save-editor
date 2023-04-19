<script lang="ts">
	import { gameData } from "../store";
	import { HeroClass, HeroSubClass } from "../types";
	import Dropdown from "./components/Dropdown.svelte";
	import InputNumber from "./components/InputNumber.svelte";
	import Label from "./components/Label.svelte";
	import Section from "./components/Section.svelte";
</script>

{#if $gameData}
	<Section title="Hero">
		<div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
			<Label>Class:</Label>
			<Dropdown bind:value={$gameData.hero.class}>
				{#each Object.values(HeroClass) as heroClass}
					<option value={heroClass}>{heroClass}</option>
				{/each}
			</Dropdown>

			<Label>Subclass:</Label>
			<Dropdown bind:value={$gameData.hero.subClass}>
				{#each Object.values(HeroSubClass) as heroSubClass}
					<option value={heroSubClass}>{heroSubClass}</option>
				{/each}
			</Dropdown>

			<Label>Gold:</Label>
			<InputNumber bind:value={$gameData.gold} />

			<Label>Health:</Label>
			<InputNumber bind:value={$gameData.hero.HP} />

			<Label>Max Health:</Label>
			<InputNumber bind:value={$gameData.hero.HT} />

			<Label>Shielding:</Label>
			<InputNumber bind:value={$gameData.hero.htboost} />

			<Label>Strength:</Label>
			<InputNumber bind:value={$gameData.hero.STR} />

			<Label>Attack skill:</Label>
			<InputNumber bind:value={$gameData.hero.attackSkill} />

			<Label>Defense skill:</Label>
			<InputNumber bind:value={$gameData.hero.defenseSkill} />

			<Label>Level:</Label>
			<InputNumber bind:value={$gameData.hero.lvl} />

			<Label>EXP:</Label>
			<InputNumber bind:value={$gameData.hero.exp} />
		</div>
	</Section>
{/if}
