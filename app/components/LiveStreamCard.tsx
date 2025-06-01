import React, { useEffect, useState } from 'react';
import type { StreamerPanels } from "~/data/livePanel";

interface LiveStreamCardProps {
    item: StreamerPanels;
    dark: boolean;
    height: string;
    width: string;
    mute: boolean;
}

export default function LiveStreamCard({ item, dark, height, width, mute }: LiveStreamCardProps)  {
    const [showControls, setShowControls] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        setMuted(mute);
    }, [mute]);

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
                muted={muted}
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

