import React from 'react';
import { Col } from "react-bootstrap"; 
import type { StreamerPanels } from "~/data/livePanel"; 

type Props = {
    item: StreamerPanels;
    dark: boolean;
};

const StreamerCard: React.FC<Props> = ({ item, dark }) => { 
    return (
        <Col xs={12} sm={6} md={3} className="mb-2">
            <div className={`card equal-card ${dark ? "panel-dark" : "panel-light"}`}>
                <div className="position-relative" style={{ height: "196px", overflow: "hidden" }}>
                    <video
                        src={item.video}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onError={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
                            console.error(`Video failed to load for ${item.streamerName}:`, e.currentTarget.src, e);
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
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
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'red',
                                    display: 'inline-block',
                                }} />
                                <span>Live</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default StreamerCard;