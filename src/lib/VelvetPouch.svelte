<script lang="ts">
	import { gameData } from "../store";
	let items = [];
  let shouldGoInsideThisBag = false;

	const getItems = (inventory: any) => {
		for (let item of inventory) {
			const className = item["__className"];
			if (className === "com.shatteredpixel.shatteredpixeldungeon.items.bags.VelvetPouch") {
        shouldGoInsideThisBag = true;
				getItems(item.inventory);
			} else if (shouldGoInsideThisBag && !item.inventory) {
        items.push(item);
      }
		}
	};
	$: if ($gameData !== undefined) {
		const { hero } = $gameData;
		if (hero) {
			const { inventory } = hero;
      getItems(inventory);
		}
	}
</script>

<div class="container">
	<div class="row">
		<span>Velvet Pouch</span>
	</div>
	{#each items as item}
		<div class="row">
			<span class="label">{item["__className"]}:</span>
			<span class="value"><input type="number" value={item.quantity} /></span>
		</div>
	{/each}
</div>
