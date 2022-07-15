// import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import BackgroundMobile from '../../public/components/background-mobile.png';
import BackgroundDesktop from '../../public/components/background-desk.png';

const Main = styled.div`
  ${({ showBackground }) => {
    return showBackground ?
      `
        background: url(${BackgroundMobile});
        background-repeat: no-repeat;
        background-size: cover;
      `
      : null
  }}
  @media(min-width: 768px) {
    background: url(${BackgroundDesktop});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Container = styled.div`
  ${({ showBackground }) => {
    return showBackground ?
      `
        padding: 65px 15px;
        background-color: rgba(200, 5, 27, 0.9);
      `
      : null
  }}
  width: 100%;
  min-height: 100vh;
  @media(min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export function Index(props) {
  return (
    <>
      <Main showBackground={props.showBackground}>
        <Container showBackground={props.showBackground}>
          {props.children}
        </Container>
      </Main>
    </>
  );
}