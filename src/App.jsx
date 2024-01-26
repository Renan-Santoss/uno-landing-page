import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Produtos from './pages/produtos';
import "./App.css";

import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Produtos/>} />
      </Routes>
    </Router>
  );
}

export default App;
