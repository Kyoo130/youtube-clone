import React, {memo, useRef} from 'react';
import styled from "styled-components";

const Header = memo(({onSearch}) => {
  const inputRef = useRef();

  const handelSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {

  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
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
      <InputEl type="text" placeholder="Search..." ref={inputRef} onKeyPress={onKeyPress} />
      <BtnEl type="submit" onClick={onClick}>
        <BtnImg src="/images/search.png" alt="search"/>
      </BtnEl>
    </HeaderCont>
  );
})

export default Header;

const HeaderCont = styled.header`
  display: flex;
  height: 4rem;
  padding: 0.8em 1em;
  background-color: #181818;
  color: #fff;
`

const LogoCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`

const InputEl = styled.input`
  flex-basis: 100%;
  font-size: 1.2rem;
  outline: 0;
`

const BtnEl = styled.button`
  background-color: #bdbdbd;
  outline: 0;
`

const BtnImg = styled.img`
  height: 100%;
  padding: 0.5em 0.2em;
`