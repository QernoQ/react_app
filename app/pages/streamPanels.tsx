import { useEffect, useState, } from "react";
import { Row, Button } from "react-bootstrap";
import type { StreamerPanels, GamesPanels, } from "~/data/livePanel";
import { useOutletContext } from "react-router";
import StreamerCard from "../components/StreamerCard";
import CategoryCard from "../components/CategoryCard";
import EmblaCarousel from "../components/EmblaCarousel";
const PanelList = () => {
    const {
        shuffledStreams,
        shuffledGames,
        dark,
        topRef,
    } = useOutletContext<{
        shuffledStreams: StreamerPanels[];
        shuffledGames: GamesPanels[];
        dark: boolean;
        topRef: React.RefObject<HTMLDivElement>;
    }>();
    useEffect(() => {
        document.title = "ObviouslyNotTwitch";
    }, []);
    const [visibleCountStream, setVisibleCount] = useState(4);
    const [visibleCountGame, setVisibleCount2] = useState(6);
    const [visibleCountLiveStream, setVisibleCount3] = useState(8);
    const visibleStreams = shuffledStreams.slice(0, visibleCountStream);
    const visibleCategories = shuffledGames.slice(0, visibleCountGame);
    const visibleLiveStreams = shuffledStreams.slice(0, visibleCountLiveStream);

    return (

        <div ref={topRef} className={`container-fluid text-center ${dark ? "panel-dark" : "panel-light"}`}>
            <div className="col-12"> </div>
            <Row id="liveStreamPanel">
                <EmblaCarousel
                    streams={visibleLiveStreams}
                    dark={dark}
                />
            </Row>
            <Row id="streamerPanel">
                <span
                    className='d-flex align-items-center mt-2'
                    style={{
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        fontSize: '20px'

                    }}>
                    Live on Twitch
                </span>
                {visibleStreams.map((item, index) => (
                    <StreamerCard
                        key={index}
                        item={item}
                        dark={dark}
                    />
                ))}

            </Row>
            {shuffledStreams.length > 4 && visibleCountStream <= 4 && (
                <div className="mt-3">
                    <Button
                        variant={dark ? "dark" : "light"}
                        onClick={() => {
                            setVisibleCount(prev => prev + 4);
                        }}
                        style={{
                            border: !dark ? '1px solid #dee2e6' : 'none',
                        }}
                    >
                        Pokaż więcej
                    </Button>
                </div>
            )}
            <Row id="gameCategory" className={dark ? "panel-dark" : "panel-light"}>
                <span
                    className='d-flex align-items-center '
                    style={{
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        fontSize: '20px'

                    }}>
                    Categories we think you’ll like
                </span>
                {visibleCategories.map((game, index) => (
                    <CategoryCard
                        key={index}
                        game={game}
                        dark={dark}
                    />

                ))}
            </Row>
        </div>
    );
};

export default PanelList;
