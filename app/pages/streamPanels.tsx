import { useEffect, useState } from "react";
import { InputGroup, Form, Row, Col, Card } from "react-bootstrap";
import type { StreamerPanels, GamesPanels } from "~/data/livePanel";
import { originalStreams } from "~/data/streamerData";
import { gameData } from "~/data/GameData"

const panelList = () => {
    const [streamPanel, setStreamPanel] = useState<StreamerPanels[]>([]);
    const [shuffledStreams, setShuffledStreams] = useState<StreamerPanels[]>([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [gamePanel, setGamePanel] = useState<GamesPanels[]>([]);
    //const [search, setSearch] = useState('');

    useEffect(() => {
        setGamePanel(gameData);
     }, []);

    useEffect(() => {
        setStreamPanel(originalStreams);
        const shuffled = [...originalStreams];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledStreams(shuffled);
    }, []);
    const visibleStreams = shuffledStreams.slice(0, visibleCount);

    return (
        <div className="container text-center">
            <div className="col-12">

            </div>
            <Row id="streamerPanel">
                {visibleStreams.map((item, index) => (
                    <Col md={3} key={index} className="mb-2">
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
            {visibleCount < 8 && (
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
            <Row id="gameCategory">
                {gamePanel.map((game, index) => (
                    <Col md={2} key={index} className="mb-2">
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
