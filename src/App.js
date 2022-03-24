import './App.css';
import {useState, useEffect, useCallback} from "react";

import {Header, VideoList} from "./components";
import Detail from "./components/Detail";
import styled from "styled-components";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
      setSelectedVideo(null);
      youtube
        .search(query)
        .then(videos => setVideos(videos))
    }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [youtube])

  return (
    <div className="App">
      <Header onSearch={search}/>

      <ContentSection>
        {selectedVideo && (
          <DetailCont>
            <Detail video={selectedVideo}/>
          </DetailCont>
        )}

        <ListCont>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </ListCont>
      </ContentSection>
    </div>
  );
}

export default App;

const ContentSection = styled.section`
  display: flex;
`

const DetailCont = styled.div`
  flex: 1 1 70%;
`

const ListCont = styled.div`
  flex: 1 1 30%;
`