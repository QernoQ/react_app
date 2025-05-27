import { useEffect, useState } from "react";
import { InputGroup, Form, Row, Col, Card } from "react-bootstrap";
import type { StreamerPanels, GamesPanels, ContextType } from "~/data/livePanel";
import { useOutletContext } from "react-router";
import StreamerCard from "~/components/StreamerCard.tsx";
const PanelList = () => {
    const { shuffledStreams, shuffledGames, dark } = useOutletContext<{
        shuffledStreams: StreamerPanels[];
        shuffledGames: GamesPanels[];
        dark: boolean;
    }>();
    const [visibleCount, setVisibleCount] = useState(4);
    const [visibleCount2, setVisibleCount2] = useState(6);
    //const [search, setSearch] = useState('');

    const visibleStreams = shuffledStreams.slice(0, visibleCount);
    const visibleCategories = shuffledGames.slice(0, visibleCount2)

    return (
        <div className={`container-fluid text-center ${dark ? "panel-dark" : "panel-light"}`}>
            <div className="col-12">

            </div>
            <h2>Live on Twitch</h2>

            <Row id="streamerPanel">
            
                {visibleStreams.map((item, index) => (
                    <StreamerCard key={index} item={item} dark={dark} />
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
                    <Col xs={6} sm={4} md={2} lg={2} key={index} className="mb-2">
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

export default PanelList;
