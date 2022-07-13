import GlobalStyled from './styles/GlobalStyle';
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';

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
