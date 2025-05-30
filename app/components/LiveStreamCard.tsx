import React, { useState } from 'react';
import type { StreamerPanels } from "~/data/livePanel";

interface LiveStreamCardProps {
    item: StreamerPanels;
    dark: boolean;
    height: string;
    width: string;
}

const LiveStreamCard: React.FC<LiveStreamCardProps> = ({ item, dark, height, width }) => {
    const [showControls, setShowControls] = useState(false);

    return (
        <div
            className={`card equal-card ${dark ? "panel-dark" : "panel-light"}`}
            style={{ width: width, height: height }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                src={item.video}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                controls={showControls}
                onError={(e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
                    console.error(`Video failed to load for ${item.streamerName}:`, e.currentTarget.src, e);
                }}
            />
        </div>
    );
};

export default LiveStreamCard;
