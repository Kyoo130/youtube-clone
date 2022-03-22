import React from 'react';
import VideoItem from "./VideoItem";
import styled from "styled-components";

const VideoList = (props) => {
  return (
    <VideoUl>
      {props.videos.map(video => <VideoItem key={video.id} video={video}/>)}
    </VideoUl>
  );
};

export default VideoList;

const VideoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`