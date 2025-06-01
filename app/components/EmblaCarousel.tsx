import useEmblaCarousel from 'embla-carousel-react';
import { useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import { Button, Col } from "react-bootstrap";
import type { StreamerPanels } from "~/data/livePanel";
import LiveStreamCard from "~/components/LiveStreamCard";
import StreamerHeader from './StreamerHeader';

interface EmblaProps {
  streams: StreamerPanels[];
  dark: boolean;
};

export default function EmblaCarousel({ streams, dark }: EmblaProps)  {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false
  });
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected);
    };

    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi?.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <Col xs={12} className="embla-wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {streams.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div
                className={`embla__zoom ${index === selectedIndex ? 'is-selected' : ''}`}
                style={{ position: 'relative' }}
              >
                <LiveStreamCard
                  item={item}
                  dark={dark}
                  height="240px"
                  width="100%"
                  mute={true}
                />
                {selectedIndex === index && (
                  <div
                    onClick={() => navigate(`/streamer/${encodeURIComponent(item.streamerName)}`)}
                    style={{
                      position: 'absolute',
                      bottom: '170px',
                      width: '100%',
                      cursor: 'pointer',
                      color: `${dark ? 'white' : 'black'}`,
                      backgroundColor: `${dark ? 'rgba(0, 0, 0, 0.93)' : 'rgba(252, 252, 252, 0.81)'}`,
                      border: !dark ? '1px solidrgb(77, 79, 82)' : 'none',
                      padding: '5px 10px',
                      fontSize: '14px',
                      transition: 'opacity 0.3s ease',

                    }}
                  >
                    <StreamerHeader avatar={item.avatar} streamerName={item.streamerName} title={item.title} viewers={item.viewers}></StreamerHeader>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`border-top border-${dark ? 'white' : 'dark'}`} />
      <div className='buttonRow'>
        <Button
          variant={dark ? 'dark' : 'light'}
          className='rightL'
          style={{
            width: '100px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Helvetica, Arial, sans-serif',
            transition: 'all 0.3s ease',
            border: !dark ? '1px solid #dee2e6' : 'none',
          }}
          onClick={() => emblaApi?.scrollPrev()}
        >
          &lt;
        </Button>
        <Button
          variant={dark ? 'dark' : 'light'}
          className='rightB'
          style={{
            width: '100px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Helvetica, Arial, sans-serif',
            transition: 'all 0.3s ease',
            border: !dark ? '1px solid #dee2e6' : 'none',
          }}
          onClick={() => emblaApi?.scrollNext()}
        >
          &gt;
        </Button>
      </div>
    </Col>
  );
};

