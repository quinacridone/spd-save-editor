<script lang="ts">
	import { gameData, itemList } from "../../store";
	import type { Item } from "../../types";
	import Button from "../components/Button.svelte";
	import Dropdown from "../components/Dropdown.svelte";
	import Input from "../components/Input.svelte";
	import InputNumber from "../components/InputNumber.svelte";
	import Label from "../components/Label.svelte";
	import Section from "../components/Section.svelte";

	let selectedNewItem = "";
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
			__className: selectedNewItem,
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

{#if $gameData}
	<Section title="Backpack">
		<div>
			<Dropdown bind:value={selectedNewItem}>
				{#each $itemList as item}
					<option value={item}>{item}</option>
				{/each}
			</Dropdown>
			<Button on:click={() => addItem()}>+ Add item</Button>
		</div>
		<table class="w-full table-auto border-collapse border">
			<thead class="bg-firebrick">
				<tr>
					<th class="border">Item Name</th>
					<th class="border">Quantity</th>
					<th class="border">Level</th>
					<th class="border" />
				</tr>
			</thead>
			<tbody>
				{#each items as item, i}
					<tr>
						<td><Input value={showOnlyItemName(item["__className"])} /></td>
						<td><InputNumber value={item.quantity} /></td>
						<td><InputNumber value={item.level} /></td>
						<td>
							<div class="flex justify-center">
								<Button on:click={() => removeItem(i)}>X</Button>
							</div>
						</td>
					</tr>
				{/each}
				<tr />
			</tbody>
		</table>
	</Section>
{/if}
