<script lang="ts">
	import Input from "../components/Input.svelte";
	import { gameData } from "../../store";
	import type { Item } from "../../types";
	import Button from "../components/Button.svelte";
	import Section from "../components/Collapse.svelte";
	import InputNumber from "../components/InputNumber.svelte";

	let items = [];
	let shouldGoInsideThisBag = false;

	const getItems = (inventory: any) => {
		for (let item of inventory) {
			const className = item["__className"];
			if (className === "com.shatteredpixel.shatteredpixeldungeon.items.bags.MagicalHolster") {
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
		const newItem: Item = {
			cursed: false,
			cursedKnown: false,
			kept_lost: true,
			level: 0,
			levelKnown: true,
			quantity: 1,
			__className: "com.shatteredpixel.shatteredpixeldungeon.items.potions",
		};
		items = [...items, newItem];
	};
</script>

{#if $gameData}
	<Section title="Magic Holster">
		<Button on:click={() => addItem()}>+ Add item</Button>
		<div class="grid grid-cols-3 gap-1">
			<span>Item</span>
			<span>Quantity</span>
			<span>Level</span>
			{#each items as item}
				<!-- <input type="text" bind:value={item["__className"]} /> -->
				<Input value={showOnlyItemName(item["__className"])} />
				<InputNumber value={item.quantity} />
				<InputNumber value={item.level} />
			{/each}
		</div>
	</Section>
{/if}
