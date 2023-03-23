import './styles/App.css';
import './styles/Card.css';
import './styles/loading_animation.css'
import { Routes, Route } from 'react-router-dom';

import ItemDetails from './pages/itemDetails';
import Home from './pages/Home';

function App() {

  
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/items/:id" element={<ItemDetails />} />
        </Routes>
      </div>
  );
}



export default App;
