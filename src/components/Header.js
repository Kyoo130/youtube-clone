import React, {memo, useRef} from 'react';
import styled from "styled-components";
import {Toggle} from "./index";

const Header = memo(({onSearch, onChecked, setSelectedVideo, darkMode}) => {
  const inputRef = useRef();

  const handelSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handelSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handelSearch();
    }
  };

  return (
    <HeaderCont>
      <LogoCont darkMode={darkMode} onClick={() => {
        setSelectedVideo(null)
        inputRef.current.value = ''
      }}>
        <img src="/images/logo.png" alt="logo"/>
        <h1>YouTube</h1>
      </LogoCont>
      <InputEl type="text" placeholder="검색" ref={inputRef} onKeyPress={onKeyPress} darkMode={darkMode}/>
      <BtnEl type="submit" onClick={onClick} darkMode={darkMode}>
        <BtnImg src="/images/search.png" alt="search"/>
      </BtnEl>
      <Toggle onChecked={onChecked}/>
    </HeaderCont>
  );
})

const HeaderCont = styled.header`
  display: flex;
  height: 4rem;
  padding: 0.8em 1em;
`

const LogoCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const InputEl = styled.input`
  flex-basis: 70%;
  font-size: 1.2rem;
  background-color: ${(props => props.darkMode ? "#fff" : "#0F0F0F")};
  border: 1px solid ${(props => props.darkMode ? "#bdbdbd" : "#242424")};;
  padding-left: 1rem;
  color: ${(props => props.darkMode ? "#000" : "#fff")};
  outline: 0;
`

const BtnEl = styled.button`
  width: 4em;
  margin-right: auto;
  background-color: ${(props => props.darkMode ? "#bdbdbd" : "#242424")};
  border: none;
  outline: 0;
  cursor: pointer;
`

const BtnImg = styled.img`
  height: 85%;
  padding: 0.5em 0.2em;
`

export default Header;