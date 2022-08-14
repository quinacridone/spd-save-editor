<script lang="ts">
	import { gameData } from "../../store";
	import type { Item } from "../../types";

	let items = [];

	$: if ($gameData !== undefined) {
		const { hero } = $gameData;
		if (hero) {
			const { inventory } = hero;
			items = [
				...inventory.filter((i) => {
					return !i.volume && !i.inventory;
				}),
			];
		}
	}

	const showOnlyItemName = (className: string): string => {
		return className.replace("com.shatteredpixel.shatteredpixeldungeon.", "");
	};

	const addItem = () => {
		const newItem: Item = {
			__className: "com.shatteredpixel.shatteredpixeldungeon.items.",
			cursed: false,
			cursedKnown: false,
			kept_lost: false,
			level: 0,
			levelKnown: false,
			quantity: 1,
		};
		const { hero } = $gameData;
		if (hero) {
			const { inventory } = hero;
			items = [...items, newItem];
			hero.inventory = [...inventory, newItem];
		}
	};

	const removeItem = (index) => {
		const { hero } = $gameData;
		if (hero) {
			hero.inventory = [...hero.inventory.filter((item, i) => i !== index)];
			items = [...items.filter((item, i) => i !== index)];
			console.log(index);
		}
	};
</script>

<div class="container">
	<div class="title">
		<span>Backpack</span>
	</div>
	{#if $gameData}
		<table>
			<thead>
				<tr>
					<th scope="col">Item Name</th>
					<th scope="col">Quantity</th>
					<th scope="col">Level</th>
				</tr>
			</thead>
			<tbody>
				{#each items as item, i}
					<tr>
						<td><input type="text" class="text-input" value={showOnlyItemName(item["__className"])} /></td>
						<td><input type="number" value={item.quantity} /></td>
						<td><input type="number" value={item.level} /></td>
						<td><button id="remove-button" on:click={() => removeItem(i)}>x</button></td>
					</tr>
				{/each}
				<tr>
					<button id="add-button" on:click={() => addItem()}>+ Add item</button>
				</tr>
			</tbody>
		</table>
	{/if}
</div>
