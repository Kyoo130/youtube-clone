import React from 'react';
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundCont>
      <Title>Not Found</Title>
      <Content>검색된 동영상이 없습니다. 다시 검색을 시도해 주세요.</Content>
    </NotFoundCont>
  );
};

const NotFoundCont = styled.div`
  width: 100vw;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2rem;
`

const Content = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`


export default NotFound;
