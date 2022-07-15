import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { Listagem } from './pages/Listagem'
import { Cadastro } from './pages/Cadastro'
import { WidthActiveProvider } from "./context/Width";

export function Router() {
  return (
    <WidthActiveProvider>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/listagem'} element={<Listagem />} />
        <Route path={'/cadastro'} element={<Cadastro />} />
      </Routes>
    </WidthActiveProvider>
  )
}