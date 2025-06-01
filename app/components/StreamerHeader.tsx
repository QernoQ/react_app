import React from "react";
import RedDot from "~/components/RedDot";

interface StreamerHeaderProps {
    avatar: string;
    streamerName: string;
    title: string;
    viewers: number
};

function formatViewers(number: number): string | number {
    if (number >= 1000) {
        const rounded = number / 1000;
        const value = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
        return value.replace('.', ',') + ' tys';
    }
    return number;
}
export default function StreamerHeader({ avatar, streamerName, title, viewers }:StreamerHeaderProps) {
    return (
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
                    src={avatar}
                    alt={streamerName}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <span className="fw-bold">{streamerName}</span>
                    <span><RedDot></RedDot> {formatViewers(viewers)}</span>
                </div>
                <span className="ms-3">{title}</span>
            </div>
        </div>

    );
};

