import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components
import NavbarBt from './components/layout/NavbarBt';
import Home from './components/layout/Home';
import Carreira from './components/layout/Carreira';
import Projetos from './components/layout/Projetos';
import Contato from './components/layout/Contato';

function App() {
  return (
    <Router>
      <NavbarBt />

      <Routes>
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
