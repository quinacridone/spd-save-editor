import { readable, writable } from "svelte/store";
import items from "./items.json";
import type { GameData } from "./types";

export const itemList = readable<string[]>(items);
export const gameData = writable<GameData>(undefined);
