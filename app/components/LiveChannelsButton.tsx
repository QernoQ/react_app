import React from 'react';
import { Button } from 'react-bootstrap';

interface LiveButtonProps {
    toggleSidebar: () => void;
}


const LiveChannelsButton = ({ toggleSidebar }: LiveButtonProps) => {
  return (
    <Button
      variant="dark" 
      className="d-flex align-items-center justify-content-between" 
      style={{
        width: 'auto', 
        minWidth: '250px',
        height: '60px', 
        fontSize: '18px', 
        fontWeight: 'bold', 
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: 'white',
      }}
      onClick={toggleSidebar}
    >
      LIVE CHANNELS
    </Button>
  );
};

export default LiveChannelsButton;