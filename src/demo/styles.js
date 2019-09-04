import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #111;
    font-family: sans-serif;
    box-sizing: border-box;
    position: relative;
  }

  body {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 750px;
    max-width: 100vw;
    overflow-x: hidden;
    background: white;
  }

  a#back-to-github {
    position: absolute;
    width: 200px;
    background: #111;
    color: white;
    height: 30px;
    top: 35px;
    right: -50px;
    transform: rotate(45deg);
    text-align: center;
    line-height: 30px;
    text-decoration: none;
  }

  #root {
    max-width: 100%;
    width: 300px;
    border: 1px solid #111;
    max-height: 400px;
    overflow: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`

const Dot = styled.div`
  height: ${({ itemHeight }) => itemHeight * 0.5}px;
  width: ${({ itemHeight }) => itemHeight * 0.5}px;
  margin-right: ${({ itemHeight }) => itemHeight}px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`


const Item = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${({ itemHeight }) => itemHeight}px;
  line-height: ${({ itemHeight }) => itemHeight}px;
  border-bottom: 1px solid grey;
  padding-left: 10px;
  background: white;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`

export {
  GlobalStyle,
  Container,
  Item,
  Dot
}
