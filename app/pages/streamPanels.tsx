import { useEffect, useState } from "react";
import { InputGroup, Form, Row, Col, Card } from "react-bootstrap";
import type { StreamerPanels, GamesPanels, ContextType } from "~/data/livePanel";
import { originalStreams } from "~/data/streamerData";
import { gameData } from "~/data/GameData"
import { useOutletContext } from "react-router";


const panelList = () => {
    const { dark } = useOutletContext<ContextType>();
    const [streamPanel, setStreamPanel] = useState<StreamerPanels[]>([]);
    const [shuffledStreams, setShuffledStreams] = useState<StreamerPanels[]>([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [visibleCount2, setVisibleCount2] = useState(6);
    const [gamePanel, setGamePanel] = useState<GamesPanels[]>([]);
    const [shuffledCategory, setShuffledCategory] = useState<GamesPanels[]>([]);
    //const [search, setSearch] = useState('');
        function shuffleArray<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }


    useEffect(() => {
        setGamePanel(gameData);
        const category = shuffleArray(gameData);
        setShuffledCategory(category);
    }, []);

    useEffect(() => {
        setStreamPanel(originalStreams);
        const shuffled = shuffleArray(originalStreams);
        setShuffledStreams(shuffled);
    }, []);

    const visibleStreams = shuffledStreams.slice(0, visibleCount);
    const visibleCategories = shuffledCategory.slice(0,visibleCount2)

    return (
        <div className={`container-fluid text-center ${dark ? "panel-dark" : "panel-light"}`}>
            <div className="col-12">

            </div>
            <h2>Live on Twitch</h2>
            <Row id="streamerPanel" className={dark ? "panel-dark" : "panel-light"}>
                {visibleStreams.map((item, index) => (
                    <Col xs={12} sm={6} md={3} key={index} className="mb-2">
                        <div className="card equal-card">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                style={{ width: '100%', height: '196px', objectFit: 'cover' }}
                            />
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
            {visibleCount < 6 && (
                <div className="mt-3">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (visibleCount >= shuffledStreams.length) {
                                setVisibleCount(4);
                            } else {
                                setVisibleCount(prev => prev + 4);
                            }
                        }}
                    >
                        {visibleCount >= 8 ? 'Pokaż mniej' : 'Pokaż więcej'}
                    </button>
                </div>
            )}
            <h2>Categories we think you’ll like</h2>
            <Row id="gameCategory" className={dark ? "panel-dark" : "panel-light"}>
                {visibleCategories.map((game, index) => (
                    <Col xs={6} sm={4} md={2} lg={2}  key={index} className="mb-2">
                        <div className="card equal-card">
                            <Card.Img
                                variant="top"
                                src={game.gameImage}
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                            />
                            <p className="card-streamer">Category: {game.gameName}</p>
                            <div className="card-body" />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default panelList;
