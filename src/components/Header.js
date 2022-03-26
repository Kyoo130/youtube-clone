import React, {memo, useRef} from 'react';
import styled from "styled-components";
import {Toggle} from "./index";

const Header = memo(({onSearch, onChecked}) => {
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
  console.log("Header render")

  return (
    <HeaderCont>
      <LogoCont>
        <img src="/images/logo.png" alt="logo"/>
        <h1>Youtube</h1>
      </LogoCont>

      <InputEl type="text" placeholder="검색" ref={inputRef} onKeyPress={onKeyPress}/>
      <BtnEl type="submit" onClick={onClick}>
        <BtnImg src="/images/search.png" alt="search"/>
      </BtnEl>

      <Toggle onChecked={onChecked} />
    </HeaderCont>
  );
})

const HeaderCont = styled.header`
  display: flex;
  height: 4rem;
  padding: 0.8em 1em;
  background-color: #181818;
  color: #fff;
  border-bottom: 1px solid #fff;
`

const LogoCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`

const InputEl = styled.input`
  flex-basis: 70%;
  font-size: 1.2rem;
  background-color: #0F0F0F;
  border: 1px solid #242424;
  padding-left: 1rem;
  color: #fff;
  outline: 0;
`

const BtnEl = styled.button`
  width: 64px;
  margin-right: auto;
  background-color: #252525;
  border: none;
  outline: 0;
`

const BtnImg = styled.img`
  height: 85%;
  padding: 0.5em 0.2em;
`

export default Header;