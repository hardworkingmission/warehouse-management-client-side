import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/inventory/'>
          <Route path=':productId' element={<Inventory/>}/>
        </Route>
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
