import { CategoryTypeEnum, TagEnum } from "./EnumType";
import type { GamesPanels } from "~/data/livePanel";
export const gameData: GamesPanels[] =
    [
        {
            gameImage: "lol.jpg",
            gameName: CategoryTypeEnum.leagueOfLegends,
            gameViewers: 5000,
            gameTags: TagEnum.fps,
        },
        {
            gameImage: "cs.jpg",
            gameName: CategoryTypeEnum.counterStrike,
            gameViewers: 10000,
            gameTags: TagEnum.fps,
        },
    ];
