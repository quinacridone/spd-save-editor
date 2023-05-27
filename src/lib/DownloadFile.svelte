<script lang="ts">
	import { Buffer } from "buffer";
	import { gunzipSync, gzipSync, strFromU8 } from "fflate";
	import { gameData } from "../store";
	import Button from "./components/Button.svelte";
	let saveFile;
	const download = () => {
		if (!saveFile) {
			console.error("No save file.");
			return;
		}
		// TODO: Update save file with modifications
		const jsonString = JSON.stringify(saveFile).replaceAll("class_", "class ");
		console.log(jsonString);
		const buffer: Uint8Array = Buffer.from(jsonString);

		try {
			const data = gzipSync(buffer);
			const newSaveFile = new File([data], "game.dat", { type: "application/octet-stream;charset=utf-8" });
			const a = document.createElement("a");
			a.download = "game.dat";
			a.href = window.URL.createObjectURL(newSaveFile);
			a.click();
		} catch (error) {
			console.error(error);
		}
	};
</script>

{#if saveFile}
	<div>
		<Button on:click={() => download()}>Download</Button>
	</div>
{/if}
