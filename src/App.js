import './App.css';
import {GlobalStyle} from "./util/GlobalStyle";

import {useState, useEffect, useCallback} from "react";

import {Header, VideoList, Detail} from "./components";
import {FlexBox, SectionEl} from "./elements"


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const onChecked = (mode) => {
    setDarkMode(mode)
  }

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
      <GlobalStyle darkMode={darkMode} />
      <Header onSearch={search} onChecked={onChecked} darkMode={darkMode} />
      <SectionEl is_flex="flex" type={darkMode ? "white" : "dark"}>
        {selectedVideo && (
          <FlexBox flex="1 1 70%">
            <Detail video={selectedVideo}/>
          </FlexBox>
        )}

        <FlexBox flex="1 1 30%">
          <VideoList videos={videos} onVideoClick={selectVideo} selectedVideo={selectedVideo} darkMode={darkMode} />
        </FlexBox>
      </SectionEl>
    </div>
  );
}

export default App;