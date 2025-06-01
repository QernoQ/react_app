import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Col, Card } from "react-bootstrap";
import type { StreamerPanels } from "~/data/livePanel";
import StreamerHeader from './StreamerHeader';

interface StremerCardProps {
    item: StreamerPanels;
    dark: boolean;
};

export default function StreamerCard ({ item, dark }: StremerCardProps){
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
                            onClick={() => navigate(`/streamer/${encodeURIComponent(item.streamerName)}`)}
                            >

                    </Card.Img>
                </div>
               <StreamerHeader avatar={item.avatar} streamerName={item.streamerName} title={item.title} viewers={item.viewers}></StreamerHeader>
            </div>
        </Col>
    );
};

