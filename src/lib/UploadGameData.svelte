<script lang="ts">
	import { Buffer } from "buffer";
	import { gunzipSync, gzipSync, strFromU8 } from "fflate";
	import { gameData } from "../store";
  import Button from './components/Button.svelte';
  
	let files, input;
	let saveFile;

	const onFileSelected = (e) => {
		const file = e.target.files[0];
		if (!file) {
			console.error("No file selected");
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = (e) => {
			const buffer: Uint8Array = Buffer.from(fileReader.result as ArrayBuffer);
			try {
				const decompressed: Uint8Array = gunzipSync(buffer);
				saveFile = strFromU8(decompressed);
				console.log(saveFile);
			} catch (error) {
				console.error(error);
			}

			saveFile = saveFile.replaceAll("class ", "class_");
			try {
				saveFile = JSON.parse(saveFile);
				gameData.set(saveFile);
				console.log(saveFile);
			} catch (error) {}
		};
		console.info("Reading save file");
		fileReader.readAsArrayBuffer(file);
	};
</script>

<div>
  <Button on:click={() => input.click()}>Upload save file</Button>
	<input
    class="hidden"
		type="file"
		id="save-file"
		name="save-file"
		accept=".dat"
		on:change={(e) => onFileSelected(e)}
		bind:files
		bind:this={input}
		on:click={() => (input.value = "")}
	/>
</div>