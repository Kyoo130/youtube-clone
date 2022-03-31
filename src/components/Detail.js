import React from 'react';
import styled from "styled-components";

const Detail = ({video}) => {
  return (
    <SectionEl>
      <Container>
        <iframe id="ytplayer" type="text/html" width="100%" height="500px"
                title="youtube video player"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0" allowFullScreen/>
      </Container>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <Description>{video.snippet.description}</Description>
    </SectionEl>
  );
};

const SectionEl = styled.section`
  padding: 0.2em;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const Description = styled.pre`
  white-space: pre-wrap;
`

export default Detail;

