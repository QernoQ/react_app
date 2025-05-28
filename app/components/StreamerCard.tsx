import React, { useState } from 'react';
import { Col, Card } from "react-bootstrap";
import type { StreamerPanels } from "~/data/livePanel";

interface StremerCardProps {
    item: StreamerPanels;
    dark: boolean;
};

const StreamerCard: React.FC<StremerCardProps> = ({ item, dark }) => {
    const [borderColor, setBorderColor] = useState('transparent');
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
        <Col xs={12} sm={6} md={6} lg={6} xxl={3} className="mb-2 mt-2">
            <div className={`card equal-card ${dark ? "panel-dark" : "panel-light"}`}>
                <div className="position-relative" style={{ height: "196px", overflow: "hidden" }}>
                    <Card.Img
                        src={item.image}
                        style={{
                            border: `6px solid ${borderColor}`,
                            transition: 'border 0.3s ease',
                            cursor: 'pointer',
                        }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            >

                    </Card.Img>
                </div>
                <div className="d-flex align-items-center gap-2 p-2">
                    <div
                        className="rounded-circle overflow-hidden flex-shrink-0"
                        style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#ccc',
                        }}
                    >
                        <img
                            src={item.avatar}
                            alt={item.streamerName}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}

                        />
                    </div>

                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold"> {item.streamerName} </span>
                            <span className="d-flex align-items-center gap-2">
                                <span>Live</span>
                                //DODAC TYTUŁ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default StreamerCard;