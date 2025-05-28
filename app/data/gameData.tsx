import { CategoryTypeEnum, TagEnum } from "./EnumType";
import type { GamesPanels } from "~/data/livePanel";

export const gameData: GamesPanels[] = [
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting.jpg",
    gameName: CategoryTypeEnum.justChatting,
    gameViewers: 42098,
    gameTags: [TagEnum.casual, TagEnum.moba,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V.jpg",
    gameName: CategoryTypeEnum.grandTheftAutoV,
    gameViewers: 106530,
    gameTags: [TagEnum.competitive],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends.jpg",
    gameName: CategoryTypeEnum.leagueOfLegends,
    gameViewers: 87397,
    gameTags: [TagEnum.tps],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Valorant.jpg",
    gameName: CategoryTypeEnum.valorant,
    gameViewers: 22280,
    gameTags: [TagEnum.battleRoyale, TagEnum.moba],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg",
    gameName: CategoryTypeEnum.fortnite,
    gameViewers: 76237,
    gameTags: [TagEnum.racing],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft.jpg",
    gameName: CategoryTypeEnum.minecraft,
    gameViewers: 89500,
    gameTags: [TagEnum.sandbox, TagEnum.creative],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends.jpg",
    gameName: CategoryTypeEnum.apexLegends,
    gameViewers: 71230,
    gameTags: [TagEnum.battleRoyale, TagEnum.fps],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike.jpg",
    gameName: CategoryTypeEnum.counterStrike,
    gameViewers: 80100,
    gameTags: [TagEnum.fps, TagEnum.competitive],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft.jpg",
    gameName: CategoryTypeEnum.worldOfWarcraft,
    gameViewers: 54120,
    gameTags: [TagEnum.mmorpg, TagEnum.fantasy],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20from%20Tarkov.jpg",
    gameName: CategoryTypeEnum.tarkov,
    gameViewers: 40120,
    gameTags: [TagEnum.fps, TagEnum.survival],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Rust.jpg",
    gameName: CategoryTypeEnum.rust,
    gameViewers: 37000,
    gameTags: [TagEnum.survival, TagEnum.sandbox],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone.jpg",
    gameName: CategoryTypeEnum.hearthstone,
    gameViewers: 32000,
    gameTags: [TagEnum.card, TagEnum.strategy],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile.jpg",
    gameName: CategoryTypeEnum.pathOfExile,
    gameViewers: 29500,
    gameTags: [TagEnum.rpg, TagEnum.fantasy],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight.jpg",
    gameName: CategoryTypeEnum.deadByDaylight,
    gameViewers: 31000,
    gameTags: [TagEnum.horror, TagEnum.coOp],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League.jpg",
    gameName: CategoryTypeEnum.rocketLeague,
    gameViewers: 28000,
    gameTags: [TagEnum.sports, TagEnum.racing],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics.jpg",
    gameName: CategoryTypeEnum.teamfightTactics,
    gameViewers: 25000,
    gameTags: [TagEnum.strategy, TagEnum.autobattler],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Fall%20Guys.jpg",
    gameName: CategoryTypeEnum.fallGuys,
    gameViewers: 22000,
    gameTags: [TagEnum.casual, TagEnum.party],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Cyberpunk%202077.jpg",
    gameName: CategoryTypeEnum.cyberpunk2077,
    gameViewers: 15500,
    gameTags: [TagEnum.rpg, TagEnum.sciFi],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting.jpg",
    gameName: CategoryTypeEnum.justChatting,
    gameViewers: 42098,
    gameTags: [TagEnum.casual, TagEnum.irl],
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V.jpg",
    gameName: CategoryTypeEnum.grandTheftAutoV,
    gameViewers: 106530,
    gameTags: [TagEnum.action, TagEnum.openWorld,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends.jpg",
    gameName: CategoryTypeEnum.leagueOfLegends,
    gameViewers: 87397,
    gameTags: [TagEnum.moba, TagEnum.competitive,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Valorant.jpg",
    gameName: CategoryTypeEnum.valorant,
    gameViewers: 22280,
    gameTags: [TagEnum.fps, TagEnum.competitive,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg",
    gameName: CategoryTypeEnum.fortnite,
    gameViewers: 76237,
    gameTags: [TagEnum.battleRoyale, TagEnum.tps,]
  },
   {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty.jpg",
    gameName: CategoryTypeEnum.callOfDuty,
    gameViewers: 61230,
    gameTags: [TagEnum.fps, TagEnum.shooter,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft.jpg",
    gameName: CategoryTypeEnum.minecraft,
    gameViewers: 89500,
    gameTags: [TagEnum.sandbox, TagEnum.creative,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends.jpg",
    gameName: CategoryTypeEnum.apexLegends,
    gameViewers: 71230,
    gameTags: [TagEnum.battleRoyale, TagEnum.fps,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft.jpg",
    gameName: CategoryTypeEnum.worldOfWarcraft,
    gameViewers: 54120,
    gameTags: [TagEnum.mmorpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20from%20Tarkov.jpg",
    gameName: CategoryTypeEnum.tarkov,
    gameViewers: 40120,
    gameTags: [TagEnum.fps, TagEnum.survival,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone.jpg",
    gameName: CategoryTypeEnum.hearthstone,
    gameViewers: 32000,
    gameTags: [TagEnum.card, TagEnum.strategy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile.jpg",
    gameName: CategoryTypeEnum.pathOfExile,
    gameViewers: 29500,
    gameTags: [TagEnum.rpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight.jpg",
    gameName: CategoryTypeEnum.deadByDaylight,
    gameViewers: 31000,
    gameTags: [TagEnum.horror, TagEnum.coOp,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League.jpg",
    gameName: CategoryTypeEnum.rocketLeague,
    gameViewers: 28000,
    gameTags: [TagEnum.sports, TagEnum.competitive,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics.jpg",
    gameName: CategoryTypeEnum.teamfightTactics,
    gameViewers: 25000,
    gameTags: [TagEnum.strategy, TagEnum.autobattler,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Fall%20Guys.jpg",
    gameName: CategoryTypeEnum.fallGuys,
    gameViewers: 22000,
    gameTags: [TagEnum.casual, TagEnum.party,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Cyberpunk%202077.jpg",
    gameName: CategoryTypeEnum.cyberpunk2077,
    gameViewers: 15500,
    gameTags: [TagEnum.rpg, TagEnum.sciFi,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20XIV.jpg",
    gameName: CategoryTypeEnum.finalFantasyXIV,
    gameViewers: 15000,
    gameTags: [TagEnum.mmorpg, TagEnum.storyRich,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Baldur's%20Gate%203.jpg",
    gameName: CategoryTypeEnum.baldurgate,
    gameViewers: 28000,
    gameTags: [TagEnum.rpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Dungeon%20Fighter%20Online.jpg",
    gameName: CategoryTypeEnum.dungeonFighterOnline,
    gameViewers: 15000,
    gameTags: [TagEnum.action, TagEnum.fighting,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/New%20World.jpg",
    gameName: CategoryTypeEnum.newWorld,
    gameViewers: 34000,
    gameTags: [TagEnum.mmorpg, TagEnum.survival,]
  },
  {
    gameImage: "https://images.launchbox-app.com//a8cf4574-8b8d-49e5-90b5-9cf62b21a0cc.jpg",
    gameName: CategoryTypeEnum.starfield,
    gameViewers: 22000,
    gameTags: [TagEnum.rpg, TagEnum.sciFi,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Tibia.jpg",
    gameName: CategoryTypeEnum.tibia,
    gameViewers: 9500,
    gameTags: [TagEnum.mmorpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://images.launchbox-app.com/d762a18a-b07d-49e5-956c-0fdc812aebf5.jpg",
    gameName: CategoryTypeEnum.fifa24,
    gameViewers: 37000,
    gameTags: [TagEnum.sports, TagEnum.competitive,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20II.jpg",
    gameName: CategoryTypeEnum.diablo2,
    gameViewers: 24000,
    gameTags: [TagEnum.rpg, TagEnum.action,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/DayZ.jpg",
    gameName: CategoryTypeEnum.dayz,
    gameViewers: 16500,
    gameTags: [TagEnum.survival, TagEnum.openWorld,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Stellaris.jpg",
    gameName: CategoryTypeEnum.stellaris,
    gameViewers: 9000,
    gameTags: [TagEnum.strategy, TagEnum.sciFi,]
  },
  {
    gameImage: "https://images.launchbox-app.com/77831403-51e4-4ede-8701-e225579c7289.jpg",
    gameName: CategoryTypeEnum.farmingSimulator,
    gameViewers: 12500,
    gameTags: [TagEnum.simulation, TagEnum.casual,]
  },
  {
    gameImage: "https://images.launchbox-app.com/e078d459-a166-47a2-9b5a-26a9fd7cd924.jpg",
    gameName: CategoryTypeEnum.superMario,
    gameViewers: 32000,
    gameTags: [TagEnum.platformer, TagEnum.casual,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Resident%20Evil%204.jpg",
    gameName: CategoryTypeEnum.residentEvil,
    gameViewers: 27000,
    gameTags: [TagEnum.horror, TagEnum.action,]
  },
  {
    gameImage: "https://images.launchbox-app.com//cf93ac83-f047-4b4a-8fa2-633dda520dd3.jpg",
    gameName: CategoryTypeEnum.gta,
    gameViewers: 48000,
    gameTags: [TagEnum.action, TagEnum.openWorld,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/It%20Takes%20Two.jpg",
    gameName: CategoryTypeEnum.itTakesTwo,
    gameViewers: 14500,
    gameTags: [TagEnum.coOp, TagEnum.platformer,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Tekken%207.jpg",
    gameName: CategoryTypeEnum.tekken,
    gameViewers: 30000,
    gameTags: [TagEnum.fighting, TagEnum.competitive,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/HITMAN%203.jpg",
    gameName: CategoryTypeEnum.hitman,
    gameViewers: 17000,
    gameTags: [TagEnum.stealth, TagEnum.action,]
  },
  {
    gameImage: "https://images.launchbox-app.com/2e7b6d1d-5f10-48bd-802a-95b257c072ef.jpg",
    gameName: CategoryTypeEnum.hogwartsLegacy,
    gameViewers: 39000,
    gameTags: [TagEnum.rpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/War%20Thunder.jpg",
    gameName: CategoryTypeEnum.warThunder,
    gameViewers: 21000,
    gameTags: [TagEnum.action, TagEnum.simulation,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Metin2.jpg",
    gameName: CategoryTypeEnum.metin2,
    gameViewers: 14000,
    gameTags: [TagEnum.mmorpg, TagEnum.fantasy,]
  },
  {
    gameImage: "https://static-cdn.jtvnw.net/ttv-boxart/Euro%20Truck%20Simulator%202.jpg",
    gameName: CategoryTypeEnum.euroTruckSimulator,
    gameViewers: 19000,
    gameTags: [TagEnum.simulation, TagEnum.casual,]
  },
  {
    gameImage: "https://images.launchbox-app.com//0c7dd2d8-a27c-48e4-983b-44a7cab7123d.jpg",
    gameName: CategoryTypeEnum.assassinsCreed,
    gameViewers: 33000,
    gameTags: [TagEnum.action, TagEnum.stealth,]
  },
];
