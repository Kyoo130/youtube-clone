import React from 'react';
import styled from "styled-components";

const FlexBox = (props) => {
  const { children, display, flex, width, height, padding, margin, bg } = props;

  const styles = {
    display: display,
    flex: flex,
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    bg: bg,
  };
  return (
    <>
      <FlexCont {...styles}>{children}</FlexCont>
    </>
  );
};

FlexBox.defaultProps = {
  children: null,
  display: null,
  flex: false,
  width: null,
  height: null,
  padding: false,
  margin: false,
  bg: false,
};

const FlexCont = styled.div`
  ${(props) => (props.display ? `flex: ${props.display};` : "")};
  ${(props) => (props.flex ? `flex: ${props.flex};` : "")};
  ${(props) => (props.width ? `padding: ${props.width};` : "")};
  ${(props) => (props.height ? `padding: ${props.height};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
`;

export default FlexBox;