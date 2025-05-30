import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import StreamerCard from "~/components/StreamerCard";
import type { StreamerPanels } from "~/data/livePanel";
import { originalStreams } from "~/data/streamerData";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const decodedCategoryId = decodeURIComponent(categoryId || '');
  const [streams, setStreams] = useState<StreamerPanels[]>([]);

  const { dark } = useOutletContext<{ dark: boolean }>();

  useEffect(() => {
    setStreams([...originalStreams]);
  }, []);

  const sortedStreams = streams.filter(
    (stream) => stream.category === decodedCategoryId
  );

  useEffect(() => {
    if (decodedCategoryId) {
      document.title = `${decodedCategoryId} - ObviouslyNotTwitch ` ;
    }
  }, [decodedCategoryId]);

  return (
    <div>
      <h4>Category: {decodedCategoryId}</h4>
      <Row id="streamerPanel">
        {sortedStreams.map((item, index) => (
          <StreamerCard key={index} item={item} dark={dark} />
        ))}
      </Row>
    </div>
  );
}
