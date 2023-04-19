<script lang="ts">
	import Hero from "./lib/Hero.svelte";
	import Backpack from "./lib/bags/Backpack.svelte";
	import SaveFile from "./lib/SaveFile.svelte";
	import VelvetPouch from "./lib/bags/VelvetPouch.svelte";
	import ScrollHolder from "./lib/bags/ScrollHolder.svelte";
	import PotionBandolier from "./lib/bags/PotionBandolier.svelte";
	import MagicHolster from "./lib/bags/MagicalHolster.svelte";
	import Game from "./lib/Game.svelte";
	import Row from "./lib/components/Row.svelte";
	import Statistics from "./lib/Statistics.svelte";
	import Editor from "./lib/Editor.svelte";
	import Header from "./lib/components/Header.svelte";
	import Content from "./lib/components/Content.svelte";
	import SelectFile from "./lib/UploadGameData.svelte";
	import DownloadFile from "./lib/DownloadFile.svelte";
	import Section from "./lib/components/Section.svelte";
</script>

<div class="flex h-screen flex-col overflow-hidden">
	<Header>
		<SelectFile />
		<DownloadFile />
		<!-- <SaveFile /> -->
	</Header>

	<Content>
		<Game />
		<Hero />
		<Statistics />
		<!-- <Editor /> -->
		<Backpack />
		<VelvetPouch />
		<ScrollHolder />
		<PotionBandolier />
		<MagicHolster />
	</Content>
</div>
