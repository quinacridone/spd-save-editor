<script lang="ts">
	import { gameData } from "../../store";
	import type { Item } from "../../types";
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

	const showOnlyItemName = (className: string): string => {
		return className.replace("com.shatteredpixel.shatteredpixeldungeon.", "");
	};

	const addItem = () => {
		const item: Item = {
			cursed: false,
			cursedKnown: false,
		};
		items.push(item);
	};
</script>

{#if $gameData}
	<div class="container">
		<div class="title">
			<button id="add-button" on:click={() => addItem()}>+ Add item</button>
			<span>Velvet Pouch</span>
		</div>
		<div class="grid-3">
			<span>Item</span>
			<span>Quantity</span>
			<span>Level</span>
			{#each items as item}
				<!-- <input type="text" bind:value={item["__className"]} /> -->
				<span class="value"><input type="text" class="text" value={showOnlyItemName(item["__className"])} /></span>
				<span class="value"><input type="number" value={item.quantity} /></span>
				<span class="value"><input type="number" value={item.level} /></span>
			{/each}
		</div>
	</div>
{/if}

<style>
	#add-button {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		padding: 4px;
		box-sizing: border-box;
	}
</style>
