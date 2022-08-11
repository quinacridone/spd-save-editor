<script lang="ts">
	import Hero from "./lib/Hero.svelte";
	import Backpack from "./lib/Backpack.svelte";
	import SaveFile from "./lib/SaveFile.svelte";
import VelvetPouch from "./lib/VelvetPouch.svelte";
import ScrollHolder from "./lib/ScrollHolder.svelte";
import PotionBandolier from "./lib/PotionBandolier.svelte";
import MagicHolster from "./lib/MagicHolster.svelte";
</script>

<header>
  <SaveFile />
</header>
<main>
  <Hero />
  <Backpack />
  <VelvetPouch />
  <ScrollHolder />
  <PotionBandolier />
  <MagicHolster />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>