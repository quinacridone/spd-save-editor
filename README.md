# Shattered Pixel Dungeon - Save Editor

A small tool for viewing and editing your file saves from SPD.

Inspired by [spud](https://github.com/Infinixius/spud).

## Prerequisites

- Node.js
- npm

## How to use locally

1. Open up a terminal and run

```bash
npm install
npm run dev
```

2. Go to your browser and open `http://localhost:5173` or whatever URL is shown in the terminal
3. Click "Upload save file", browse to you save file (game.dat). In linux, it's located in `~/.local/share/.shatteredpixel/shattered-pixel-dungeon/game1/game.dat`
4. This will load the save file and you can now modify it to whatever you want.
   > NB: Make a backup of your save files in case it gets corrupted.
5. Click "Download" button on top to get the modified save file and overwrite your existing `game.dat` file
6. Open the game and enjoy!

## Development

This is still a work in progress. Use at your own risk!
