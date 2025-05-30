import { useParams } from "react-router-dom";
import { CategoryTypeEnum } from "~/data/EnumType";
import StreamerCard from "~/components/StreamerCard";
import type { StreamerPanels, GamesPanels, ContextType } from "~/data/livePanel";
import { useOutletContext } from "react-router";
import { originalStreams } from "~/data/streamerData";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import LiveStreamCard from "~/components/LiveStreamCard";
import StreamerHeader from "~/components/StreamerHeader";

export default function CategoryPage() {
    const { streamerId } = useParams<{ streamerId: string }>();
    const decodedStreamerId = decodeURIComponent(streamerId || '');
    const [streams, setStreams] = useState<StreamerPanels[]>([]);

    useEffect(() => {
        setStreams([...originalStreams]);
    }, []);


    const { dark } = useOutletContext<{ dark: boolean }>();
    const streamer = streams.find(stream => stream.streamerName === decodedStreamerId);
    useEffect(() => {
        if (streamer) {
            document.title = `${streamer.streamerName} - ObviouslyNotTwitch`
        }
    }, [streamer]);

    return (
        <div>
            {streamer && (
                <>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xxl={12} className="mb-2 mt-2">
                            <LiveStreamCard item={streamer} dark={dark} height={'725px'} width={'100%'} />
                            <span style={{
                                fontSize: '24px'
                            }}>
                                <StreamerHeader
                                    avatar={streamer.avatar}
                                    streamerName={streamer.streamerName}
                                    title={streamer.title}
                                    viewers={streamer.viewers}
                                />
                            </span>
                        </Col>
                    </Row>

                </>
            )}
        </div>
    );
}
