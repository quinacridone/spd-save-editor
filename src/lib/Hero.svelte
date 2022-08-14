<script lang="ts">
	import { gameData } from "../store";
	import { HeroClass, HeroSubClass } from "../types";
</script>

{#if $gameData}
	<div class="container">
		<div class="title">
			<span>Hero</span>
		</div>
		<div class="grid">
			<span class="label">Class:</span>
			<span class="value">
				<select id="hero-class">
					{#each Object.values(HeroClass) as heroClass}
						<option value={heroClass}>{heroClass}</option>
					{/each}
				</select>
			</span>

			<span class="label">Subclass:</span>
			<span class="value">
				<select id="hero-subclass">
					{#each Object.values(HeroSubClass) as heroSubClass}
						<option value={heroSubClass}>{heroSubClass}</option>
					{/each}
				</select>
			</span>

			<span class="label">Gold:</span>
			<span class="value"><input type="number" bind:value={$gameData.gold} /></span>

			<span class="label">Health:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.HP} /></span>

			<span class="label">Maxhealth:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.HT} /></span>

			<span class="label">Shielding:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.htboost} /></span>

			<span class="label">Strength:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.STR} /></span>

			<span class="label">Attack skill:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.attackSkill} /></span>

			<span class="label">Defense skill:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.defenseSkill} /></span>

			<span class="label">Level:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.lvl} /></span>

			<span class="label">EXP:</span>
			<span class="value"><input type="number" bind:value={$gameData.hero.exp} /></span>
		</div>
	</div>
{/if}
