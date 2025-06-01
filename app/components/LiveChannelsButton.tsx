import React from 'react';
import { Button } from 'react-bootstrap';

interface LiveButtonProps {
    toggleSidebar: () => void;
    dark: boolean;
    isOpen: boolean;
}


export default function LiveChannelsButton ({ toggleSidebar, dark, isOpen } : LiveButtonProps) {
  return (
    <Button
      variant={dark ? 'dark' : 'light'}
      onClick={toggleSidebar}
      className="d-flex align-items-center"
      style={{
        width: isOpen ? 'auto' : '60px',
        minWidth: isOpen ? '250px' : '60px',
        height: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica, Arial, sans-serif',
        transition: 'all 0.3s ease',
      }}
    >
      {isOpen ? (<>LIVE CHANNELS <span style={{ marginLeft: '70px' }}>🡰</span></>) : ('🡲')}
    </Button>
  );
};
