// import { useEffect, useState } from "react";
import React from "react";

import { Index as Main } from "../components/Main";
import { LayoutInicio } from "../components/Layout";
import BoasVindas from "../components/BoasVindas";

export function Home() {
  return (
    <>
      <Main showBackground={true}>
        <LayoutInicio isFullSize={false}>
          <BoasVindas />
        </LayoutInicio>
      </Main>
    </>
  );
}