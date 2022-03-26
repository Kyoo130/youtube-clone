import React from 'react';
import styled from "styled-components";

const Toggle = ({onChecked}) => {

  const handleChecked = (e) => {
    onChecked(e.target.checked)
  }

  return (
    <Switch>
      <Check type="checkbox" onChange={handleChecked}/>
      <Slider/>
    </Switch>
  );
};

const Switch = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`

const Check = styled.input`
  position: absolute;
  display: none;

  &:checked + span {
    background-color: #BE0004;

    &:before {
      left: 37px;
    }
  }
`

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  position: relative;
  width: 60px;
  height: 25px;
  border-radius: 100px;
  background-color: #242424;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.2s;
    background-color: #fff;
  }
`

export default Toggle;