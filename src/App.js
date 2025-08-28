import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Projetos from './paginas/Projetos';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App;