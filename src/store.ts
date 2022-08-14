import { writable } from "svelte/store";

import type { GameData } from "./types";

export const gameData = writable<GameData>(undefined);