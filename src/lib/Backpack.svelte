<script lang="ts">
	import { gameData } from "../store";
	let items = [];
	$: if ($gameData !== undefined) {
		const { hero } = $gameData;
		if (hero) {
			const { inventory } = hero;
			for (let item of inventory) {
				const className = item["__className"];
        if (item.volume) {
          console.log("WATERSKIN!", item.volume);
					console.log(className);
        } else if (!item.inventory) {
					console.log(className);
					items.push(item);
				} else {
          console.log("THIS IS NOT AN ITEM BUT ANOTHER INVENTORY");
					console.log(item["__className"].split(".").pop());
				}
			}
		}
	}
</script>

<div class="container">
	<div class="row">
		<span>Backpack</span>
	</div>
	{#each items as item}
		<div class="row">
			<span class="label">{item["__className"]}:</span>
			<span class="value"><input type="number" value={item.quantity} /></span>
		</div>
	{/each}
</div>
