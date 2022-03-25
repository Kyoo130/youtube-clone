import React from 'react';
import styled, {css} from "styled-components";

const types = {
  dark: {
    bg: "#131313",
    color: "#fff",
  },
  white: {
    bg: "#fff",
    color: "#000",
  },
};

const typeStyles = css`
  ${({type}) => css`
    background-color: ${(props) => props.bg || types[type].bg};
    color: ${(props) => props.color || types[type].color};
  `}
`;

const SectionEl = (props) => {
  const {children, type, display} = props;
  const styles = {type: type, display: display};

  return (
    <>
      <SectionCont {...styles}>{children}</SectionCont>
    </>
  );
};

SectionEl.defaultProps = {
  children: null,
  type: "dark",
  display: "flex",
}

const SectionCont = styled.section`
  display: flex;
  ${typeStyles}
`

export default SectionEl;
