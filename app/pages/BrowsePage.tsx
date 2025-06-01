import { useOutletContext } from "react-router";
import { useState } from "react";
import CategoryCard from "~/components/CategoryCard";
import type { GamesPanels } from "~/data/livePanel";
import { Row } from "react-bootstrap";
import { useEffect } from 'react';
import SearchInput from "~/components/SearchInput";

export default function BrowsePage() {
    const [search, setSearch] = useState('');
    const { dark, gameData } = useOutletContext<{
        dark: boolean;
        gameData: GamesPanels[];
    }>();
    const filteredCategory = gameData.filter(item =>
        item.gameName.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        document.title = "Browse - ObviouslyNotTwitch";
    }, []);


    return (
        <Row>
            <SearchInput value={search} onChange={setSearch} barmsg="Search categories..."></SearchInput>
            {filteredCategory.map((game, index) => (
                <CategoryCard
                    key={index}
                    game={game}
                    dark={dark}
                />
            ))}
        </Row>
    );
}
