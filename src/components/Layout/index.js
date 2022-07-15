import * as React from "react";
import styled from "styled-components";

import Microfone from '../../public/components/microfone.png'

import c from '../../styles/colors.json'

const Container = styled.div`
  background-color: #F5F0E6;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${props => {
    return !props.fullSize ?
      `
        border-radius: 30px;
        max-width: 450px;
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15);
      `
      : null
  }}
  
  ${props => {
    return props.largeSize ?
      `
        max-width: 900px;
        padding: 40px 150px;
      `
      :
      `
        padding: 40px 35px;
      `
  }}

  @media(min-width: 768px) {
    height: fit-content;
    max-height: 85vh;
    min-height: 85vh;
  }
`

export function LayoutInicio({ children, isFullSize }) {

  const ImageContainer = styled.div`
    display: none;
    @media(min-width: 768px) {
      display: block;
      position: absolute;
      bottom: 0;
      left: calc(50% - 370px);
    }
  `

  return (
    <>
      <ImageContainer>
        <img src={Microfone} />
      </ImageContainer>
      <Container fullSize={isFullSize} largeSize={false}>
        {children}
      </Container>
    </>
  );
}

export function LayoutPaginas({ children, isFullSize, isLarge }) {
  return (
    <Container fullSize={isFullSize} largeSize={isLarge}>
      {children}
    </Container>
  );
}