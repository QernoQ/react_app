import type { CategoryTypeEnum, LanguageEnum, TagEnum } from "~/data/EnumType";


export type StreamerPanels = {
    title: string;
    streamerName: string;
    viewers: number;
    category: CategoryTypeEnum;
    language: LanguageEnum;
    image: string;
}

export type GamesPanels = {
    gameImage: string;
    gameName: CategoryTypeEnum;
    gameViewers: number;
    gameTags: TagEnum;

}
export type ContextType = {
  dark: boolean;
};
