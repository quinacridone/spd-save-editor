<script lang="ts">
	import Hero from "./lib/Hero.svelte";
	import Backpack from "./lib/bags/Backpack.svelte";
	import SaveFile from "./lib/SaveFile.svelte";
	import VelvetPouch from "./lib/bags/VelvetPouch.svelte";
	import ScrollHolder from "./lib/bags/ScrollHolder.svelte";
	import PotionBandolier from "./lib/bags/PotionBandolier.svelte";
	import MagicHolster from "./lib/bags/MagicHolster.svelte";
	import Game from "./lib/Game.svelte";
	import Row from "./lib/Row.svelte";
	import Statistics from "./lib/Statistics.svelte";
	import Editor from "./lib/Editor.svelte";
</script>

<SaveFile />
<main>
	<!-- <Editor /> -->
	<Row>
		<Game />
		<Hero />
		<Statistics />
	</Row>
	<Row>
		<Backpack />
	</Row>
	<Row>
		<VelvetPouch />
	</Row>
	<Row>
		<ScrollHolder />
	</Row>
	<Row>
		<PotionBandolier />
	</Row>
	<Row>
		<MagicHolster />
	</Row>
</main>
