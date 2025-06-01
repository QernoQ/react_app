import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Col, Card } from "react-bootstrap";
import type { GamesPanels } from "~/data/livePanel";

function formatViewers(number: number): string | number {
    if (number >= 1000) {
        const rounded = number / 1000;
        const value = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
        return value.replace('.', ',') + ' tys';
    }
    return number;
}

interface CategoryCardProps {
    game: GamesPanels;
    dark: boolean;
};

export default function CategoryCard({ game, dark } : CategoryCardProps){
    const [borderColor, setBorderColor] = useState('transparent');
    const navigate = useNavigate();
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleMouseEnter = () => {
        setBorderColor(getRandomColor());
    };

    const handleMouseLeave = () => {
        setBorderColor('transparent');
    };
    return (


        <Col xs={6} sm={4} md={4} lg={4} xxl={2}>
            <div className="card equal-card mt-2">
                <Card.Img
                    className="category card"
                    variant="top"
                    src={game.gameImage}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        border: `6px solid ${borderColor}`,
                        transition: 'border 0.3s ease',
                        cursor: 'pointer',

                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                   onClick={() => navigate(`/category/${encodeURIComponent(game.gameName)}`)}
                />

                <p className="card-streamer">
                    {game.gameName}
                    <br></br>
                    <br></br>
                    {formatViewers(game.gameViewers)}
                    <br></br>
                    <br></br>
                    <div
                        className="d-flex justify-content-center flex-nowrap overflow-hidden"
                        style={{ maxWidth: '100%' }}
                    >
                        {game.gameTags.map(tag => (
                            <span
                                key={tag}
                                className="badge bg-secondary me-2"
                                style={{
                                    flexShrink: 1,
                                    minWidth: 0,
                                    maxWidth: '150px',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    textAlign: 'center',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </p>

                <div className="card-body" />
            </div>
        </Col>
    );
};
