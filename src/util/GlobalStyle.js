import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props => props.darkMode ? "#fff" : "#181818")};
    color: ${(props => props.darkMode ? "#000" : "#fff")};
  }
`
