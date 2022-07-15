import './styles/css/fonts.css'
import GlobalStyled from './styles/GlobalStyle';
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyled />
    </>
  );
}

export default App;