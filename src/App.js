import './App.css';
import {useState, useEffect} from "react";

import {Header, VideoList} from "./components";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query)
      .then(videos => setVideos(videos))
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [])

  return (
    <div className="App">
      <Header onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
