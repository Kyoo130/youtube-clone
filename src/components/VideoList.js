import React from 'react';
import {VideoItem} from "./index";
import styled from "styled-components";

const VideoList = (props) => {
  return (
    <VideoCont>
      {props.videos.map(video => <VideoItem key={video.id} video={video}/>)}
    </VideoCont>
  );
};

export default VideoList;

const VideoCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`