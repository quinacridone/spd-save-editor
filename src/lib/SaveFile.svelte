<script lang="ts">
	import { Buffer } from "buffer";
	import { gunzipSync, gzipSync, strFromU8 } from "fflate";
	import { gameData } from "../store";

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

<div class="container">
	<div class="row">
		<label for="save-file">Load save file:</label>

		<input
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
	<div class="row">
		<button id="download" on:click={() => download()}>Download</button>
	</div>
</div>
