import React from 'react';

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

const SidebarItem: React.FC<SidebarItemProps> = ({
  avatar,
  streamerName,
  viewers,
  category,
  isOpen,
  isMobile,
}) => {
  return (
    <div className="d-flex align-items-center p-2 sidebar-item">
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
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  display: 'inline-block',
                }}
              ></span>
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

export default SidebarItem;
