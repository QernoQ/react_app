import React from 'react';
import type { StreamerPanels } from "~/data/livePanel";
import { Col, Card } from "react-bootstrap";

interface LiveStreaProps {
    item: StreamerPanels;
    dark: boolean;
};

const LiveStreamCard: React.FC<LiveStreaProps> = ({ item, dark }) => {
    return (
        <Col xs={12} sm={12} md={12} lg={12} xxl={3} className="mb-2 mt-2">
            <div className={`card equal-card ${dark ? "panel-dark" : "panel-light"}`}>
                <video
                    src={item.video}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    controls
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    onError={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
                        console.error(`Video failed to load for ${item.streamerName}:`, e.currentTarget.src, e);
                    }}
                >
                </video>
            </div>
        </Col>
    );
};

export default LiveStreamCard;