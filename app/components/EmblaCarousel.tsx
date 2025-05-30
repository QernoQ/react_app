import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect, useState } from 'react';
import { Button, Col } from "react-bootstrap";
import type { StreamerPanels } from "~/data/livePanel";
import LiveStreamCard from "~/components/LiveStreamCard";
interface EmblaProps {
  streams: StreamerPanels[];
  dark: boolean;
};
const EmblaCarousel: React.FC<EmblaProps> = ({ streams, dark }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false

  });
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
            <div
              className="embla__slide"
              key={index}
            >
              <div className={`embla__zoom ${index === selectedIndex ? 'is-selected' : ''}`}>
                 <LiveStreamCard item={item} dark={dark} height={'240px'} width = {'100%'} />
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className={`border-top border-${dark ? 'white' : 'dark'}`}/>
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
          }}
          onClick={() => emblaApi?.scrollPrev()}
        >&lt;
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
          }}
          onClick={() => emblaApi?.scrollNext()}
        >&gt;
        </Button>
      </div>
    </Col>

  )
}

export default EmblaCarousel