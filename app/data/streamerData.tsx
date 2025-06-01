import { CategoryTypeEnum, LanguageEnum } from "./EnumType";
import type { StreamerPanels } from "~/data/livePanel";

export const originalStreams: StreamerPanels[] = [
    {
        title: "VLOG z NORWEGII !serio! ",
        streamerName: "H2P_Gucio",
        viewers: 61218,
        category: CategoryTypeEnum.justChatting,
        language: LanguageEnum.polish,
        video: "/videos/gucio.mp4",
        avatar: "https://i.imgur.com/QphHgHd.jpeg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQOoRuR8ULOGVKAykCyAJVZ0v4qnQYeOa4w&s"
    },
     {
        title: "KOLEJNY DZIEŃ, KOLEJNY MARATON",
        streamerName: "NEEXcsgo",
        viewers: 2800,
        category: CategoryTypeEnum.counterStrike,
        language: LanguageEnum.polish,
        video: "https://cdn.pixabay.com/video/2015/08/12/375-136120054_large.mp4",
        avatar: "https://i.pravatar.cc/150?img=12",
        image: "https://plus.unsplash.com/premium_photo-1682123966603-b450fb9daaaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://picsum.photoshttps//picsum.photos/800/450?random=1"
    },
    {
        title: "Baldurs Gate bo obiecałam",
        streamerName: "Nieuczesana",
        viewers: 2800,
        category: CategoryTypeEnum.baldurgate,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/2928382/2928382-hd_1920_1080_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=23",
        image: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwZ2FtaW5nfGVufDB8fDB8fHww"
    },
    {
        title: "Magiczne łupy i śmiech z ekipą",
        streamerName: "ZgredzikHD",
        viewers: 1500,
        category: CategoryTypeEnum.dungeonFighterOnline,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/4291570/4291570-hd_1920_1080_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=34",
        image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwZ2FtaW5nfGVufDB8fDB8fHww"
    },
    {
        title: "Epic battles in the New World!",
        streamerName: "Wanderlust",
        viewers: 3400,
        category: CategoryTypeEnum.newWorld,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/2759477/2759477-sd_640_360_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=45",
        image: "https://images.unsplash.com/photo-1597759493550-6ea6cbcb2cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwZ2FtaW5nfGVufDB8fDB8fHww"
    },
    {
        title: "Stratégies de haut niveau",
        streamerName: "ProStratTV",
        viewers: 1200,
        category: CategoryTypeEnum.teamfightTactics,
        language: LanguageEnum.french,
        video: "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=56",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwZ2FtaW5nfGVufDB8fDB8fHww"
    },
    {
        title: "Overlevel i overkill w Rust",
        streamerName: "NordGang",
        viewers: 4100,
        category: CategoryTypeEnum.rust,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/2759484/2759484-sd_640_360_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=67",
        image: "https://images.unsplash.com/photo-1623743993875-03d6a5c7c709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "랭크 돌파! 오늘은 꼭 이기자!",
        streamerName: "KDAQueen",
        viewers: 2900,
        category: CategoryTypeEnum.leagueOfLegends,
        language: LanguageEnum.korean,
        video: "https://videos.pexels.com/video-files/6498520/6498520-sd_360_640_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=7",
        image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Erkundung der Galaxie beginnt jetzt!",
        streamerName: "CosmoDad",
        viewers: 2200,
        category: CategoryTypeEnum.starfield,
        language: LanguageEnum.german,
        video: "https://videos.pexels.com/video-files/7046607/7046607-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=18",
        image: "https://plus.unsplash.com/premium_photo-1679578549524-77a53a86c14b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Momentos insanos em Valorant!",
        streamerName: "AIMGod",
        viewers: 5600,
        category: CategoryTypeEnum.valorant,
        language: LanguageEnum.portuguese,
        video: "https://videos.pexels.com/video-files/5767771/5767771-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=29",
        image: "https://images.unsplash.com/photo-1602789216385-c6f910f9b450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Волшебство и хаос в Final Fantasy",
        streamerName: "NarratorX",
        viewers: 1800,
        category: CategoryTypeEnum.finalFantasyXIV,
        language: LanguageEnum.russian,
        video: "https://videos.pexels.com/video-files/5571656/5571656-sd_640_360_24fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=40",
        image: "https://plus.unsplash.com/premium_photo-1678112181038-4608d184dd4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Reviviendo la infancia con Tibia",
        streamerName: "RetroRPGer",
        viewers: 950,
        category: CategoryTypeEnum.tibia,
        language: LanguageEnum.spanish,
        video: "https://videos.pexels.com/video-files/5767915/5767915-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=51",
        image: "https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Solo vittorie oggi su FIFA!",
        streamerName: "GolazoKing",
        viewers: 3700,
        category: CategoryTypeEnum.fifa24,
        language: LanguageEnum.italian,
        video: "https://videos.pexels.com/video-files/6498514/6498514-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=62",
        image: "https://images.unsplash.com/photo-1656639969807-94711deb32a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Nieśmiertelny Diablo II",
        streamerName: "Hellwalker",
        viewers: 2400,
        category: CategoryTypeEnum.diablo2,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/6498517/6498517-sd_360_640_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=13",
        image: "https://images.unsplash.com/photo-1558008258-ec20a83db196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Walka o przetrwanie w DayZ",
        streamerName: "SurvivorPL",
        viewers: 1650,
        category: CategoryTypeEnum.dayz,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/6685367/6685367-sd_640_360_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=22",
        image: "https://images.unsplash.com/photo-1582806346149-1069ab0951db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Galactic conquest in Stellaris",
        streamerName: "GalacticX",
        viewers: 900,
        category: CategoryTypeEnum.stellaris,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/6685369/6685369-sd_640_360_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=31",
        image: "https://plus.unsplash.com/premium_photo-1661666980963-0987963a99c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Farming Simulator mit Humor",
        streamerName: "AgroKing",
        viewers: 1250,
        category: CategoryTypeEnum.farmingSimulator,
        language: LanguageEnum.german,
        video: "https://videos.pexels.com/video-files/7859363/7859363-sd_506_960_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=47",
        image: "https://images.unsplash.com/photo-1725273442551-168da8024986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Super Mario speedruns",
        streamerName: "JumpManiac",
        viewers: 3200,
        category: CategoryTypeEnum.superMario,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/8128414/8128414-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=53",
        image: "https://plus.unsplash.com/premium_photo-1678112179154-70b9e19f70aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Nuit d'horreur avec Resident Evil",
        streamerName: "Screamer",
        viewers: 2700,
        category: CategoryTypeEnum.residentEvil,
        language: LanguageEnum.french,
        video: "https://videos.pexels.com/video-files/7667857/7667857-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=61",
        image: "https://images.unsplash.com/photo-1553453571-582fde924387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "GTA Chaos Mod LIVE!",
        streamerName: "ViceCityKing",
        viewers: 4800,
        category: CategoryTypeEnum.gta,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/7777448/7777448-sd_506_960_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=30",
        image: "https://plus.unsplash.com/premium_photo-1680086979907-971f07cebc58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Minecraft Hardcore Only",
        streamerName: "CreeperHunter",
        viewers: 5100,
        category: CategoryTypeEnum.minecraft,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/8128311/8128311-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=37",
        image: "https://images.unsplash.com/photo-1547751936-96e8a5de7568?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Co-op en It Takes Two",
        streamerName: "TeamBuddy",
        viewers: 1450,
        category: CategoryTypeEnum.itTakesTwo,
        language: LanguageEnum.spanish,
        video: "https://videos.pexels.com/video-files/4010195/4010195-sd_960_506_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=19",
        image: "https://images.unsplash.com/photo-1563208964-a455770abf67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "巨人の戦いTekkenで",
        streamerName: "PunchMaster",
        viewers: 3000,
        category: CategoryTypeEnum.tekken,
        language: LanguageEnum.japanese,
        video: "https://videos.pexels.com/video-files/7774445/7774445-sd_640_360_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=26",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop"
    },
    {
        title: "Silent assassinations in Hitman",
        streamerName: "SilentBlade",
        viewers: 1700,
        category: CategoryTypeEnum.hitman,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/6498237/6498237-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=33",
        image: "https://plus.unsplash.com/premium_photo-1679578549719-30a3fc61da3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Magia i przygoda w Hogwarts Legacy",
        streamerName: "Wizard101",
        viewers: 3900,
        category: CategoryTypeEnum.hogwartsLegacy,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/5377270/5377270-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=48",
        image: "https://plus.unsplash.com/premium_photo-1678112179829-c9e9d0c3397a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Танковые битвы в War Thunder",
        streamerName: "TankGeneral",
        viewers: 2100,
        category: CategoryTypeEnum.warThunder,
        language: LanguageEnum.russian,
        video: "https://videos.pexels.com/video-files/7985897/7985897-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=64",
        image: "https://images.unsplash.com/photo-1653981215619-12a857d7f566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Nostalgia w Metin2",
        streamerName: "OldSchoolPL",
        viewers: 1400,
        category: CategoryTypeEnum.metin2,
        language: LanguageEnum.polish,
        video: "https://videos.pexels.com/video-files/7915036/7915036-sd_360_640_30fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=65",
        image: "https://images.unsplash.com/photo-1632853752421-7cc543c6a036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG9ubGluZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Euro Truck zum Entspannen",
        streamerName: "TruckBoy",
        viewers: 1900,
        category: CategoryTypeEnum.euroTruckSimulator,
        language: LanguageEnum.german,
        video: "https://videos.pexels.com/video-files/7048550/7048550-sd_640_360_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=66",
        image: "https://images.unsplash.com/photo-1676378390024-025fcdf80d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxvbmxpbmUlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Assassin's Creed in 4K!",
        streamerName: "EzioMain",
        viewers: 3300,
        category: CategoryTypeEnum.assassinsCreed,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/8128497/8128497-sd_360_640_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=68",
        image: "https://images.unsplash.com/photo-1619597455408-d2c4b5567f6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxvbmxpbmUlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Fortnite with viewers!",
        streamerName: "BuildGod",
        viewers: 5200,
        category: CategoryTypeEnum.fortnite,
        language: LanguageEnum.english,
        video: "https://videos.pexels.com/video-files/5781112/5781112-sd_360_640_25fps.mp4",
        avatar: "https://i.pravatar.cc/150?img=70",
        image: "https://plus.unsplash.com/premium_photo-1680086980474-9883d5ba4dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxvbmxpbmUlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "OD MILIONERA DO ZERA XD",
        streamerName: "Qami44",
        viewers: 5200,
        category: CategoryTypeEnum.counterStrike,
        language: LanguageEnum.polish,
        video: "/videos/ptasznik.mp4",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/987a4072-ffe4-4f66-ac29-929dc22b50f7-profile_image-70x70.png",
        image: "https://i.imgur.com/ZQAqOvQ.png"
    },
];