import React from 'react';
import styled from "styled-components";
import {VideoItem} from "./index";

const VideoList = ({videos, onVideoClick, selectedVideo, darkMode}) => {
  return (
    <VideoCont>
      {videos.map(video => <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} selectedVideo={selectedVideo} darkMode={darkMode} />)}
    </VideoCont>
  );
};

const VideoCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
`

export default VideoList;

