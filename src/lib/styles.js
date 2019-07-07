import styled, { css } from 'styled-components'

const deletingCss = css`
  transition: all ${({ transitionDuration }) => transitionDuration}ms ease-out;
  max-height: 0;
  * {
    outline: none;
  }
`

const Container = styled.div`
  height: ${({ heightProp }) => heightProp}px;
  max-height: ${({ heightProp }) => heightProp + 10}px;
  width: auto;
  position: relative;
  box-sizing: border-box;
  ${props => props.deleting && deletingCss}
  *, *:before, *:after {
    box-sizing: border-box;
  }
`

const Content = styled.div`
  height: 100%;
  width: auto;
  position: relative;
  transform: ${props => props.deleting && 'scale(0)'} translateX(${({ translate }) => translate}px);
  ${props => props.transition && `transition: transform ${props.transitionDuration}ms ease-out`}
`

const Delete = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  top: 0;
  background: ${({ deleteColor }) => deleteColor};
  font-weight: 400;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  button {
    width: ${({ deleteWidth }) => deleteWidth}px;
    transition: margin ${({ transitionDuration }) => transitionDuration}ms ease-in-out;
    margin-left: ${({ buttonMarginLeft }) => buttonMarginLeft}px;
    text-align: center;
    height: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
`

export {
  Container,
  Content,
  Delete
};
