import React from 'react';
import {VideoItem} from "./index";
import styled from "styled-components";

const VideoList = ({videos, onVideoClick, display}) => {
  return (
    <VideoCont>
      {videos.map(video => <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />)}
    </VideoCont>
  );
};

export default VideoList;

const VideoCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
`