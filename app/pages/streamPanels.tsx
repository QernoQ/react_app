import { useEffect, useState } from "react";
import { InputGroup, Table, Form, Row, Col, Card } from "react-bootstrap";
import type { StreamerPanels, GamesPanels } from "~/pages/livePanel";
import { CategoryTypeEnum, LanguageEnum, TagEnum} from "./EnumType";
const panelList = () => {
    const [streamPanel, setStreamPanel] = useState<StreamerPanels[]>([]);
    const [gamePanel, setGamePanel] = useState<GamesPanels[]>([]);
    const [search, setSearch] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
            setGamePanel([
                {
                    gameImage: "lol.jpg",
                    gameName: CategoryTypeEnum.leagueOfLegends,
                    gameViewers: 5000,
                    gameTags: TagEnum.fps,
                },
                {
                    gameImage: "gra.jpg",
                    gameName: CategoryTypeEnum.counterStrike,
                    gameViewers: 10000,
                    gameTags: TagEnum.fps,
                },
            ]);
        }, []);

    useEffect(() => {
        setStreamPanel([
            {
                title: "KOLEJNY DZIEN, KOLEJNY MARATON",
                streamerName: "NEEXcsgo",
                viewers: 2800,
                category: CategoryTypeEnum.counterStrike,
                language: LanguageEnum.polish,
                image: "gra.jpg",
            },
            {
                title: "Baldurs Gejt bo obiecałam",
                streamerName: "Nieuczesanao",
                viewers: 2800,
                category: CategoryTypeEnum.baldurgate,
                language: LanguageEnum.polish,
                image: "lol.jpg",
            },
            {
                title: "Magiczne łupy i śmiech z ekipą",
                streamerName: "ZgredzikHD",
                viewers: 1500,
                category: CategoryTypeEnum.dungeonFighterOnline,
                language: LanguageEnum.polish,
                image: "gra.jpg",
            },
            {
                title: "Epic battles in the New World!",
                streamerName: "Wanderlust",
                viewers: 3400,
                category: CategoryTypeEnum.newWorld,
                language: LanguageEnum.english,
                image: "lol.jpg",
            },
            {
                title: "Stratégies de haut niveau",
                streamerName: "ProStratTV",
                viewers: 1200,
                category: CategoryTypeEnum.teamfightTactics,
                language: LanguageEnum.french,
                image: "gra.jpg",
            },
            {
                title: "Overlevel & overkill w Rust",
                streamerName: "NordGang",
                viewers: 4100,
                category: CategoryTypeEnum.rust,
                language: LanguageEnum.polish,
                image: "lol.jpg",
            },
            {
                title: "랭크 돌파! 오늘은 꼭 이기자!",
                streamerName: "KDAQueen",
                viewers: 2900,
                category: CategoryTypeEnum.leagueOfLegends,
                language: LanguageEnum.korean,
                image: "gra.jpg",
            },
            {
                title: "Erkundung der Galaxie beginnt jetzt!",
                streamerName: "CosmoDad",
                viewers: 2200,
                category: CategoryTypeEnum.starfield,
                language: LanguageEnum.german,
                image: "lol.jpg",
            },
            {
                title: "Momentos insanos em Valorant!",
                streamerName: "AIMGod",
                viewers: 5600,
                category: CategoryTypeEnum.valorant,
                language: LanguageEnum.portuguese,
                image: "gra.jpg",
            },
            {
                title: "Волшебство и хаос в Final Fantasy",
                streamerName: "NarratorX",
                viewers: 1800,
                category: CategoryTypeEnum.finalFantasyXIV,
                language: LanguageEnum.russian,
                image: "lol.jpg",
            },
            {
                title: "Reviviendo la infancia con Tibia",
                streamerName: "RetroRPGer",
                viewers: 950,
                category: CategoryTypeEnum.tibia,
                language: LanguageEnum.spanish,
                image: "gra.jpg",
            },
            {
                title: "Solo vittorie oggi su FIFA!",
                streamerName: "GolazoKing",
                viewers: 3700,
                category: CategoryTypeEnum.fifa24,
                language: LanguageEnum.italian,
                image: "lol.jpg",
            }

        ]);
    }, []);

    const filteredStreams = streamPanel.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.streamerName.toLowerCase().includes(search.toLowerCase())
    );
    const filteredGames = gamePanel.filter(game => game.gameName.toLowerCase().includes(search.toLowerCase()));

    const visibleStreams = showAll ? filteredStreams : filteredStreams.slice(0, 6);

    return (
        <div className="container text-center">
            <div className="col-12">
                <InputGroup className="mb-4">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        <h5>Search</h5>
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Search"
                        aria-describedby="inputGroup-sizing-default"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </InputGroup>
            </div>
            <Row id="streamerPanel">
                {visibleStreams.map((item, index) => (
                    <Col md={2} key={index} className="mb-2">
                        <div className="card equal-card">
                            <Card.Img variant="top" src={item.image}
                                style={{ width: '300px', height: '169px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <p className="card-viewers">{item.viewers} viewers</p>
                                <h6 className="card-title">{item.title}</h6>
                                <p className="card-streamer">Streamer: {item.streamerName}</p>
                                <p className="card-category">Category: {item.category}</p>
                                <p className="card-language">Language: {item.language}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            {filteredStreams.length > 6 && (
                <div className="mt-3">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Pokaż mniej' : 'Pokaż więcej'}
                    </button>
                </div>
            )}
            <Row id="gameCategory">
                {filteredGames.map((game, index) => (
                    <Col md={2} key={index} className="mb-2">
                        <div className="card equal-card">
                            <Card.Img variant="top" src={game.gameImage}
                                style={{ width: '157,5px', height: '210px', objectFit: 'cover' }} />
                                <p className="card-streamer">Streamer: {game.gameName}</p>
                            <div className="card-body">
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default panelList;
