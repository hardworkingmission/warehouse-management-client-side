import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ManageItems from './components/ManageItems/ManageItems';
import AllItems from './components/AllItems/AllItems';
import AddItem from './components/AddItem/AddItem';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/manageitems' element={<ManageItems/>}>
           <Route index element={<AllItems/>}/>
           <Route path="allitems" element={<AllItems/>}/>
           <Route path='additem' element={<AddItem/>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/inventory/'>
          <Route path=':productId' element={<Inventory/>}/>
        </Route>
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
