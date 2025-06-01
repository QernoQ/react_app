import React, { use } from 'react';
import RedDot from "~/components/RedDot";
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  avatar: string;
  streamerName: string;
  viewers: number;
  category: string;
  isOpen: boolean;
  isMobile: boolean;
}

function formatViewers(number: number): string | number {
  if (number >= 1000) {
    const rounded = number / 1000;
    const value = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
    return value.replace('.', ',') + ' tys';
  }
  return number;
}

export default function SidebarItem({avatar,streamerName,viewers,category,isOpen,isMobile,
}: SidebarItemProps) {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center p-2 sidebar-item"
    onClick={() => navigate(`/streamer/${encodeURIComponent(streamerName)}`)}
    >
      <div
        className="flex-shrink-0 rounded-circle overflow-hidden"
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

      {!isMobile && (
        <div
          className={`ms-3 w-100 sidebar-details ${isOpen ? "open" : "closed"}`}
        >
          <div className="d-flex align-items-center justify-content-between">
            <span>{streamerName}</span>
            <span className="d-flex align-items-center gap-2">
              <RedDot></RedDot>
              <span>{formatViewers(viewers)}</span>
            </span>
          </div>
          <div className="text-muted" style={{ fontSize: '12px' }}>
            {category}
          </div>
        </div>
      )}

    </div>
  );
};

