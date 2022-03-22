import React from 'react';
import styled from "styled-components";

const VideoItem = ({video: {snippet}}) => {
  return (
    <VideoLi>
      <VideoDiv>
        <Thumbnail src={snippet.thumbnails.medium.url} alt=""/>
        <MetaData>
          <Title>{snippet.title}</Title>
          <Channel>{snippet.channelTitle}</Channel>
        </MetaData>
      </VideoDiv>
    </VideoLi>
  );
};

export default VideoItem;

const VideoLi = styled.li`
  width: 50%;
  margin-bottom: 0.2em;
  //padding: 0.2em;
`

const VideoDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px 0 rgba(191, 191, 191, 0.53);
  cursor: pointer;
  transition: transform 250ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`

const Thumbnail = styled.img`
  width: 40%;
  height: 100%;
`

const MetaData = styled.p`
  margin-left: 0.2em;
`

const Title = styled.p`
  font-size: 0.8rem;
`

const Channel = styled.p`
  font-size: 0.6rem;
`