export enum HeroClass {
	"WARRIOR" = "WARRIOR",
	"MAGE" = "MAGE",
	"ROGUE" = "ROGUE",
	"HUNTRESS" = "HUNTRESS",
}

export enum HeroSubClass {
	"" = "",
	"BERSERKER" = "BERSERKER",
	"GLADIATOR" = "GLADIATOR",
	"BATTLEMAGE" = "BATTLEMAGE",
	"WARLOCK" = "WARLOCK",
	"ASSASSIN" = "ASSASSIN",
	"FREERUNNER" = "FREERUNNER",
	"WARDEN" = "WARDEN",
	"SNIPER" = "SNIPER",
}

export interface Item {
	augment?: string;
	available_uses?: number;
	curse_infusion_bonus?: boolean;
	cursed: boolean;
	cursedKnown: boolean;
	enchantment?: any;
	kept_lost: boolean;
	level: number;
	levelKnown: boolean;
	mastery_potion_bonus?: boolean;
	quantity: number;
	volume?: number;
	uses_left_to_id?: number;
	__className: string;
	inventory?: any;
}

export interface Hero {
	HP: number;
	HT: number;
	STR: number;
	armor: any;
	artifact: any;
	attackSkill: number;
	buffs: any[];
	class: HeroClass;
	cursed: boolean;
	cursedKnown: boolean;
	defenseSkill: number;
	exp: number;
	htboost: number;
	id: number;
	inventory: Item[];
	kept_lost: boolean;
	level: number;
	levelKnown: boolean;
	lvl: number;
	misc: any;
	pos: number;
	quantity: number;
	replacements: any;
	ring: any;
	subClass: HeroSubClass;
	talents_tier_1: any;
	talents_tier_2: any;
	talents_tier_3: any;
	talents_tier_4: any;
	time: number;
	weapon: any;
	__className: string;
}

export interface GameData {
	amuletObtained: boolean;
	ankhsUsed: number;
	artifact_dropped: number;
	artifact_probs: number[];
	artifact_seed: number;
	ascended: boolean;
	badges: any[];
	boss_scores: number[];
	branch: number;
	chal_mult: number;
	challenges: number;
	chapters: number[];
	custom_seed: string;
	daily: boolean;
	depth: number;
	duration: number;
	enemiesSlain: number;
	energy: number;
	expl_score: number;
	first_deck: boolean;
	flr_expl1: boolean;
	flr_expl2: boolean;
	flr_expl3: boolean;
	flr_expl4: boolean;
	flr_expl6: boolean;
	flr_expl7: boolean;
	flr_expl8: boolean;
	flr_expl9: boolean;
	flr_expl11: boolean;
	flr_expl12: boolean;
	flr_expl13: boolean;
	flr_expl14: boolean;
	flr_expl16: boolean;
	flr_expl17: boolean;
	flr_expl18: boolean;
	flr_expl19: boolean;
	foodEaten: number;
	general_probs: number[];
	gold: number;
	hero: Hero;
	init_ver: number;
	item_val: number;
	limited_drops: any;
	maxAscent: number;
	maxDepth: number;
	mobs_to_champion: number;
	nextid: number;
	pit_needed: number;
	placeholders: [];
	placements: boolean[];
	potion_dropped: number;
	potion_probs: number[];
	potion_seed: number;
	potionsCooked: number;
	priranhas: number;
	prog_score: number;
	qualifiedForBossChallengeBadge: boolean;
	qualifiedForNoKilling: boolean;
	quest_scores: number[];
	quests: any;
	records: any[];
	region_secrets: any[];
	score: number;
	scroll_dropped: number;
	scroll_probs: number[];
	scroll_seed: number;
	secret_rooms: string[];
	seed: number;
	seed_dropped: number;
	seed_probs: number[];
	seed_seed: number;
	sneakAttacks: number;
	spawnersAlive: number;
	special_rooms: string[];
	stone_dropped: number;
	stone_probs: number[];
	stone_seed: number;
	thrownAssists: number;
	tot_boss: number;
	tot_quest: number;
	total_score: number;
	tres_score: number;
	upgradesUsed: number;
	version: number;
	win_mult: number;
	won: boolean;
}
