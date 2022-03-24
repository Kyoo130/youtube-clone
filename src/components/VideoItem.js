import React from 'react';
import styled from "styled-components";

const VideoItem = ({video, display, onVideoClick}) => {
  const {title, channelTitle, thumbnails} = video.snippet;
  const displayType = display === 'list' ? '100%' : '50%';

  return (
    <ListEl onClick={() => onVideoClick(video)} displayType={displayType}>
      <DivEl>
        <Thumbnail src={thumbnails.medium.url} alt=""/>
        <MetaData>
          <Title>{title}</Title>
          <Channel>{channelTitle}</Channel>
        </MetaData>
      </DivEl>
    </ListEl>
  );
};

export default VideoItem;

const ListEl = styled.li`
  width: 50%;
  //width: 100%;
  padding: 0.2em;
`

const DivEl = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
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

const MetaData = styled.div`
  margin-left: 0.2em;
`

const Title = styled.p`
  font-size: 0.8rem;
  margin: 0;
`

const Channel = styled.p`
  font-size: 0.6rem;
  margin: 0;
`