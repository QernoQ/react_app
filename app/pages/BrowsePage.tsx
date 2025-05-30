import { useOutletContext } from "react-router";
import CategoryCard from "~/components/CategoryCard";
import type { GamesPanels } from "~/data/livePanel";
import { Row } from "react-bootstrap";
import {useEffect} from 'react';

export default function BrowsePage() {
    const { dark, gameData } = useOutletContext<{
        dark: boolean;
        gameData: GamesPanels[];
    }>();

        useEffect(() => {
            document.title = "Browse - ObviouslyNotTwitch";
        }, []);
    

    return (
        <Row>
            {gameData.map((game, index) => (
                <CategoryCard
                    key={index}
                    game={game}
                    dark={dark}
                />
            ))}
        </Row>
    );
}
