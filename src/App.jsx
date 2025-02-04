import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'


function App() {
  return (
    <main className=''>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;